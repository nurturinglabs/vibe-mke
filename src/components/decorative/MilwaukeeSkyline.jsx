import { C } from '../../constants/colors';

function MilwaukeeSkyline({ color = C.brick, opacity = 0.15, height = 220 }) {
  return (
    <svg viewBox="0 0 1200 200" style={{ width: "100%", height, position: "absolute", bottom: 0, left: 0, opacity }}
      preserveAspectRatio="xMidYMax slice" fill="none">
      {/* Water / Lake Michigan base */}
      <rect x="0" y="185" width="1200" height="15" fill={C.charcoal} />

      {/* === LEFT SIDE — Residential / Third Ward === */}
      <rect x="30" y="145" width="25" height="55" fill={color} />
      <rect x="62" y="130" width="20" height="70" fill={color} />
      <rect x="90" y="150" width="30" height="50" fill={color} />
      <rect x="128" y="125" width="22" height="75" fill={color} />
      <rect x="158" y="140" width="28" height="60" fill={color} />

      {/* === HOAN BRIDGE — iconic cable-stayed shape === */}
      {/* Road deck */}
      <rect x="200" y="158" width="180" height="4" fill={color} rx="1" />
      {/* Left tower */}
      <rect x="240" y="110" width="4" height="50" fill={color} />
      {/* Right tower */}
      <rect x="340" y="110" width="4" height="50" fill={color} />
      {/* Cables left tower */}
      <line x1="242" y1="112" x2="205" y2="158" stroke={color} strokeWidth="1" />
      <line x1="242" y1="112" x2="220" y2="158" stroke={color} strokeWidth="1" />
      <line x1="242" y1="112" x2="260" y2="158" stroke={color} strokeWidth="1" />
      <line x1="242" y1="112" x2="280" y2="158" stroke={color} strokeWidth="1" />
      {/* Cables right tower */}
      <line x1="342" y1="112" x2="300" y2="158" stroke={color} strokeWidth="1" />
      <line x1="342" y1="112" x2="320" y2="158" stroke={color} strokeWidth="1" />
      <line x1="342" y1="112" x2="360" y2="158" stroke={color} strokeWidth="1" />
      <line x1="342" y1="112" x2="375" y2="158" stroke={color} strokeWidth="1" />
      {/* Support pillars */}
      <rect x="238" y="158" width="8" height="28" fill={color} />
      <rect x="338" y="158" width="8" height="28" fill={color} />

      {/* === DOWNTOWN CLUSTER === */}
      {/* 100 East Building */}
      <rect x="420" y="85" width="30" height="115" fill={color} />
      <rect x="422" y="82" width="26" height="5" fill={color} rx="1" />

      {/* US Bank Center — tallest */}
      <rect x="460" y="35" width="35" height="165" fill={color} />
      <rect x="463" y="28" width="29" height="10" fill={color} rx="2" />
      {/* Antenna */}
      <rect x="477" y="10" width="2" height="20" fill={color} />

      {/* Northwestern Mutual Tower */}
      <rect x="505" y="45" width="32" height="155" fill={color} />
      <rect x="508" y="40" width="26" height="8" fill={color} rx="1" />

      {/* Mid-rise buildings */}
      <rect x="545" y="90" width="25" height="110" fill={color} />
      <rect x="578" y="75" width="28" height="125" fill={color} />
      <rect x="614" y="100" width="22" height="100" fill={color} />

      {/* === MILWAUKEE ART MUSEUM — The Calatrava Wings (Burke Brise Soleil) === */}
      {/* Main building body */}
      <rect x="670" y="150" width="120" height="35" fill={color} rx="2" />
      {/* Needle/mast */}
      <rect x="729" y="95" width="3" height="58" fill={color} />
      {/* Left wing — angled lines fanning out */}
      <line x1="730" y1="100" x2="650" y2="148" stroke={color} strokeWidth="2" />
      <line x1="730" y1="108" x2="655" y2="148" stroke={color} strokeWidth="1.5" />
      <line x1="730" y1="116" x2="660" y2="148" stroke={color} strokeWidth="1.5" />
      <line x1="730" y1="124" x2="665" y2="148" stroke={color} strokeWidth="1" />
      <line x1="730" y1="132" x2="672" y2="148" stroke={color} strokeWidth="1" />
      {/* Right wing */}
      <line x1="731" y1="100" x2="810" y2="148" stroke={color} strokeWidth="2" />
      <line x1="731" y1="108" x2="805" y2="148" stroke={color} strokeWidth="1.5" />
      <line x1="731" y1="116" x2="800" y2="148" stroke={color} strokeWidth="1.5" />
      <line x1="731" y1="124" x2="795" y2="148" stroke={color} strokeWidth="1" />
      <line x1="731" y1="132" x2="788" y2="148" stroke={color} strokeWidth="1" />

      {/* === RIGHT SIDE — More buildings === */}
      <rect x="830" y="110" width="28" height="90" fill={color} />
      <rect x="866" y="130" width="22" height="70" fill={color} />
      <rect x="896" y="120" width="30" height="80" fill={color} />
      <rect x="934" y="140" width="25" height="60" fill={color} />
      <rect x="968" y="135" width="20" height="65" fill={color} />

      {/* === FAR RIGHT — Industrial / Lakefront === */}
      <rect x="1010" y="150" width="35" height="50" fill={color} />
      <rect x="1010" y="145" width="8" height="8" fill={color} /> {/* chimney */}
      <rect x="1055" y="155" width="25" height="45" fill={color} />
      <rect x="1090" y="160" width="40" height="40" fill={color} />
      <rect x="1140" y="165" width="30" height="35" fill={color} />
    </svg>
  );
}

export default MilwaukeeSkyline;
