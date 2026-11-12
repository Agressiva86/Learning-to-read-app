export type Difficulty = "latwy" | "sredni" | "trudny" | "inne";

export function difficultyOf(syllableCount: number): Difficulty {
  if (syllableCount === 2) return "latwy";
  if (syllableCount === 3 || syllableCount === 4) return "sredni";
  if (syllableCount === 5 || syllableCount === 6) return "trudny";
  return "inne";
}

export const DIFFICULTY_ORDER: Difficulty[] = ["latwy", "sredni", "trudny", "inne"];

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  latwy: "łatwy",
  sredni: "średni",
  trudny: "trudny",
  inne: "inne",
};

export const DIFFICULTY_HINT: Record<Difficulty, string> = {
  latwy: "2 sylaby",
  sredni: "3–4 sylaby",
  trudny: "5–6 sylab",
  inne: "poza 2–6 sylabami",
};

export const DIFFICULTY_SHEET: Record<Difficulty, string> = {
  latwy: "łatwy · 2 sylaby",
  sredni: "średni · 3–4 sylaby",
  trudny: "trudny · 5–6 sylab",
  inne: "inne",
};
