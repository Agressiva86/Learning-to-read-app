import { ink, line } from "./draw";
import { Face, Person, Picture, type SceneCmp } from "./kit";

export const easyScenes: Record<string, SceneCmp> = {
  mama: ({ label }) => (
    <Picture label={label}>
      <Person hair="bob" dress />
    </Picture>
  ),
  tata: ({ label }) => (
    <Picture label={label}>
      <Person hair="short" />
    </Picture>
  ),
  dom: ({ label }) => (
    <Picture label={label}>
      <path d="M36 86 L120 28 L204 86" {...line(2.6)} />
      <path d="M56 84 V156 H184 V84" {...ink(2.4)} />
      <path d="M104 156 V112 H136 V156" {...ink(2.2)} />
      <circle cx="120" cy="128" r="3" {...line(1.6)} />
      <path d="M70 100 H96 V124 H70 Z M144 100 H170 V124 H144 Z" {...ink(2)} />
      <path d="M83 100 V124 M70 112 H96 M157 100 V124 M144 112 H170" {...line(1.6)} />
      <path d="M156 58 V36 H176 V70" {...ink(2)} />
    </Picture>
  ),
  kot: ({ label }) => (
    <Picture label={label}>
      <path d="M168 118 Q210 86 188 52 Q168 86 156 104" {...ink(2.4)} />
      <ellipse cx="112" cy="128" rx="48" ry="28" {...ink(2.4)} />
      <path d="M78 70 L62 28 L108 62 Z" {...ink(2.3)} />
      <path d="M138 66 L168 24 L154 70 Z" {...ink(2.3)} />
      <circle cx="108" cy="78" r="30" {...ink(2.4)} />
      <Face cx={104} cy={80} />
      <path d="M78 92 H46 M80 102 H42 M78 112 H50" {...line(1.7)} />
      <path d="M90 150 H70 V164 H98 Z M140 150 H122 V164 H152 Z" {...ink(2)} />
    </Picture>
  ),
  pies: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="118" cy="118" rx="52" ry="32" {...ink(2.4)} />
      <path d="M168 108 Q206 90 196 58" {...ink(2.4)} />
      <ellipse cx="70" cy="86" rx="14" ry="26" {...ink(2.2)} />
      <ellipse cx="148" cy="78" rx="12" ry="22" {...ink(2.2)} />
      <circle cx="112" cy="72" r="28" {...ink(2.4)} />
      <ellipse cx="136" cy="84" rx="14" ry="10" {...ink(2)} />
      <Face cx={104} cy={70} s={0.9} />
      <path d="M86 146 H70 V162 H98 Z M146 146 H130 V162 H160 Z" {...ink(2)} />
    </Picture>
  ),
  oko: ({ label }) => (
    <Picture label={label}>
      <path d="M24 92 Q120 28 216 92 Q120 156 24 92 Z" {...ink(2.6)} />
      <circle cx="120" cy="92" r="32" {...ink(2.3)} />
      <circle cx="120" cy="92" r="14" {...ink(2)} />
      <circle cx="126" cy="86" r="5" {...line(1.6)} />
      <path d="M48 70 Q70 58 96 66 M144 66 Q170 58 192 70" {...line(1.8)} />
    </Picture>
  ),
  ucho: ({ label }) => (
    <Picture label={label}>
      <path d="M128 28 C 70 28, 48 78, 64 120 C 76 152, 120 164, 140 140 C 156 122, 150 96, 132 96 C 112 96, 108 118, 122 128" {...ink(2.6)} />
      <path d="M118 70 C 100 78, 96 108, 116 124" {...line(2)} />
    </Picture>
  ),
  nos: ({ label }) => (
    <Picture label={label}>
      <path d="M118 28 C 112 70, 96 96, 70 118 C 96 112, 130 124, 168 118 C 140 96, 132 70, 128 28" {...ink(2.6)} />
      <ellipse cx="86" cy="124" rx="12" ry="8" {...ink(2)} />
      <ellipse cx="142" cy="126" rx="12" ry="8" {...ink(2)} />
    </Picture>
  ),
  stol: ({ label }) => (
    <Picture label={label}>
      <path d="M28 72 H212 L196 96 H44 Z" {...ink(2.5)} />
      <path d="M58 96 V158 M182 96 V158" {...line(2.6)} />
      <path d="M48 158 H72 M168 158 H192" {...line(2.2)} />
    </Picture>
  ),
  buty: ({ label }) => (
    <Picture label={label}>
      <path d="M28 86 H78 L92 118 H22 Q14 100 28 86 Z" {...ink(2.4)} />
      <path d="M36 86 V58 H74 V86" {...ink(2.2)} />
      <path d="M118 86 H178 L196 118 H112 Q108 100 118 86 Z" {...ink(2.4)} />
      <path d="M128 86 V58 H170 V86" {...ink(2.2)} />
      <path d="M36 72 H74 M128 72 H170" {...line(1.6)} />
    </Picture>
  ),
  ryba: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="108" cy="96" rx="62" ry="36" {...ink(2.5)} />
      <path d="M162 96 L214 52 V140 Z" {...ink(2.4)} />
      <path d="M90 64 Q120 40 140 62 M96 128 Q124 150 146 128" {...ink(2.1)} />
      <circle cx="78" cy="90" r="6" {...ink(2)} />
      <circle cx="78" cy="90" r="2.2" {...line(1.6)} />
      <path d="M96 108 Q110 116 124 106" {...line(1.8)} />
    </Picture>
  ),
  woda: ({ label }) => (
    <Picture label={label}>
      <path d="M78 36 H162 L150 150 Q120 166 90 150 Z" {...ink(2.5)} />
      <path d="M86 96 Q120 84 154 96 V140 Q120 154 86 140 Z" {...line(2)} />
      <path d="M96 108 Q120 120 146 108" {...line(1.8)} />
    </Picture>
  ),
  kula: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="92" r="62" {...ink(2.5)} />
      <path d="M120 30 V154 M58 92 H182" {...line(2)} />
      <path d="M72 50 Q120 92 72 134 M168 50 Q120 92 168 134" {...line(2)} />
    </Picture>
  ),
  rosa: ({ label }) => (
    <Picture label={label}>
      <path d="M36 128 Q120 36 204 128 Q120 108 36 128 Z" {...ink(2.4)} />
      <path d="M120 118 V70" {...line(1.8)} />
      <path d="M92 96 C 84 78, 104 72, 108 92" {...ink(2)} />
      <path d="M132 88 C 126 68, 148 64, 150 86" {...ink(2)} />
      <path d="M156 108 C 150 90, 170 86, 172 106" {...ink(2)} />
    </Picture>
  ),
  zupa: ({ label }) => (
    <Picture label={label}>
      <path d="M40 86 H200 L178 142 Q120 162 62 142 Z" {...ink(2.5)} />
      <ellipse cx="120" cy="86" rx="80" ry="18" {...ink(2.3)} />
      <path d="M168 70 V36" {...line(2.2)} />
      <ellipse cx="168" cy="30" rx="14" ry="8" {...ink(2)} />
      <path d="M92 48 Q84 30 98 22 M128 44 Q138 26 126 16" {...line(1.8)} />
    </Picture>
  ),
  ptak: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="112" cy="108" rx="42" ry="28" {...ink(2.4)} />
      <circle cx="154" cy="78" r="20" {...ink(2.3)} />
      <circle cx="160" cy="74" r="3" {...line(1.6)} />
      <path d="M172 82 L206 72 L172 94 Z" {...ink(2.1)} />
      <path d="M86 96 Q48 70 72 52" {...ink(2.1)} />
      <path d="M100 132 L92 158 M126 132 L134 158" {...line(2.2)} />
      <path d="M108 132 H118" {...line(2)} />
    </Picture>
  ),
  las: ({ label }) => (
    <Picture label={label}>
      <path d="M48 150 V108 H62 V150" {...ink(2)} />
      <path d="M55 48 L18 112 H92 Z" {...ink(2.4)} />
      <path d="M118 156 V96 H136 V156" {...ink(2)} />
      <path d="M127 28 L78 104 H176 Z" {...ink(2.4)} />
      <path d="M188 150 V112 H200 V150" {...ink(2)} />
      <path d="M194 64 L164 116 H224 Z" {...ink(2.3)} />
    </Picture>
  ),
  pole: ({ label }) => (
    <Picture label={label}>
      <path d="M16 118 Q80 96 140 116 T224 108 V160 H16 Z" {...ink(2.3)} />
      <path d="M40 132 V108 M70 138 V100 M100 134 V106 M150 130 V98 M186 136 V108" {...line(2)} />
      <circle cx="70" cy="96" r="8" {...ink(1.8)} />
      <circle cx="150" cy="92" r="8" {...ink(1.8)} />
      <circle cx="186" cy="102" r="7" {...ink(1.8)} />
    </Picture>
  ),
  rzeka: ({ label }) => (
    <Picture label={label}>
      <path d="M20 36 L70 150 H120 L78 36 Z" {...ink(2.3)} />
      <path d="M130 28 L168 156 H214 L176 28 Z" {...ink(2.3)} />
      <path d="M78 70 Q96 80 86 96 M150 64 Q168 76 158 94 M96 112 Q114 124 104 140" {...line(1.8)} />
    </Picture>
  ),
  kawa: ({ label }) => (
    <Picture label={label}>
      <path d="M62 70 H158 L146 132 Q110 150 74 132 Z" {...ink(2.5)} />
      <ellipse cx="110" cy="70" rx="48" ry="12" {...ink(2.2)} />
      <path d="M156 84 Q188 96 156 118" {...line(2.4)} />
      <path d="M96 46 Q88 28 102 20 M124 42 Q134 24 120 14" {...line(1.8)} />
    </Picture>
  ),
  mleko: ({ label }) => (
    <Picture label={label}>
      <path d="M86 56 H150 L162 150 Q118 166 74 150 Z" {...ink(2.5)} />
      <path d="M92 56 V40 H144 V56" {...ink(2.2)} />
      <path d="M80 96 H156" {...line(2)} />
      <path d="M96 110 H140 V128 H96 Z" {...line(1.8)} />
    </Picture>
  ),
  auto: ({ label }) => (
    <Picture label={label}>
      <path d="M28 108 Q36 78 78 76 L104 48 H168 L196 78 H216 V124 H28 Z" {...ink(2.5)} />
      <path d="M108 52 V80 H168 L188 80" {...line(2)} />
      <circle cx="72" cy="128" r="18" {...ink(2.3)} />
      <circle cx="180" cy="128" r="18" {...ink(2.3)} />
      <circle cx="72" cy="128" r="7" {...line(1.8)} />
      <circle cx="180" cy="128" r="7" {...line(1.8)} />
      <path d="M196 96 H210" {...line(2)} />
    </Picture>
  ),
  kura: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="112" cy="112" rx="50" ry="36" {...ink(2.4)} />
      <circle cx="158" cy="78" r="22" {...ink(2.3)} />
      <path d="M148 62 Q158 40 170 58" {...ink(2)} />
      <circle cx="164" cy="74" r="3" {...line(1.6)} />
      <path d="M178 82 L210 74 L176 96 Z" {...ink(2)} />
      <path d="M80 100 Q56 78 78 64" {...ink(2)} />
      <path d="M96 144 L88 164 M124 146 L134 164" {...line(2.2)} />
    </Picture>
  ),
  koza: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="122" rx="50" ry="32" {...ink(2.4)} />
      <circle cx="150" cy="74" r="26" {...ink(2.4)} />
      <Face cx={150} cy={76} s={0.85} />
      <path d="M132 54 L118 22 M168 54 L186 20" {...line(2.4)} />
      <path d="M168 92 Q196 100 188 118" {...ink(2)} />
      <path d="M86 146 V166 M112 150 V168 M140 150 V168 M164 146 V166" {...line(2.2)} />
    </Picture>
  ),
  slon: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="108" cy="112" rx="56" ry="40" {...ink(2.4)} />
      <circle cx="162" cy="78" r="28" {...ink(2.4)} />
      <ellipse cx="140" cy="78" rx="16" ry="22" {...ink(2.1)} />
      <Face cx={166} cy={74} s={0.7} />
      <path d="M184 96 Q210 120 190 156" {...ink(2.4)} />
      <path d="M176 108 H196" {...line(1.8)} />
      <path d="M78 146 V166 M108 152 V168 M140 150 V168" {...line(2.2)} />
    </Picture>
  ),
  trawa: ({ label }) => (
    <Picture label={label}>
      <path d="M24 150 H216" {...line(2.2)} />
      {Array.from({ length: 9 }, (_, i) => {
        const x = 36 + i * 22;
        const h = 46 + (i % 3) * 18;
        return <path key={x} d={`M ${x} 150 Q ${x - 6} ${150 - h / 2} ${x + 2} ${150 - h}`} {...line(2.3)} />;
      })}
    </Picture>
  ),
  okno: ({ label }) => (
    <Picture label={label}>
      <path d="M48 28 H192 V148 H48 Z" {...ink(2.6)} />
      <path d="M120 28 V148 M48 88 H192" {...line(2.2)} />
      <path d="M36 148 H204 V160 H36 Z" {...ink(2.2)} />
      <path d="M64 48 Q80 60 70 78 M150 48 Q168 62 156 80" {...line(1.6)} />
    </Picture>
  ),
  lozko: ({ label }) => (
    <Picture label={label}>
      <path d="M36 78 H64 V150 H36 Z" {...ink(2.3)} />
      <path d="M64 108 H210 V132 H64 Z" {...ink(2.4)} />
      <path d="M78 108 V78 H124 Q140 100 78 108" {...ink(2.2)} />
      <path d="M150 108 V86 H204 V108" {...line(2)} />
      <path d="M48 150 V164 M196 132 V164" {...line(2.2)} />
    </Picture>
  ),
  szafa: ({ label }) => (
    <Picture label={label}>
      <path d="M58 24 H182 V160 H58 Z" {...ink(2.5)} />
      <path d="M120 24 V160" {...line(2.2)} />
      <circle cx="110" cy="92" r="4" {...line(1.8)} />
      <circle cx="130" cy="92" r="4" {...line(1.8)} />
      <path d="M58 160 H182 V168 H58 Z" {...ink(2)} />
    </Picture>
  ),
  biurko: ({ label }) => (
    <Picture label={label}>
      <path d="M24 96 H216 V114 H24 Z" {...ink(2.5)} />
      <path d="M44 114 V158 M196 114 V158" {...line(2.4)} />
      <path d="M148 96 V52 H196 V96" {...ink(2.2)} />
      <path d="M160 70 H184" {...line(1.6)} />
      <path d="M40 96 V70 H90 V96" {...ink(2)} />
    </Picture>
  ),
  kwiat: ({ label }) => (
    <Picture label={label}>
      <path d="M96 168 V92 H144 V168" {...ink(2.2)} />
      <path d="M88 168 H152 V156 H88 Z" {...ink(2)} />
      <path d="M120 92 V48" {...line(2.3)} />
      <path d="M120 70 Q92 60 86 78" {...line(2)} />
      <circle cx="120" cy="36" r="10" {...ink(2)} />
      <circle cx="100" cy="48" r="12" {...ink(2)} />
      <circle cx="140" cy="48" r="12" {...ink(2)} />
      <circle cx="108" cy="26" r="12" {...ink(2)} />
      <circle cx="134" cy="26" r="12" {...ink(2)} />
    </Picture>
  ),
  lalka: ({ label }) => (
    <Picture label={label}>
      <Person cx={120} hair="buns" dress />
    </Picture>
  ),
  balon: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="72" rx="46" ry="56" {...ink(2.5)} />
      <path d="M108 124 L120 140 L132 124 Z" {...ink(2)} />
      <path d="M120 140 Q100 156 118 170" {...line(2)} />
      <path d="M96 60 Q120 48 146 64" {...line(1.6)} />
    </Picture>
  ),
  cukierek: ({ label }) => (
    <Picture label={label}>
      <path d="M78 92 Q120 52 162 92 Q120 132 78 92 Z" {...ink(2.5)} />
      <path d="M78 92 L42 70 L50 108 Z M162 92 L198 70 L190 108 Z" {...ink(2.3)} />
      <path d="M104 80 Q120 96 136 80" {...line(1.8)} />
    </Picture>
  ),
  zabawka: ({ label }) => (
    <Picture label={label}>
      <circle cx="86" cy="70" r="26" {...ink(2.3)} />
      <circle cx="154" cy="70" r="26" {...ink(2.3)} />
      <circle cx="120" cy="86" r="32" {...ink(2.4)} />
      <ellipse cx="120" cy="132" rx="40" ry="32" {...ink(2.4)} />
      <Face cx={120} cy={90} />
      <ellipse cx="120" cy="112" rx="10" ry="7" {...ink(2)} />
      <circle cx="78" cy="140" r="12" {...ink(2)} />
      <circle cx="162" cy="140" r="12" {...ink(2)} />
    </Picture>
  ),
  slonce: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="96" r="40" {...ink(2.5)} />
      <Face cx={120} cy={98} />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x1 = 120 + Math.cos(a) * 52;
        const y1 = 96 + Math.sin(a) * 52;
        const x2 = 120 + Math.cos(a) * 72;
        const y2 = 96 + Math.sin(a) * 72;
        return <path key={i} d={`M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`} {...line(2.4)} />;
      })}
    </Picture>
  ),
  gwiazda: ({ label }) => (
    <Picture label={label}>
      <path d="M120 18 L142 74 L202 78 L154 116 L170 174 L120 142 L70 174 L86 116 L38 78 L98 74 Z" {...ink(2.5)} />
    </Picture>
  ),
};
