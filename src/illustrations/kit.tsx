import type { ReactElement, ReactNode } from "react";
import { Scene, ink, line } from "./draw";

export type PictureProps = { label: string };
export type SceneCmp = (props: PictureProps) => ReactElement;

export function Picture({ label, children }: { label: string; children: ReactNode }) {
  return <Scene label={label}>{children}</Scene>;
}

/** Twarz do kolorowania: oczy w kółkach, mały nos i uśmiech. */
export function Face({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  return (
    <g>
      <circle cx={cx - 7 * s} cy={cy - 1 * s} r={2.6 * s} {...line(1.8)} />
      <circle cx={cx + 7 * s} cy={cy - 1 * s} r={2.6 * s} {...line(1.8)} />
      <path d={`M ${cx} ${cy + 2 * s} v ${3 * s}`} {...line(1.6)} />
      <path d={`M ${cx - 6 * s} ${cy + 8 * s} Q ${cx} ${cy + 13 * s} ${cx + 6 * s} ${cy + 8 * s}`} {...line(1.8)} />
    </g>
  );
}

export function Person({
  cx = 120,
  dress = false,
  hair = "short",
  hat = "none",
}: {
  cx?: number;
  dress?: boolean;
  hair?: "short" | "bob" | "buns";
  hat?: "none" | "fire" | "police" | "crown" | "wizard";
}) {
  const hy = 48;
  return (
    <g>
      {hair === "buns" ? (
        <>
          <circle cx={cx - 24} cy={hy + 2} r={9} {...ink(2.2)} />
          <circle cx={cx + 24} cy={hy + 2} r={9} {...ink(2.2)} />
        </>
      ) : null}
      {hair === "bob" ? (
        <path
          d={`M ${cx - 22} ${hy + 6} Q ${cx - 26} ${hy - 26} ${cx} ${hy - 24} Q ${cx + 26} ${hy - 26} ${cx + 22} ${hy + 6} L ${cx + 16} ${hy + 18} Q ${cx} ${hy + 10} ${cx - 16} ${hy + 18} Z`}
          {...ink(2.3)}
        />
      ) : null}
      {hair === "short" ? (
        <path
          d={`M ${cx - 18} ${hy - 4} Q ${cx - 16} ${hy - 24} ${cx + 2} ${hy - 22} Q ${cx + 20} ${hy - 26} ${cx + 18} ${hy - 2} Q ${cx} ${hy - 10} ${cx - 18} ${hy - 4} Z`}
          {...ink(2.3)}
        />
      ) : null}
      <circle cx={cx} cy={hy} r={18} {...ink(2.3)} />
      <Face cx={cx} cy={hy + 1} s={0.95} />
      {hat === "fire" ? <path d={`M ${cx - 20} ${hy - 12} H ${cx + 20} L ${cx + 14} ${hy - 28} H ${cx - 14} Z`} {...ink(2.2)} /> : null}
      {hat === "police" ? (
        <g>
          <path d={`M ${cx - 22} ${hy - 16} H ${cx + 22} V ${hy - 6} H ${cx - 22} Z`} {...ink(2.2)} />
          <path d={`M ${cx - 8} ${hy - 16} V ${hy - 26} H ${cx + 8} V ${hy - 16}`} {...line(2)} />
        </g>
      ) : null}
      {hat === "crown" ? <path d={`M ${cx - 16} ${hy - 14} L ${cx - 10} ${hy - 28} L ${cx} ${hy - 16} L ${cx + 10} ${hy - 30} L ${cx + 16} ${hy - 14} Z`} {...ink(2.2)} /> : null}
      {hat === "wizard" ? <path d={`M ${cx - 16} ${hy - 12} L ${cx} ${hy - 40} L ${cx + 16} ${hy - 12} Z`} {...ink(2.2)} /> : null}
      <path d={`M ${cx - 8} ${hy + 16} H ${cx + 8} V ${hy + 26} H ${cx - 8} Z`} {...ink(2)} />
      {dress ? (
        <path
          d={`M ${cx - 18} ${hy + 24} L ${cx - 46} ${hy + 108} Q ${cx} ${hy + 118} ${cx + 46} ${hy + 108} L ${cx + 18} ${hy + 24} Z`}
          {...ink(2.4)}
        />
      ) : (
        <>
          <path d={`M ${cx - 22} ${hy + 24} H ${cx + 22} V ${hy + 64} H ${cx - 22} Z`} {...ink(2.3)} />
          <path d={`M ${cx - 18} ${hy + 64} H ${cx - 4} L ${cx - 8} ${hy + 102} H ${cx - 22} Z`} {...ink(2.2)} />
          <path d={`M ${cx + 4} ${hy + 64} H ${cx + 18} L ${cx + 22} ${hy + 102} H ${cx + 8} Z`} {...ink(2.2)} />
          <ellipse cx={cx - 14} cy={hy + 106} rx={12} ry={5} {...ink(2)} />
          <ellipse cx={cx + 16} cy={hy + 106} rx={12} ry={5} {...ink(2)} />
        </>
      )}
      <path
        d={`M ${cx - 20} ${hy + 30} C ${cx - 42} ${hy + 36}, ${cx - 48} ${hy + 58}, ${cx - 36} ${hy + 70} C ${cx - 28} ${hy + 60}, ${cx - 26} ${hy + 42}, ${cx - 14} ${hy + 38} Z`}
        {...ink(2.1)}
      />
      <path
        d={`M ${cx + 20} ${hy + 30} C ${cx + 44} ${hy + 24}, ${cx + 50} ${hy + 8}, ${cx + 36} ${hy + 4} C ${cx + 28} ${hy + 16}, ${cx + 26} ${hy + 36}, ${cx + 14} ${hy + 38} Z`}
        {...ink(2.1)}
      />
    </g>
  );
}
