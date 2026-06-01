// Dashboard page

function Metric({ label, value, delta, trend, sparkColor }) {
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      <div className="metric-foot">
        <span className={`spike ${delta < 0 ? 'down' : ''}`}>
          {delta < 0 ? <I.arrowDown size={12}/> : <I.arrowUp size={12}/>}
          {Math.abs(delta)}%
        </span>
        <span style={{ color: 'var(--muted)' }}>vs last week</span>
      </div>
      <div className="metric-spark">
        <Sparkline data={trend} color={sparkColor}/>
      </div>
    </div>
  );
}

function Dashboard({ go, openPain }) {
  return (
    <>
      <Topbar
        right={
          <>
            <button className="btn btn-sm"><I.filter size={13}/> All niches</button>
            <button className="btn btn-sm btn-primary"><I.plus size={13}/> New project</button>
          </>
        }
      />
      <div className="page">
        <div className="page-head">
          <div className="page-head-row">
            <div>
              <h1 className="page-title">Welcome back, June</h1>
              <p className="page-sub">Here are the strongest market signals detected from your tracked niches in the last 7 days.</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn"><I.share size={13}/> Share</button>
              <button className="btn"><I.doc size={13}/> Export</button>
            </div>
          </div>
        </div>

        <div className="metric-grid">
          <Metric label="Pain points detected"          value="1,248" delta={12} sparkColor="#5B5BF7" trend={[10,14,12,16,18,15,22,28,24,31,34,42]}/>
          <Metric label="High-opportunity clusters"     value="37"    delta={8}  sparkColor="#06B6D4" trend={[6,7,8,9,11,10,12,14,13,18,21,22]}/>
          <Metric label="Buyer intent mentions"         value="214"   delta={22} sparkColor="#7C3AED" trend={[24,28,30,34,38,42,47,50,58,64,68,72]}/>
          <Metric label="New pain spikes this week"     value="8"     delta={-2} sparkColor="#F59E0B" trend={[2,4,3,5,4,6,5,7,9,8,10,8]}/>
        </div>

        <div className="dash-grid">
          <div className="dash-main">
            <div className="chart-row">
              <div className="card">
                <div className="card-head">
                  <div>
                    <h3>Pain volume over time</h3>
                    <div className="meta">Mentions per month across tracked niches</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <span className="chip chip-active">12M</span>
                    <span className="chip chip-outline">90D</span>
                    <span className="chip chip-outline">30D</span>
                  </div>
                </div>
                <div style={{ padding: '14px 18px 18px' }}>
                  <LineChart data={PAIN_TIMELINE}/>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <div>
                    <h3>Top niches by opportunity</h3>
                    <div className="meta">Composite score, this week</div>
                  </div>
                  <button className="btn-ghost btn btn-sm" onClick={() => go('explorer')}>Open <I.arrow size={12}/></button>
                </div>
                <div style={{ padding: '16px 18px 18px' }}>
                  <BarChart data={NICHE_SCORES}/>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <div>
                  <h3>Recent pain spikes</h3>
                  <div className="meta">Detected in the last 7 days, ranked by spike velocity</div>
                </div>
                <button className="btn btn-ghost btn-sm" onClick={() => go('feed')}>Pain feed <I.arrow size={12}/></button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Pain</th><th>Niche</th><th>Spike</th><th>Score</th><th>Suggested monetization</th><th></th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_SPIKES.map((r, i) => (
                    <tr key={i} className="clickable" onClick={() => openPain(r.id)}>
                      <td style={{ fontWeight: 500, maxWidth: 340 }}>{r.pain}</td>
                      <td><span className="chip chip-outline">{r.niche}</span></td>
                      <td><span className="spike"><I.arrowUp size={11}/>{r.spike}</span></td>
                      <td><b className="mono">{r.score}</b></td>
                      <td style={{ color: 'var(--muted)' }}>{r.monetize}</td>
                      <td><I.chevron size={14} style={{ color: 'var(--muted-2)' }}/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dash-aside">
            <div className="card">
              <div className="card-head">
                <div>
                  <h3>Recommended next actions</h3>
                  <div className="meta">AI-curated</div>
                </div>
              </div>
              <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {RECO_ACTIONS.map((r, i) => {
                  const Ic = I[r.icon];
                  return (
                    <div key={i} className="reco-item" onClick={() => go(r.go)}>
                      <div className="reco-icon"><Ic size={14}/></div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="reco-text">{r.title}</div>
                        <div className="reco-sub">{r.sub}</div>
                      </div>
                      <I.chevron size={14} style={{ color: 'var(--muted-2)', flex: 'none' }}/>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card">
              <div className="card-head"><h3>Trending subreddits</h3></div>
              <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['r/EtsySellers', '+34%', 184],
                  ['r/shopify', '+18%', 122],
                  ['r/SaaS', '+71%', 98],
                  ['r/freelance', '+12%', 64],
                  ['r/Entrepreneur', '+8%', 51],
                ].map(([s, d, v]) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <I.reddit size={16} style={{ color: '#FF4500' }}/>
                    <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{s}</div>
                    <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>{v} pains</div>
                    <span className="spike" style={{ fontSize: 11 }}><I.arrowUp size={10}/>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(91,91,247,0.04), rgba(6,182,212,0.03))' }}>
              <div style={{ padding: 18 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                  <div className="reco-icon" style={{ width: 32, height: 32 }}><I.sparkles size={16}/></div>
                  <h3 style={{ margin: 0, fontSize: 14 }}>This week’s top opportunity</h3>
                </div>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: '8px 0 12px', lineHeight: 1.5 }}>
                  Etsy 3D-print sellers have a clear, repeated, manual-work problem with no native tool — a 1-week MVP for a $9–$29/mo Micro-SaaS.
                </p>
                <button className="btn btn-brand btn-sm" style={{ width: '100%', justifyContent: 'center' }} onClick={() => openPain('etsy-variants')}>
                  <I.bulb size={13}/> Open opportunity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { Dashboard });
