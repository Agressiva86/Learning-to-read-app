import { easyScenes } from "./doodlesEasy";
import { hardScenes } from "./doodlesHard";
import { midScenes } from "./doodlesMid";
import type { SceneCmp } from "./kit";

export const scenes: Record<string, SceneCmp> = {
  ...easyScenes,
  ...midScenes,
  ...hardScenes,
};
