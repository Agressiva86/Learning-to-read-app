export type Difficulty = "latwy" | "sredni" | "trudny" | "inne";

export function difficultyOf(syllableCount: number): Difficulty {
  if (syllableCount >= 1 && syllableCount <= 3) return "latwy";
  if (syllableCount === 4 || syllableCount === 5) return "sredni";
  if (syllableCount >= 6) return "trudny";
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
  latwy: "do 3 sylab",
  sredni: "4–5 sylab",
  trudny: "6 i więcej sylab",
  inne: "bez sylab",
};

export const DIFFICULTY_SHEET: Record<Difficulty, string> = {
  latwy: "łatwy",
  sredni: "średni",
  trudny: "trudny",
  inne: "inne",
};
