import type { SheetDensity } from "../lib/pages";

export function SyllableRow({
  syllables,
  density = 4,
  compact = false,
}: {
  syllables: string[];
  density?: SheetDensity;
  compact?: boolean;
}) {
  const longest = syllables.reduce((max, part) => Math.max(max, part.length), 1);
  let pt = density === 4 ? 24 : 17;
  if (syllables.length >= 5) pt -= 5;
  if (longest >= 5) pt -= 4;
  else if (longest >= 4) pt -= 2;
  pt = Math.max(13, pt);
  const fontSize = compact ? `${Math.max(15, 26 - syllables.length * 2)}px` : `${pt}pt`;

  return (
    <div className={syllables.length >= 5 ? "syl-row many" : "syl-row"}>
      {syllables.map((part, index) => (
        <span className="syl" style={{ fontSize }} key={`${part}-${index}`}>
          {part}
        </span>
      ))}
    </div>
  );
}
