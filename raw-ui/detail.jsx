// Pain Detail page

function PainDetail({ painId, go, toast }) {
  const p = PAINS.find(x => x.id === painId) || PAINS[0];
  const evidence = PAIN_EVIDENCE[p.id] || PAIN_EVIDENCE['etsy-variants'];

  return (
    <>
      <Topbar/>
      <div className="page">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, color: 'var(--muted)', fontSize: 12.5 }}>
          <button className="btn btn-ghost btn-sm" onClick={() => go('feed')} style={{ padding: '0 6px' }}>
            <I.arrowLeft size={13}/> Back to feed
          </button>
          <span>·</span>
          <span>Pain Feed</span>
          <I.chevron size={11}/>
          <span>{p.niche}</span>
          <I.chevron size={11}/>
          <span style={{ color: 'var(--ink)' }}>Detail</span>
        </div>

        <div className="detail-layout">
          <div className="detail-main">
            <div className="detail-hero">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="chip chip-brand">{p.niche}</span>
                    {p.subreddits.map(s => <span key={s} className="sub-pill"><I.reddit size={11}/>{s}</span>)}
                  </div>
                  <h1>{p.title}</h1>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
                    {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '0 8px' }}>
                  <ScoreRing score={p.score} size={88}/>
                  <span style={{ fontSize: 10.5, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Opportunity / 100</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14, marginTop: 18, color: 'var(--muted)', fontSize: 12.5 }}>
                <span><b className="mono" style={{ color: 'var(--ink)' }}>{p.evidence}</b> mentions</span>
                <span>·</span>
                <span><b className="mono" style={{ color: 'var(--ink)' }}>{p.threads}</b> threads</span>
                <span>·</span>
                <span>frequency: <b style={{ color: 'var(--ink)' }}>{p.frequency}</b></span>
                <span>·</span>
                <span>buyer intent: <b style={{ color: 'var(--ink)' }}>{p.intent}</b></span>
                <span style={{ marginLeft: 'auto' }} className="spike"><I.arrowUp size={11}/>{p.spike} week-over-week</span>
              </div>
            </div>

            <div className="detail-section">
              <h2>Pain summary</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>{p.summary}</p>
            </div>

            <div className="detail-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <h2 style={{ margin: 0 }}>Evidence ({evidence.length})</h2>
                <button className="btn btn-ghost btn-sm">View all 18 mentions <I.arrow size={12}/></button>
              </div>
              {evidence.map((e, i) => (
                <div key={i} className="evidence-card">
                  <div className="evidence-head">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span className="sub-pill"><I.reddit size={11}/> {e.sub}</span>
                      <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>{e.date}</span>
                    </div>
                    <button className="btn btn-ghost btn-sm" style={{ height: 24 }}>
                      <I.external size={11}/> View source
                    </button>
                  </div>
                  <p className="evidence-snippet">{e.text}</p>
                  <div className="evidence-foot">
                    <div className="evidence-engage">
                      <span><I.arrowUp size={11}/> {e.engagement.up} upvotes</span>
                      <span><I.note size={11}/> {e.engagement.comments} comments</span>
                    </div>
                    <span style={{ fontSize: 11, color: 'var(--success)', fontWeight: 600 }}>● High engagement</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="detail-section">
              <h2>Pain language</h2>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 0, marginBottom: 14 }}>
                Verbatim phrases sellers actually use. Use these in landing pages, outreach, and ad copy for instant resonance.
              </p>
              <div>
                {PHRASES.map(ph => <span key={ph} className="phrase-chip">“{ph}”</span>)}
              </div>
            </div>

            <div className="detail-section">
              <h2>Current workarounds</h2>
              <div>
                {WORKAROUNDS.map((w, i) => {
                  const Ic = I[w.icon];
                  return (
                    <div key={i} className="workaround-item">
                      <div className="workaround-icon"><Ic size={13}/></div>
                      <span>{w.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="detail-section">
              <h2>Opportunity analysis</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 32px' }}>
                {Object.entries(p.breakdown).map(([k, v]) => (
                  <ScoreBar key={k} label={k} score={v}/>
                ))}
              </div>
              <div style={{ marginTop: 18, padding: 14, background: 'linear-gradient(135deg, rgba(91,91,247,0.06), rgba(6,182,212,0.04))', border: '1px solid rgba(91,91,247,0.18)', borderRadius: 10, fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                <b style={{ color: 'var(--ink)' }}>PainRadar verdict:</b> very strong manual-work signal with a clear missing tool. Buyer intent is real but conversational rather than urgent — lead generation should be content + community, not paid ads.
              </div>
            </div>

            <div className="detail-section">
              <h2>Product opportunities</h2>
              <div className="product-opp-grid">
                {PRODUCT_OPPS.map((o, i) => {
                  const Ic = I[o.icon];
                  return (
                    <div key={i} className="product-opp">
                      <div className="product-opp-icon"><Ic size={15}/></div>
                      <span>{o.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="detail-section">
              <h2>MVP suggestion</h2>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', marginTop: 0 }}>
                Start with a lightweight dashboard where sellers import an Etsy orders CSV and manually enter filament stock.
                The app generates a production queue, material shortage warnings, and listing update suggestions — no Etsy API
                required for v1.
              </p>
              <ul className="feature-list">
                {['Etsy order CSV import',
                  'Filament inventory table with low-stock thresholds',
                  'Variant availability checker (auto-hide unavailable colors)',
                  'Production queue ordered by shipping deadline',
                  'Low-stock email + Slack alerts',
                  'One-click listing update suggestions (manual paste flow)',
                ].map((f, i) => (
                  <li key={i}><I.check size={14}/> {f}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h2>Pricing suggestion</h2>
              <div className="pricing-mini-grid">
                {[
                  ['Hobby seller', '9', 'Up to 25 active listings'],
                  ['Active seller', '19', 'Up to 200 listings, alerts'],
                  ['High volume', '49', 'Unlimited + team seats'],
                ].map(([n, p, sub], i) => (
                  <div className="pricing-mini" key={i}>
                    <div className="tier">{n}</div>
                    <div className="price">${p}<span className="unit">/mo</span></div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h2>Go-to-market ideas</h2>
              <ul className="feature-list">
                {[
                  'Offer a free Etsy 3D-print production planner Google Sheet — capture emails',
                  'Post a case study with one power seller in r/EtsySellers and r/3Dprinting',
                  'Interview 10 sellers about their current variant/inventory workflow',
                  'Build a waitlist around the headline “Stop manually updating Etsy variants”',
                  'Cross-post in 3D print Discord communities and Etsy seller Facebook groups',
                ].map((g, i) => (
                  <li key={i}><I.target size={13} style={{ color: 'var(--brand)' }}/> {g}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="detail-aside">
            <div className="aside-card">
              <h4>Opportunity snapshot</h4>
              {[
                ['Best product type', 'Micro-SaaS'],
                ['ICP', 'Etsy 3D print sellers'],
                ['First MVP', 'CSV import + queue'],
                ['Acquisition', 'Reddit, FB groups, Etsy forum'],
                ['Risk', 'Etsy API complexity'],
                ['Build complexity', 'Medium'],
                ['Estimated time-to-MVP', '2 weeks'],
              ].map(([l, v]) => (
                <div key={l} className="snapshot-row">
                  <span className="lbl">{l}</span>
                  <span className="val">{v}</span>
                </div>
              ))}
            </div>

            <div className="aside-card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h4 style={{ marginBottom: 8 }}>Take action</h4>
              <button className="btn btn-brand" onClick={() => go('ideas')}>
                <I.bulb size={13}/> Generate SaaS idea
              </button>
              <button className="btn" onClick={() => go('ideas')}>
                <I.edit size={13}/> Generate landing page copy
              </button>
              <button className="btn" onClick={() => { toast('Pain added to report'); go('reports'); }}>
                <I.doc size={13}/> Add to report
              </button>
              <button className="btn" onClick={() => { toast('Now tracking this pain'); }}>
                <I.bell size={13}/> Track this pain
              </button>
            </div>

            <div className="aside-card" style={{ background: 'linear-gradient(135deg, rgba(91,91,247,0.04), rgba(6,182,212,0.03))' }}>
              <h4>Similar pains worth seeing</h4>
              {PAINS.filter(x => x.id !== p.id).slice(0, 3).map(x => (
                <div key={x.id} onClick={() => go('detail', x.id)} style={{ padding: '10px 0', borderBottom: '1px dashed var(--border)', cursor: 'pointer' }}>
                  <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.35 }}>{x.title.slice(0, 70)}{x.title.length > 70 ? '…' : ''}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>{x.niche}</span><span>·</span><b className="mono" style={{ color: 'var(--brand)' }}>{x.score}</b>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { PainDetail });
