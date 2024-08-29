import {
  SpeechConfig,
  SpeechSynthesizer,
  ResultReason,
} from "microsoft-cognitiveservices-speech-sdk";

let currentSource = null;

export const azureMicrosoftServices = async (
  twitchMessage,
  obsManager,
  userNumber
) => {
  const speechConfig = SpeechConfig.fromSubscription(
    process.env.REACT_APP_SPEECH_KEY,
    process.env.REACT_APP_SPEECH_REGION
  );

  const VOICE_STYLES = [
    "cheerful",
    "sad",
    "angry",
    "excited",
    "friendly",
    "terrified",
    "shouting",
    "whispering",
    "hopeful",
  ];

  const isSpanish = process.env.REACT_APP_STT_REGION === "es-MX";
  const voiceNames = {
    1: isSpanish
      ? process.env.REACT_APP_ES_FEMALE_1
      : process.env.REACT_APP_EN_FEMALE_1,
    2: isSpanish
      ? process.env.REACT_APP_ES_FEMALE_2
      : process.env.REACT_APP_EN_FEMALE_2,
    3: isSpanish
      ? process.env.REACT_APP_ES_MALE
      : process.env.REACT_APP_EN_MALE,
  };

  const voiceName = voiceNames[3];

  const styleRegex = new RegExp(`\\b(${VOICE_STYLES.join("|")})\\b`, "i");
  const match = twitchMessage.match(styleRegex);

  let selectedStyle;
  let cleanMessage;

  if (match) {
    selectedStyle = match[1].toLowerCase();
    cleanMessage = twitchMessage.replace(styleRegex, "").trim();
  } else {
    selectedStyle = null;
    cleanMessage = twitchMessage;
  }

  const ssmlMessage = selectedStyle
    ? `
  <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="${process.env.REACT_APP_STT_REGION}">
    <voice name="${voiceName}">
      <mstts:express-as style="${selectedStyle}">
        ${cleanMessage}
      </mstts:express-as>
    </voice>
  </speak>
    `
    : `
  <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${process.env.REACT_APP_STT_REGION}">
    <voice name="${voiceName}">
      ${cleanMessage}
    </voice>
  </speak>
    `;

  const synth = new SpeechSynthesizer(speechConfig);

  const playAudioBuffer = async (audioBuffer) => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    if (currentSource) {
      currentSource.stop();
    }

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start(0);

    currentSource = source;

    return new Promise((resolve) => {
      source.onended = () => {
        currentSource = null;
        resolve();
      };
    });
  };

  synth.speakSsmlAsync(
    ssmlMessage,
    async (result) => {
      if (result.reason === ResultReason.SynthesizingAudioCompleted) {
        console.log("Speech synthesized successfully.");

        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        const audioData = new Uint8Array(result.audioData);
        const audioBuffer = await audioContext.decodeAudioData(
          audioData.buffer
        );

        await obsManager.setFilterVisibility(
          "Line In",
          `TTS-Char${userNumber}`,
          true
        );

        await playAudioBuffer(audioBuffer);

        await obsManager.setFilterVisibility(
          "Line In",
          `TTS-Char${userNumber}`,
          false
        );
      } else if (result.reason === ResultReason.Canceled) {
        console.log("CANCELED: Reason=" + result.privErrorDetails);
      }
      synth.close();
    },
    (error) => {
      console.log("Error: ", error);
      synth.close();
    }
  );
};
