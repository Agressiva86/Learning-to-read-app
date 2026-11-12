import { ink, line } from "./draw";
import { House, Pal, Picture, eyes, face, grin, type SceneCmp } from "./kit";

export const midScenes: Record<string, SceneCmp> = {
  banan: ({ label }) => (
    <Picture label={label}>
      <path d="M78 48 Q150 20 176 90 Q168 150 96 150 Q70 110 78 48 Z" {...ink(2.7)} />
      {face(124, 96, 0.8)}
    </Picture>
  ),
  pomidor: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="104" r="48" {...ink(2.6)} />
      <path d="M104 58 Q120 40 136 58" {...line(2.4)} />
      {face(120, 106, 0.9)}
    </Picture>
  ),
  cytryna: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="100" rx="58" ry="42" {...ink(2.6)} />
      <path d="M70 100 H170" {...line(2)} />
      {face(120, 86, 0.75)}
    </Picture>
  ),
  arbuz: ({ label }) => (
    <Picture label={label}>
      <path d="M40 120 Q120 28 200 120 Z" {...ink(2.7)} />
      <path d="M58 120 Q120 52 182 120" {...line(2.2)} />
      <circle cx="96" cy="100" r="3" fill="#1c1917" />
      <circle cx="124" cy="88" r="3" fill="#1c1917" />
      <circle cx="148" cy="104" r="3" fill="#1c1917" />
    </Picture>
  ),
  truskawka: ({ label }) => (
    <Picture label={label}>
      <path d="M120 40 C 70 70, 64 120, 120 160 C 176 120, 170 70, 120 40 Z" {...ink(2.6)} />
      <path d="M96 58 Q120 36 146 60" {...line(2.3)} />
      {eyes(120, 96, 12, 3)}
      {grin(120, 112, 20)}
    </Picture>
  ),
  jagoda: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="104" r="40" {...ink(2.6)} />
      <path d="M108 66 Q120 48 134 68" {...line(2.2)} />
      {face(120, 106, 0.75)}
    </Picture>
  ),
  rower: ({ label }) => (
    <Picture label={label}>
      <circle cx="68" cy="124" r="32" {...ink(2.5)} />
      <circle cx="176" cy="124" r="32" {...ink(2.5)} />
      <path d="M68 124 L120 70 L176 124 L120 124 Z" {...line(2.6)} />
      <path d="M120 70 L146 70" {...line(2.4)} />
      <circle cx="120" cy="124" r="6" {...ink(2)} />
    </Picture>
  ),
  hulajnoga: ({ label }) => (
    <Picture label={label}>
      <circle cx="78" cy="140" r="22" {...ink(2.4)} />
      <circle cx="168" cy="140" r="22" {...ink(2.4)} />
      <path d="M78 140 L150 140 L150 48" {...line(2.8)} />
      <path d="M132 48 H168" {...line(2.6)} />
    </Picture>
  ),
  samolot: ({ label }) => (
    <Picture label={label}>
      <path d="M28 100 H150 L190 78 V122 L150 108 H28 Z" {...ink(2.6)} />
      <path d="M90 100 L70 58 H110 Z M96 108 L78 146 H116 Z" {...ink(2.4)} />
      {eyes(150, 96, 8, 2.6)}
    </Picture>
  ),
  helikopter: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="128" cy="108" rx="48" ry="28" {...ink(2.6)} />
      <path d="M128 80 V48 M70 48 H190" {...line(2.6)} />
      <path d="M80 108 H48" {...line(2.6)} />
      <path d="M48 96 V122" {...line(2.4)} />
      {face(128, 108, 0.7)}
    </Picture>
  ),
  strazak: ({ label }) => (
    <Picture label={label}>
      <Pal arm="down" />
      <path d="M92 30 H148 L140 48 H100 Z" {...ink(2.4)} />
    </Picture>
  ),
  policjant: ({ label }) => (
    <Picture label={label}>
      <Pal arm="down" />
      <path d="M94 36 H146 V50 H94 Z" {...ink(2.3)} />
      <path d="M108 36 V26 H132 V36" {...line(2.2)} />
    </Picture>
  ),
  nauczyciel: ({ label }) => (
    <Picture label={label}>
      <Pal arm="wave" />
      <path d="M168 96 H206 V132 H168 Z" {...ink(2.3)} />
    </Picture>
  ),
  apteka: ({ label }) => (
    <Picture label={label}>
      <House y={116} />
      <path d="M112 78 H128 V70 H140 V86 H128 V94 H112 V86 H100 V70 H112 Z" {...ink(2.2)} />
    </Picture>
  ),
  szpital: ({ label }) => (
    <Picture label={label}>
      <path d="M48 64 H192 V158 H48 Z" {...ink(2.6)} />
      <path d="M108 28 H132 V48 H152 V70 H132 V90 H108 V70 H88 V48 H108 Z" {...ink(2.3)} />
    </Picture>
  ),
  biblioteka: ({ label }) => (
    <Picture label={label}>
      <path d="M36 40 H204 V150 H36 Z" {...ink(2.5)} />
      <path d="M36 76 H204 M36 112 H204" {...line(2.2)} />
      <path d="M56 48 H72 V70 H56 Z M80 52 H100 V70 H80 Z M110 46 H128 V70 H110 Z" {...ink(2)} />
    </Picture>
  ),
  komputer: ({ label }) => (
    <Picture label={label}>
      <path d="M48 40 H192 V120 H48 Z" {...ink(2.6)} />
      <path d="M100 120 L88 146 H152 L140 120" {...line(2.4)} />
      <path d="M72 146 H168" {...line(2.6)} />
      {face(120, 80, 0.8)}
    </Picture>
  ),
  telewizor: ({ label }) => (
    <Picture label={label}>
      <path d="M40 48 H200 V132 H40 Z" {...ink(2.6)} />
      {face(120, 90, 0.9)}
      <path d="M96 132 L80 152 M144 132 L160 152" {...line(2.4)} />
    </Picture>
  ),
  lodowka: ({ label }) => (
    <Picture label={label}>
      <path d="M72 24 H168 V160 H72 Z" {...ink(2.6)} />
      <path d="M72 84 H168" {...line(2.3)} />
      <path d="M156 52 V68 M156 108 V124" {...line(2.2)} />
    </Picture>
  ),
  pralka: ({ label }) => (
    <Picture label={label}>
      <path d="M58 36 H182 V156 H58 Z" {...ink(2.6)} />
      <circle cx="120" cy="104" r="36" {...ink(2.4)} />
      <circle cx="120" cy="104" r="16" {...line(2)} />
    </Picture>
  ),
  zelazko: ({ label }) => (
    <Picture label={label}>
      <path d="M40 120 H176 L150 78 H92 Q70 78 64 100 Z" {...ink(2.6)} />
      <path d="M108 78 V52 H146 V78" {...line(2.4)} />
    </Picture>
  ),
  okularnik: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="78" r="28" {...ink(2.6)} />
      {face(120, 80, 0.7)}
      <circle cx="100" cy="78" r="16" {...line(2.4)} />
      <circle cx="140" cy="78" r="16" {...line(2.4)} />
      <path d="M84 78 H70 M156 78 H172" {...line(2.2)} />
      <path d="M100 106 L92 150 M140 106 L150 150" {...line(2.6)} />
    </Picture>
  ),
  parasolka: ({ label }) => (
    <Picture label={label}>
      <path d="M40 96 Q120 20 200 96 Z" {...ink(2.7)} />
      <path d="M120 96 V156 Q146 168 150 148" {...line(2.6)} />
      <path d="M80 96 Q100 70 120 96 M120 96 Q140 70 160 96" {...line(2)} />
    </Picture>
  ),
  kalendarz: ({ label }) => (
    <Picture label={label}>
      <path d="M52 40 H188 V158 H52 Z" {...ink(2.6)} />
      <path d="M52 72 H188" {...line(2.3)} />
      <path d="M80 28 V52 M160 28 V52" {...line(2.4)} />
      <circle cx="88" cy="100" r="6" {...ink(2)} />
      <circle cx="120" cy="100" r="6" {...line(2)} />
      <circle cx="152" cy="100" r="6" {...line(2)} />
    </Picture>
  ),
  dlugopis: ({ label }) => (
    <Picture label={label}>
      <path d="M150 28 L176 54 L96 150 L62 158 L78 124 Z" {...ink(2.6)} />
      <path d="M150 28 L176 54" {...line(2)} />
    </Picture>
  ),
  kredka: ({ label }) => (
    <Picture label={label}>
      <path d="M70 150 L96 40 H132 L158 150 Z" {...ink(2.6)} />
      <path d="M96 40 L114 18 L132 40" {...ink(2.4)} />
    </Picture>
  ),
  nozyczki: ({ label }) => (
    <Picture label={label}>
      <circle cx="78" cy="128" r="22" {...ink(2.4)} />
      <circle cx="118" cy="128" r="22" {...ink(2.4)} />
      <path d="M92 112 L176 40 M108 112 L168 70" {...line(2.8)} />
    </Picture>
  ),
  piornik: ({ label }) => (
    <Picture label={label}>
      <path d="M36 70 H204 V130 Q120 154 36 130 Z" {...ink(2.6)} />
      <path d="M36 90 H204" {...line(2.2)} />
    </Picture>
  ),
  plecaczek: ({ label }) => (
    <Picture label={label}>
      <path d="M70 64 H170 Q186 64 186 84 V140 Q120 162 54 140 V84 Q54 64 70 64 Z" {...ink(2.6)} />
      <path d="M86 64 V44 H154 V64" {...line(2.4)} />
      <path d="M96 100 H146" {...line(2.2)} />
    </Picture>
  ),
  piaskownica: ({ label }) => (
    <Picture label={label}>
      <path d="M36 100 H204 L184 150 H56 Z" {...ink(2.6)} />
      <path d="M70 100 V70 H110" {...line(2.4)} />
      <circle cx="150" cy="122" r="8" {...line(2)} />
    </Picture>
  ),
  zjezdzalnia: ({ label }) => (
    <Picture label={label}>
      <path d="M48 40 H96 V150" {...line(2.8)} />
      <path d="M96 56 Q150 56 190 120 Q206 146 176 150" {...line(2.8)} />
      <path d="M48 40 H96 L70 70 Z" {...ink(2.4)} />
    </Picture>
  ),
  karuzela: ({ label }) => (
    <Picture label={label}>
      <path d="M120 150 V48" {...line(2.6)} />
      <path d="M48 78 Q120 28 192 78 Z" {...ink(2.6)} />
      <path d="M70 78 V120 M120 70 V120 M168 78 V120" {...line(2.2)} />
      <circle cx="120" cy="150" r="16" {...line(2.2)} />
    </Picture>
  ),
  hustawka: ({ label }) => (
    <Picture label={label}>
      <path d="M48 36 H192" {...line(2.6)} />
      <path d="M78 36 L96 120 M162 36 L144 120" {...line(2.4)} />
      <path d="M86 120 H154" {...ink(2.4)} />
      <circle cx="120" cy="96" r="16" {...ink(2.3)} />
      {face(120, 96, 0.5)}
    </Picture>
  ),
  biedronka: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="108" rx="50" ry="40" {...ink(2.6)} />
      <path d="M120 70 V146" {...line(2.2)} />
      <circle cx="100" cy="100" r="6" fill="#1c1917" />
      <circle cx="142" cy="112" r="6" fill="#1c1917" />
      <circle cx="120" cy="64" r="16" {...ink(2.4)} />
      {eyes(120, 64, 6, 2.4)}
    </Picture>
  ),
  motylek: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="78" cy="90" rx="36" ry="28" {...ink(2.5)} />
      <ellipse cx="162" cy="90" rx="36" ry="28" {...ink(2.5)} />
      <ellipse cx="86" cy="128" rx="24" ry="18" {...ink(2.3)} />
      <ellipse cx="154" cy="128" rx="24" ry="18" {...ink(2.3)} />
      <path d="M120 70 V140" {...line(2.6)} />
      <circle cx="120" cy="62" r="10" {...ink(2.2)} />
      {eyes(120, 62, 4, 1.8)}
    </Picture>
  ),
  slimaczek: ({ label }) => (
    <Picture label={label}>
      <path d="M48 130 Q90 130 110 112" {...line(2.6)} />
      <circle cx="132" cy="96" r="36" {...ink(2.6)} />
      <circle cx="132" cy="96" r="16" {...line(2.2)} />
      <circle cx="92" cy="112" r="14" {...ink(2.3)} />
      {eyes(92, 110, 5, 2)}
      <path d="M82 96 Q74 70 86 62" {...line(2.2)} />
    </Picture>
  ),
  wiewiorka: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="110" cy="116" rx="36" ry="28" {...ink(2.6)} />
      <circle cx="140" cy="78" r="22" {...ink(2.5)} />
      {face(140, 78, 0.65)}
      <path d="M70 100 Q30 70 48 120 Q70 110 78 124" {...ink(2.4)} />
      <path d="M128 58 L140 36 L150 60" {...ink(2.2)} />
    </Picture>
  ),
  jezyk: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="112" rx="48" ry="36" {...ink(2.6)} />
      <path d="M78 90 L70 64 M96 78 L92 52 M120 74 L120 46 M144 78 L150 52 M164 92 L178 66" {...line(2.2)} />
      {face(120, 112, 0.8)}
    </Picture>
  ),
  bocian: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="110" cy="100" rx="36" ry="24" {...ink(2.6)} />
      <circle cx="150" cy="78" r="16" {...ink(2.4)} />
      <path d="M164 80 L206 74 L164 92 Z" {...ink(2.2)} />
      <path d="M100 122 L92 164 M124 122 L132 164" {...line(2.6)} />
      {eyes(152, 76, 0, 2.6)}
    </Picture>
  ),
  jaskolka: ({ label }) => (
    <Picture label={label}>
      <path d="M40 100 Q90 70 120 96 Q150 70 200 100 Q150 90 120 110 Q90 90 40 100 Z" {...ink(2.6)} />
      <path d="M108 110 L96 140 L120 118 L144 140 L132 110" {...ink(2.3)} />
      {eyes(150, 92, 0, 2.6)}
    </Picture>
  ),
};
