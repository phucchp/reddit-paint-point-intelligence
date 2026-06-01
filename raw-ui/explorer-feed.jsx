// Niche Explorer + Pain Feed

function NicheCard({ n, onOpen }) {
  return (
    <div className="niche-card" onClick={onOpen}>
      <div className="niche-head">
        <div style={{ flex: 1 }}>
          <h3>{n.name}</h3>
          <div className="subs">
            {n.subreddits.map(s => <span key={s} className="sub-pill"><I.reddit size={11}/>{s}</span>)}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <ScoreRing score={n.score} size={56}/>
          <span style={{ fontSize: 10.5, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Opportunity</span>
        </div>
      </div>
      <div className="stats">
        <div className="stat"><div className="lbl">Pain volume</div><div className="val">{n.painVol}</div></div>
        <div className="stat"><div className="lbl">Buyer intent</div><div className="val">{n.intent}</div></div>
        <div className="stat"><div className="lbl">Tool gap</div><div className="val">{n.toolGap}</div></div>
        <div className="stat"><div className="lbl">Competition</div><div className="val">{n.competition}</div></div>
      </div>
      <div className="foot">
        <div className="monetize">Best as <b>{n.monetization}</b></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: 12 }}>
          <span><I.users size={12}/> {n.members}</span>
          <span className="spike"><I.arrowUp size={11}/>{n.spike}</span>
          <I.arrow size={14} style={{ color: 'var(--ink-2)' }}/>
        </div>
      </div>
    </div>
  );
}

function NicheExplorer({ go, openFeedWithNiche }) {
  const allChips = ['SaaS', 'Ecommerce', 'Creator Economy', 'Freelancers', 'Local Business', 'Agencies', 'Marketplaces', 'High buyer intent', 'Low competition'];
  const [active, setActive] = useState(new Set(['SaaS', 'Ecommerce']));
  const toggle = (c) => {
    const s = new Set(active);
    s.has(c) ? s.delete(c) : s.add(c);
    setActive(s);
  };
  return (
    <>
      <Topbar placeholder="Search niche, subreddit, or market…"/>
      <div className="page">
        <div className="page-head">
          <div className="page-head-row">
            <div>
              <h1 className="page-title">Niche Explorer</h1>
              <p className="page-sub">Find markets with repeated pain, buying intent, and reachable communities.</p>
            </div>
            <button className="btn btn-primary"><I.plus size={13}/> Track new niche</button>
          </div>
        </div>

        <div className="card" style={{ padding: 18, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <I.search size={15} style={{ color: 'var(--muted)' }}/>
            <input className="input" placeholder="Search niche, subreddit, or market…" style={{ flex: 1, border: 'none', height: 32, padding: 0, fontSize: 14 }} defaultValue=""/>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {allChips.map(c => (
              <span key={c} className={`chip ${active.has(c) ? 'chip-active' : 'chip-outline'}`} style={{ cursor: 'pointer' }} onClick={() => toggle(c)}>
                {active.has(c) && <I.check size={11}/>}{c}
              </span>
            ))}
            <button className="chip chip-outline" style={{ marginLeft: 'auto' }}><I.filter size={11}/> More filters</button>
          </div>
        </div>

        <div className="niche-grid">
          {NICHES.map(n => <NicheCard key={n.id} n={n} onOpen={() => openFeedWithNiche(n.name)}/>)}
        </div>
      </div>
    </>
  );
}

// === Pain Feed ===
function PainCard({ p, openPain }) {
  return (
    <div className="pain-card" onClick={() => openPain(p.id)}>
      <div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
          <span className="chip chip-outline">{p.niche}</span>
          {p.subreddits && p.subreddits.slice(0, 2).map(s => <span key={s} className="sub-pill"><I.reddit size={10}/>{s}</span>)}
          <span className="spike" style={{ marginLeft: 'auto' }}><I.arrowUp size={11}/>{p.spike}</span>
        </div>
        <h3>{p.title}</h3>
        <p className="summary">{p.summary}</p>
        <div className="pain-meta">
          <span><b>{p.evidence}</b> mentions</span>
          <span>· <b>{p.threads}</b> threads</span>
          <span>· buyer intent <b>{p.intent}</b></span>
          <span>· best as <b>{p.monetization}</b></span>
        </div>
        <div className="tags">
          {p.tags.map(t => <span key={t} className="chip chip-brand">{t}</span>)}
        </div>
      </div>
      <div className="actions">
        <div className="score-block">
          <ScoreRing score={p.score} size={64}/>
          <span style={{ fontSize: 10.5, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Opportunity</span>
        </div>
        <button className="btn btn-sm" onClick={(e) => { e.stopPropagation(); openPain(p.id); }}>
          <I.target size={12}/> Analyze pain
        </button>
        <button className="btn btn-sm btn-primary" onClick={(e) => { e.stopPropagation(); openPain(p.id); }}>
          <I.bulb size={12}/> Generate idea
        </button>
      </div>
    </div>
  );
}

function FilterCheck({ label, count, defaultChecked }) {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <label className="filter-check">
      <input type="checkbox" checked={on} onChange={() => setOn(!on)}/>
      <span>{label}</span>
      <span className="count">{count}</span>
    </label>
  );
}

function PainFeed({ go, openPain, initialNiche }) {
  const [niche, setNiche] = useState(initialNiche || 'All niches');
  const [sub,   setSub]   = useState('All subreddits');
  const [time,  setTime]  = useState('Last 30 days');
  const [goal,  setGoal]  = useState('SaaS ideas');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return PAINS.filter(p => {
      if (niche !== 'All niches' && p.niche !== niche) return false;
      if (search && !(p.title + p.summary).toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [niche, search]);

  return (
    <>
      <Topbar placeholder="Search pains…"/>
      <div className="page">
        <div className="page-head">
          <div className="page-head-row">
            <div>
              <h1 className="page-title">Pain Point Feed</h1>
              <p className="page-sub">Browse real market frustrations detected from Reddit discussions, scored for opportunity.</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn"><I.bookmark size={13}/> Saved (8)</button>
              <button className="btn btn-primary"><I.doc size={13}/> Add to report</button>
            </div>
          </div>
        </div>

        <div className="feed-controls">
          {[
            ['Niche', niche, setNiche, ['All niches', ...new Set(PAINS.map(p => p.niche))]],
            ['Subreddit', sub, setSub, ['All subreddits', ...SUBREDDIT_CHOICES]],
            ['Time', time, setTime, ['Last 7 days', 'Last 30 days', 'Last 90 days', 'All time']],
            ['Goal', goal, setGoal, ['SaaS ideas', 'Affiliate', 'Content', 'Competitor tracking', 'Agency report']],
          ].map(([label, val, setVal, opts]) => (
            <div key={label} className="select-pill" style={{ position: 'relative' }}>
              <span className="lbl">{label}:</span>
              <select value={val} onChange={(e) => setVal(e.target.value)} style={{ border: 'none', background: 'transparent', fontWeight: 600, color: 'var(--ink)', outline: 'none', cursor: 'pointer', paddingRight: 18 }}>
                {opts.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, padding: '6px 10px', minWidth: 200 }}>
            <I.search size={13} style={{ color: 'var(--muted)' }}/>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search pains, keywords, evidence…" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 13 }}/>
          </div>
        </div>

        <div className="feed-layout">
          <aside className="feed-filters">
            <div className="filter-group">
              <h4>Pain score</h4>
              <FilterCheck label="80+ (highest)" count="14" defaultChecked/>
              <FilterCheck label="70 – 79"       count="42" defaultChecked/>
              <FilterCheck label="60 – 69"       count="58"/>
              <FilterCheck label="Under 60"      count="34"/>
            </div>
            <div className="filter-group">
              <h4>Buyer intent</h4>
              <FilterCheck label="Asks for a tool"               count="42" defaultChecked/>
              <FilterCheck label="Mentions expensive software"   count="28"/>
              <FilterCheck label="Mentions revenue loss"         count="31" defaultChecked/>
            </div>
            <div className="filter-group">
              <h4>Pain type</h4>
              <FilterCheck label="Manual workflow"        count="64" defaultChecked/>
              <FilterCheck label="Time waste"             count="38"/>
              <FilterCheck label="Integration pain"       count="22"/>
              <FilterCheck label="Competitor complaint"   count="29"/>
              <FilterCheck label="Revenue loss"           count="18"/>
            </div>
            <div className="filter-group">
              <h4>Saved searches</h4>
              <div style={{ fontSize: 12, color: 'var(--ink-2)', padding: '6px 0' }}>· Etsy production workflow</div>
              <div style={{ fontSize: 12, color: 'var(--ink-2)', padding: '6px 0' }}>· HubSpot alternatives</div>
              <div style={{ fontSize: 12, color: 'var(--ink-2)', padding: '6px 0' }}>· AI support analytics</div>
            </div>
          </aside>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                <b style={{ color: 'var(--ink)' }}>{filtered.length}</b> pain points · sorted by opportunity score
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <span className="chip chip-active">Opportunity ↓</span>
                <span className="chip chip-outline">Recent</span>
                <span className="chip chip-outline">Spike</span>
              </div>
            </div>
            {filtered.map(p => <PainCard key={p.id} p={p} openPain={openPain}/>)}
            {filtered.length === 0 && (
              <div className="card empty">No pains match these filters. Try widening the niche or removing the search query.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { NicheExplorer, PainFeed });
