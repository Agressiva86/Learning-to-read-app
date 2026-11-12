import { scenes } from "../illustrations/scenes";

const pictures = import.meta.glob("../assets/coloring/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function pictureSrc(id: string): string | undefined {
  return pictures[`../assets/coloring/${id}.jpg`];
}

export function Illustration({ id, label }: { id: string; label: string }) {
  const src = pictureSrc(id);
  if (src) return <img src={src} alt={label} draggable={false} />;
  const Draw = scenes[id] ?? scenes.gwiazda;
  if (!Draw) return null;
  return <Draw label={label} />;
}
