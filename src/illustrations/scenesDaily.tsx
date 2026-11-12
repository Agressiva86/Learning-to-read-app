import type { ReactElement } from "react";
import { Bloom, Face, Floor, Ground, Scene, Wheel, ink, line } from "./draw";

type SceneProps = { label: string };
export type SceneCmp = (props: SceneProps) => ReactElement;

export const dailyScenes: Record<string, SceneCmp> = {
  woda: Woda,
  mleko: Mleko,
  pilka: Pilka,
  rower: Rower,
  zupa: Zupa,
  banan: Banan,
  lampa: Lampa,
  lozko: Lozko,
  serce: Serce,
  slonce: Slonce,
  kanapka: Kanapka,
  poduszka: Poduszka,
  zabawka: Zabawka,
  pizama: Pizama,
  telefon: Telefon,
  samochod: Samochod,
  parasol: Parasol,
  olowek: Olowek,
  rowerek: Rowerek,
};

function Woda({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M46 52 H104 Q110 52 108 60 L98 146 Q74 162 58 146 L48 60 Q46 52 46 52 Z" {...ink()} />
      <ellipse cx="75" cy="56" rx="30" ry="8" {...ink()} />
      <path d="M56 92 H94" {...line(1.8)} />
      <path d="M58 104 Q75 116 92 104" {...line(1.6)} />
      <path d="M168 36 C168 36 124 92 124 118 C124 150 212 150 212 118 C212 92 168 36 168 36 Z" {...ink()} />
      <Face x={168} y={112} s={0.72} />
    </Scene>
  );
}

function Mleko({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M70 46 H126 L134 64 V150 Q102 164 70 150 Z" {...ink()} />
      <path d="M78 46 H118 L122 36 H74 Z" {...ink()} />
      <rect x="78" y="86" width="48" height="28" rx="4" {...ink(2)} />
      <Face x={102} y={96} s={0.55} />
      <path d="M156 96 H196 L190 150 Q176 162 162 150 Z" {...ink()} />
      <path d="M162 112 H190" {...line(1.7)} />
    </Scene>
  );
}

function Pilka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <ellipse cx="120" cy="156" rx="36" ry="6" {...line(1.7)} />
      <circle cx="120" cy="86" r="52" {...ink()} />
      <path d="M74 62 Q120 48 166 62" {...line(1.8)} />
      <path d="M70 112 Q120 128 170 112" {...line(1.8)} />
      <path d="M120 36 V52 M120 122 V138" {...line(1.7)} />
      <Face x={120} y={84} s={0.85} />
    </Scene>
  );
}

function Rower({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground y={156} />
      <Wheel cx={58} cy={124} r={28} />
      <Wheel cx={176} cy={124} r={28} />
      <path d="M58 124 L108 124 L150 74 H176" {...line(2.7)} />
      <path d="M108 124 V86 H146" {...line(2.6)} />
      <path d="M150 74 L166 62" {...line(2.5)} />
      <path d="M154 56 H184" {...line(2.4)} />
      <path d="M160 56 L164 48 M176 56 L180 48" {...line(1.7)} />
      <path d="M146 90 Q164 84 170 100" {...line(2.2)} />
      <circle cx="108" cy="124" r="7" {...ink(2)} />
      <path d="M100 118 L88 106 M116 130 L130 144" {...line(2.1)} />
      <path d="M158 62 H196 L190 84 H164 Z" {...ink()} />
      <Bloom cx={178} cy={70} r={12} />
    </Scene>
  );
}

function Zupa({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M46 96 Q40 150 120 154 Q200 150 194 96 Z" {...ink()} />
      <ellipse cx="120" cy="96" rx="78" ry="18" {...ink()} />
      <path d="M58 100 Q120 124 182 100" {...line(1.8)} />
      <circle cx="92" cy="112" r="6" {...line(1.6)} />
      <circle cx="132" cy="116" r="5" {...line(1.6)} />
      <path d="M78 70 Q86 48 78 34" {...line(1.8)} />
      <path d="M120 66 Q128 40 118 26" {...line(1.8)} />
      <path d="M158 72 Q168 50 156 36" {...line(1.8)} />
      <Face x={120} y={108} s={0.7} />
      <path d="M196 78 L214 150" {...line(2.4)} />
      <ellipse cx="210" cy="74" rx="12" ry="8" {...ink()} />
    </Scene>
  );
}

function Banan({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path
        d="M48 150 C20 90 70 20 150 28 C190 32 210 60 196 82 C160 55 90 80 70 145 C64 165 56 168 48 150 Z"
        {...ink()}
      />
      <path d="M96 108 C128 78 160 64 184 68" {...line(1.6)} />
      <path d="M188 55 L210 32" {...line(2.4)} />
      <path d="M200 28 C214 40 208 58 190 52" {...ink(1.8)} />
      <Face x={132} y={64} s={0.46} />
    </Scene>
  );
}

function Lampa({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M78 36 H162 L186 92 H54 Z" {...ink()} />
      <Face x={120} y={64} s={0.8} />
      <path d="M120 92 V132" {...line(2.8)} />
      <ellipse cx="120" cy="140" rx="40" ry="12" {...ink()} />
      <path d="M64 28 L78 40 M96 18 V34 M144 18 V34 M176 28 L162 40" {...line(1.8)} />
    </Scene>
  );
}

function Lozko({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M28 36 H78 V150 H28 Z" {...ink()} />
      <circle cx="46" cy="30" r="8" {...ink()} />
      <circle cx="68" cy="30" r="8" {...ink()} />
      <path d="M78 118 H214 V150 H78 Z" {...ink()} />
      <path d="M86 78 H150 Q156 78 156 88 V118 H86 Z" {...ink()} />
      <path d="M150 100 H214 V118 H156" {...ink()} />
      <path d="M150 108 Q180 96 206 110" {...line(1.7)} />
      <path d="M188 28 A12 12 0 1 0 188 52 A8 8 0 1 1 188 36" {...line(2)} />
      <path d="M206 40 l4 2 M210 28 v5 M198 24 l2 4" {...line(1.5)} />
    </Scene>
  );
}

function Serce({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M120 154 C120 154 36 104 36 68 C36 40 62 28 84 40 C98 28 120 36 120 56 C120 36 142 28 156 40 C178 28 204 40 204 68 C204 104 120 154 120 154 Z" {...ink()} />
      <Face x={120} y={78} s={1} />
      <path d="M46 40 C46 40 34 28 40 20 C48 14 58 24 52 32" {...line(1.8)} />
      <path d="M196 48 C196 48 214 40 210 28 C202 22 190 34 196 40" {...line(1.8)} />
    </Scene>
  );
}

function Slonce({ label }: SceneProps) {
  const rays = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI) / 6 - Math.PI / 2;
    const long = i % 2 === 0;
    const inner = 50;
    const outer = long ? 78 : 64;
    const x1 = 120 + Math.cos(angle) * inner;
    const y1 = 90 + Math.sin(angle) * inner;
    const x2 = 120 + Math.cos(angle) * outer;
    const y2 = 90 + Math.sin(angle) * outer;
    rays.push(
      <path
        key={i}
        d={`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`}
        {...line(long ? 2.4 : 1.8)}
        strokeDasharray={long ? undefined : "1 6"}
      />,
    );
  }
  return (
    <Scene label={label}>
      {rays}
      <circle cx="120" cy="90" r="46" {...ink()} />
      <Face x={120} y={84} s={1.15} />
    </Scene>
  );
}

function Kanapka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M36 118 Q120 96 204 118 Q196 146 120 150 Q44 146 36 118 Z" {...ink()} />
      <path d="M44 112 Q78 98 110 114 Q142 98 196 110" {...line(1.8)} />
      <path d="M52 104 H188 L180 116 H60 Z" {...ink(1.8)} />
      <path d="M42 96 Q120 68 198 96 Q186 114 120 112 Q54 114 42 96 Z" {...ink()} />
      <circle cx="78" cy="84" r="3" {...line(1.5)} />
      <circle cx="120" cy="78" r="3" {...line(1.5)} />
      <circle cx="160" cy="86" r="3" {...line(1.5)} />
      <Face x={120} y={92} s={0.62} />
    </Scene>
  );
}

function Poduszka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M36 48 Q28 90 40 132 Q120 156 200 132 Q214 90 204 48 Q120 28 36 48 Z" {...ink()} />
      <path d="M120 40 V140" {...line(1.8)} />
      <Face x={120} y={86} s={0.95} />
    </Scene>
  );
}

function Zabawka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M36 150 V92 H92 V150 Z" {...ink()} />
      <path d="M92 150 V70 H146 V150 Z" {...ink()} />
      <path d="M146 150 V108 H196 V150 Z" {...ink()} />
      <circle cx="64" cy="120" r="12" {...line(1.8)} />
      <path d="M119 96 L130 118 H108 Z" {...line(1.8)} />
      <path d="M162 124 H180 L171 140 Z" {...line(1.8)} />
      <circle cx="176" cy="58" r="24" {...ink()} />
      <path d="M164 40 Q176 28 190 42" {...line(1.8)} />
      <Face x={176} y={56} s={0.55} />
    </Scene>
  );
}

function Pizama({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M48 40 H120 L132 58 V132 H36 V58 Z" {...ink()} />
      <path d="M70 40 L84 58 H108 L96 40" {...ink()} />
      <circle cx="84" cy="78" r="3" {...line(1.6)} />
      <circle cx="84" cy="96" r="3" {...line(1.6)} />
      <circle cx="84" cy="114" r="3" {...line(1.6)} />
      <Face x={78} y={64} s={0.5} />
      <path d="M138 70 H214 V100 H138 Z" {...ink()} />
      <path d="M150 100 H186 V150 H150 Z" {...ink()} />
      <path d="M176 100 H214 V150 H176 Z" {...ink()} />
      <path d="M156 84 l6 4 8 -8 M188 86 l6 4 8 -8" {...line(1.6)} />
    </Scene>
  );
}

function Telefon({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <rect x="78" y="18" width="84" height="148" rx="16" {...ink()} />
      <rect x="90" y="36" width="60" height="90" rx="6" {...ink(2)} />
      <Face x={120} y={74} s={0.75} />
      <path d="M108 28 H132" {...line(2)} />
      <circle cx="120" cy="146" r="6" {...line(2)} />
    </Scene>
  );
}

function Samochod({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <path d="M28 118 L52 82 Q70 62 108 62 H150 Q176 62 190 84 L214 118 H28 Z" {...ink()} />
      <path d="M78 70 L96 98 H132 L118 70 Z" {...ink(2)} />
      <path d="M150 74 L168 98 H196 L184 78 Z" {...ink(2)} />
      <Face x={70} y={100} s={0.5} />
      <circle cx="78" cy="132" r="20" {...ink()} />
      <circle cx="78" cy="132" r="8" {...ink(2)} />
      <circle cx="176" cy="132" r="20" {...ink()} />
      <circle cx="176" cy="132" r="8" {...ink(2)} />
    </Scene>
  );
}

function Parasol({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M28 86 Q120 10 212 86 Z" {...ink()} />
      <path d="M74 86 Q70 50 96 40 M120 28 V86 M166 86 Q172 50 146 40" {...line(1.7)} />
      <Face x={120} y={68} s={0.7} />
      <path d="M120 86 V150" {...line(2.6)} />
      <path d="M120 150 Q146 150 146 136" {...line(2.4)} />
      <path d="M54 100 q4 10 0 16 M96 108 q4 12 0 18 M168 104 q4 10 0 16 M196 96 q3 8 0 12" {...line(1.7)} />
    </Scene>
  );
}

function Olowek({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M42 138 L132 34 L166 64 L76 168 Z" {...ink()} />
      <path d="M132 34 L156 16 L190 46 L166 64 Z" {...ink()} />
      <path d="M148 28 L158 18 L170 34 L160 42 Z" {...ink(1.8)} />
      <path d="M62 126 L98 156" {...line(2)} />
      <path d="M52 140 L88 168" {...line(2)} />
      <path d="M46 146 L74 164 L66 176 L38 156 Z" {...ink()} />
      <Face x={112} y={96} s={0.68} />
    </Scene>
  );
}

function Rowerek({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground y={158} />
      <Wheel cx={64} cy={128} r={24} />
      <Wheel cx={168} cy={128} r={24} />
      <Wheel cx={118} cy={146} r={12} />
      <path d="M64 128 L108 128 L140 78 H168" {...line(2.5)} />
      <path d="M108 128 V92 H138" {...line(2.4)} />
      <path d="M140 78 L154 66" {...line(2.3)} />
      <path d="M146 60 H176" {...line(2.2)} />
      <path d="M150 60 q-6 -10 2 -14 M168 60 q-4 -10 4 -12" {...line(1.6)} />
      <path d="M136 92 Q150 88 154 100" {...line(2)} />
      <path d="M118 134 V146" {...line(2)} />
      <circle cx="196" cy="46" r="8" {...ink()} />
      <path d="M196 38 V22" {...line(1.8)} />
    </Scene>
  );
}
