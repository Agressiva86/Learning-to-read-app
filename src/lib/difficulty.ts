export type Difficulty = "latwy" | "sredni" | "trudny" | "inne";

export function difficultyOf(syllableCount: number): Difficulty {
  if (syllableCount >= 1 && syllableCount <= 2) return "latwy";
  if (syllableCount === 3 || syllableCount === 4) return "sredni";
  if (syllableCount >= 5) return "trudny";
  return "inne";
}

export function levelOf(word: { syllables: string[]; level?: Difficulty }): Difficulty {
  return word.level ?? difficultyOf(word.syllables.length);
}

export const DIFFICULTY_ORDER: Difficulty[] = ["latwy", "sredni", "trudny", "inne"];

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  latwy: "łatwy",
  sredni: "średni",
  trudny: "trudny",
  inne: "inne",
};

export const DIFFICULTY_HINT: Record<Difficulty, string> = {
  latwy: "1–2 sylaby",
  sredni: "3–4 sylaby",
  trudny: "5 i więcej sylab",
  inne: "bez sylab",
};

export const DIFFICULTY_SHEET: Record<Difficulty, string> = {
  latwy: "łatwy",
  sredni: "średni",
  trudny: "trudny",
  inne: "inne",
};
