# Caliel Twitch App

This project leverages the Twitch API and OBS Websockets to manage and enhance your streaming experience.

## Getting Started

This project was bootstrapped with [Caliel Twitch App](https://github.com/CalielTW/CTA).

## Prerequisites

- Node.js
- npm (Node Package Manager)
- OBS Studio with Websockets plugin installed(optional)

## Installation

1. Clone the repestory
   ```
   git clone https://github.com/CalielTW/CTA.git
   cd CTA
   ```
2. Install the dependencies
   ```
   npm install
   ```
3. This uses the twitch-js package to connect to your Twitch channel.
   First you must generate a Access Token for your account. You can do this at: https://twitchtokengenerator.com/ , just make sure the Access Token has chat:read, chat:edit and channel:read:redemptions enabled.
4. Optionally, you can use Microsoft Azure's TTS service for the text-to-speech voices.
   First you must make an account and sign up for Microsoft Azure's services.
   Then use their site to generate an access key and region for the text-to-speech service.
   Then, set these as windows environment variables named AZURE_TTS_KEY and AZURE_TTS_REGION.
5. Optionally, you can use OBS Websockets and an OBS plugin for further use of this app.
   First open up OBS. Make sure you're running version 28.X or later.
   Click Tools, then WebSocket Server Settings.
   Make sure "Enable WebSocket server" is checked. Make sure Server Port is set to the same you will use inside the app, dont use port 3000 as is already in use, and set a Server Password.
   Next install the Move OBS plugin: https://obsproject.com/forum/resources/move.913/

## Configuration

1. Create a `.env` file in the root of your project and add your Twitch API credentials and OBS Websocket settings:

   ```
   REACT_APP_TWITCH_CLIENT_ID=your_twitch_client_id
   REACT_APP_TWITCH_CLIENT_SECRET=your_twitch_client_secret

   REACT_APP_OBS_WEBSOCKET_URL=your_obs_websocket_url
   REACT_APP_OBS_WEBSOCKET_PASSWORD=your_obs_websocket_password

   REACT_APP_SPEECH_KEY=your_azure_tts_key
   REACT_APP_SPEECH_REGION=your_azure_tts_region

   REACT_APP_TWITCH_REWARD_1=your_message_rewardID
   REACT_APP_TWITCH_REWARD_2=your_message_rewardID
   REACT_APP_TWITCH_REWARD_3=your_message_rewardID

   REACT_APP_STT_REGION=either_es-MX_or_en-US

   REACT_APP_EN_FEMALE_1=en-US-JennyNeural
   REACT_APP_EN_FEMALE_2=en-US-AriaNeural
   REACT_APP_EN_MALE=en-US-GuyNeural

   REACT_APP_ES_FEMALE_1=es-MX-DaliaNeural
   REACT_APP_ES_FEMALE_2=es-MX-DaliaNeural
   REACT_APP_ES_MALE=es-MX-JorgeNeural
   ```

   2. To generate the `TWITCH REWARDS ID's` make a new reedem in your channel with a text input, send it and in the chat view in the app, you will see a button to copy the id of thar reedem

## Avaible Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Features

- Twitch Chat Integration: Displays Twitch chat messages in real-time with subscriber and command-based filtering.
- Spin Wheel Component: A customizable spin wheel that can be triggered by specific Twitch chat commands.
- OBS Websocket Control: Control OBS scenes and sources directly from the app.

## License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please read the CONTRIBUTING.md for details on the code of conduct, and the process for submitting pull requests.

## Acknowledgements

- Twitch API
- OBS Websockets

## Contact

For support or inquiries, please contact Caliel in discord or at [calieledge@gmail.com].

## Special Thanks

I want to thank DougDoug for inspire me and set his code open to understand how azure worked and make this app posible, you can support him at https://www.twitch.tv/dougdoug
