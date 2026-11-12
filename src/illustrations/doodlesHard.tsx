import { ink, line } from "./draw";
import { Face, Person, Picture, type SceneCmp } from "./kit";

export const hardScenes: Record<string, SceneCmp> = {
  pomarancza: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="108" r="54" {...ink(2.5)} />
      <path d="M120 54 V34" {...line(2.2)} />
      <path d="M100 64 Q120 46 144 66" {...ink(2)} />
      <path d="M86 90 Q120 108 154 90 M90 126 Q120 112 152 128" {...line(1.6)} />
    </Picture>
  ),
  truskawkowy: ({ label }) => (
    <Picture label={label}>
      <path d="M48 118 Q120 70 192 118 Q168 162 120 162 Q72 162 48 118 Z" {...ink(2.4)} />
      <path d="M120 70 C 88 48, 78 36, 100 22 C 112 46, 132 46, 146 22 C 168 36, 154 50, 120 70 Z" {...ink(2.2)} />
      <circle cx="96" cy="120" r="5" {...line(1.6)} />
      <circle cx="128" cy="112" r="5" {...line(1.6)} />
      <circle cx="146" cy="128" r="5" {...line(1.6)} />
    </Picture>
  ),
  bananowiec: ({ label }) => (
    <Picture label={label}>
      <path d="M116 164 V78" {...line(2.6)} />
      <path d="M116 90 Q60 40 36 86 Q86 78 116 100" {...ink(2.3)} />
      <path d="M116 82 Q176 28 208 78 Q150 74 116 98" {...ink(2.3)} />
      <path d="M96 112 Q78 96 92 82 Q112 98 104 116 Z" {...ink(2)} />
      <path d="M136 120 Q158 100 146 84 Q122 104 130 124 Z" {...ink(2)} />
    </Picture>
  ),
  salaterka: ({ label }) => (
    <Picture label={label}>
      <path d="M32 84 H208 L180 146 Q120 168 60 146 Z" {...ink(2.5)} />
      <ellipse cx="120" cy="84" rx="88" ry="16" {...ink(2.2)} />
      <circle cx="90" cy="110" r="12" {...line(1.8)} />
      <circle cx="124" cy="118" r="14" {...line(1.8)} />
      <path d="M150 104 Q168 96 162 120" {...line(1.8)} />
    </Picture>
  ),
  pomidorowy: ({ label }) => (
    <Picture label={label}>
      <path d="M44 96 H196 L174 148 Q120 168 66 148 Z" {...ink(2.5)} />
      <circle cx="120" cy="64" r="30" {...ink(2.3)} />
      <path d="M106 38 Q120 22 136 40" {...ink(1.8)} />
      <path d="M80 112 Q120 128 160 112" {...line(1.8)} />
    </Picture>
  ),
  radiowoz: ({ label }) => (
    <Picture label={label}>
      <path d="M24 112 Q32 80 74 78 L102 50 H162 L190 80 H220 V128 H24 Z" {...ink(2.5)} />
      <path d="M108 54 V82 H164" {...line(1.8)} />
      <path d="M100 64 H146 V80 H100 Z" {...ink(2)} />
      <circle cx="70" cy="132" r="16" {...ink(2.2)} />
      <circle cx="178" cy="132" r="16" {...ink(2.2)} />
    </Picture>
  ),
  helikopterowy: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="124" cy="104" rx="58" ry="32" {...ink(2.4)} />
      <path d="M124 72 V28 M36 28 H214" {...line(2.6)} />
      <path d="M66 104 H28 M28 88 V122" {...line(2.2)} />
      <path d="M96 104 H160 V122 H96 Z" {...line(1.8)} />
      <path d="M100 136 L88 164 M150 136 L162 164" {...line(2.2)} />
      <ellipse cx="124" cy="164" rx="36" ry="8" {...line(1.8)} />
    </Picture>
  ),
  rowerzysta: ({ label }) => (
    <Picture label={label}>
      <circle cx="62" cy="132" r="28" {...ink(2.3)} />
      <circle cx="178" cy="132" r="28" {...ink(2.3)} />
      <path d="M62 132 L112 86 L178 132" {...line(2.3)} />
      <circle cx="118" cy="58" r="16" {...ink(2.2)} />
      <Face cx={118} cy={58} s={0.6} />
      <path d="M118 74 L106 108 M112 86 L146 78" {...line(2.2)} />
    </Picture>
  ),
  samochodzik: ({ label }) => (
    <Picture label={label}>
      <path d="M36 112 Q44 78 86 76 L112 50 H160 L186 78 H210 V126 H36 Z" {...ink(2.5)} />
      <circle cx="74" cy="130" r="16" {...ink(2.2)} />
      <circle cx="170" cy="130" r="16" {...ink(2.2)} />
      <path d="M116 56 V80 H156" {...line(1.8)} />
      <circle cx="196" cy="96" r="5" {...line(1.6)} />
    </Picture>
  ),
  kaloryfer: ({ label }) => (
    <Picture label={label}>
      <path d="M40 36 H200 V150 H40 Z" {...ink(2.5)} />
      <path d="M64 36 V150 M88 36 V150 M112 36 V150 M136 36 V150 M160 36 V150 M184 36 V150" {...line(2)} />
      <path d="M40 150 H200 V162 H40 Z" {...ink(2)} />
    </Picture>
  ),
  temperaturka: ({ label }) => (
    <Picture label={label}>
      <path d="M108 28 H132 V118" {...line(2.5)} />
      <circle cx="120" cy="138" r="24" {...ink(2.3)} />
      <path d="M120 118 V78" {...line(2.4)} />
      <path d="M132 48 H146 M132 66 H142 M132 84 H146" {...line(1.6)} />
    </Picture>
  ),
  termometr: ({ label }) => (
    <Picture label={label}>
      <path d="M96 22 H144 V112" {...line(2.6)} />
      <circle cx="120" cy="136" r="28" {...ink(2.4)} />
      <path d="M120 112 V58" {...line(2.8)} />
      <path d="M144 42 H164 M144 62 H158 M144 82 H164" {...line(1.8)} />
    </Picture>
  ),
  telewizyjny: ({ label }) => (
    <Picture label={label}>
      <path d="M28 40 H212 V126 H28 Z" {...ink(2.5)} />
      <path d="M44 54 H196 V112 H44 Z" {...line(1.8)} />
      <path d="M120 40 L96 16 M120 40 L146 16" {...line(2.2)} />
      <path d="M88 126 L72 154 M152 126 L168 154" {...line(2.2)} />
    </Picture>
  ),
  komputerowy: ({ label }) => (
    <Picture label={label}>
      <path d="M28 28 H168 V108 H28 Z" {...ink(2.4)} />
      <path d="M44 44 H152 V92 H44 Z" {...line(1.7)} />
      <path d="M78 108 L66 132 H140 L128 108" {...line(2)} />
      <path d="M48 132 H150" {...line(2.2)} />
      <ellipse cx="196" cy="140" rx="24" ry="14" {...ink(2)} />
      <path d="M184 140 H210" {...line(1.6)} />
    </Picture>
  ),
  bibliotekarz: ({ label }) => (
    <Picture label={label}>
      <Person cx={96} hair="short" />
      <path d="M158 78 H206 V136 H158 Z" {...ink(2.2)} />
      <path d="M158 98 H206 M158 116 H206" {...line(1.6)} />
    </Picture>
  ),
  nauczycielka: ({ label }) => (
    <Picture label={label}>
      <Person hair="buns" dress />
    </Picture>
  ),
  przedszkolaczek: ({ label }) => (
    <Picture label={label}>
      <Person cx={104} hair="short" />
      <path d="M156 90 H194 Q206 90 206 104 V136 Q176 152 150 136 Z" {...ink(2.2)} />
    </Picture>
  ),
  czarodziejka: ({ label }) => (
    <Picture label={label}>
      <Person hair="bob" dress hat="wizard" />
      <path d="M168 78 L204 42" {...line(2.2)} />
      <path d="M204 42 L194 52 L214 50 L198 58 L212 66 L194 60 Z" {...ink(2)} />
    </Picture>
  ),
  krolewna: ({ label }) => (
    <Picture label={label}>
      <Person hair="buns" dress hat="crown" />
    </Picture>
  ),
  rycerz: ({ label }) => (
    <Picture label={label}>
      <path d="M92 64 H148 L140 28 H100 Z" {...ink(2.4)} />
      <path d="M108 48 H132" {...line(1.8)} />
      <path d="M100 64 H140 V112 H100 Z" {...ink(2.3)} />
      <path d="M86 78 H156 V128 H86 Z" {...ink(2.3)} />
      <path d="M108 92 H134 V116 H108 Z" {...line(1.8)} />
      <path d="M104 128 V156 M136 128 V156" {...line(2.2)} />
    </Picture>
  ),
  zamek: ({ label }) => (
    <Picture label={label}>
      <path d="M28 78 H72 V156 H28 Z M92 40 H148 V156 H92 Z M168 78 H212 V156 H168 Z" {...ink(2.4)} />
      <path d="M28 78 V52 H44 V78 M56 78 V52 H72 V78 M168 78 V52 H184 V78 M196 78 V52 H212 V78" {...line(2)} />
      <path d="M108 156 V116 H132 V156" {...ink(2)} />
      <path d="M108 70 H132 V90 H108 Z" {...line(1.6)} />
    </Picture>
  ),
  skarbonka: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="118" cy="108" rx="64" ry="42" {...ink(2.5)} />
      <path d="M90 78 H150" {...line(2.2)} />
      <circle cx="100" cy="104" r="4" {...line(1.6)} />
      <circle cx="124" cy="104" r="4" {...line(1.6)} />
      <ellipse cx="150" cy="118" rx="12" ry="8" {...ink(1.8)} />
      <path d="M62 100 Q36 88 46 116" {...line(2)} />
      <path d="M86 146 V162 M150 146 V162" {...line(2)} />
    </Picture>
  ),
  skarpetka: ({ label }) => (
    <Picture label={label}>
      <path d="M92 24 H148 V112 L184 136 Q156 168 104 150 L78 120 V24 Z" {...ink(2.5)} />
      <path d="M92 56 H148 M92 72 H148" {...line(1.8)} />
    </Picture>
  ),
  pantofelek: ({ label }) => (
    <Picture label={label}>
      <path d="M28 112 Q70 64 132 96 L208 112 Q196 152 118 152 Q36 152 28 112 Z" {...ink(2.5)} />
      <path d="M132 96 Q158 68 176 98" {...line(2)} />
      <path d="M70 112 Q110 96 150 112" {...line(1.6)} />
    </Picture>
  ),
  pizamka: ({ label }) => (
    <Picture label={label}>
      <path d="M64 48 L120 78 L176 48 L192 96 V152 H48 V96 Z" {...ink(2.5)} />
      <path d="M92 78 V124 M148 78 V124" {...line(2)} />
      <path d="M48 152 H100 V168 H48 Z M140 152 H192 V168 H140 Z" {...ink(2)} />
      <path d="M108 100 H132" {...line(1.6)} />
    </Picture>
  ),
};
