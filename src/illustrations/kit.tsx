import type { ReactElement, ReactNode } from "react";
import { INK, Scene, ink, line } from "./draw";

export type PictureProps = { label: string };
export type SceneCmp = (props: PictureProps) => ReactElement;

export function Picture({ label, children }: { label: string; children: ReactNode }) {
  return <Scene label={label}>{children}</Scene>;
}

export function eyes(cx: number, cy: number, gap = 13, r = 3.1) {
  return (
    <g>
      <circle cx={cx - gap} cy={cy} r={r} fill={INK} />
      <circle cx={cx + gap + 1} cy={cy - 1} r={r} fill={INK} />
    </g>
  );
}

export function grin(cx: number, cy: number, w = 26) {
  return (
    <path
      d={`M ${cx - w / 2} ${cy} Q ${cx + 1} ${cy + w * 0.42} ${cx + w / 2 + 1} ${cy - 1}`}
      {...line(2.3)}
    />
  );
}

export function face(cx: number, cy: number, s = 1) {
  return (
    <g>
      {eyes(cx, cy, 12 * s, 3.2 * s)}
      {grin(cx, cy + 14 * s, 28 * s)}
    </g>
  );
}

export function head(cx: number, cy: number, r = 26) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} {...ink(2.6)} />
      {face(cx, cy + r * 0.06, r / 30)}
    </g>
  );
}

export function Pal({
  cx = 118,
  hy = 52,
  dress = false,
  buns = false,
  hair = false,
  arm = "wave",
}: {
  cx?: number;
  hy?: number;
  dress?: boolean;
  buns?: boolean;
  hair?: boolean;
  arm?: "wave" | "down" | "up";
}) {
  const bodyTop = hy + 24;
  return (
    <g>
      {buns ? (
        <>
          <circle cx={cx - 28} cy={hy - 6} r={11} {...ink(2.4)} />
          <circle cx={cx + 30} cy={hy - 8} r={11} {...ink(2.4)} />
        </>
      ) : null}
      {hair ? <path d={`M ${cx - 24} ${hy - 8} Q ${cx - 8} ${hy - 34} ${cx + 6} ${hy - 22} Q ${cx + 22} ${hy - 36} ${cx + 26} ${hy - 6}`} {...line(2.6)} /> : null}
      <circle cx={cx} cy={hy} r={24} {...ink(2.6)} />
      {face(cx, hy + 2, 0.86)}
      {dress ? (
        <path d={`M ${cx - 10} ${bodyTop} L ${cx - 48} ${bodyTop + 78} Q ${cx} ${bodyTop + 88} ${cx + 50} ${bodyTop + 74} L ${cx + 12} ${bodyTop} Z`} {...ink(2.6)} />
      ) : (
        <>
          <path d={`M ${cx - 20} ${bodyTop} Q ${cx} ${bodyTop - 6} ${cx + 22} ${bodyTop + 2} L ${cx + 24} ${bodyTop + 40} H ${cx - 22} Z`} {...ink(2.6)} />
          <path d={`M ${cx - 12} ${bodyTop + 40} Q ${cx - 18} ${bodyTop + 62} ${cx - 22} ${bodyTop + 78}`} {...line(2.6)} />
          <path d={`M ${cx + 12} ${bodyTop + 40} Q ${cx + 18} ${bodyTop + 64} ${cx + 26} ${bodyTop + 78}`} {...line(2.6)} />
          <ellipse cx={cx - 22} cy={bodyTop + 82} rx={10} ry={5} {...ink(2.2)} />
          <ellipse cx={cx + 26} cy={bodyTop + 82} rx={10} ry={5} {...ink(2.2)} />
        </>
      )}
      {arm === "wave" ? (
        <>
          <path d={`M ${cx - 18} ${bodyTop + 12} Q ${cx - 46} ${bodyTop + 20} ${cx - 40} ${bodyTop + 42}`} {...line(2.6)} />
          <path d={`M ${cx + 18} ${bodyTop + 10} Q ${cx + 46} ${bodyTop - 8} ${cx + 40} ${bodyTop - 28}`} {...line(2.6)} />
        </>
      ) : arm === "up" ? (
        <>
          <path d={`M ${cx - 16} ${bodyTop + 12} Q ${cx - 40} ${bodyTop - 10} ${cx - 28} ${bodyTop - 30}`} {...line(2.6)} />
          <path d={`M ${cx + 16} ${bodyTop + 12} Q ${cx + 42} ${bodyTop - 8} ${cx + 30} ${bodyTop - 30}`} {...line(2.6)} />
        </>
      ) : (
        <>
          <path d={`M ${cx - 18} ${bodyTop + 14} Q ${cx - 42} ${bodyTop + 28} ${cx - 36} ${bodyTop + 48}`} {...line(2.6)} />
          <path d={`M ${cx + 18} ${bodyTop + 14} Q ${cx + 44} ${bodyTop + 30} ${cx + 36} ${bodyTop + 48}`} {...line(2.6)} />
        </>
      )}
    </g>
  );
}

export function Heart({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  return (
    <path
      d={`M ${cx} ${cy + 8 * s} C ${cx - 14 * s} ${cy - 2 * s}, ${cx - 8 * s} ${cy - 14 * s}, ${cx} ${cy - 6 * s} C ${cx + 8 * s} ${cy - 14 * s}, ${cx + 14 * s} ${cy - 2 * s}, ${cx} ${cy + 8 * s} Z`}
      {...ink(2.2)}
    />
  );
}

export function House({ x = 120, y = 108 }: { x?: number; y?: number }) {
  return (
    <g>
      <path d={`M ${x - 70} ${y - 10} L ${x} ${y - 68} L ${x + 74} ${y - 6}`} {...line(2.8)} />
      <path d={`M ${x - 48} ${y - 8} V ${y + 52} H ${x + 50} V ${y - 4} Z`} {...ink(2.6)} />
      <path d={`M ${x - 8} ${y + 52} V ${y + 16} H ${x + 16} V ${y + 52}`} {...ink(2.3)} />
      <path d={`M ${x - 34} ${y + 8} H ${x - 12} V ${y + 28} H ${x - 34} Z`} {...ink(2.2)} />
      <path d={`M ${x + 16} ${y + 8} H ${x + 36} V ${y + 28} H ${x + 16} Z`} {...ink(2.2)} />
    </g>
  );
}

export function Tree({ x = 120, y = 150 }: { x?: number; y?: number }) {
  return (
    <g>
      <path d={`M ${x - 8} ${y} V ${y - 46} H ${x + 8} V ${y}`} {...ink(2.2)} />
      <path d={`M ${x} ${y - 108} L ${x - 46} ${y - 36} H ${x + 48} Z`} {...ink(2.6)} />
      <path d={`M ${x} ${y - 86} L ${x - 34} ${y - 48} H ${x + 36} Z`} {...line(2)} />
    </g>
  );
}

export function Flower({ cx = 150, cy = 78, r = 16 }: { cx?: number; cy?: number; r?: number }) {
  return (
    <g>
      <circle cx={cx - r} cy={cy} r={r * 0.72} {...ink(2.2)} />
      <circle cx={cx + r} cy={cy} r={r * 0.72} {...ink(2.2)} />
      <circle cx={cx} cy={cy - r} r={r * 0.72} {...ink(2.2)} />
      <circle cx={cx} cy={cy + r} r={r * 0.72} {...ink(2.2)} />
      <circle cx={cx} cy={cy} r={r * 0.48} {...ink(2.2)} />
      {eyes(cx, cy - 1, r * 0.22, 2.2)}
      {grin(cx, cy + r * 0.16, r * 0.7)}
    </g>
  );
}

export function Car({ x = 120, y = 108, lamp = false }: { x?: number; y?: number; lamp?: boolean }) {
  return (
    <g>
      <path d={`M ${x - 70} ${y} Q ${x - 60} ${y - 28} ${x - 24} ${y - 30} L ${x - 8} ${y - 52} H ${x + 28} L ${x + 46} ${y - 28} H ${x + 72} V ${y + 8} H ${x - 70} Z`} {...ink(2.6)} />
      <circle cx={x - 36} cy={y + 16} r={16} {...ink(2.4)} />
      <circle cx={x + 40} cy={y + 16} r={16} {...ink(2.4)} />
      <circle cx={x - 36} cy={y + 16} r={6} {...line(2)} />
      <circle cx={x + 40} cy={y + 16} r={6} {...line(2)} />
      {lamp ? <circle cx={x + 58} cy={y - 16} r={5} {...ink(2)} /> : null}
    </g>
  );
}

export function Cup({ cx = 120, cy = 96, steam = false }: { cx?: number; cy?: number; steam?: boolean }) {
  return (
    <g>
      <path d={`M ${cx - 36} ${cy - 20} L ${cx - 28} ${cy + 36} Q ${cx} ${cy + 50} ${cx + 30} ${cy + 36} L ${cx + 38} ${cy - 20} Z`} {...ink(2.6)} />
      <path d={`M ${cx + 36} ${cy - 6} Q ${cx + 58} ${cy + 8} ${cx + 34} ${cy + 22}`} {...line(2.6)} />
      {steam ? <path d={`M ${cx - 8} ${cy - 36} Q ${cx - 18} ${cy - 50} ${cx - 6} ${cy - 62}`} {...line(2.2)} /> : null}
    </g>
  );
}
