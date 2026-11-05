import type { ReactNode } from "react";

export const INK = "#1c1917";

type StrokeAttrs = {
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinecap: "round";
  strokeLinejoin: "round";
};

export function ink(strokeWidth = 2.5): StrokeAttrs {
  return {
    fill: "#fff",
    stroke: INK,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
}

export function line(strokeWidth = 2.2): StrokeAttrs {
  return {
    fill: "none",
    stroke: INK,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
}

export function Scene({ label, children }: { label: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 240 180" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

export function Face({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-16 0 Q-10 -8 -4 0" {...line(2.3)} />
      <path d="M4 0 Q10 -8 16 0" {...line(2.3)} />
      <path d="M-11 8 Q0 24 11 8 Z" {...ink(2.1)} />
      <path d="M-7 9 Q0 16 7 9" {...line(1.6)} />
      <circle cx="-23" cy="6" r="3.1" {...line(1.7)} />
      <circle cx="23" cy="6" r="3.1" {...line(1.7)} />
    </g>
  );
}

export function Ground({ y = 164 }: { y?: number }) {
  return (
    <g>
      <path d={`M16 ${y} H224`} {...line(2.1)} />
      {[30, 54, 186, 212].map((x) => (
        <path key={x} d={`M${x} ${y} c 2.5 -9 6 -9 8 0`} {...line(1.8)} />
      ))}
    </g>
  );
}

export function Floor({ y = 164 }: { y?: number }) {
  return <path d={`M20 ${y} H220`} {...line(2)} />;
}

export function Tube({ d, w = 12 }: { d: string; w?: number }) {
  return (
    <g>
      <path d={d} stroke={INK} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d={d} stroke="#fff" strokeWidth={Math.max(2, w - 5)} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  );
}

export function Wheel({ cx, cy, r = 16 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} {...ink()} />
      <circle cx={cx} cy={cy} r={r * 0.38} {...ink(2)} />
      <path d={`M${cx} ${cy - r + 1} V${cy + r - 1} M${cx - r + 1} ${cy} H${cx + r - 1}`} {...line(1.5)} />
    </g>
  );
}

export function heartPath(cx: number, cy: number, w: number, h: number): string {
  const left = cx - w / 2;
  const top = cy - h / 2;
  return `M ${cx} ${top + h * 0.3}
    C ${cx - w * 0.05} ${top + h * 0.05}, ${left} ${top + h * 0.02}, ${left} ${top + h * 0.34}
    C ${left} ${top + h * 0.62}, ${cx} ${top + h * 0.78}, ${cx} ${top + h}
    C ${cx} ${top + h * 0.78}, ${left + w} ${top + h * 0.62}, ${left + w} ${top + h * 0.34}
    C ${left + w} ${top + h * 0.02}, ${cx + w * 0.05} ${top + h * 0.05}, ${cx} ${top + h * 0.3} Z`;
}

export function StarShape({ x, y, r = 10 }: { x: number; y: number; r?: number }) {
  const parts: string[] = [];
  for (let i = 0; i < 5; i++) {
    const outer = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    const inner = outer + Math.PI / 5;
    parts.push(
      `${i === 0 ? "M" : "L"} ${(x + Math.cos(outer) * r).toFixed(1)} ${(y + Math.sin(outer) * r).toFixed(1)}`,
    );
    parts.push(
      `L ${(x + Math.cos(inner) * r * 0.42).toFixed(1)} ${(y + Math.sin(inner) * r * 0.42).toFixed(1)}`,
    );
  }
  parts.push("Z");
  return <path d={parts.join(" ")} {...ink(2)} />;
}

export function Bloom({
  cx,
  cy,
  r,
  face = false,
}: {
  cx: number;
  cy: number;
  r: number;
  face?: boolean;
}) {
  const petals = [];
  for (let i = 0; i < 5; i++) {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    const px = cx + Math.cos(angle) * r * 0.72;
    const py = cy + Math.sin(angle) * r * 0.72;
    const deg = (angle * 180) / Math.PI + 90;
    petals.push(
      <ellipse
        key={i}
        cx={px}
        cy={py}
        rx={r * 0.48}
        ry={r * 0.32}
        transform={`rotate(${deg.toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)})`}
        {...ink(2)}
      />,
    );
  }
  return (
    <g>
      {petals}
      {face ? <Face x={cx} y={cy} s={r / 46} /> : <circle cx={cx} cy={cy} r={r * 0.28} {...ink(1.8)} />}
    </g>
  );
}
