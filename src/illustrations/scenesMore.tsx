import type { ReactElement } from "react";
import { Bloom, Face, Floor, Ground, Scene, StarShape, Wheel, heartPath, ink, line } from "./draw";

type SceneProps = { label: string };
export type SceneCmp = (props: SceneProps) => ReactElement;

export const moreScenes: Record<string, SceneCmp> = {
  czekolada: Czekolada,
  truskawka: Truskawka,
  pomarancza: Pomarancza,
  telewizor: Telewizor,
  komputer: Komputer,
  hulajnoga: Hulajnoga,
  temperatura: Temperatura,
  kolorowanka: Kolorowanka,
  mikrofalowka: Mikrofalowka,
  lokomotywa: Lokomotywa,
  opowiadanie: Opowiadanie,
  samochodziki: Samochodziki,
  fotografowanie: Fotografowanie,
  niezapominajka: Niezapominajka,
  dom: Dom,
  drzewo: Drzewo,
  kwiat: Kwiat,
  ryba: Ryba,
  ptak: Ptak,
  motyl: Motyl,
  chmura: Chmura,
  gwiazda: Gwiazda,
  jablko: Jablko,
  ksiezyc: Ksiezyc,
  deszcz: Deszcz,
  tort: Tort,
  balon: Balon,
  kubek: Kubek,
  ksiazka: Ksiazka,
};

function Czekolada({ label }: SceneProps) {
  const squares = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      squares.push(
        <rect key={`${row}-${col}`} x={78 + col * 34} y={36 + row * 30} width="34" height="30" {...line(1.7)} />,
      );
    }
  }
  return (
    <Scene label={label}>
      <rect x="78" y="36" width="102" height="120" rx="6" {...ink()} />
      {squares}
      <path d="M146 36 Q168 48 146 66" {...line(1.8)} />
      <Face x={118} y={96} s={0.7} />
    </Scene>
  );
}

function Truskawka({ label }: SceneProps) {
  const seeds = [
    [92, 78], [148, 80], [108, 100], [140, 108], [86, 118], [120, 128], [156, 122], [104, 146], [140, 148],
  ];
  return (
    <Scene label={label}>
      <path d="M120 168 C70 150 40 110 48 78 C70 58 170 58 192 78 C200 110 170 150 120 168 Z" {...ink()} />
      <path d="M86 70 Q70 40 96 58 Q108 28 120 52 Q132 26 146 56 Q176 36 156 72" {...ink()} />
      {seeds.map(([x, y]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="3.5" ry="5.5" {...line(1.4)} />
      ))}
      <Face x={120} y={108} s={0.7} />
    </Scene>
  );
}

function Pomarancza({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <circle cx="120" cy="100" r="58" {...ink()} />
      <path d="M120 44 V156 M70 86 Q120 110 170 86 M68 120 Q120 96 172 120" {...line(1.6)} />
      <path d="M120 44 Q132 24 150 30 Q134 36 128 48" {...ink()} />
      <Face x={120} y={102} s={0.9} />
    </Scene>
  );
}

function Telewizor({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <rect x="36" y="36" width="168" height="108" rx="12" {...ink()} />
      <rect x="50" y="48" width="140" height="84" rx="6" {...ink(2)} />
      <ellipse cx="108" cy="96" rx="22" ry="16" {...line(1.7)} />
      <path d="M92 90 Q108 78 124 90" {...line(1.7)} />
      <circle cx="104" cy="86" r="2" fill={inkColor} stroke="none" />
      <path d="M100 96 Q108 104 116 96" {...line(1.6)} />
      <path d="M86 78 L96 70 L100 82" {...line(1.6)} />
      <rect x="96" y="148" width="48" height="10" {...ink()} />
      <circle cx="188" cy="28" r="4" {...line(1.6)} />
      <path d="M184 24 L176 12 M192 24 L202 12" {...line(1.7)} />
    </Scene>
  );
}

const inkColor = "#1c1917";

function Komputer({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M46 118 L28 150 H212 L194 118 Z" {...ink()} />
      <rect x="58" y="28" width="124" height="90" rx="8" {...ink()} />
      <rect x="70" y="40" width="100" height="66" rx="4" {...ink(2)} />
      <Face x={120} y={68} s={0.75} />
      <path d="M70 132 H170" {...line(1.5)} />
      <circle cx="120" cy="140" r="5" {...line(1.6)} />
    </Scene>
  );
}

function Hulajnoga({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground y={158} />
      <Wheel cx={70} cy={132} r={22} />
      <Wheel cx={176} cy={132} r={22} />
      <path d="M70 132 H150 L176 70" {...line(2.6)} />
      <path d="M150 110 H188" {...line(2.4)} />
      <path d="M168 62 H196" {...line(2.4)} />
      <path d="M176 70 V62" {...line(2.4)} />
      <circle cx="186" cy="48" r="7" {...ink()} />
      <path d="M160 62 q4 -12 12 -8" {...line(1.6)} />
    </Scene>
  );
}

function Temperatura({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <rect x="104" y="22" width="32" height="110" rx="16" {...ink()} />
      <circle cx="120" cy="136" r="26" {...ink()} />
      <rect x="114" y="48" width="12" height="84" rx="6" {...line(1.6)} />
      <path d="M114 90 H126 V128 H114 Z" {...line(1.5)} />
      <Face x={120} y={132} s={0.6} />
      {[40, 58, 76, 94, 112].map((y) => (
        <path key={y} d={`M136 ${y} H148`} {...line(1.6)} />
      ))}
      <circle cx="52" cy="54" r="16" {...ink()} />
      <path d="M52 30 V38 M52 70 V78 M28 54 H36 M68 54 H76 M36 38 L42 44 M68 70 L62 64" {...line(1.5)} />
      <path d="M176 40 V92 M164 52 H188 M168 72 H184 M172 84 H180" {...line(1.7)} />
    </Scene>
  );
}

function Kolorowanka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M36 150 L70 36 H96 L62 150 Z" {...ink()} />
      <path d="M70 36 L78 22 H88 L96 36" {...ink()} />
      <Face x={78} y={90} s={0.45} />
      <path d="M86 150 L126 28 H150 L112 150 Z" {...ink()} />
      <path d="M126 28 L136 14 H142 L150 28" {...ink()} />
      <Face x={128} y={86} s={0.45} />
      <path d="M128 150 L168 48 H194 L156 150 Z" {...ink()} />
      <path d="M168 48 L178 34 H186 L194 48" {...ink()} />
      <path d="M40 118 H200 V158 H40 Z" {...ink()} />
      <path d={heartPath(92, 136, 28, 24)} {...line(1.7)} />
    </Scene>
  );
}

function Mikrofalowka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <rect x="28" y="40" width="184" height="112" rx="10" {...ink()} />
      <rect x="42" y="54" width="110" height="84" rx="8" {...ink(2)} />
      <circle cx="96" cy="96" r="22" {...line(1.7)} />
      <ellipse cx="96" cy="108" rx="14" ry="4" {...line(1.5)} />
      <rect x="164" y="58" width="32" height="54" rx="4" {...ink(2)} />
      <circle cx="180" cy="72" r="4" {...line(1.5)} />
      <circle cx="180" cy="88" r="4" {...line(1.5)} />
      <circle cx="180" cy="104" r="4" {...line(1.5)} />
      <path d="M42 54 H152" {...line(1.8)} />
      <Face x={96} y={86} s={0.55} />
    </Scene>
  );
}

function Lokomotywa({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground y={158} />
      <rect x="78" y="28" width="26" height="36" {...ink()} />
      <path d="M70 40 Q84 8 108 28 Q92 22 86 36" {...ink()} />
      <circle cx="86" cy="22" r="12" {...ink()} />
      <Face x={86} y={20} s={0.32} />
      <path d="M36 92 H150 V70 H186 L214 108 V132 H36 Z" {...ink()} />
      <circle cx="70" cy="104" r="12" {...line(1.8)} />
      <path d="M36 132 L18 148 H46 Z" {...ink()} />
      <Face x={120} y={100} s={0.55} />
      <Wheel cx={78} cy={140} r={18} />
      <Wheel cx={124} cy={140} r={18} />
      <Wheel cx={186} cy={146} r={12} />
      <path d="M24 132 H220" {...line(2)} />
    </Scene>
  );
}

function Opowiadanie({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M28 56 H120 V156 H36 Q28 156 28 146 Z" {...ink()} />
      <path d="M120 56 H212 V146 Q212 156 204 156 H120 Z" {...ink()} />
      <path d="M120 56 V156" {...line(2)} />
      <path d="M48 78 H100 M48 96 H96 M132 78 H196 M132 96 H190" {...line(1.5)} />
      <ellipse cx="164" cy="136" rx="18" ry="10" {...ink()} />
      <circle cx="164" cy="118" r="16" {...ink()} />
      <path d="M150 112 Q164 98 178 112" {...line(1.6)} />
      <Face x={164} y={116} s={0.4} />
      <StarShape x={70} y={124} r={12} />
    </Scene>
  );
}

function Samochodziki({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <MiniCar x={18} y={78} />
      <MiniCar x={86} y={96} />
      <MiniCar x={150} y={70} />
    </Scene>
  );
}

function MiniCar({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path d={`M${x} ${y + 28} L${x + 12} ${y + 8} Q${x + 22} ${y} ${x + 36} ${y} H${x + 52} L${x + 64} ${y + 18} V${y + 28} Z`} {...ink()} />
      <circle cx={x + 18} cy={y + 32} r="8" {...ink()} />
      <circle cx={x + 48} cy={y + 32} r="8" {...ink()} />
      <Face x={x + 30} y={y + 16} s={0.32} />
    </g>
  );
}

function Fotografowanie({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <rect x="36" y="58" width="150" height="96" rx="16" {...ink()} />
      <path d="M70 58 L86 36 H130 L146 58" {...ink()} />
      <circle cx="112" cy="108" r="28" {...ink()} />
      <circle cx="112" cy="108" r="14" {...ink(2)} />
      <Face x={112} y={104} s={0.4} />
      <circle cx="164" cy="78" r="6" {...line(1.7)} />
      <rect x="168" y="28" width="48" height="40" rx="4" {...ink()} />
      <path d={heartPath(192, 48, 18, 16)} {...line(1.6)} />
      <path d="M36 120 Q16 110 20 140" {...line(2)} />
    </Scene>
  );
}

function Niezapominajka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <path d="M70 150 Q74 110 60 86 M120 154 Q118 100 120 70 M176 150 Q168 112 188 84" {...line(1.8)} />
      <path d="M74 120 Q96 112 104 128 M150 118 Q132 110 128 128" {...line(1.7)} />
      <Bloom cx={58} cy={72} r={26} />
      <Bloom cx={120} cy={58} r={30} face />
      <Bloom cx={186} cy={74} r={24} />
      <Bloom cx={90} cy={108} r={16} />
      <Bloom cx={160} cy={112} r={16} />
    </Scene>
  );
}

function Dom({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <path d="M36 92 L120 28 L204 92" {...ink()} />
      <path d="M56 92 H184 V158 H56 Z" {...ink()} />
      <path d="M104 158 V116 H136 V158" {...ink()} />
      <circle cx="128" cy="136" r="3" {...line(1.6)} />
      <rect x="70" y="108" width="26" height="22" rx="2" {...ink(2)} />
      <rect x="146" y="108" width="26" height="22" rx="2" {...ink(2)} />
      <path d="M83 108 V130 M70 119 H96 M159 108 V130 M146 119 H172" {...line(1.5)} />
      <rect x="150" y="48" width="18" height="28" {...ink()} />
      <path d="M156 48 Q150 30 166 36" {...line(1.7)} />
    </Scene>
  );
}

function Drzewo({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <path d="M108 150 H132 V96 H108 Z" {...ink()} />
      <circle cx="92" cy="78" r="32" {...ink()} />
      <circle cx="140" cy="70" r="36" {...ink()} />
      <circle cx="118" cy="48" r="28" {...ink()} />
      <Face x={124} y={74} s={0.7} />
      <circle cx="78" cy="70" r="6" {...line(1.6)} />
      <circle cx="156" cy="58" r="6" {...line(1.6)} />
      <circle cx="104" cy="46" r="5" {...line(1.6)} />
    </Scene>
  );
}

function Kwiat({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <path d="M120 150 V78" {...line(2.2)} />
      <path d="M120 120 Q86 104 78 124 M120 108 Q156 96 164 118" {...line(1.8)} />
      <Bloom cx={120} cy={62} r={36} face />
    </Scene>
  );
}

function Ryba({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M40 90 Q110 20 180 90 Q110 150 40 90 Z" {...ink()} />
      <path d="M176 90 L214 58 L206 90 L214 122 Z" {...ink()} />
      <path d="M120 70 Q140 90 120 112" {...line(1.6)} />
      <path d="M70 90 Q90 70 100 90" {...line(1.6)} />
      <Face x={78} y={86} s={0.55} />
    </Scene>
  );
}

function Ptak({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <ellipse cx="118" cy="110" rx="46" ry="32" {...ink()} />
      <circle cx="168" cy="78" r="22" {...ink()} />
      <path d="M186 74 L214 68 L190 86 Z" {...ink()} />
      <Face x={166} y={74} s={0.5} />
      <path d="M80 100 Q40 70 28 96 Q60 90 78 112" {...ink()} />
      <path d="M100 136 L92 158 M130 138 L138 158" {...line(2)} />
      <path d="M84 158 H108 M124 158 H148" {...line(2)} />
    </Scene>
  );
}

function Motyl({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <ellipse cx="78" cy="70" rx="40" ry="28" {...ink()} />
      <ellipse cx="162" cy="70" rx="40" ry="28" {...ink()} />
      <ellipse cx="74" cy="118" rx="32" ry="24" {...ink()} />
      <ellipse cx="166" cy="118" rx="32" ry="24" {...ink()} />
      <circle cx="86" cy="70" r="8" {...line(1.6)} />
      <circle cx="154" cy="70" r="8" {...line(1.6)} />
      <circle cx="78" cy="116" r="6" {...line(1.6)} />
      <circle cx="162" cy="116" r="6" {...line(1.6)} />
      <path d="M120 48 V140" {...line(3)} />
      <circle cx="120" cy="52" r="10" {...ink()} />
      <path d="M112 40 Q120 24 128 40" {...line(1.6)} />
      <Face x={120} y={50} s={0.32} />
    </Scene>
  );
}

function Chmura({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path
        d="M54 112 Q40 86 66 74 Q74 46 108 56 Q122 34 150 52 Q182 40 196 70 Q220 78 210 108 Q214 136 176 132 Q150 154 116 136 Q78 156 58 128 Q36 132 54 112 Z"
        {...ink()}
      />
      <Face x={124} y={96} s={1} />
    </Scene>
  );
}

function Gwiazda({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <StarShape x={120} y={90} r={70} />
      <Face x={120} y={96} s={0.85} />
    </Scene>
  );
}

function Jablko({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M120 42 C150 42 196 70 188 112 C180 156 60 156 52 112 C44 70 90 42 120 42 Z" {...ink()} />
      <path d="M120 42 V28" {...line(2.2)} />
      <path d="M120 30 Q146 18 156 36 Q136 28 124 40" {...ink()} />
      <path d="M120 48 Q112 70 120 150" {...line(1.6)} />
      <Face x={120} y={100} s={0.9} />
    </Scene>
  );
}

function Ksiezyc({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M150 20 A70 70 0 1 0 150 160 A52 52 0 1 1 150 20 Z" {...ink()} />
      <Face x={112} y={84} s={0.9} />
      <StarShape x={190} y={40} r={10} />
      <StarShape x={176} y={78} r={6} />
    </Scene>
  );
}

function Deszcz({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M40 70 Q28 46 54 38 Q64 16 96 26 Q112 8 138 24 Q168 14 180 40 Q206 46 196 72 Q168 90 120 80 Q70 96 40 70 Z" {...ink()} />
      <Face x={112} y={52} s={0.7} />
      {[50, 90, 130, 168].map((x) => (
        <path key={x} d={`M${x} 100 q5 16 0 28`} {...line(1.8)} />
      ))}
      <path d="M70 148 q40 16 80 0" {...line(1.8)} />
    </Scene>
  );
}

function Tort({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M40 110 H200 V148 Q120 166 40 148 Z" {...ink()} />
      <ellipse cx="120" cy="110" rx="80" ry="16" {...ink()} />
      <path d="M48 96 H192 V112 H48 Z" {...ink()} />
      <path d="M64 78 H176 V98 H64 Z" {...ink()} />
      <ellipse cx="120" cy="78" rx="56" ry="12" {...ink()} />
      <path d="M96 78 V58 M120 78 V48 M146 78 V58" {...line(2)} />
      <path d="M96 58 q4 -10 0 -8 M120 48 q5 -12 0 -8 M146 58 q4 -10 0 -8" {...line(1.8)} />
      <Face x={120} y={100} s={0.6} />
    </Scene>
  );
}

function Balon({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M120 132 C70 132 48 96 48 68 C48 32 80 16 120 16 C160 16 192 32 192 68 C192 96 170 132 120 132 Z" {...ink()} />
      <path d="M112 132 L120 146 L128 132 Z" {...ink()} />
      <path d="M120 146 Q110 160 124 168" {...line(1.8)} />
      <Face x={120} y={70} s={1} />
      <path d="M78 52 Q96 40 110 58" {...line(1.6)} />
    </Scene>
  );
}

function Kubek({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <path d="M62 48 H164 L152 150 Q110 166 74 150 Z" {...ink()} />
      <ellipse cx="113" cy="48" rx="52" ry="12" {...ink()} />
      <path d="M164 70 H188 Q206 70 206 96 Q206 122 184 122 H156" {...line(2.4)} />
      <Face x={112} y={100} s={0.8} />
      <path d="M96 36 Q104 18 112 32 M120 30 Q128 14 136 30" {...line(1.6)} />
    </Scene>
  );
}

function Ksiazka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <path d="M40 36 H118 Q120 70 118 150 H40 Z" {...ink()} />
      <path d="M200 36 H122 Q120 70 122 150 H200 Z" {...ink()} />
      <path d="M120 36 V150" {...line(2.2)} />
      <path d="M56 58 H100 M56 76 H96 M140 58 H184 M144 76 H184" {...line(1.6)} />
      <StarShape x={78} y={112} r={14} />
      <path d={heartPath(164, 112, 26, 22)} {...line(1.7)} />
    </Scene>
  );
}
