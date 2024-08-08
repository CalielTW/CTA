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

## Configuration

1. Create a `.env` file in the root of your project and add your Twitch API credentials and OBS Websocket settings:
   ```
   REACT_APP_TWITCH_CLIENT_ID=your_twitch_client_id
   REACT_APP_TWITCH_CLIENT_SECRET=your_twitch_client_secret
   REACT_APP_OBS_WEBSOCKET_URL=your_obs_websocket_url
   REACT_APP_OBS_WEBSOCKET_PASSWORD=your_obs_websocket_password
   ```

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
