import type { ReactElement } from "react";
import { Face, Floor, Ground, Scene, Tube, heartPath, ink, line } from "./draw";

type SceneProps = { label: string };
export type SceneCmp = (props: SceneProps) => ReactElement;

export const peopleScenes: Record<string, SceneCmp> = {
  mama: Mama,
  tata: Tata,
  kotek: Kotek,
  lalka: Lalka,
  rodzina: Rodzina,
  nauczycielka: Nauczycielka,
  spacerowanie: Spacerowanie,
  mis: Mis,
};

function Mama({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <circle cx="120" cy="34" r="12" {...ink()} />
      <path d="M96 62 Q92 36 120 32 Q148 36 144 62" {...ink()} />
      <circle cx="120" cy="68" r="26" {...ink()} />
      <Face x={120} y={66} s={0.9} />
      <path d="M112 92 H128 V108 H112 Z" {...ink()} />
      <path d="M78 116 Q120 100 162 116 L176 156 Q120 168 64 156 Z" {...ink()} />
      <path d={heartPath(120, 132, 18, 16)} {...line(1.7)} />
      <Tube d="M90 118 Q62 132 70 154" w={11} />
      <Tube d="M150 118 Q180 130 172 152" w={11} />
      <circle cx="70" cy="156" r="7" {...ink()} />
      <circle cx="172" cy="156" r="7" {...ink()} />
    </Scene>
  );
}

function Tata({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <path d="M90 56 Q94 30 118 30 Q146 32 146 58 Q132 42 118 44 Q102 42 90 56 Z" {...ink()} />
      <circle cx="118" cy="64" r="24" {...ink()} />
      <Face x={118} y={62} s={0.86} />
      <path d="M110 86 H126 V100 H110 Z" {...ink()} />
      <path d="M80 108 Q118 94 156 108 L162 136 H74 Z" {...ink()} />
      <path d="M92 136 H116 Q112 162 96 162 Z" {...ink()} />
      <path d="M120 136 H144 Q150 162 132 162 Z" {...ink()} />
      <ellipse cx="104" cy="164" rx="14" ry="6" {...ink()} />
      <ellipse cx="140" cy="164" rx="14" ry="6" {...ink()} />
      <Tube d="M150 110 Q184 78 170 52" w={11} />
      <circle cx="166" cy="46" r="8" {...ink()} />
      <Tube d="M86 112 Q60 128 68 150" w={11} />
      <circle cx="68" cy="154" r="7" {...ink()} />
    </Scene>
  );
}

function Kotek({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <Tube d="M156 118 Q198 96 184 64 Q170 92 150 98" w={16} />
      <path d="M176 70 q10 8 2 16" {...line(1.8)} />
      <ellipse cx="118" cy="124" rx="50" ry="34" {...ink()} />
      <ellipse cx="118" cy="130" rx="24" ry="16" {...line(1.8)} />
      <path d="M86 58 L76 28 L112 52 Z" {...ink()} />
      <path d="M108 50 L104 32 L118 50" {...line(1.7)} />
      <path d="M142 56 L164 26 L156 58 Z" {...ink()} />
      <path d="M150 52 L160 32 L154 56" {...line(1.7)} />
      <circle cx="116" cy="74" r="32" {...ink()} />
      <Face x={112} y={72} s={0.86} />
      <path d="M70 82 H98 M66 92 H98 M70 102 H96" {...line(1.6)} />
      <path d="M136 82 H166 M136 92 H170 M136 102 H166" {...line(1.6)} />
      <ellipse cx="90" cy="154" rx="16" ry="8" {...ink()} />
      <ellipse cx="146" cy="154" rx="16" ry="8" {...ink()} />
    </Scene>
  );
}

function Lalka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <circle cx="78" cy="78" r="14" {...ink()} />
      <circle cx="162" cy="78" r="14" {...ink()} />
      <path d="M96 86 Q90 40 120 36 Q150 40 144 86 Q132 64 120 66 Q108 64 96 86 Z" {...ink()} />
      <path d="M108 24 Q120 8 132 24 L126 34 H114 Z" {...ink()} />
      <circle cx="120" cy="78" r="28" {...ink()} />
      <Face x={120} y={74} s={0.9} />
      <path d="M108 102 H132 V118 H108 Z" {...ink()} />
      <path d="M70 124 Q120 108 170 124 L182 162 H58 Z" {...ink()} />
      <path d="M96 140 H144" {...line(1.7)} />
      <circle cx="108" cy="140" r="3" {...line(1.6)} />
      <circle cx="132" cy="140" r="3" {...line(1.6)} />
      <Tube d="M86 128 Q64 142 72 158" w={10} />
      <Tube d="M154 128 Q176 142 168 158" w={10} />
    </Scene>
  );
}

function Rodzina({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <path d="M40 86 Q44 62 64 62 Q84 64 86 86 Q74 72 64 74 Q52 72 40 86 Z" {...ink()} />
      <circle cx="64" cy="90" r="18" {...ink()} />
      <Face x={64} y={88} s={0.58} />
      <path d="M44 114 H84 L90 146 H38 Z" {...ink()} />
      <path d="M46 146 H66 L62 164 H42 Z" {...ink()} />
      <path d="M68 146 H88 L92 164 H72 Z" {...ink()} />
      <circle cx="120" cy="104" r="15" {...ink()} />
      <path d="M108 96 Q120 84 132 96" {...ink(2)} />
      <Face x={120} y={102} s={0.5} />
      <path d="M104 122 H136 L140 164 H100 Z" {...ink()} />
      <circle cx="176" cy="86" r="17" {...ink()} />
      <circle cx="176" cy="64" r="8" {...ink()} />
      <path d="M160 88 Q158 66 176 62 Q194 66 192 88" {...ink(2)} />
      <Face x={176} y={84} s={0.55} />
      <path d="M154 112 Q176 102 198 112 L206 164 H146 Z" {...ink()} />
      <Tube d="M88 126 H104" w={8} />
      <Tube d="M136 128 H154" w={8} />
    </Scene>
  );
}

function Nauczycielka({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <circle cx="92" cy="34" r="11" {...ink()} />
      <path d="M70 62 Q66 32 96 30 Q126 32 120 64 Q110 48 96 50 Q82 48 70 62 Z" {...ink()} />
      <circle cx="96" cy="64" r="24" {...ink()} />
      <Face x={96} y={60} s={0.82} />
      <path d="M64 100 Q96 88 128 100 L142 162 H50 Z" {...ink()} />
      <path d="M86 124 H112" {...line(1.7)} />
      <path d="M128 118 Q156 108 168 86" {...line(2.2)} />
      <path d="M154 78 H196 L192 112 H158 Z" {...ink()} />
      <path d="M174 78 V112" {...line(1.7)} />
      <path d="M160 92 H190" {...line(1.6)} />
      <circle cx="188" cy="128" r="14" {...ink()} />
      <path d="M188 114 Q196 108 192 118" {...ink(1.8)} />
      <path d="M182 116 Q188 108 194 116" {...line(1.6)} />
    </Scene>
  );
}

function Spacerowanie({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Ground />
      <path d="M168 154 V100 H186 V154" {...ink()} />
      <circle cx="160" cy="82" r="26" {...ink()} />
      <circle cx="196" cy="74" r="30" {...ink()} />
      <circle cx="176" cy="52" r="20" {...ink()} />
      <circle cx="96" cy="78" r="16" {...ink()} />
      <Face x={96} y={76} s={0.5} />
      <path d="M80 98 H114 L120 126 H76 Z" {...ink()} />
      <path d="M84 108 H110 L104 98 H90 Z" {...ink(1.8)} />
      <path d="M82 126 H102 L94 156 H80 Z" {...ink()} />
      <path d="M104 126 H120 L132 146 H114 Z" {...ink()} />
      <ellipse cx="88" cy="158" rx="11" ry="6" {...ink()} />
      <ellipse cx="126" cy="150" rx="11" ry="6" {...ink()} />
      <ellipse cx="42" cy="128" rx="16" ry="11" {...ink()} />
      <circle cx="26" cy="120" r="9" {...ink()} />
      <path d="M18 118 L8 112 L12 124 Z" {...ink()} />
      <path d="M54 124 Q66 114 62 132" {...line(1.8)} />
      <path d="M34 138 V156 M48 140 V156" {...line(2)} />
      <Face x={28} y={118} s={0.28} />
    </Scene>
  );
}

function Mis({ label }: SceneProps) {
  return (
    <Scene label={label}>
      <Floor />
      <ellipse cx="120" cy="132" rx="40" ry="30" {...ink()} />
      <ellipse cx="120" cy="136" rx="20" ry="16" {...line(1.8)} />
      <ellipse cx="86" cy="150" rx="14" ry="10" {...ink()} />
      <ellipse cx="154" cy="150" rx="14" ry="10" {...ink()} />
      <circle cx="78" cy="52" r="16" {...ink()} />
      <circle cx="162" cy="52" r="16" {...ink()} />
      <circle cx="78" cy="52" r="7" {...line(1.7)} />
      <circle cx="162" cy="52" r="7" {...line(1.7)} />
      <circle cx="120" cy="78" r="34" {...ink()} />
      <ellipse cx="120" cy="90" rx="14" ry="10" {...ink()} />
      <Face x={120} y={72} s={0.7} />
    </Scene>
  );
}
