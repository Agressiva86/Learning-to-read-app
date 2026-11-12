import { ink, line } from "./draw";
import { Car, Cup, Flower, Heart, House, Pal, Picture, Tree, eyes, face, grin, type SceneCmp } from "./kit";

export const easyScenes: Record<string, SceneCmp> = {
  mama: ({ label }) => (
    <Picture label={label}>
      <Pal dress buns arm="wave" />
      <Heart cx={168} cy={46} s={0.7} />
    </Picture>
  ),
  tata: ({ label }) => (
    <Picture label={label}>
      <Pal hair arm="down" />
    </Picture>
  ),
  dom: ({ label }) => (
    <Picture label={label}>
      <House />
    </Picture>
  ),
  kot: ({ label }) => (
    <Picture label={label}>
      <path d="M150 118 Q198 92 176 58" {...line(8)} />
      <ellipse cx="112" cy="124" rx="52" ry="30" {...ink(2.6)} />
      <path d="M78 78 L64 40 L104 70 Z" {...ink(2.5)} />
      <path d="M132 74 L156 36 L150 78 Z" {...ink(2.5)} />
      <circle cx="108" cy="78" r="30" {...ink(2.6)} />
      {face(104, 80, 0.9)}
      <path d="M70 88 H96 M68 98 H96" {...line(1.8)} />
    </Picture>
  ),
  pies: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="118" cy="126" rx="48" ry="28" {...ink(2.6)} />
      <path d="M168 112 Q196 96 188 70" {...line(7)} />
      <ellipse cx="78" cy="78" rx="16" ry="28" {...ink(2.4)} />
      <circle cx="112" cy="74" r="32" {...ink(2.6)} />
      {face(110, 76, 0.95)}
      <ellipse cx="138" cy="86" rx="10" ry="7" {...ink(2)} />
    </Picture>
  ),
  oko: ({ label }) => (
    <Picture label={label}>
      <path d="M28 92 Q120 28 212 92 Q120 154 28 92 Z" {...ink(2.8)} />
      <circle cx="120" cy="92" r="28" {...ink(2.4)} />
      <circle cx="120" cy="92" r="12" fill="#1c1917" />
      <circle cx="128" cy="84" r="5" fill="#fff" stroke="none" />
    </Picture>
  ),
  ucho: ({ label }) => (
    <Picture label={label}>
      <path d="M92 150 C 40 140, 36 48, 108 36 C 150 28, 176 70, 160 108 C 150 132, 128 124, 124 108 C 118 86, 100 86, 104 112" {...ink(2.8)} />
    </Picture>
  ),
  nos: ({ label }) => (
    <Picture label={label}>
      <path d="M108 36 Q96 90 78 118 Q120 108 150 124 Q132 78 128 36" {...ink(2.8)} />
      <circle cx="86" cy="124" r="8" {...line(2.2)} />
      <circle cx="142" cy="128" r="8" {...line(2.2)} />
    </Picture>
  ),
  stol: ({ label }) => (
    <Picture label={label}>
      <path d="M36 78 H204 L190 98 H50 Z" {...ink(2.6)} />
      <path d="M62 98 V156 M178 98 V156" {...line(2.8)} />
    </Picture>
  ),
  buty: ({ label }) => (
    <Picture label={label}>
      <path d="M28 96 H92 L108 128 H24 Q16 112 28 96 Z" {...ink(2.6)} />
      <path d="M118 96 H196 L214 128 H112 Q108 112 118 96 Z" {...ink(2.6)} />
      <path d="M40 96 V72 H80 V96 M132 96 V72 H176 V96" {...line(2.4)} />
    </Picture>
  ),
  ryba: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="112" cy="96" rx="58" ry="32" {...ink(2.6)} />
      <path d="M164 96 L206 62 V130 Z" {...ink(2.6)} />
      {eyes(96, 90, 0, 4)}
      {grin(100, 104, 22)}
    </Picture>
  ),
  woda: ({ label }) => (
    <Picture label={label}>
      <path d="M120 28 C 86 70, 70 92, 70 116 C 70 150, 96 164, 120 164 C 146 164, 172 148, 172 116 C 172 92, 154 70, 120 28 Z" {...ink(2.7)} />
      {face(120, 112, 0.85)}
    </Picture>
  ),
  kula: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="96" r="58" {...ink(2.7)} />
      <path d="M70 78 Q120 98 172 74 M74 118 Q122 98 170 122" {...line(2.2)} />
      {face(120, 96, 1)}
    </Picture>
  ),
  rosa: ({ label }) => (
    <Picture label={label}>
      <path d="M40 130 Q90 70 150 120 Q190 78 210 96" {...line(2.6)} />
      <path d="M78 108 C 70 86, 92 78, 96 100" {...ink(2.3)} />
      <path d="M128 92 C 120 68, 146 62, 148 88" {...ink(2.3)} />
      <path d="M168 100 C 162 78, 186 74, 188 98" {...ink(2.3)} />
    </Picture>
  ),
  zupa: ({ label }) => (
    <Picture label={label}>
      <path d="M48 88 H192 L176 140 Q120 158 64 140 Z" {...ink(2.6)} />
      <ellipse cx="120" cy="88" rx="74" ry="16" {...ink(2.4)} />
      <path d="M96 58 Q88 40 100 30 M124 54 Q132 36 122 24" {...line(2.2)} />
    </Picture>
  ),
  ptak: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="118" cy="104" rx="40" ry="26" {...ink(2.6)} />
      <circle cx="156" cy="78" r="20" {...ink(2.5)} />
      {eyes(160, 76, 0, 3)}
      <path d="M174 80 L198 74 L174 90 Z" {...ink(2.2)} />
      <path d="M90 96 Q60 70 78 58" {...line(2.4)} />
      <path d="M108 128 L100 150 M128 128 L136 150" {...line(2.4)} />
    </Picture>
  ),
  las: ({ label }) => (
    <Picture label={label}>
      <Tree x={78} y={158} />
      <Tree x={150} y={164} />
    </Picture>
  ),
  pole: ({ label }) => (
    <Picture label={label}>
      <path d="M16 120 Q70 96 120 118 T220 108" {...line(2.6)} />
      <path d="M16 142 Q80 124 140 146 T224 132" {...line(2.4)} />
      <Flower cx={168} cy={78} r={12} />
    </Picture>
  ),
  rzeka: ({ label }) => (
    <Picture label={label}>
      <path d="M20 48 Q70 70 48 100 T90 150 T150 120 T210 150" {...line(2.8)} />
      <path d="M48 40 Q100 64 78 98 T124 148 T190 118 T230 146" {...line(2.4)} />
    </Picture>
  ),
  kawa: ({ label }) => (
    <Picture label={label}>
      <Cup steam />
    </Picture>
  ),
  mleko: ({ label }) => (
    <Picture label={label}>
      <path d="M86 48 H154 L166 150 Q120 166 74 150 Z" {...ink(2.6)} />
      <path d="M92 48 V36 H148 V48" {...line(2.4)} />
      <path d="M80 96 H160" {...line(2)} />
    </Picture>
  ),
  auto: ({ label }) => (
    <Picture label={label}>
      <Car />
    </Picture>
  ),
  kura: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="118" cy="112" rx="48" ry="36" {...ink(2.6)} />
      <circle cx="160" cy="78" r="22" {...ink(2.5)} />
      {face(158, 78, 0.7)}
      <path d="M180 82 L204 74 L178 94 Z" {...ink(2.2)} />
      <path d="M90 96 Q70 70 96 64" {...line(2.3)} />
      <path d="M100 146 L92 164 M128 148 L136 164" {...line(2.4)} />
    </Picture>
  ),
  koza: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="124" rx="46" ry="28" {...ink(2.6)} />
      <circle cx="120" cy="74" r="28" {...ink(2.6)} />
      {face(118, 76, 0.85)}
      <path d="M98 50 Q86 24 104 46 M142 50 Q158 22 136 46" {...line(2.6)} />
      <ellipse cx="92" cy="86" rx="8" ry="12" {...ink(2)} />
    </Picture>
  ),
  slon: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="112" cy="108" rx="52" ry="40" {...ink(2.6)} />
      <circle cx="156" cy="78" r="28" {...ink(2.6)} />
      {face(154, 78, 0.75)}
      <path d="M170 96 Q196 120 176 150" {...line(8)} />
      <path d="M132 58 Q120 28 148 40" {...line(2.4)} />
      <path d="M86 140 L78 162 M120 146 L124 164" {...line(2.4)} />
    </Picture>
  ),
  trawa: ({ label }) => (
    <Picture label={label}>
      {Array.from({ length: 7 }, (_, i) => {
        const x = 36 + i * 28;
        return <path key={x} d={`M ${x} 150 Q ${x - 8} 100 ${x + 4} 62`} {...line(2.6)} />;
      })}
    </Picture>
  ),
  okno: ({ label }) => (
    <Picture label={label}>
      <path d="M48 36 H192 V150 H48 Z" {...ink(2.7)} />
      <path d="M120 36 V150 M48 92 H192" {...line(2.4)} />
    </Picture>
  ),
  lozko: ({ label }) => (
    <Picture label={label}>
      <path d="M36 110 H204 V132 H36 Z" {...ink(2.6)} />
      <path d="M48 110 V70 H100 Q120 96 48 110" {...ink(2.4)} />
      <path d="M40 132 V158 M196 132 V158" {...line(2.6)} />
    </Picture>
  ),
  szafa: ({ label }) => (
    <Picture label={label}>
      <path d="M62 28 H178 V158 H62 Z" {...ink(2.6)} />
      <path d="M120 28 V158" {...line(2.3)} />
      <circle cx="112" cy="96" r="3" fill="#1c1917" />
      <circle cx="128" cy="96" r="3" fill="#1c1917" />
    </Picture>
  ),
  biurko: ({ label }) => (
    <Picture label={label}>
      <path d="M32 96 H208 V112 H32 Z" {...ink(2.6)} />
      <path d="M48 112 V158 M188 112 V158" {...line(2.6)} />
      <path d="M150 96 V58 H190 V96" {...ink(2.2)} />
    </Picture>
  ),
  kwiatek: ({ label }) => (
    <Picture label={label}>
      <path d="M120 168 V96" {...line(2.6)} />
      <path d="M120 130 Q86 118 78 96" {...line(2.3)} />
      <Flower cx={120} cy={70} r={18} />
    </Picture>
  ),
  lalka: ({ label }) => (
    <Picture label={label}>
      <Pal cx={120} hy={58} dress buns arm="down" />
    </Picture>
  ),
  balon: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="74" rx="40" ry="50" {...ink(2.6)} />
      {face(118, 74, 0.9)}
      <path d="M120 124 L114 136 H126 Z" {...ink(2)} />
      <path d="M120 136 Q108 156 124 168" {...line(2.2)} />
    </Picture>
  ),
  cukierek: ({ label }) => (
    <Picture label={label}>
      <path d="M78 96 Q120 60 162 96 Q120 132 78 96 Z" {...ink(2.6)} />
      <path d="M78 96 L48 76 L52 108 Z M162 96 L194 78 L188 110 Z" {...ink(2.4)} />
      {face(120, 96, 0.7)}
    </Picture>
  ),
  zabaweczka: ({ label }) => (
    <Picture label={label}>
      <circle cx="92" cy="78" r="28" {...ink(2.5)} />
      <ellipse cx="118" cy="124" rx="40" ry="32" {...ink(2.6)} />
      {face(90, 78, 0.75)}
      <circle cx="64" cy="108" r="12" {...ink(2.2)} />
      <circle cx="168" cy="108" r="12" {...ink(2.2)} />
      <circle cx="96" cy="154" r="12" {...ink(2.2)} />
      <circle cx="146" cy="154" r="12" {...ink(2.2)} />
    </Picture>
  ),
  slonce: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="96" r="36" {...ink(2.6)} />
      {face(120, 96, 1)}
      {Array.from({ length: 10 }, (_, i) => {
        const a = (i / 10) * Math.PI * 2;
        const x1 = 120 + Math.cos(a) * 48;
        const y1 = 96 + Math.sin(a) * 48;
        const x2 = 120 + Math.cos(a) * 68;
        const y2 = 96 + Math.sin(a) * 68;
        return <path key={i} d={`M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`} {...line(2.4)} />;
      })}
    </Picture>
  ),
  gwiazda: ({ label }) => (
    <Picture label={label}>
      <path d="M120 24 L136 78 L192 80 L148 114 L164 168 L120 138 L76 168 L92 114 L48 80 L104 78 Z" {...ink(2.6)} />
      {face(120, 100, 0.8)}
    </Picture>
  ),
};
