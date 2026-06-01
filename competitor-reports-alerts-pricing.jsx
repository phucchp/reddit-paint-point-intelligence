// Competitor Complaint Miner + Report Builder + Alerts + Pricing

// === Competitor ===
function CompetitorMiner({ go, toast }) {
  const [comp, setComp]   = useState('HubSpot');
  const [market, setMarket] = useState('Small business CRM');
  const [analyzed, setAnalyzed] = useState(true);

  const analyze = () => {
    setAnalyzed(false);
    setTimeout(() => { setAnalyzed(true); toast(`Analyzed ${comp}: 5 complaint clusters`); }, 800);
  };

  return (
    <>
      <Topbar/>
      <div className="page">
        <div className="page-head">
          <h1 className="page-title">Competitor Complaint Miner</h1>
          <p className="page-sub">Find what users hate about competing tools and turn complaints into positioning.</p>
        </div>

        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 14, alignItems: 'flex-end' }}>
            <div className="form-field">
              <label>Competitor</label>
              <div style={{ position: 'relative' }}>
                <input className="input" value={comp} onChange={(e) => setComp(e.target.value)} placeholder="e.g. HubSpot"/>
                <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 4 }}>
                  <span className="chip" style={{ fontSize: 10.5, padding: '2px 7px' }}>{comp}</span>
                </span>
              </div>
            </div>
            <div className="form-field">
              <label>Market / category</label>
              <input className="input" value={market} onChange={(e) => setMarket(e.target.value)} placeholder="e.g. Small business CRM"/>
            </div>
            <button className="btn btn-brand btn-lg" onClick={analyze}>
              <I.sparkles size={14}/> Analyze complaints
            </button>
          </div>
          <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: 'var(--muted)', alignSelf: 'center', marginRight: 4 }}>Sources scanned:</span>
            {['r/SaaS', 'r/sales', 'r/CRM', 'r/smallbusiness', 'r/Entrepreneur', 'r/startups'].map(s => (
              <span key={s} className="sub-pill"><I.reddit size={10}/>{s}</span>
            ))}
            <span className="chip chip-outline" style={{ marginLeft: 'auto' }}>
              <I.clock size={11}/> Last analyzed 4 hours ago
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <h3 style={{ margin: 0, fontSize: 15 }}>Complaint clusters ({COMPETITOR_COMPLAINTS.length})</h3>
              <div style={{ display: 'flex', gap: 6 }}>
                <span className="chip chip-active">Frequency ↓</span>
                <span className="chip chip-outline">Severity</span>
                <span className="chip chip-outline">Recent</span>
              </div>
            </div>
            {COMPETITOR_COMPLAINTS.map(c => (
              <div key={c.id} className="complaint-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <h3>{c.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--muted)', margin: '6px 0 0', lineHeight: 1.5 }}>{c.summary}</p>
                  </div>
                  <span className={`signal-tag ${c.severity === 'high' ? 'signal-sev-high' : c.severity === 'med' ? 'signal-sev-med' : 'signal-sev-low'}`}>
                    {c.severity === 'high' ? '● High severity' : c.severity === 'med' ? '● Medium' : '● Low'}
                  </span>
                </div>
                <div className="complaint-meta">
                  <span><b>{c.frequency}</b> mentions</span>
                  <span>·</span>
                  <span>across <b>4</b> subreddits</span>
                  <span>·</span>
                  <span>last 90 days</span>
                </div>
                <div className="lang">{c.lang}</div>
                <div className="opp-line">
                  <b>Positioning opportunity →</b> {c.opportunity}
                </div>
              </div>
            ))}
          </div>

          <div className="detail-aside">
            <div className="aside-card" style={{ background: 'linear-gradient(135deg, rgba(91,91,247,0.06), rgba(6,182,212,0.04))' }}>
              <h4>Positioning angle</h4>
              <p style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.45, margin: '4px 0 0' }}>
                “Simple CRM cleanup and follow-up automation for founders who are not ready for HubSpot.”
              </p>
            </div>

            <div className="aside-card">
              <h4>Generated landing headline</h4>
              <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.2, color: 'var(--ink)' }}>
                Outgrew spreadsheets but not ready for HubSpot?
              </div>
              <button className="btn btn-sm btn-ghost" style={{ marginTop: 10 }}>
                <I.sparkles size={12}/> Regenerate
              </button>
            </div>

            <div className="aside-card">
              <h4>Suggested MVP scope</h4>
              <ul className="feature-list" style={{ paddingLeft: 0 }}>
                {['Contact dedupe (Gmail + CSV)', 'Follow-up reminders', 'Gmail / Sheets sync', 'Simple visual pipeline', 'Weekly lead digest email'].map((f, i) => (
                  <li key={i} style={{ padding: '6px 0' }}><I.check size={13}/> {f}</li>
                ))}
              </ul>
            </div>

            <div className="aside-card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button className="btn btn-brand" onClick={() => { toast('Saved to Idea Lab'); go('ideas'); }}>
                <I.bulb size={13}/> Send to Idea Lab
              </button>
              <button className="btn" onClick={() => { toast('Added to report'); go('reports'); }}>
                <I.doc size={13}/> Add to report
              </button>
              <button className="btn" onClick={() => { toast('Tracking HubSpot complaints'); go('alerts'); }}>
                <I.bell size={13}/> Track this competitor
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// === Reports ===
function ReportBuilder({ go, toast }) {
  const [sections, setSections] = useState(new Set(['exec', 'pains', 'scores', 'evid', 'ideas']));
  const toggle = (s) => {
    const n = new Set(sections);
    n.has(s) ? n.delete(s) : n.add(s);
    setSections(n);
  };
  return (
    <>
      <Topbar/>
      <div className="page">
        <div className="page-head">
          <div className="page-head-row">
            <div>
              <h1 className="page-title">Report Builder</h1>
              <p className="page-sub">Turn saved pain points into a client-ready market research report.</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn" onClick={() => toast('PDF export started')}><I.pdf size={13}/> Export PDF</button>
              <button className="btn" onClick={() => toast('Markdown copied')}><I.copy size={13}/> Export Markdown</button>
              <button className="btn" onClick={() => toast('Sent to Notion')}><I.notion size={13}/> Copy to Notion</button>
              <button className="btn btn-primary" onClick={() => toast('Share link copied')}><I.share size={13}/> Share link</button>
            </div>
          </div>
        </div>

        <div className="report-layout">
          {/* Setup panel */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ margin: '0 0 14px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)' }}>Setup</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="form-field">
                  <label>Report title</label>
                  <input className="input" defaultValue="Etsy Seller Pain Point Report — May 2026"/>
                </div>
                <div className="form-field">
                  <label>Niche</label>
                  <select className="input"><option>Etsy Sellers</option><option>Shopify Merchants</option><option>SaaS Founders</option></select>
                </div>
                <div className="form-field">
                  <label>Goal</label>
                  <select className="input"><option>Micro-SaaS opportunity</option><option>Affiliate angles</option><option>Agency client research</option></select>
                </div>
                <div className="form-field">
                  <label>Audience</label>
                  <select className="input"><option>Indie hacker / solo founder</option><option>Agency client</option><option>Internal team</option></select>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ margin: '0 0 12px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)' }}>Include sections</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {REPORT_SECTIONS.map(s => (
                  <label key={s.id} className="filter-check">
                    <input type="checkbox" checked={sections.has(s.id)} onChange={() => toggle(s.id)}/>
                    <span>{s.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ margin: '0 0 12px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)' }}>Style</h3>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8 }}>Cover theme</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['linear-gradient(135deg,#5B5BF7,#06B6D4)', 'linear-gradient(135deg,#0A0C18,#1C1E3A)', 'linear-gradient(135deg,#F59E0B,#EF4444)'].map((bg, i) => (
                  <div key={i} style={{ flex: 1, height: 36, borderRadius: 8, background: bg, cursor: 'pointer', border: i === 0 ? '2px solid var(--brand)' : '2px solid transparent' }}/>
                ))}
              </div>
            </div>
          </aside>

          <div className="report-preview">
            <div style={{ fontSize: 11, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>PainRadar · Niche research</div>
            <h1>Etsy Seller Pain Point Report</h1>
            <div className="report-meta">
              <span>May 2026</span>
              <span>·</span>
              <span>Prepared by June Lin</span>
              <span>·</span>
              <span>12 pains · 4 ideas · 38 evidence links</span>
            </div>

            <h2>Executive summary</h2>
            <p>
              The Etsy seller community shows clear, repeated, manual-work pain around inventory and listing variants. Three out of four
              of the strongest pains map cleanly to small Micro-SaaS opportunities with build complexity in the “1-2 week MVP” range.
              The strongest single signal is filament/material inventory drift for 3D-print sellers — a workflow currently held together
              by Google Sheets and manual listing edits, with no purpose-built tool.
            </p>
            <p>
              Buyer intent is strongest where revenue is directly threatened (Etsy ad attribution, design theft on Temu/SHEIN). For
              acquisition, Reddit (r/EtsySellers, r/3Dprinting) is the most cost-effective channel.
            </p>

            <h2>Top pain points</h2>
            {REPORT_PAINS.map((p, i) => (
              <div key={i} className="report-pain">
                <div>
                  <div className="title">{i+1}. {p.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 4 }}>Best fit: {p.monetize}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 180 }}>
                    <ScoreBar score={p.score} variant={p.score >= 80 ? 'high' : p.score >= 70 ? 'mid' : 'low'}/>
                  </div>
                  <ScoreRing score={p.score} size={48}/>
                </div>
              </div>
            ))}

            <h2>Best opportunities</h2>
            <p>
              The single highest-leverage opportunity is an Etsy variant + filament inventory sync tool. Build complexity is low (CSV
              import + table), pain frequency is high, and there is no incumbent solution being recommended in current threads.
            </p>

            <h2>Suggested MVPs</h2>
            <ul style={{ marginTop: 0, paddingLeft: 18, color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.65 }}>
              <li>Etsy Variant Sync Dashboard — CSV import, color toggles, listing-update suggestions</li>
              <li>3D Print Production Planner — order queue grouped by deadline, material checklist</li>
              <li>Design Theft Monitor — daily image-match scan against Temu/SHEIN catalogs</li>
              <li>Etsy Ads ROI Tracker — connect ad spend to actual conversion per variant</li>
            </ul>

            <h2>Pricing angles</h2>
            <p>
              Three-tier ladder priced for hobbyist → small-business sellers ($9 / $19 / $49) consistently lands well in the segment.
              Founders should expect 4–8% trial-to-paid in the first 90 days based on similar Etsy tooling launches.
            </p>

            <h2>First customer acquisition plan</h2>
            <ul style={{ marginTop: 0, paddingLeft: 18, color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.65 }}>
              <li>Offer a free Google Sheet inventory template — capture emails</li>
              <li>Public build log on Twitter / Indie Hackers</li>
              <li>Helpful answers in r/EtsySellers “anyone use a tool for…” threads</li>
              <li>1-on-1 interviews with 10 sellers for testimonials</li>
            </ul>

            <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border)', fontSize: 11, color: 'var(--muted-2)', textAlign: 'center' }}>
              Generated by PainRadar · painradar.io
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// === Alerts ===
function AlertsPage({ go, toast }) {
  const [alerts, setAlerts] = useState(ALERTS);
  const toggle = (id) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, active: !a.active } : a));
  };
  const [freq, setFreq] = useState('Weekly');
  const [delivery, setDelivery] = useState('Email');

  return (
    <>
      <Topbar/>
      <div className="page">
        <div className="page-head">
          <h1 className="page-title">Alerts &amp; Weekly Reports</h1>
          <p className="page-sub">Track new pain spikes, competitor complaints, and tool requests across Reddit.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Create alert */}
          <div className="card" style={{ padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div className="reco-icon" style={{ width: 30, height: 30 }}><I.plus size={15}/></div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Create a new alert</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="form-field">
                <label>Alert name</label>
                <input className="input" defaultValue="Shopify fraud pain spike"/>
              </div>
              <div className="alert-form-grid">
                <div className="form-field">
                  <label>Niche</label>
                  <select className="input"><option>Shopify Merchants</option><option>Etsy Sellers</option><option>SaaS Founders</option></select>
                </div>
                <div className="form-field">
                  <label>Subreddits</label>
                  <select className="input"><option>r/shopify + r/ecommerce</option><option>Custom…</option></select>
                </div>
              </div>
              <div className="form-field">
                <label>Keywords</label>
                <input className="input" defaultValue="fraud, chargeback, risky order, tax, shipping"/>
              </div>
              <div className="form-field">
                <label>Trigger when</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 14, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 10 }}>
                  {[
                    'New pain score above 75',
                    'Mention volume increases by 50%',
                    'Someone asks “is there a tool for…”',
                    'A competitor is mentioned negatively',
                  ].map((c, i) => (
                    <label key={i} className="filter-check" style={{ padding: '4px 0' }}>
                      <input type="checkbox" defaultChecked={i !== 3}/>
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-field">
                <label>Frequency</label>
                <div className="radio-row">
                  {['Realtime', 'Daily', 'Weekly'].map(f => (
                    <div key={f} className={`radio-pill ${freq === f ? 'active' : ''}`} onClick={() => setFreq(f)}>{f}</div>
                  ))}
                </div>
              </div>
              <div className="form-field">
                <label>Delivery</label>
                <div className="radio-row">
                  {[['Email', I.mail], ['Slack', I.slack], ['Dashboard only', I.dashboard]].map(([d, Ic]) => (
                    <div key={d} className={`radio-pill ${delivery === d ? 'active' : ''}`} onClick={() => setDelivery(d)}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Ic size={12}/>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                <button className="btn btn-brand" style={{ flex: 1, justifyContent: 'center' }} onClick={() => toast('Alert created')}>
                  <I.bell size={13}/> Create alert
                </button>
                <button className="btn">Save as template</button>
              </div>
            </div>
          </div>

          {/* Weekly report preview */}
          <div className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '20px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Preview</div>
                <h3 style={{ margin: '4px 0 0', fontSize: 17 }}>Your weekly Shopify merchant pain report</h3>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Delivered every Monday at 8:00 PT</div>
              </div>
              <I.mail size={20} style={{ color: 'var(--muted)' }}/>
            </div>
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['New pain clusters', 8, I.flame, 'rgba(239,68,68,0.08)', '#B91C1C'],
                ['High-intent tool requests', 3, I.target, 'rgba(91,91,247,0.08)', 'var(--brand)'],
                ['Competitor complaints', 2, I.swords, 'rgba(124,58,237,0.08)', 'var(--brand-2)'],
                ['Suggested content angles', 5, I.note, 'rgba(245,158,11,0.10)', '#B45309'],
                ['Generated SaaS ideas', 4, I.bulb, 'rgba(16,185,129,0.08)', '#047857'],
              ].map(([l, v, Ic, bg, c], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: bg, borderRadius: 10 }}>
                  <Ic size={16} style={{ color: c }}/>
                  <span style={{ fontSize: 13.5, fontWeight: 500, flex: 1 }}>{l}</span>
                  <span className="mono" style={{ fontSize: 16, fontWeight: 700, color: c }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '0 22px 22px', display: 'flex', gap: 8 }}>
              <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                <I.mail size={13}/> Send a test to me
              </button>
              <button className="btn">
                <I.external size={13}/> View last report
              </button>
            </div>
          </div>
        </div>

        {/* Existing alerts */}
        <div className="card" style={{ marginTop: 20 }}>
          <div className="card-head">
            <h3>Existing alerts ({alerts.length})</h3>
            <div style={{ display: 'flex', gap: 6 }}>
              <span className="chip chip-active">All</span>
              <span className="chip chip-outline">Active</span>
              <span className="chip chip-outline">Paused</span>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr><th>Alert</th><th>Niche</th><th>Frequency</th><th>Signals this week</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              {alerts.map(a => (
                <tr key={a.id}>
                  <td><b>{a.name}</b></td>
                  <td><span className="chip chip-outline">{a.niche}</span></td>
                  <td>{a.freq}</td>
                  <td className="mono"><b>{a.signals}</b></td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div className={`toggle ${a.active ? 'on' : ''}`} onClick={() => toggle(a.id)}/>
                      <span style={{ fontSize: 12, color: a.active ? 'var(--success)' : 'var(--muted)' }}>
                        {a.active ? 'Active' : 'Paused'}
                      </span>
                    </div>
                  </td>
                  <td><button className="btn btn-sm btn-ghost"><I.settings size={13}/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// === Pricing ===
function PricingPage({ go }) {
  const [billing, setBilling] = useState('monthly');
  return (
    <>
      <Topbar/>
      <div className="page" style={{ maxWidth: 1280 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="sec-eyebrow" style={{ marginBottom: 8 }}>Pricing</div>
          <h1 style={{ fontSize: 42, letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 12px' }}>Start with a free pain scan.</h1>
          <p style={{ fontSize: 17, color: 'var(--muted)', margin: 0 }}>Pick the plan that matches how often you ship.</p>
          <div style={{ display: 'inline-flex', gap: 0, padding: 4, background: 'var(--bg-alt)', borderRadius: 10, marginTop: 22, border: '1px solid var(--border)' }}>
            {[['monthly', 'Monthly'], ['yearly', 'Yearly — save 20%']].map(([id, lbl]) => (
              <button key={id} onClick={() => setBilling(id)}
                      style={{
                        padding: '7px 16px', fontSize: 13, fontWeight: 600,
                        borderRadius: 7,
                        background: billing === id ? 'white' : 'transparent',
                        color: billing === id ? 'var(--ink)' : 'var(--muted)',
                        boxShadow: billing === id ? 'var(--shadow-sm)' : 'none',
                      }}>{lbl}</button>
            ))}
          </div>
        </div>

        <div className="pricing-grid">
          {PRICING_TIERS.map((t, i) => {
            const price = billing === 'yearly' ? Math.round(parseInt(t.price) * 12 * 0.8) : t.price;
            const unit  = billing === 'yearly' ? '/year' : '/month';
            return (
              <div key={i} className={`tier-card ${t.featured ? 'featured' : ''}`}>
                <div className="tier-name">{t.name}</div>
                <div className="tier-price">
                  ${price === '0' ? '0' : (typeof price === 'number' ? price.toLocaleString() : price)}<span className="unit">{t.price === '0' ? '' : unit}</span>
                </div>
                <div className="tier-desc">{t.desc}</div>
                <button className={`btn tier-cta ${t.featured ? 'btn-brand btn-lg' : 'btn-primary btn-lg'}`} onClick={() => go('dashboard')}>
                  {t.cta}
                </button>
                <ul className="tier-features">
                  {t.features.map((f, j) => (
                    <li key={j}><I.check size={14}/> {f}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="cta-band" style={{ marginTop: 60 }}>
          <h2>Stop building from guesses. Start from real pain.</h2>
          <p>Generate your first scored pain report in about 60 seconds. Free, no credit card required.</p>
          <button className="btn btn-brand btn-lg" onClick={() => go('reports')}>
            <I.sparkles size={15}/> Generate my first report
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 60 }}>
          {[
            { q: 'Is the data from real Reddit threads?', a: 'Yes. Every pain point links back to the original public Reddit threads — usernames are anonymized in summaries by default.' },
            { q: 'Do you respect rate limits and Reddit\'s terms?', a: 'We use public Reddit data, respect rate limits, and never repost user-identifying content.' },
            { q: 'Can I cancel anytime?', a: 'Yes — monthly plans cancel any time. Yearly plans are pro-rated and refundable in the first 14 days.' },
            { q: 'What languages are supported?', a: 'English is fully supported. Spanish and Portuguese are in beta on Pro and Agency plans.' },
            { q: 'Do you offer agency white-labeling?', a: 'Yes. The Agency plan includes white-label PDF exports with your logo and custom cover themes.' },
            { q: 'Where does the AI score come from?', a: 'A composite of pain frequency, buyer intent, manual workload, money proximity, tool gap, and MVP ease — recomputed weekly.' },
          ].map((f, i) => (
            <div key={i}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8, letterSpacing: '-0.005em' }}>{f.q}</div>
              <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.55 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { CompetitorMiner, ReportBuilder, AlertsPage, PricingPage });
