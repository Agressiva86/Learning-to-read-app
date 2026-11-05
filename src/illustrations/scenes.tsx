import type { SceneCmp } from "./scenesDaily";
import { dailyScenes } from "./scenesDaily";
import { moreScenes } from "./scenesMore";
import { peopleScenes } from "./scenesPeople";

export const scenes: Record<string, SceneCmp> = {
  ...peopleScenes,
  ...dailyScenes,
  ...moreScenes,
};
