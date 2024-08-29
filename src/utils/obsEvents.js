import OBSWebSocket, { EventSubscription } from "obs-websocket-js/json";

export class OBSWebsocketsManager {
  constructor({ obsPort, obsPassword, setError, getScenes, getCurrentScene }) {
    this.obs = new OBSWebSocket();
    this.obsSelectedPort = `ws://localhost:${obsPort}`;
    this.obsPassword = obsPassword;
    this.setError = setError;
    this.getScenes = getScenes;
    this.getCurrentScene = getCurrentScene;
  }

  async connect() {
    try {
      const { obsWebSocketVersion, negotiatedRpcVersion } =
        await this.obs.connect(this.obsSelectedPort, this.obsPassword, {
          eventSubscriptions: EventSubscription.All,
          rpcVersion: 1,
        });
      console.log("Connected to OBS Websockets!");

      // Get the initial scene list
      this.getSceneList();

      // Setup event listeners
      this.obs.on("CurrentProgramSceneChanged", (event) => {
        this.getCurrentScene(event);
      });
    } catch (error) {
      console.error(
        "Double check that you have OBS open and that your websockets server is enabled in OBS."
      );
      setTimeout(() => {
        process.exit(1);
      }, 10000);
      this.setError(error);
    }
  }

  disconnect() {
    this.obs.disconnect();
  }

  async getSceneList() {
    try {
      const response = await this.obs.call("GetSceneList");
      this.getScenes(response);
    } catch (error) {
      this.setError(error);
    }
  }

  async setScene(newScene) {
    try {
      await this.obs.call("SetCurrentProgramScene", { sceneName: newScene });
    } catch (error) {
      this.setError(error);
    }
  }

  async setFilterVisibility(sourceName, filterName, filterEnabled = true) {
    try {
      await this.obs.call("SetSourceFilterEnabled", {
        sourceName,
        filterName,
        filterEnabled,
      });
    } catch (error) {
      this.setError(error);
    }
  }

  async setFilterScene(sourceName, filterName, filterSettings) {
    try {
      const currentSettings = await this.obs.call("GetSourceFilter", {
        sourceName,
        filterName,
      });

      await this.obs.call("SetSourceFilterSettings", {
        sourceName,
        filterName,
        filterSettings: {
          ...currentSettings.filterSettings,
          ...filterSettings,
        },
      });
    } catch (error) {
      this.setError(error);
    }
  }

  async setSourceVisibility(sceneName, sourceName, sourceVisible = true) {
    try {
      const response = await this.obs.call("GetSceneItemId", {
        sceneName,
        sourceName,
      });
      const myItemID = response.sceneItemId;
      await this.obs.call("SetSceneItemEnabled", {
        sceneName,
        sceneItemId: myItemID,
        sceneItemEnabled: sourceVisible,
      });
    } catch (error) {
      this.setError(error);
    }
  }

  async getText(sourceName) {
    try {
      const response = await this.obs.call("GetInputSettings", {
        inputName: sourceName,
      });
      return response.inputSettings.text;
    } catch (error) {
      this.setError(error);
    }
  }

  async setText(sourceName, newText) {
    try {
      await this.obs.call("SetInputSettings", {
        inputName: sourceName,
        inputSettings: { text: newText },
      });
    } catch (error) {
      this.setError(error);
    }
  }

  async getSourceTransform(sceneName, sourceName) {
    try {
      const response = await this.obs.call("GetSceneItemId", {
        sceneName,
        sourceName,
      });
      const myItemID = response.sceneItemId;
      const transformResponse = await this.obs.call("GetSceneItemTransform", {
        sceneName,
        sceneItemId: myItemID,
      });
      return transformResponse.sceneItemTransform;
    } catch (error) {
      this.setError(error);
    }
  }

  async setSourceTransform(sceneName, sourceName, newTransform) {
    try {
      const response = await this.obs.call("GetSceneItemId", {
        sceneName,
        sourceName,
      });
      const myItemID = response.sceneItemId;
      await this.obs.call("SetSceneItemTransform", {
        sceneName,
        sceneItemId: myItemID,
        sceneItemTransform: newTransform,
      });
    } catch (error) {
      this.setError(error);
    }
  }

  async getInputSettings(inputName) {
    try {
      return await this.obs.call("GetInputSettings", { inputName });
    } catch (error) {
      this.setError(error);
    }
  }

  async getInputKindList() {
    try {
      return await this.obs.call("GetInputKindList");
    } catch (error) {
      this.setError(error);
    }
  }

  async getSceneItems(sceneName) {
    try {
      return await this.obs.call("GetSceneItemList", { sceneName });
    } catch (error) {
      this.setError(error);
    }
  }
}
