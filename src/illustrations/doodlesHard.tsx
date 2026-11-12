import { ink, line } from "./draw";
import { Car, Pal, Picture, eyes, face, type SceneCmp } from "./kit";

export const hardScenes: Record<string, SceneCmp> = {
  pomarancza: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="104" r="50" {...ink(2.6)} />
      <path d="M120 54 V40 M104 62 L96 46 M136 62 L146 46" {...line(2.2)} />
      {face(120, 106, 0.9)}
    </Picture>
  ),
  truskawkowy: ({ label }) => (
    <Picture label={label}>
      <path d="M70 120 Q120 70 170 120 Q150 158 120 158 Q90 158 70 120 Z" {...ink(2.6)} />
      <path d="M120 70 C 90 50, 78 40, 96 28 C 108 48, 132 48, 144 28 C 162 40, 150 50, 120 70 Z" {...ink(2.4)} />
      {face(120, 118, 0.7)}
    </Picture>
  ),
  bananowiec: ({ label }) => (
    <Picture label={label}>
      <path d="M118 160 V70" {...line(2.8)} />
      <path d="M118 80 Q70 40 48 78 Q90 70 118 90" {...ink(2.4)} />
      <path d="M118 74 Q170 30 196 72 Q150 68 118 88" {...ink(2.4)} />
      <path d="M100 110 Q86 96 96 86 Q112 98 108 112 Z" {...ink(2.2)} />
      <path d="M132 118 Q150 100 142 88 Q124 104 128 120 Z" {...ink(2.2)} />
    </Picture>
  ),
  salaterka: ({ label }) => (
    <Picture label={label}>
      <path d="M40 90 H200 L176 140 Q120 160 64 140 Z" {...ink(2.6)} />
      <circle cx="96" cy="108" r="10" {...line(2)} />
      <circle cx="128" cy="116" r="12" {...line(2)} />
      <circle cx="156" cy="106" r="9" {...line(2)} />
    </Picture>
  ),
  pomidorowy: ({ label }) => (
    <Picture label={label}>
      <path d="M52 96 H188 L170 146 Q120 164 70 146 Z" {...ink(2.6)} />
      <circle cx="120" cy="70" r="28" {...ink(2.4)} />
      <path d="M108 46 Q120 32 134 48" {...line(2)} />
      {face(120, 72, 0.55)}
    </Picture>
  ),
  radiowoz: ({ label }) => (
    <Picture label={label}>
      <Car lamp />
      <path d="M104 62 H140 V78 H104 Z" {...ink(2.2)} />
    </Picture>
  ),
  helikopterowy: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="124" cy="100" rx="54" ry="30" {...ink(2.6)} />
      <path d="M124 70 V36 M48 36 H206" {...line(2.7)} />
      <path d="M70 100 H36 M36 86 V116" {...line(2.4)} />
      <path d="M150 128 L140 156 M110 128 L100 156" {...line(2.3)} />
      {face(124, 100, 0.7)}
    </Picture>
  ),
  rowerzysta: ({ label }) => (
    <Picture label={label}>
      <circle cx="64" cy="132" r="26" {...ink(2.4)} />
      <circle cx="176" cy="132" r="26" {...ink(2.4)} />
      <path d="M64 132 L110 86 L176 132" {...line(2.5)} />
      <circle cx="118" cy="62" r="16" {...ink(2.3)} />
      {face(118, 62, 0.5)}
      <path d="M118 78 L108 108" {...line(2.4)} />
    </Picture>
  ),
  samochodzik: ({ label }) => (
    <Picture label={label}>
      <Car />
      {face(118, 92, 0.55)}
    </Picture>
  ),
  kaloryfer: ({ label }) => (
    <Picture label={label}>
      <path d="M48 40 H192 V148 H48 Z" {...ink(2.6)} />
      <path d="M72 40 V148 M96 40 V148 M120 40 V148 M144 40 V148 M168 40 V148" {...line(2.2)} />
    </Picture>
  ),
  temperaturka: ({ label }) => (
    <Picture label={label}>
      <path d="M108 36 H132 V120" {...line(2.6)} />
      <circle cx="120" cy="138" r="22" {...ink(2.5)} />
      <path d="M120 120 V86" {...line(2.4)} />
    </Picture>
  ),
  termometr: ({ label }) => (
    <Picture label={label}>
      <path d="M100 28 H140 V118" {...line(2.8)} />
      <circle cx="120" cy="140" r="26" {...ink(2.6)} />
      <path d="M120 118 V70" {...line(3)} />
      <path d="M140 48 H156 M140 68 H152 M140 88 H156" {...line(2)} />
    </Picture>
  ),
  telewizyjny: ({ label }) => (
    <Picture label={label}>
      <path d="M36 44 H204 V128 H36 Z" {...ink(2.6)} />
      <path d="M70 128 L54 152 M170 128 L186 152" {...line(2.4)} />
      <path d="M120 44 L96 22 M120 44 L146 20" {...line(2.3)} />
      {face(120, 86, 0.85)}
    </Picture>
  ),
  komputerowy: ({ label }) => (
    <Picture label={label}>
      <path d="M40 36 H176 V112 H40 Z" {...ink(2.6)} />
      <path d="M90 112 L78 136 H150 L138 112" {...line(2.3)} />
      <ellipse cx="196" cy="140" rx="22" ry="12" {...ink(2.2)} />
      {face(108, 74, 0.7)}
    </Picture>
  ),
  bibliotekarz: ({ label }) => (
    <Picture label={label}>
      <Pal arm="down" cx={100} />
      <path d="M156 70 H198 V130 H156 Z" {...ink(2.3)} />
      <path d="M156 90 H198 M156 108 H198" {...line(1.8)} />
    </Picture>
  ),
  nauczycielka: ({ label }) => (
    <Picture label={label}>
      <Pal dress buns arm="wave" />
    </Picture>
  ),
  przedszkolaczek: ({ label }) => (
    <Picture label={label}>
      <Pal cx={108} hy={64} arm="down" />
      <path d="M150 96 H186 Q196 96 196 108 V136 Q168 150 148 136 Z" {...ink(2.3)} />
    </Picture>
  ),
  czarodziejka: ({ label }) => (
    <Picture label={label}>
      <Pal dress arm="wave" />
      <path d="M96 34 L120 4 L144 34 Z" {...ink(2.4)} />
      <path d="M168 70 L196 40" {...line(2.4)} />
      <path d="M196 40 L188 48 L204 46 L192 54 L202 60 L188 56 Z" {...ink(2)} />
    </Picture>
  ),
  krolewna: ({ label }) => (
    <Picture label={label}>
      <Pal dress buns arm="wave" />
      <path d="M96 30 L108 14 L120 32 L132 12 L144 30 Z" {...ink(2.3)} />
    </Picture>
  ),
  rycerz: ({ label }) => (
    <Picture label={label}>
      <path d="M96 70 H148 L140 36 H104 Z" {...ink(2.5)} />
      <path d="M110 70 V150 M134 70 V150" {...line(2.6)} />
      <path d="M78 96 H168 V140 H78 Z" {...ink(2.4)} />
      <path d="M108 108 H138 V128 H108 Z" {...line(2)} />
    </Picture>
  ),
  zamek: ({ label }) => (
    <Picture label={label}>
      <path d="M40 70 H80 V150 H40 Z M100 48 H140 V150 H100 Z M160 70 H200 V150 H160 Z" {...ink(2.5)} />
      <path d="M40 70 V48 H56 V70 M64 70 V48 H80 V70 M160 70 V48 H176 V70 M184 70 V48 H200 V70" {...line(2.2)} />
      <path d="M112 150 V112 H128 V150" {...ink(2.2)} />
    </Picture>
  ),
  skarbonka: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="108" rx="62" ry="40" {...ink(2.6)} />
      <path d="M96 78 H144" {...line(2.4)} />
      {eyes(112, 104, 14, 3.2)}
      <ellipse cx="168" cy="112" rx="12" ry="8" {...ink(2)} />
      <path d="M70 100 Q48 90 56 112" {...line(2.3)} />
    </Picture>
  ),
  skarpetka: ({ label }) => (
    <Picture label={label}>
      <path d="M96 28 H150 V110 L176 132 Q150 164 108 148 L88 120 V28 Z" {...ink(2.6)} />
      <path d="M96 56 H150" {...line(2.2)} />
    </Picture>
  ),
  pantofelek: ({ label }) => (
    <Picture label={label}>
      <path d="M36 110 Q70 70 130 96 L200 110 Q190 146 120 146 Q50 146 36 110 Z" {...ink(2.6)} />
      <path d="M130 96 Q150 70 168 96" {...line(2.3)} />
    </Picture>
  ),
  pizamka: ({ label }) => (
    <Picture label={label}>
      <path d="M70 48 L120 78 L170 48 L184 90 V150 H56 V90 Z" {...ink(2.6)} />
      <path d="M96 70 V120 M144 70 V120" {...line(2.2)} />
      {eyes(120, 108, 12, 3)}
    </Picture>
  ),
};