// Shared components for PainRadar
// Icons, layout, charts, badges

const { useState, useEffect, useRef, useMemo } = React;

// === Icons (stroke-based, 18px default) ===
const Icon = ({ children, size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
    {children}
  </svg>
);

const I = {
  radar:    (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><path d="M12 3v3M21 12h-3"/></Icon>,
  dashboard:(p) => <Icon {...p}><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></Icon>,
  compass:  (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/></Icon>,
  flame:    (p) => <Icon {...p}><path d="M12 3c0 4 4 5 4 9a4 4 0 11-8 0c0-2 1-3 1-3s-1-2 0-4c2 1 3 0 3-2z"/></Icon>,
  bulb:     (p) => <Icon {...p}><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c1 1 1.5 2 1.5 3.5h5c0-1.5.5-2.5 1.5-3.5A6 6 0 0012 3z"/></Icon>,
  swords:   (p) => <Icon {...p}><path d="M14 5l5 5-9 9-5-5 9-9zM3 21l3-3M19 19l-3-3"/></Icon>,
  doc:      (p) => <Icon {...p}><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></Icon>,
  bell:     (p) => <Icon {...p}><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0"/></Icon>,
  settings: (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></Icon>,
  search:   (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></Icon>,
  arrow:    (p) => <Icon {...p}><path d="M5 12h14M13 5l7 7-7 7"/></Icon>,
  arrowUp:  (p) => <Icon {...p}><path d="M7 17L17 7M7 7h10v10"/></Icon>,
  arrowDown:(p) => <Icon {...p}><path d="M17 7L7 17M17 17H7V7"/></Icon>,
  check:    (p) => <Icon {...p}><path d="M5 12l5 5L20 7"/></Icon>,
  plus:     (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  x:        (p) => <Icon {...p}><path d="M18 6L6 18M6 6l12 12"/></Icon>,
  chevron:  (p) => <Icon {...p}><path d="M9 6l6 6-6 6"/></Icon>,
  caret:    (p) => <Icon {...p}><path d="M6 9l6 6 6-6"/></Icon>,
  filter:   (p) => <Icon {...p}><path d="M3 4h18l-7 9v7l-4-2v-5L3 4z"/></Icon>,
  sparkles: (p) => <Icon {...p}><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zM19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/></Icon>,
  external: (p) => <Icon {...p}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></Icon>,
  bookmark: (p) => <Icon {...p}><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/></Icon>,
  trend:    (p) => <Icon {...p}><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></Icon>,
  users:    (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8"/></Icon>,
  target:   (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></Icon>,
  zap:      (p) => <Icon {...p}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></Icon>,
  brain:    (p) => <Icon {...p}><path d="M12 5a3 3 0 00-3 3v8a3 3 0 003 3 3 3 0 003-3V8a3 3 0 00-3-3zM9 8a3 3 0 11-3 3M15 8a3 3 0 113 3M6 14a3 3 0 100 4M18 14a3 3 0 100 4"/></Icon>,
  pdf:      (p) => <Icon {...p}><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z"/><path d="M14 3v6h6M9 13h6M9 17h6"/></Icon>,
  share:    (p) => <Icon {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></Icon>,
  copy:     (p) => <Icon {...p}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></Icon>,
  notion:   (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v10M8 7l8 10V7"/></Icon>,
  mail:     (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></Icon>,
  slack:    (p) => <Icon {...p}><rect x="3" y="10" width="6" height="4" rx="2"/><rect x="10" y="3" width="4" height="6" rx="2"/><rect x="15" y="10" width="6" height="4" rx="2"/><rect x="10" y="15" width="4" height="6" rx="2"/></Icon>,
  reddit:   (p) => <Icon {...p}><circle cx="12" cy="13" r="8"/><circle cx="9" cy="13" r="1" fill="currentColor"/><circle cx="15" cy="13" r="1" fill="currentColor"/><path d="M9 16c1 1 2 1.5 3 1.5s2-.5 3-1.5M20 9a2 2 0 11-3 1.7M4 9a2 2 0 113 1.7M14 4l-2 5"/><circle cx="15" cy="3.5" r="1.2"/></Icon>,
  dollar:   (p) => <Icon {...p}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></Icon>,
  clock:    (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></Icon>,
  layers:   (p) => <Icon {...p}><path d="M12 2l10 5-10 5L2 7l10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/></Icon>,
  trash:    (p) => <Icon {...p}><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M5 6l1 14a2 2 0 002 2h8a2 2 0 002-2l1-14"/></Icon>,
  edit:     (p) => <Icon {...p}><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.4 2.6a2 2 0 112.8 2.8L12 14.6 8 16l1.4-4 9-9z"/></Icon>,
  inbox:    (p) => <Icon {...p}><path d="M22 12h-6l-2 3h-4l-2-3H2M5 5l-3 7v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3-7H5z"/></Icon>,
  loader:   (p) => <Icon {...p}><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></Icon>,
  spreadsheet:(p)=> <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></Icon>,
  note:     (p) => <Icon {...p}><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z"/><path d="M14 3v6h6"/></Icon>,
  store:    (p) => <Icon {...p}><path d="M3 9l1.5-5h15L21 9M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9M3 9h18"/></Icon>,
  cart:     (p) => <Icon {...p}><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></Icon>,
  briefcase:(p) => <Icon {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></Icon>,
  home:     (p) => <Icon {...p}><path d="M3 12l9-9 9 9v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z"/></Icon>,
  globe:    (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></Icon>,
  shield:   (p) => <Icon {...p}><path d="M12 2l8 4v6c0 5-4 9-8 10-4-1-8-5-8-10V6l8-4z"/></Icon>,
  list:     (p) => <Icon {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></Icon>,
  chart:    (p) => <Icon {...p}><path d="M3 3v18h18M7 14l4-4 4 4 5-6"/></Icon>,
  database: (p) => <Icon {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0018 0V5M3 12a9 3 0 0018 0"/></Icon>,
  star:     (p) => <Icon {...p}><path d="M12 2l3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1 3-7z"/></Icon>,
  arrowLeft:(p) => <Icon {...p}><path d="M19 12H5M12 19l-7-7 7-7"/></Icon>,
  hash:     (p) => <Icon {...p}><path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/></Icon>,
};

// === Sidebar ===
function Sidebar({ current, go }) {
  const items = [
    ['dashboard',  'Dashboard',           I.dashboard],
    ['explorer',   'Niche Explorer',      I.compass,    null],
    ['feed',       'Pain Feed',           I.flame,      '128'],
    ['ideas',      'Idea Lab',            I.bulb,       null],
    ['competitor', 'Competitor Miner',    I.swords,     null],
    ['reports',    'Reports',             I.doc,        null],
    ['alerts',     'Alerts',              I.bell,       '4'],
  ];
  return (
    <aside className="sidebar">
      <div className="brand-mark">
        <div className="brand-logo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="12" r="5"/>
            <circle cx="12" cy="12" r="1.5" fill="white"/>
          </svg>
        </div>
        <div>
          <div className="brand-name">PainRadar</div>
          <div className="brand-tag">Pain → Pipeline</div>
        </div>
      </div>

      <div className="side-group">
        <div className="side-group-label">Workspace</div>
        {items.map(([id, label, Ic, badge]) => (
          <button key={id} className={`side-item ${current === id ? 'active' : ''}`} onClick={() => go(id)}>
            <Ic className="side-icon" />
            <span>{label}</span>
            {badge && <span className="side-badge">{badge}</span>}
          </button>
        ))}
      </div>

      <div className="side-group">
        <div className="side-group-label">Account</div>
        <button className={`side-item ${current === 'pricing' ? 'active' : ''}`} onClick={() => go('pricing')}>
          <I.dollar className="side-icon" />
          <span>Plans &amp; billing</span>
        </button>
        <button className="side-item" onClick={() => go('landing')}>
          <I.home className="side-icon" />
          <span>Marketing site</span>
        </button>
        <button className="side-item">
          <I.settings className="side-icon" />
          <span>Settings</span>
        </button>
      </div>

      <div className="side-foot">
        <div className="side-upgrade">
          <div className="side-upgrade-title">Pro trial — 8 days left</div>
          <div className="side-upgrade-text">Unlimited evidence, alerts, and exports.</div>
          <button className="side-upgrade-btn" onClick={() => go('pricing')}>Upgrade now</button>
        </div>
        <div className="side-user">
          <div className="side-user-avatar">JL</div>
          <div>
            <div className="side-user-name">June Lin</div>
            <div className="side-user-plan">Pro · Trial</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

// === Topbar ===
function Topbar({ placeholder = 'Search pains, niches, subreddits…', right }) {
  return (
    <div className="topbar">
      <div className="topbar-search">
        <I.search size={15} style={{ color: 'var(--muted)' }} />
        <input placeholder={placeholder} />
        <span className="kbd">⌘ K</span>
      </div>
      <div className="topbar-actions">
        {right}
        <button className="icon-btn has-dot" title="Notifications"><I.bell size={17}/></button>
        <button className="icon-btn" title="Help"><I.zap size={17}/></button>
      </div>
    </div>
  );
}

// === Charts (SVG, hand-rolled) ===
function LineChart({ data, height = 220, color = 'var(--brand)', accent = 'var(--brand-cyan)' }) {
  const w = 720, h = height;
  const padL = 36, padR = 12, padT = 12, padB = 28;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const max = Math.max(...data.map(d => d.v));
  const min = 0;
  const xStep = innerW / (data.length - 1);
  const points = data.map((d, i) => [padL + i * xStep, padT + innerH - ((d.v - min) / (max - min)) * innerH]);
  const path = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const area = path + ` L${points[points.length-1][0]},${padT+innerH} L${points[0][0]},${padT+innerH} Z`;
  const yTicks = 4;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color}/>
          <stop offset="100%" stopColor={accent}/>
        </linearGradient>
      </defs>
      {Array.from({ length: yTicks + 1 }).map((_, i) => {
        const y = padT + (innerH / yTicks) * i;
        return <line key={i} x1={padL} y1={y} x2={w-padR} y2={y} stroke="#ECECF1" strokeDasharray="2 3"/>
      })}
      {Array.from({ length: yTicks + 1 }).map((_, i) => {
        const y = padT + (innerH / yTicks) * i;
        const val = Math.round(max - (max/yTicks)*i);
        return <text key={i} x={padL-6} y={y+3} textAnchor="end" fontSize="10" fill="#9A9DAC" fontFamily="Geist Mono, monospace">{val}</text>
      })}
      <path d={area} fill="url(#lineGrad)"/>
      <path d={path} stroke="url(#strokeGrad)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {points.map((p, i) => (
        <g key={i}>
          {i === points.length - 1 && <circle cx={p[0]} cy={p[1]} r="6" fill={color} fillOpacity="0.15"/>}
          {(i === points.length - 1) && <circle cx={p[0]} cy={p[1]} r="3.5" fill={color}/>}
          <text x={p[0]} y={h-10} textAnchor="middle" fontSize="10" fill="#9A9DAC" fontFamily="Geist Mono, monospace">{data[i].l}</text>
        </g>
      ))}
    </svg>
  );
}

function BarChart({ data, height = 220 }) {
  const w = 360, h = height;
  const padL = 130, padR = 36, padT = 8, padB = 8;
  const innerW = w - padL - padR;
  const max = Math.max(...data.map(d => d.v));
  const barH = 18;
  const gap = 14;
  const rowH = barH + gap;
  return (
    <svg viewBox={`0 0 ${w} ${data.length * rowH + padT + padB}`} width="100%" height="auto" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5B5BF7"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
      {data.map((d, i) => {
        const y = padT + i * rowH;
        const bw = (d.v / max) * innerW;
        return (
          <g key={i}>
            <text x={padL - 10} y={y + barH/2 + 4} textAnchor="end" fontSize="11.5" fill="#2D3142" fontWeight="500">{d.l}</text>
            <rect x={padL} y={y} width={innerW} height={barH} rx="5" fill="#F4F4F7"/>
            <rect x={padL} y={y} width={bw} height={barH} rx="5" fill={d.color || 'url(#barGrad)'}/>
            <text x={padL + bw + 6} y={y + barH/2 + 4} fontSize="11" fill="#2D3142" fontFamily="Geist Mono, monospace" fontWeight="600">{d.v}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Sparkline({ data, color = 'var(--brand)', w = 80, h = 28 }) {
  const max = Math.max(...data), min = Math.min(...data);
  const step = w / (data.length - 1);
  const pts = data.map((v, i) => [i * step, h - ((v - min) / (max - min || 1)) * h]);
  const path = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Score helpers
function scoreClass(s) {
  if (s >= 80) return 'high';
  if (s >= 70) return 'mid';
  return 'low';
}
function ScoreRing({ score, size = 64 }) {
  const cls = scoreClass(score);
  return (
    <div className={`score-ring ${cls}`} style={{ '--score': score, '--size': size + 'px' }}>
      <span>{score}</span>
    </div>
  );
}
function ScoreBar({ label, score, variant }) {
  const cls = variant || scoreClass(score);
  return (
    <div className="scorebar">
      {label && <span style={{ fontSize: 12, color: 'var(--muted)', minWidth: 110 }}>{label}</span>}
      <div className="scorebar-track">
        <div className={`scorebar-fill ${cls}`} style={{ width: score + '%' }}/>
      </div>
      <div className="scorebar-val">{score}</div>
    </div>
  );
}

// Toast hook
function useToast() {
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    if (msg) {
      const t = setTimeout(() => setMsg(null), 2400);
      return () => clearTimeout(t);
    }
  }, [msg]);
  const toast = (m) => setMsg(m);
  const node = msg ? (
    <div className="toast">
      <I.check size={16}/>
      <span>{msg}</span>
    </div>
  ) : null;
  return [toast, node];
}

// expose
Object.assign(window, { I, Sidebar, Topbar, LineChart, BarChart, Sparkline, ScoreRing, ScoreBar, scoreClass, useToast });
