import { scenes } from "../illustrations/scenes";

export function Illustration({ id, label }: { id: string; label: string }) {
  const Draw = scenes[id] ?? scenes.gwiazda;
  if (!Draw) return null;
  return <Draw label={label} />;
}
