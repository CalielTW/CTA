import OBSWebSocket, { EventSubscription } from "obs-websocket-js/json";

export const connectObs = async ({
  obsPort,
  obsPassword,
  getCurrentScene,
  getScenes,
  setError,
}) => {
  const obs = new OBSWebSocket();
  const obsSelectedPort = `ws://localhost:${obsPort}`;
  let success;

  try {
    const { obsWebSocketVersion, negotiatedRpcVersion } = await obs.connect(
      obsSelectedPort,
      obsPassword,
      {
        eventSubscriptions: EventSubscription.All,
        rpcVersion: 1,
      }
    );

    //Get Obs Info
    obs.call("GetSceneList").then((event) => {
      getScenes(event);
    });

    obs.on("CurrentProgramSceneChanged", (event) => {
      getCurrentScene(event);
    });

    //On Errors
    obs.on("ConnectionError", (event) => {
      setError(event);
    });
    obs.on("ConnectionClosed", (event) => {
      setError(event);
    });

    return (success = true);
  } catch (error) {
    setError(error);

    return (success = false);
  }
};
