// Landing page for PainRadar

function LandingNav({ go }) {
  return (
    <nav className="landing-nav">
      <div className="landing-nav-brand">
        <div className="brand-logo" style={{ width: 28, height: 28, borderRadius: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="white"/>
          </svg>
        </div>
        PainRadar
      </div>
      <div className="landing-nav-links">
        <a href="#how">How it works</a>
        <a href="#use">Use cases</a>
        <a href="#samples">Sample insights</a>
        <a onClick={() => go('pricing')} style={{ cursor: 'pointer' }}>Pricing</a>
      </div>
      <div className="landing-nav-actions">
        <button className="btn btn-ghost" onClick={() => go('dashboard')}>Sign in</button>
        <button className="btn btn-primary" onClick={() => go('dashboard')}>
          <I.sparkles size={14}/> Explore live demo
        </button>
      </div>
    </nav>
  );
}

function HeroMockup() {
  return (
    <div className="hero-mockup-wrap">
      <div className="hero-mockup">
        <div className="hero-mockup-chrome">
          <span className="dot" style={{ background: '#ff5f57' }}/>
          <span className="dot" style={{ background: '#febc2e' }}/>
          <span className="dot" style={{ background: '#28c840' }}/>
          <div className="url">app.painradar.io / pain-feed / etsy-sellers</div>
          <I.share size={13} style={{ color: 'var(--muted)' }}/>
        </div>
        <div className="hero-mockup-body">
          {/* Sidebar */}
          <div className="hero-mockup-side">
            <div className="hero-mockup-side-brand">
              <div className="brand-logo" style={{ width: 22, height: 22, borderRadius: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="white"/></svg>
              </div>
              <span style={{ fontSize: 12 }}>PainRadar</span>
            </div>
            <div className="h-side-label">Sources</div>
            <div className="h-side-item active"><I.reddit size={13}/> r/EtsySellers</div>
            <div className="h-side-item"><I.reddit size={13}/> r/3Dprinting</div>
            <div className="h-side-item"><I.reddit size={13}/> r/shopify</div>
            <div className="h-side-item"><I.reddit size={13}/> r/Entrepreneur</div>
            <div className="h-side-label">Filters</div>
            <div className="h-side-item"><I.flame size={13}/> Buyer intent ≥ High</div>
            <div className="h-side-item"><I.target size={13}/> Tool gap ≥ Medium</div>
          </div>

          {/* Main */}
          <div className="hero-mockup-main">
            <div className="hero-mockup-main-head">
              <h4>Pain Point Feed — Etsy Sellers</h4>
              <div style={{ display: 'flex', gap: 6 }}>
                <span className="chip chip-brand" style={{ fontSize: 10.5 }}>342 pains</span>
                <span className="chip" style={{ fontSize: 10.5 }}>Last 30 days</span>
              </div>
            </div>
            {[
              { title: 'Sellers manually update listing variants when filaments run out', tags: ['Manual', 'Inventory', 'Tool gap'], score: 84 },
              { title: 'Design theft from Temu / SHEIN is killing margins on best-sellers', tags: ['IP', 'Margin', 'Monitoring'], score: 77 },
              { title: 'Etsy Ads attribution feels broken — no way to know what worked',     tags: ['Attribution', 'Ads'],         score: 73 },
            ].map((p, i) => (
              <div className="hero-mockup-pain" key={i}>
                <ScoreRing score={p.score} size={48}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h5>{p.title}</h5>
                  <p>r/EtsySellers · {12 + i*4} mentions · spike +{[34,145,22][i]}%</p>
                  <div className="meta">
                    {p.tags.map(t => <span key={t} className="chip" style={{ fontSize: 10, padding: '2px 7px' }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right panel */}
          <div className="hero-mockup-aside">
            <h6>Opportunity score</h6>
            <div className="big-score">
              <ScoreRing score={84} size={56}/>
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>Etsy variant sync</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Strong micro-SaaS fit</div>
              </div>
            </div>
            <h6>Score breakdown</h6>
            {[['Pain frequency', 62],['Buyer intent', 78],['Manual work', 91],['Money proximity', 74],['Tool gap', 82]].map(([l, v]) => (
              <ScoreBar key={l} label={l} score={v}/>
            ))}
            <button className="btn btn-brand btn-sm" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
              <I.bulb size={12}/> Generate SaaS idea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Landing({ go }) {
  const steps = [
    { n: 1, t: 'Choose a niche',
      d: 'Select a market like Shopify merchants, Etsy sellers, freelancers, realtors, or SaaS founders — or let PainRadar suggest under-served ones.' },
    { n: 2, t: 'Detect repeated pain',
      d: 'PainRadar reads Reddit and surfaces recurring complaints, tool requests, expensive workaround mentions, and competitor frustrations.' },
    { n: 3, t: 'Turn pain into opportunity',
      d: 'Get product ideas, MVP suggestions, pricing angles, landing page copy, and outreach conversations — ready to ship.' },
  ];
  const useCases = [
    { icon: 'bulb',    title: 'SaaS Idea Finder',
      desc: 'Discover micro-SaaS opportunities ranked by pain frequency, buyer intent, and how hard it is to build a first version.',
      ex: '→ "Etsy Variant Sync" · score 84 · Micro-SaaS · $9–$29/mo' },
    { icon: 'dollar',  title: 'Affiliate Opportunity Miner',
      desc: 'Find pain-driven content angles with high commercial intent that map to existing affiliate programs.',
      ex: '→ "Best Shopify fraud apps" · 184 monthly searches · Pro plan affiliate' },
    { icon: 'swords',  title: 'Competitor Complaint Monitor',
      desc: 'Watch what users hate about HubSpot, Notion, Zendesk and turn complaints into positioning for your own tool.',
      ex: '→ "HubSpot pricing jumps" · 121 mentions · Opening for lightweight CRM' },
    { icon: 'doc',     title: 'Agency Research Reports',
      desc: 'Produce client-ready niche research reports in minutes — pain points, evidence, ideas, GTM. White-label optional.',
      ex: '→ "Q2 SMB landscaping report" · 12 pains · 4 GTM angles · PDF + Notion' },
  ];
  const samples = [
    { title: 'Etsy sellers manually update product variants when materials run out', score: 84, m: 'Micro-SaaS' },
    { title: 'Shopify merchants lose money from chargebacks and fraud',              score: 79, m: 'Shopify app' },
    { title: 'Freelancers hate chasing unpaid invoices',                              score: 76, m: 'Invoice automation' },
    { title: 'Startup teams can’t analyze AI support chatbot conversations',          score: 81, m: 'B2B analytics' },
  ];

  return (
    <div className="landing">
      <LandingNav go={go}/>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="pill">New</span>
          <span>Now tracking 2.4M Reddit threads weekly</span>
          <I.arrow size={12} style={{ color: 'var(--muted)' }}/>
        </div>
        <h1>
          Find startup ideas from real <br/>
          <span className="grad">Reddit pain points</span>
        </h1>
        <p className="lede">
          PainRadar scans Reddit conversations, detects repeated frustrations, scores business opportunities,
          and turns them into SaaS ideas, affiliate angles, landing page copy, and market research reports.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-brand btn-lg" onClick={() => go('dashboard')}>
            <I.zap size={15}/> Explore live demo
          </button>
          <button className="btn btn-lg" onClick={() => go('reports')}>
            <I.doc size={15}/> View sample report
          </button>
        </div>
        <div className="hero-badges">
          {['Pain scoring', 'Reddit evidence', 'SaaS ideas', 'Competitor complaints', 'Weekly alerts'].map(t => (
            <span key={t} className="chip"><I.check size={11}/> {t}</span>
          ))}
        </div>
        <HeroMockup/>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 48px' }}>
          <div className="sec-eyebrow">How it works</div>
          <h2 className="sec-title">From a noisy thread to a profitable product, in three steps.</h2>
        </div>
        <div className="steps-grid">
          {steps.map(s => (
            <div className="step-card" key={s.n}>
              <span className="step-num">0{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" id="use">
        <div className="sec-head-row">
          <div>
            <div className="sec-eyebrow">Use cases</div>
            <h2 className="sec-title">Built for people who turn pain into pipeline.</h2>
            <p className="sec-sub">Indie hackers, affiliate marketers, agencies, and SaaS founders all use PainRadar — for different jobs.</p>
          </div>
        </div>
        <div className="use-grid">
          {useCases.map(uc => {
            const Ic = I[uc.icon];
            return (
              <div className="use-card" key={uc.title}>
                <div className="use-icon"><Ic size={20}/></div>
                <div style={{ flex: 1 }}>
                  <h3>{uc.title}</h3>
                  <p className="desc">{uc.desc}</p>
                  <div className="use-example">{uc.ex}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SAMPLES */}
      <section className="section" id="samples">
        <div className="sec-head-row">
          <div>
            <div className="sec-eyebrow">Sample insights</div>
            <h2 className="sec-title">A week of pain, scored.</h2>
            <p className="sec-sub">A peek at the kind of pain points PainRadar surfaced in the last 7 days.</p>
          </div>
          <button className="btn" onClick={() => go('feed')}>See full pain feed <I.arrow size={13}/></button>
        </div>
        <div className="samples-grid">
          {samples.map((s, i) => (
            <div className="sample-card" key={i}>
              <div className="head">
                <ScoreRing score={s.score} size={48}/>
                <I.bookmark size={15} style={{ color: 'var(--muted-2)' }}/>
              </div>
              <h4>{s.title}</h4>
              <div className="foot">
                <div>
                  <div className="label">Best fit</div>
                  <div className="value">{s.m}</div>
                </div>
                <button className="icon-btn" onClick={() => go('feed')}><I.arrow size={14}/></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>Stop building from guesses. <br/>Start from real pain.</h2>
        <p>Generate your first scored pain report in about 60 seconds. Free, no credit card.</p>
        <button className="btn btn-brand btn-lg" onClick={() => go('reports')}>
          <I.sparkles size={15}/> Generate my first report
        </button>
      </div>

      <footer className="landing-foot">
        © 2026 PainRadar — Pain into pipeline. Not affiliated with Reddit, Inc.
      </footer>
    </div>
  );
}

Object.assign(window, { Landing });
