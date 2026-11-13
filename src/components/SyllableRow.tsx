export function SyllableRow({
  syllables,
  compact = false,
}: {
  syllables: string[];
  compact?: boolean;
}) {
  const longest = syllables.reduce((max, part) => Math.max(max, part.length), 1);
  let pt = 24;
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
