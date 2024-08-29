export const mergeObsScenes = (
  newScenes,
  existingScenes,
  currentProgramSceneUuid
) => {
  const existingScenesMap = existingScenes.reduce((acc, scene) => {
    acc[scene.sceneUuid] = scene;
    return acc;
  }, {});

  return newScenes.map((newScene) => {
    const existingScene = existingScenesMap[newScene.sceneUuid] || {};
    const isCurrentScene = newScene.sceneUuid === currentProgramSceneUuid;
    return {
      ...newScene,
      tts: existingScene.tts || false,
      active: isCurrentScene || false,
    };
  });
};
