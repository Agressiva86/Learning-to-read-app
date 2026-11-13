import { ink, line } from "./draw";
import { Face, Person, Picture, type SceneCmp } from "./kit";

export const midScenes: Record<string, SceneCmp> = {
  banan: ({ label }) => (
    <Picture label={label}>
      <path d="M70 56 Q150 18 184 96 Q170 156 96 150 Q62 112 70 56 Z" {...ink(2.5)} />
      <path d="M92 70 Q140 52 162 100 Q150 140 108 136" {...line(1.8)} />
      <path d="M78 48 L92 28 M168 70 L188 52" {...line(2)} />
    </Picture>
  ),
  pomidor: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="108" r="52" {...ink(2.5)} />
      <path d="M96 58 Q120 36 148 60 Q120 48 96 58 Z" {...ink(2.2)} />
      <path d="M120 58 V40" {...line(2)} />
    </Picture>
  ),
  cytryna: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="100" rx="64" ry="46" {...ink(2.5)} />
      <path d="M64 100 H176" {...line(1.8)} />
      <path d="M120 54 V36 M108 48 L100 32 M132 48 L142 32" {...line(2)} />
    </Picture>
  ),
  arbuz: ({ label }) => (
    <Picture label={label}>
      <path d="M28 124 Q120 20 212 124 Z" {...ink(2.6)} />
      <path d="M48 124 Q120 48 192 124" {...line(2)} />
      <path d="M68 124 Q120 78 172 124" {...line(1.8)} />
      <ellipse cx="96" cy="104" rx="5" ry="8" {...ink(1.6)} />
      <ellipse cx="128" cy="90" rx="5" ry="8" {...ink(1.6)} />
      <ellipse cx="154" cy="108" rx="5" ry="8" {...ink(1.6)} />
    </Picture>
  ),
  truskawka: ({ label }) => (
    <Picture label={label}>
      <path d="M120 36 C 64 72, 60 124, 120 162 C 180 124, 176 72, 120 36 Z" {...ink(2.5)} />
      <path d="M92 58 Q120 28 150 60 Q120 42 92 58 Z" {...ink(2.2)} />
      <circle cx="100" cy="96" r="4" {...line(1.6)} />
      <circle cx="128" cy="88" r="4" {...line(1.6)} />
      <circle cx="116" cy="116" r="4" {...line(1.6)} />
      <circle cx="142" cy="112" r="4" {...line(1.6)} />
    </Picture>
  ),
  jagoda: ({ label }) => (
    <Picture label={label}>
      <circle cx="120" cy="108" r="44" {...ink(2.5)} />
      <path d="M104 66 Q120 40 140 68 Q120 56 104 66 Z" {...ink(2.1)} />
      <path d="M96 100 H144 M108 120 H136" {...line(1.6)} />
    </Picture>
  ),
  rower: ({ label }) => (
    <Picture label={label}>
      <circle cx="62" cy="124" r="34" {...ink(2.4)} />
      <circle cx="178" cy="124" r="34" {...ink(2.4)} />
      <path d="M62 124 L118 70 L178 124 L128 124 Z" {...line(2.4)} />
      <path d="M118 70 H152" {...line(2.3)} />
      <path d="M104 70 V90" {...line(2)} />
      <circle cx="118" cy="124" r="6" {...ink(1.8)} />
    </Picture>
  ),
  hulajnoga: ({ label }) => (
    <Picture label={label}>
      <path d="M36 132 H150" {...ink(2.4)} />
      <circle cx="70" cy="140" r="20" {...ink(2.3)} />
      <circle cx="168" cy="140" r="20" {...ink(2.3)} />
      <path d="M150 132 V48" {...line(2.6)} />
      <path d="M128 48 H176" {...line(2.6)} />
    </Picture>
  ),
  samolot: ({ label }) => (
    <Picture label={label}>
      <path d="M20 100 H150 L196 72 V128 L150 108 H20 Z" {...ink(2.5)} />
      <path d="M86 100 L58 48 H112 Z" {...ink(2.3)} />
      <path d="M96 108 L70 150 H118 Z" {...ink(2.2)} />
      <path d="M176 86 V114" {...line(1.8)} />
      <circle cx="48" cy="96" r="4" {...line(1.6)} />
    </Picture>
  ),
  helikopter: ({ label }) => (
    <Picture label={label}>
      <path d="M70 86 H176 Q196 86 196 104 V124 Q136 150 78 124 V104 Q70 86 86 86 Z" {...ink(2.4)} />
      <path d="M128 86 V40" {...line(2.4)} />
      <path d="M48 40 H214" {...line(2.6)} />
      <path d="M70 110 H36 M36 96 V126" {...line(2.2)} />
      <path d="M100 104 H150 V120 H100 Z" {...line(1.8)} />
      <path d="M110 150 L100 168 M156 146 L168 166" {...line(2)} />
    </Picture>
  ),
  strazak: ({ label }) => (
    <Picture label={label}>
      <Person hair="short" hat="fire" />
    </Picture>
  ),
  policjant: ({ label }) => (
    <Picture label={label}>
      <Person hair="short" hat="police" />
    </Picture>
  ),
  nauczyciel: ({ label }) => (
    <Picture label={label}>
      <Person cx={100} hair="short" />
      <path d="M158 78 H206 V132 H158 Z" {...ink(2.2)} />
      <path d="M166 92 H198 M166 106 H198" {...line(1.6)} />
    </Picture>
  ),
  apteka: ({ label }) => (
    <Picture label={label}>
      <path d="M40 78 L120 28 L200 78 V156 H40 Z" {...ink(2.4)} />
      <path d="M108 70 H132 V58 H148 V82 H132 V96 H108 V82 H92 V58 H108 Z" {...ink(2.2)} />
      <path d="M104 156 V118 H136 V156" {...ink(2)} />
    </Picture>
  ),
  szpital: ({ label }) => (
    <Picture label={label}>
      <path d="M40 56 H200 V160 H40 Z" {...ink(2.5)} />
      <path d="M104 24 H136 V44 H160 V68 H136 V92 H104 V68 H80 V44 H104 Z" {...ink(2.2)} />
      <path d="M64 100 H96 V124 H64 Z M144 100 H176 V124 H144 Z" {...line(1.8)} />
    </Picture>
  ),
  biblioteka: ({ label }) => (
    <Picture label={label}>
      <path d="M28 36 H212 V152 H28 Z" {...ink(2.4)} />
      <path d="M28 74 H212 M28 112 H212" {...line(2)} />
      <path d="M44 44 H62 V68 H44 Z M70 50 H92 V68 H70 Z M100 42 H118 V68 H100 Z M150 46 H176 V68 H150 Z" {...ink(1.8)} />
      <path d="M48 86 H80 V106 H48 Z M96 82 H130 V106 H96 Z" {...ink(1.8)} />
    </Picture>
  ),
  komputer: ({ label }) => (
    <Picture label={label}>
      <path d="M18 24 H142 V108 H18 Z" {...ink(2.4)} />
      <path d="M30 36 H130 V96 H30 Z" {...line(1.8)} />
      <path d="M66 108 L58 126 H102 L94 108" {...line(2.2)} />
      <path d="M42 126 H118" {...line(2.4)} />
      <path d="M28 140 H132 V158 H28 Z" {...ink(2)} />
      <path d="M38 146 H122 M38 152 H122" {...line(1.5)} />
      <path d="M158 28 H222 V162 H158 Z" {...ink(2.4)} />
      <path d="M170 42 H210 V62 H170 Z" {...line(1.7)} />
      <path d="M170 74 H210 M170 88 H210" {...line(1.6)} />
      <circle cx="190" cy="128" r="8" {...line(1.8)} />
    </Picture>
  ),
  telewizor: ({ label }) => (
    <Picture label={label}>
      <path d="M32 40 H208 V128 H32 Z" {...ink(2.5)} />
      <path d="M48 54 H192 V114 H48 Z" {...line(1.8)} />
      <path d="M64 70 L150 108" {...line(1.8)} />
      <path d="M92 128 L74 156 M148 128 L166 156" {...line(2.2)} />
    </Picture>
  ),
  lodowka: ({ label }) => (
    <Picture label={label}>
      <path d="M68 20 H172 V162 H68 Z" {...ink(2.5)} />
      <path d="M68 78 H172" {...line(2.2)} />
      <path d="M156 46 V64 M156 104 V124" {...line(2)} />
      <path d="M68 162 H172 V170 H68 Z" {...ink(2)} />
    </Picture>
  ),
  pralka: ({ label }) => (
    <Picture label={label}>
      <path d="M52 28 H188 V158 H52 Z" {...ink(2.5)} />
      <path d="M52 58 H188" {...line(2)} />
      <circle cx="72" cy="44" r="5" {...line(1.8)} />
      <circle cx="92" cy="44" r="5" {...line(1.8)} />
      <circle cx="120" cy="108" r="36" {...ink(2.2)} />
      <circle cx="120" cy="108" r="14" {...line(1.8)} />
    </Picture>
  ),
  zelazko: ({ label }) => (
    <Picture label={label}>
      <path d="M64 86 Q30 74 24 104 Q20 128 46 122" {...line(2)} />
      <path d="M42 116 L168 100 L214 126 L188 146 L42 146 Q24 146 24 132 Q24 116 42 116 Z" {...ink(2.4)} />
      <circle cx="70" cy="130" r="3.4" {...line(1.6)} />
      <circle cx="92" cy="128" r="3.4" {...line(1.6)} />
      <circle cx="114" cy="126" r="3.4" {...line(1.6)} />
      <circle cx="136" cy="123" r="3.4" {...line(1.6)} />
      <circle cx="158" cy="120" r="3.4" {...line(1.6)} />
      <path d="M58 114 L146 102 Q178 94 166 68 L152 58 Q112 44 80 58 Q52 72 58 114 Z" {...ink(2.4)} />
      <path d="M88 60 C 78 22, 148 8, 186 42 C 198 54, 182 74, 164 70 C 176 60, 174 46, 154 40 C 124 30, 102 42, 104 62 Z" {...ink(2.3)} />
      <circle cx="112" cy="86" r="12" {...line(1.8)} />
      <path d="M112 86 L122 76" {...line(1.6)} />
      <path d="M72 90 H96 V108 H72 Z" {...line(1.6)} />
    </Picture>
  ),
  okularnik: ({ label }) => (
    <Picture label={label}>
      <Person hair="short" />
      <circle cx="108" cy="48" r="12" {...line(2.2)} />
      <circle cx="136" cy="48" r="12" {...line(2.2)} />
      <path d="M96 48 H86 M148 48 H160" {...line(2)} />
    </Picture>
  ),
  parasol: ({ label }) => (
    <Picture label={label}>
      <path d="M28 100 Q120 16 212 100 Z" {...ink(2.6)} />
      <path d="M74 100 Q96 70 120 100 M120 100 Q144 70 166 100" {...line(1.8)} />
      <path d="M120 100 V156" {...line(2.4)} />
      <path d="M120 156 Q150 170 154 148" {...line(2.2)} />
    </Picture>
  ),
  kalendarz: ({ label }) => (
    <Picture label={label}>
      <path d="M48 36 H192 V160 H48 Z" {...ink(2.5)} />
      <path d="M48 68 H192" {...line(2.2)} />
      <path d="M76 24 V48 M164 24 V48" {...line(2.3)} />
      <path d="M68 88 H92 M108 88 H132 M148 88 H172 M68 112 H92 M108 112 H132 M148 112 H172 M68 136 H92 M108 136 H132" {...line(1.8)} />
    </Picture>
  ),
  dlugopis: ({ label }) => (
    <Picture label={label}>
      <path d="M156 24 L184 52 L96 156 L58 164 L78 128 Z" {...ink(2.5)} />
      <path d="M156 24 L184 52 M138 70 L166 98" {...line(1.8)} />
      <path d="M78 128 L96 156" {...line(1.8)} />
    </Picture>
  ),
  kredka: ({ label }) => (
    <Picture label={label}>
      <path d="M86 156 L108 36 H132 L154 156 Z" {...ink(2.5)} />
      <path d="M108 36 L120 16 L132 36" {...ink(2.2)} />
      <path d="M96 120 H144 M100 138 H140" {...line(1.6)} />
    </Picture>
  ),
  nozyczki: ({ label }) => (
    <Picture label={label}>
      <path d="M108 78 Q164 36 214 30 L220 48 L118 98 Z" {...ink(2.4)} />
      <path d="M108 102 Q164 146 214 150 L220 132 L118 82 Z" {...ink(2.4)} />
      <path d="M124 86 Q168 52 204 46 M124 94 Q168 128 204 134" {...line(1.5)} />
      <path d="M70 58 L104 74 L110 92 L74 74 Z" {...ink(2.2)} />
      <path d="M70 122 L104 106 L110 88 L74 106 Z" {...ink(2.2)} />
      <circle cx="44" cy="48" r="26" {...ink(2.3)} />
      <circle cx="44" cy="48" r="13" {...line(1.8)} />
      <circle cx="44" cy="132" r="26" {...ink(2.3)} />
      <circle cx="44" cy="132" r="13" {...line(1.8)} />
      <circle cx="114" cy="90" r="9" {...ink(2.2)} />
      <circle cx="114" cy="90" r="3" {...line(1.6)} />
    </Picture>
  ),
  piornik: ({ label }) => (
    <Picture label={label}>
      <path d="M28 72 H212 V124 Q120 152 28 124 Z" {...ink(2.5)} />
      <path d="M28 96 H212" {...line(2)} />
      <path d="M168 72 V48 H196 V72" {...line(2)} />
    </Picture>
  ),
  plecak: ({ label }) => (
    <Picture label={label}>
      <path d="M64 64 H176 Q194 64 194 82 V136 Q120 164 46 136 V82 Q46 64 64 64 Z" {...ink(2.5)} />
      <path d="M88 64 V40 H152 V64" {...line(2.3)} />
      <path d="M78 100 H162" {...line(2)} />
      <path d="M100 100 V136" {...line(1.8)} />
    </Picture>
  ),
  piaskownica: ({ label }) => (
    <Picture label={label}>
      <path d="M28 96 H212 L188 152 H52 Z" {...ink(2.5)} />
      <path d="M52 96 V64 H96" {...line(2.2)} />
      <path d="M70 96 V78" {...line(2)} />
      <circle cx="150" cy="122" r="10" {...line(1.8)} />
      <path d="M140 152 V168" {...line(2)} />
    </Picture>
  ),
  zjezdzalnia: ({ label }) => (
    <Picture label={label}>
      <path d="M40 36 H100 V156" {...line(2.6)} />
      <path d="M40 36 H100 L72 64 Z" {...ink(2.2)} />
      <path d="M100 56 C 150 56, 190 96, 196 140 Q160 156 150 140" {...line(2.6)} />
      <path d="M48 156 H108" {...line(2)} />
    </Picture>
  ),
  karuzela: ({ label }) => (
    <Picture label={label}>
      <path d="M120 156 V52" {...line(2.4)} />
      <path d="M36 84 Q120 20 204 84 Z" {...ink(2.5)} />
      <path d="M70 84 V128 M120 64 V128 M170 84 V128" {...line(2)} />
      <circle cx="70" cy="136" r="10" {...ink(1.8)} />
      <circle cx="170" cy="136" r="10" {...ink(1.8)} />
      <ellipse cx="120" cy="156" rx="28" ry="8" {...ink(2)} />
    </Picture>
  ),
  hustawka: ({ label }) => (
    <Picture label={label}>
      <path d="M36 36 H204" {...line(2.6)} />
      <path d="M48 36 V156 M192 36 V156" {...line(2.2)} />
      <path d="M78 36 L98 118 M162 36 L142 118" {...line(2.2)} />
      <path d="M84 118 H156" {...ink(2.3)} />
      <circle cx="120" cy="96" r="14" {...ink(2)} />
      <Face cx={120} cy={96} s={0.6} />
    </Picture>
  ),
  biedronka: ({ label }) => (
    <Picture label={label}>
      <path d="M120 48 C 70 48, 52 100, 64 136 C 90 160, 150 160, 176 136 C 188 100, 170 48, 120 48 Z" {...ink(2.5)} />
      <path d="M120 56 V148" {...line(2)} />
      <circle cx="96" cy="96" r="8" {...line(1.8)} />
      <circle cx="146" cy="108" r="8" {...line(1.8)} />
      <circle cx="108" cy="124" r="6" {...line(1.6)} />
      <circle cx="120" cy="40" r="14" {...ink(2.2)} />
      <circle cx="116" cy="38" r="2" {...line(1.4)} />
      <circle cx="126" cy="38" r="2" {...line(1.4)} />
    </Picture>
  ),
  motyl: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="74" cy="84" rx="40" ry="30" {...ink(2.3)} />
      <ellipse cx="166" cy="84" rx="40" ry="30" {...ink(2.3)} />
      <ellipse cx="86" cy="124" rx="26" ry="18" {...ink(2.2)} />
      <ellipse cx="154" cy="124" rx="26" ry="18" {...ink(2.2)} />
      <path d="M120 58 V146" {...line(2.6)} />
      <circle cx="120" cy="52" r="12" {...ink(2.1)} />
      <path d="M112 40 Q104 24 116 30 M128 40 Q138 24 126 30" {...line(1.6)} />
    </Picture>
  ),
  slimak: ({ label }) => (
    <Picture label={label}>
      <path d="M36 136 Q90 136 112 118" {...line(2.4)} />
      <circle cx="142" cy="96" r="40" {...ink(2.4)} />
      <path d="M142 56 C 160 70, 168 110, 142 128 C 128 110, 128 78, 142 56" {...line(1.8)} />
      <circle cx="96" cy="118" r="14" {...ink(2.2)} />
      <circle cx="92" cy="116" r="2" {...line(1.4)} />
      <path d="M86 108 Q76 86 90 74" {...line(2)} />
      <circle cx="88" cy="70" r="4" {...line(1.6)} />
    </Picture>
  ),
  wiewiorka: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="108" cy="120" rx="40" ry="30" {...ink(2.4)} />
      <circle cx="146" cy="78" r="24" {...ink(2.3)} />
      <Face cx={146} cy={78} s={0.75} />
      <path d="M128 58 L142 30 L156 60" {...ink(2)} />
      <path d="M72 108 Q28 70 46 128 Q70 118 78 132" {...ink(2.3)} />
      <path d="M90 146 V164 M130 148 V166" {...line(2)} />
    </Picture>
  ),
  jez: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="120" cy="112" rx="52" ry="38" {...ink(2.5)} />
      <path d="M78 96 L64 62 M98 80 L92 46 M122 74 L124 40 M148 80 L156 48 M168 98 L190 66" {...line(2.2)} />
      <Face cx={120} cy={112} />
      <ellipse cx="120" cy="128" rx="10" ry="6" {...ink(1.8)} />
    </Picture>
  ),
  bocian: ({ label }) => (
    <Picture label={label}>
      <ellipse cx="104" cy="100" rx="40" ry="26" {...ink(2.4)} />
      <circle cx="150" cy="74" r="18" {...ink(2.2)} />
      <circle cx="156" cy="70" r="2.4" {...line(1.5)} />
      <path d="M166 78 L214 70 L166 92 Z" {...ink(2)} />
      <path d="M92 124 L84 166 M122 124 L132 166" {...line(2.4)} />
      <path d="M70 92 Q40 70 62 56" {...ink(2)} />
    </Picture>
  ),
  jaskolka: ({ label }) => (
    <Picture label={label}>
      <path d="M24 96 Q80 60 120 92 Q160 60 216 96 Q168 88 120 108 Q72 88 24 96 Z" {...ink(2.5)} />
      <path d="M104 108 L88 146 L120 118 L152 146 L136 108" {...ink(2.2)} />
      <circle cx="168" cy="88" r="3" {...line(1.5)} />
      <path d="M176 90 L196 86" {...line(1.8)} />
    </Picture>
  ),
};
