import {
  SpeechConfig,
  SpeechSynthesizer,
  ResultReason,
} from "microsoft-cognitiveservices-speech-sdk";

const audioContext = new (window.AudioContext || window.webkitAudioContext)({
  sampleRate: 16000,
});

const ttsQueue = [];
let isProcessing = false;

export const azureMicrosoftServices = async (
  twitchMessage,
  obsManager,
  userNumber
) => {
  ttsQueue.push({
    twitchMessage,
    obsManager,
    userNumber,
  });

  if (isProcessing) return;

  isProcessing = true;

  while (ttsQueue.length > 0) {
    const { twitchMessage, obsManager, userNumber } = ttsQueue.shift();

    await processTtsMessage(twitchMessage, obsManager, userNumber);
  }

  isProcessing = false;
};

// Function to process each TTS message
const processTtsMessage = async (twitchMessage, obsManager, userNumber) => {
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

  const voiceName = voiceNames[userNumber];

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

  const speechConfig = SpeechConfig.fromSubscription(
    process.env.REACT_APP_SPEECH_KEY,
    process.env.REACT_APP_SPEECH_REGION
  );

  const synth = new SpeechSynthesizer(speechConfig);

  try {
    const result = await synth.speakSsmlAsyncPromise(ssmlMessage);

    if (result.reason === ResultReason.SynthesizingAudioCompleted) {
      const audioBuffer = await audioContext.decodeAudioData(result.audioData);

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
      console.error("CANCELED: Reason=" + result.privErrorDetails);
    }
  } catch (error) {
    console.error("Error during TTS processing: ", error);
  } finally {
    synth.close();
  }
};

// Function to play the audio buffer
const playAudioBuffer = async (audioBuffer) => {
  return new Promise((resolve, reject) => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.start(0);

    source.onended = () => {
      resolve();
    };

    source.onerror = (e) => {
      console.error("Audio playback error: ", e);
      reject(e);
    };
  });
};

// Extend SpeechSynthesizer with a Promise-based speakSsmlAsync
SpeechSynthesizer.prototype.speakSsmlAsyncPromise = function (ssml) {
  return new Promise((resolve, reject) => {
    this.speakSsmlAsync(
      ssml,
      (result) => resolve(result),
      (error) => reject(error)
    );
  });
};
