import { isIllustrationId, type IllustrationId } from "../data/illustrations";
import type { WordEntry } from "../data/words";

const KEY = "sylabowo.customWords.v1";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function loadCustomWords(): WordEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((item) => {
      if (!isRecord(item)) return [];
      const { id, word, syllables, illustration } = item;
      if (typeof id !== "string" || typeof word !== "string" || !Array.isArray(syllables)) return [];
      if (!syllables.every((part) => typeof part === "string" && part.length > 0)) return [];
      const picture: IllustrationId = typeof illustration === "string" && isIllustrationId(illustration)
        ? illustration
        : "gwiazda";
      return [{ id, word, syllables, illustration: picture, custom: true }];
    });
  } catch {
    return [];
  }
}

export function saveCustomWords(words: WordEntry[]): void {
  const payload = words
    .filter((word) => word.custom)
    .map((word) => ({
      id: word.id,
      word: word.word,
      syllables: word.syllables,
      illustration: word.illustration,
    }));
  localStorage.setItem(KEY, JSON.stringify(payload));
}
