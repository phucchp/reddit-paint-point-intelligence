// Idea Lab

function IdeaCard({ idea }) {
  return (
    <div className="idea-card">
      <div className="idea-head">
        <div>
          <h3>{idea.title}</h3>
          <div className="idea-meta">
            <span>Type: <b>{idea.type}</b></span>
            <span>ICP: <b>{idea.icp}</b></span>
            <span>Pricing: <b>{idea.pricing}</b></span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button className="btn btn-sm"><I.bookmark size={12}/></button>
          <button className="btn btn-sm btn-primary"><I.doc size={12}/> Add to report</button>
        </div>
      </div>
      <div className="idea-problem">{idea.problem}</div>
      <div className="idea-section">
        <h4>MVP scope</h4>
        <div className="mvp-list">
          {idea.mvp.map((f, i) => (
            <span key={i}><I.check size={13}/> {f}</span>
          ))}
        </div>
      </div>
      <div className="idea-section">
        <h4>First 10 customers</h4>
        <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55 }}>{idea.first10}</div>
      </div>
    </div>
  );
}

function IdeaLab({ go, toast }) {
  const [tab, setTab] = useState('product');
  const [goal, setGoal] = useState('Micro-SaaS');
  const [generating, setGenerating] = useState(false);
  const [shown, setShown] = useState(true);

  const regen = () => {
    setGenerating(true);
    setShown(false);
    setTimeout(() => { setGenerating(false); setShown(true); toast('3 ideas generated'); }, 900);
  };

  return (
    <>
      <Topbar/>
      <div className="page">
        <div className="page-head">
          <div className="page-head-row">
            <div>
              <h1 className="page-title">Idea Lab</h1>
              <p className="page-sub">Transform Reddit pain into product ideas, MVP specs, pricing, and launch plans.</p>
            </div>
            <button className="btn"><I.bookmark size={13}/> Saved ideas (12)</button>
          </div>
        </div>

        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: 6 }}>Selected pain</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="reco-icon" style={{ width: 36, height: 36 }}><I.flame size={16}/></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>Etsy sellers manually update listing variants when materials run out</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                    <span className="sub-pill"><I.reddit size={10}/>r/EtsySellers</span> · 18 mentions · score <b className="mono" style={{ color: 'var(--brand)' }}>84</b>
                  </div>
                </div>
                <button className="btn btn-sm btn-ghost">Change pain <I.chevron size={11}/></button>
              </div>
            </div>
            <div style={{ width: 200 }}>
              <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: 6 }}>Goal</div>
              <select value={goal} onChange={(e) => setGoal(e.target.value)} className="input" style={{ width: '100%', cursor: 'pointer' }}>
                {['Micro-SaaS', 'Affiliate site', 'Agency service', 'Template / digital product', 'Chrome extension', 'Newsletter / report'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <button className="btn btn-brand btn-lg" onClick={regen} disabled={generating}>
              {generating ? <><I.loader size={14} style={{ animation: 'spin 1s linear infinite' }}/> Generating…</> : <><I.sparkles size={14}/> Generate ideas</>}
            </button>
          </div>
        </div>

        <div className="tabs">
          {[
            ['product', 'Product Ideas', I.bulb],
            ['affiliate', 'Affiliate Angles', I.dollar],
            ['content', 'Content Ideas', I.note],
            ['copy', 'Landing Page Copy', I.edit],
            ['outreach', 'Outreach Message', I.mail],
          ].map(([id, lbl, Ic]) => (
            <div key={id} className={`tab ${tab === id ? 'active' : ''}`} onClick={() => setTab(id)}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Ic size={13}/>{lbl}</span>
            </div>
          ))}
        </div>

        {tab === 'product' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, opacity: shown ? 1 : 0.4, transition: 'opacity 0.2s' }}>
            {GENERATED_IDEAS.map((i, idx) => <IdeaCard key={idx} idea={i}/>)}
          </div>
        )}

        {tab === 'affiliate' && (
          <div className="card" style={{ padding: 28 }}>
            <h3 style={{ margin: '0 0 12px', fontSize: 17 }}>Affiliate angles for Etsy seller workflow pain</h3>
            <p style={{ color: 'var(--muted)', marginTop: 0 }}>Existing products you can review, compare, or partner with to capture this pain.</p>
            {[
              { title: 'Printify vs Printful for Etsy 3D print sellers',  intent: 'High', searches: '~3.2k/mo', commission: '15–20%' },
              { title: 'Best inventory apps for Etsy multi-variant shops', intent: 'High', searches: '~1.8k/mo', commission: '$20–$50/lead' },
              { title: '“Etsy stuck variants” + tool comparison article',   intent: 'Med',  searches: '~640/mo',  commission: '20%' },
              { title: 'Roundup: Print queue / production tools for makers', intent: 'Med', searches: '~520/mo', commission: '15%' },
            ].map((a, i) => (
              <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{a.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>Search: {a.searches} · Commission: {a.commission}</div>
                </div>
                <span className="chip chip-green">{a.intent} intent</span>
                <button className="btn btn-sm">Draft article</button>
              </div>
            ))}
          </div>
        )}

        {tab === 'content' && (
          <div className="card" style={{ padding: 28 }}>
            <h3 style={{ margin: '0 0 16px', fontSize: 17 }}>Content angles directly from pain language</h3>
            {[
              { kind: 'Blog post',       title: 'The actual reason your Etsy variants are always out of sync (and what to do about it)' },
              { kind: 'Twitter thread',  title: '12 hours I spent updating Etsy filament variants — and the 3 tools I built to never do it again' },
              { kind: 'YouTube short',   title: '“If you sell 3D-printed Etsy products and run out of a color, do THIS first”' },
              { kind: 'Newsletter',      title: 'Inventory infrastructure for $3-$30 product makers, broken down' },
              { kind: 'Reddit comment',  title: 'Helpful response template for r/EtsySellers “anyone use a tool for…” threads' },
            ].map((c, i) => (
              <div key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="chip chip-purple" style={{ minWidth: 96, justifyContent: 'center' }}>{c.kind}</span>
                <div style={{ flex: 1, fontSize: 14 }}>{c.title}</div>
                <button className="btn btn-sm btn-ghost"><I.copy size={12}/></button>
                <button className="btn btn-sm">Draft</button>
              </div>
            ))}
          </div>
        )}

        {tab === 'copy' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 18 }}>
            <div className="card" style={{ padding: 28 }}>
              <div style={{ fontSize: 11, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 12 }}>Landing page copy · v1</div>
              <h1 style={{ fontSize: 38, letterSpacing: '-0.025em', lineHeight: 1.1, margin: '0 0 16px', fontWeight: 700 }}>{LANDING_COPY.headline}</h1>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.55, margin: '0 0 24px' }}>{LANDING_COPY.sub}</p>
              <ul className="feature-list">
                {LANDING_COPY.bullets.map((b, i) => <li key={i}><I.check size={14}/> {b}</li>)}
              </ul>
              <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                <button className="btn btn-brand btn-lg">{LANDING_COPY.cta}</button>
                <button className="btn btn-lg">Watch 60-sec demo</button>
              </div>
              <div style={{ marginTop: 28, padding: 14, background: 'var(--surface-2)', border: '1px dashed var(--border-2)', borderRadius: 10, fontSize: 12, color: 'var(--muted)' }}>
                <b style={{ color: 'var(--ink)' }}>Pain language used:</b> “update listings manually”, “colors I currently have”, “batch orders”, “current order list”.
              </div>
            </div>
            <div className="aside-card" style={{ height: 'fit-content' }}>
              <h4>Variations</h4>
              {[
                'Pain-first headline',
                'Outcome-first headline',
                'Quantified ROI headline',
                'Founder story angle',
              ].map((v, i) => (
                <div key={i} style={{ padding: '10px 0', borderBottom: '1px dashed var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13 }}>
                  <span>{v}</span>
                  <button className="btn btn-sm btn-ghost"><I.arrow size={12}/></button>
                </div>
              ))}
              <button className="btn btn-brand" style={{ width: '100%', justifyContent: 'center', marginTop: 14 }}>
                <I.sparkles size={13}/> Regenerate
              </button>
            </div>
          </div>
        )}

        {tab === 'outreach' && (
          <div className="card" style={{ padding: 28 }}>
            <div style={{ fontSize: 11, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 12 }}>Reddit-friendly reply template</div>
            <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 10, padding: 20, fontFamily: 'Geist Mono, monospace', fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)', whiteSpace: 'pre-wrap' }}>
{`Hey — this exact problem (variants drifting out of stock vs. real filament inventory) is something I've been studying for the last few weeks. From what I've seen:

1. Most people solve it with a Google Sheet that lists every active color and a weekly "what's running low" check.
2. A few use a separate inventory app and manually mirror it into their Etsy listings.
3. Almost nobody has a clean way to "hide unavailable variants" without editing each listing.

I've been building a small tool that imports your Etsy listings and lets you mark a color as out-of-stock once — and it auto-hides every affected variant. If that sounds useful, happy to share the early-access link in a DM.

(Built by a solo dev who also sells on Etsy, not a corporate thing.)`}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <button className="btn"><I.copy size={13}/> Copy</button>
              <button className="btn"><I.sparkles size={13}/> Soften tone</button>
              <button className="btn"><I.sparkles size={13}/> Shorter</button>
              <button className="btn btn-primary" style={{ marginLeft: 'auto' }}><I.bookmark size={13}/> Save to library</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Object.assign(window, { IdeaLab });
