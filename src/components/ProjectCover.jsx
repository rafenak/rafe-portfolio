import { useMemo } from 'react';

const W = 800;
const H = 600;

function seeded(seed) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const hash = (str) => [...str].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7);

function Layers({ fg, accent }) {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${150 + i * 34} ${118 + i * 64})`}>
          <rect
            width="430"
            height="112"
            rx="10"
            fill={i === 1 || i === 3 ? accent : 'none'}
            fillOpacity={i === 1 ? 0.9 : 0.25}
            stroke={fg}
            strokeOpacity="0.55"
          />
          {[0, 1, 2].map((d) => (
            <circle key={d} cx={26 + d * 18} cy="56" r="4" fill={fg} fillOpacity="0.7" />
          ))}
          <rect x="300" y="50" width="100" height="12" rx="6" fill={fg} fillOpacity="0.18" />
        </g>
      ))}
    </g>
  );
}

function Flow({ fg, accent }) {
  const ys = Array.from({ length: 11 }, (_, i) => 70 + i * 46);
  return (
    <g fill="none">
      {ys.map((y) => (
        <path key={y} d={`M0 ${y} C 260 ${y}, 300 300, 470 300`} stroke={fg} strokeOpacity="0.45" />
      ))}
      <rect x="440" y="250" width="100" height="100" rx="50" fill={accent} />
      {[230, 300, 370].map((y, i) => (
        <path
          key={y}
          d={`M540 300 C 640 300, 660 ${y}, 800 ${y}`}
          stroke={accent}
          strokeWidth={i === 1 ? 4 : 2}
        />
      ))}
    </g>
  );
}

function MapLines({ fg, accent, rand }) {
  const roads = Array.from({ length: 14 }, () => {
    const x1 = rand() * W;
    const y1 = rand() * H;
    const angle = rand() * Math.PI;
    const len = 300 + rand() * 500;
    return [x1, y1, x1 + Math.cos(angle) * len, y1 + Math.sin(angle) * len];
  });
  const pois = Array.from({ length: 16 }, () => [rand() * W, rand() * H]);
  return (
    <g>
      {roads.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={fg} strokeOpacity={i % 3 ? 0.3 : 0.6} strokeWidth={i % 3 ? 1.5 : 5} />
      ))}
      <path d="M0 300 H 330 M470 300 H 800 M400 0 V 230 M400 370 V 600" stroke={fg} strokeOpacity="0.8" strokeWidth="9" />
      <circle cx="400" cy="300" r="70" fill="none" stroke={accent} strokeWidth="12" />
      <circle cx="400" cy="300" r="30" fill={fg} fillOpacity="0.15" />
      {pois.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 4 ? 4 : 7} fill={i % 4 ? fg : accent} fillOpacity={i % 4 ? 0.6 : 1} />
      ))}
    </g>
  );
}

function Graph({ fg, accent, rand }) {
  const nodes = Array.from({ length: 30 }, () => [60 + rand() * (W - 120), 60 + rand() * (H - 120)]);
  const edges = [];
  nodes.forEach((a, i) => {
    nodes
      .map((b, j) => [j, Math.hypot(a[0] - b[0], a[1] - b[1])])
      .filter(([j]) => j !== i)
      .sort((x, y) => x[1] - y[1])
      .slice(0, 2)
      .forEach(([j]) => i < j && edges.push([i, j]));
  });
  return (
    <g>
      {edges.map(([i, j]) => (
        <line key={`${i}-${j}`} x1={nodes[i][0]} y1={nodes[i][1]} x2={nodes[j][0]} y2={nodes[j][1]} stroke={fg} strokeOpacity="0.3" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 7 === 0 ? 10 : 4} fill={i % 7 === 0 ? accent : fg} fillOpacity={i % 7 === 0 ? 1 : 0.75} />
      ))}
      <circle cx="400" cy="300" r="90" fill="none" stroke={accent} strokeOpacity="0.6" strokeDasharray="4 8" />
    </g>
  );
}

function Grid({ fg, accent, rand }) {
  const cells = [];
  for (let r = 0; r < 9; r += 1) {
    for (let c = 0; c < 14; c += 1) {
      const v = rand();
      cells.push({ x: 64 + c * 50, y: 76 + r * 52, flagged: v > 0.92, faint: v < 0.3 });
    }
  }
  return (
    <g>
      {cells.map(({ x, y, flagged, faint }) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="34"
          height="34"
          rx="4"
          fill={flagged ? accent : fg}
          fillOpacity={flagged ? 1 : faint ? 0.06 : 0.16}
        />
      ))}
    </g>
  );
}

function Pulse({ fg, accent }) {
  const line = (y, amp) =>
    `M0 ${y} H180 L210 ${y - amp * 0.3} L235 ${y} H300 L320 ${y + amp * 0.25} L345 ${y - amp} L370 ${y + amp * 0.6} L390 ${y} H520 L545 ${y - amp * 0.35} L575 ${y} H800`;
  return (
    <g fill="none" strokeLinejoin="round" strokeLinecap="round">
      <path d={line(170, 80)} stroke={fg} strokeOpacity="0.25" strokeWidth="2" />
      <path d={line(310, 170)} stroke={accent} strokeWidth="5" />
      <path d={line(450, 80)} stroke={fg} strokeOpacity="0.25" strokeWidth="2" />
    </g>
  );
}

const variants = { layers: Layers, flow: Flow, map: MapLines, graph: Graph, grid: Grid, pulse: Pulse };

export default function ProjectCover({ project, className = '' }) {
  const { variant, bg, fg, accent } = project.cover;
  const Art = variants[variant] ?? Graph;
  const art = useMemo(
    () => <Art fg={fg} accent={accent} rand={seeded(hash(project.slug))} />,
    [Art, fg, accent, project.slug]
  );
  const patternId = `dots-${project.slug}`;

  return (
    <svg
      className={`project-cover ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill={fg} fillOpacity="0.14" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={bg} />
      <rect width={W} height={H} fill={`url(#${patternId})`} />
      {art}
    </svg>
  );
}
