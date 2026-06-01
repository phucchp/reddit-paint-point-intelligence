// Demo data for PainRadar

const PAINS = [
  {
    id: 'etsy-variants',
    title: 'Etsy sellers manually update listing variants when filament colors run out',
    summary: '3D print and handmade sellers struggle to keep Etsy listing options synced with real material inventory. Variants for color, size, and material drift out of stock and customers buy combinations sellers cannot fulfill.',
    niche: 'Etsy Sellers',
    subreddits: ['r/EtsySellers', 'r/3Dprinting'],
    evidence: 18, threads: 7, mentions: 42, intent: 'Medium-high',
    frequency: 'Weekly', spike: '+34%',
    score: 84,
    breakdown: { 'Pain frequency': 62, 'Buyer intent': 78, 'Manual workload': 91, 'Money proximity': 74, 'Tool gap': 82, 'MVP ease': 71 },
    monetization: 'Micro-SaaS', mvpType: 'Inventory sync dashboard',
    tags: ['Manual workflow', 'Inventory', 'Marketplace seller', 'Tool gap'],
  },
  {
    id: 'shopify-fraud',
    title: 'Shopify merchants lose profit to fraud, chargebacks, and unclear risk signals',
    summary: 'Merchants struggle to interpret Shopify’s fraud risk scoring. Many ship orders that later result in chargebacks, with no clear playbook for borderline “medium risk” orders.',
    niche: 'Shopify Merchants',
    subreddits: ['r/shopify', 'r/ecommerce'],
    evidence: 31, threads: 12, mentions: 88, intent: 'High',
    frequency: 'Daily', spike: '+220%',
    score: 79,
    breakdown: { 'Pain frequency': 88, 'Buyer intent': 81, 'Manual workload': 64, 'Money proximity': 92, 'Tool gap': 70, 'MVP ease': 58 },
    monetization: 'Shopify app', mvpType: 'Risk review playbook + alerts',
    tags: ['Revenue loss', 'Fraud', 'Ecommerce', 'Shopify app'],
  },
  {
    id: 'freelance-invoices',
    title: 'Freelancers hate manually following up unpaid invoices',
    summary: 'Solo freelancers and small studios drop invoice follow-ups, costing real revenue. Existing tools feel either too “agency-heavy” or hidden inside accounting suites.',
    niche: 'Freelance Developers',
    subreddits: ['r/freelance', 'r/webdev'],
    evidence: 22, threads: 9, mentions: 51, intent: 'Medium-high',
    frequency: 'Weekly', spike: '+90%',
    score: 76,
    breakdown: { 'Pain frequency': 71, 'Buyer intent': 74, 'Manual workload': 80, 'Money proximity': 88, 'Tool gap': 62, 'MVP ease': 79 },
    monetization: 'Invoice automation', mvpType: 'Lightweight follow-up scheduler',
    tags: ['Payment', 'Freelance', 'Automation'],
  },
  {
    id: 'ai-chatbot-fail',
    title: 'SaaS teams cannot understand why AI support bots fail',
    summary: 'Teams ship AI chat support but cannot tell which conversations dropped trust, hallucinated, or quietly punted users back to human agents. Existing analytics surface volume, not quality.',
    niche: 'AI SaaS Support',
    subreddits: ['r/SaaS', 'r/CustomerSuccess'],
    evidence: 26, threads: 10, mentions: 67, intent: 'High',
    frequency: 'Weekly', spike: '+180%',
    score: 81,
    breakdown: { 'Pain frequency': 76, 'Buyer intent': 84, 'Manual workload': 70, 'Money proximity': 78, 'Tool gap': 88, 'MVP ease': 63 },
    monetization: 'B2B analytics', mvpType: 'Conversation quality dashboard',
    tags: ['AI support', 'Analytics', 'B2B SaaS'],
  },
  {
    id: 'small-biz-sheets',
    title: 'Small businesses are held together by sprawling messy spreadsheets',
    summary: 'Owners maintain quoting, scheduling, inventory, and follow-up across many tabs and copies of the same sheet. Mistakes compound; nobody wants the cost or complexity of HubSpot/Zoho.',
    niche: 'Small Business Owners',
    subreddits: ['r/smallbusiness', 'r/Entrepreneur'],
    evidence: 19, threads: 8, mentions: 44, intent: 'Medium',
    frequency: 'Weekly', spike: '+22%',
    score: 73,
    breakdown: { 'Pain frequency': 81, 'Buyer intent': 64, 'Manual workload': 86, 'Money proximity': 60, 'Tool gap': 72, 'MVP ease': 75 },
    monetization: 'Vertical SaaS', mvpType: 'Templated ops workspace',
    tags: ['Manual workflow', 'Ops', 'SMB'],
  },
  {
    id: 'agency-rfp',
    title: 'Agencies waste days copy-pasting RFP responses for similar deals',
    summary: 'Agencies repeatedly write the same case studies, scoping language, and credentials sections. Pre-existing proposal tools feel built for enterprise sales, not creative shops.',
    niche: 'Agencies',
    subreddits: ['r/agency', 'r/marketing'],
    evidence: 14, threads: 6, mentions: 31, intent: 'Medium',
    frequency: 'Monthly', spike: '+18%',
    score: 71,
    breakdown: { 'Pain frequency': 58, 'Buyer intent': 70, 'Manual workload': 82, 'Money proximity': 76, 'Tool gap': 64, 'MVP ease': 78 },
    monetization: 'B2B SaaS', mvpType: 'RFP assistant + library',
    tags: ['Sales', 'Agency', 'AI assist'],
  },
  {
    id: 'design-theft',
    title: 'Etsy and indie creators get their designs copied on Temu and SHEIN',
    summary: 'Creators discover knockoffs of their listings days or weeks after launch. Existing brand protection services are priced for big brands; takedown evidence is painful to assemble.',
    niche: 'Creator Economy',
    subreddits: ['r/EtsySellers', 'r/Entrepreneur'],
    evidence: 17, threads: 7, mentions: 38, intent: 'Medium-high',
    frequency: 'Weekly', spike: '+145%',
    score: 77,
    breakdown: { 'Pain frequency': 70, 'Buyer intent': 72, 'Manual workload': 80, 'Money proximity': 79, 'Tool gap': 84, 'MVP ease': 60 },
    monetization: 'Monitoring service', mvpType: 'Image-match watcher',
    tags: ['IP', 'Creator', 'Monitoring'],
  },
  {
    id: 'hubspot-cost',
    title: 'Founders find HubSpot too expensive and too complex once they outgrow free',
    summary: 'Solo founders and 2–5 person teams describe a “HubSpot tax” — pricing jumps once they need basic automation. Many fall back to spreadsheets or piecemeal tools.',
    niche: 'SaaS Founders',
    subreddits: ['r/startups', 'r/SaaS'],
    evidence: 24, threads: 11, mentions: 58, intent: 'High',
    frequency: 'Weekly', spike: '+62%',
    score: 78,
    breakdown: { 'Pain frequency': 76, 'Buyer intent': 86, 'Manual workload': 70, 'Money proximity': 84, 'Tool gap': 66, 'MVP ease': 80 },
    monetization: 'Lightweight CRM', mvpType: 'Founder-CRM with follow-ups',
    tags: ['CRM', 'Competitor pain', 'SaaS'],
  },
];

const NICHES = [
  {
    id: 'etsy-3d',
    name: 'Etsy 3D Print Sellers',
    subreddits: ['r/EtsySellers', 'r/3Dprinting'],
    painVol: 'Medium', intent: 'High', toolGap: 'High', competition: 'Low-medium',
    monetization: 'Micro-SaaS / template',
    score: 84,
    members: '212k', spike: '+34%',
  },
  {
    id: 'shopify',
    name: 'Shopify Merchants',
    subreddits: ['r/shopify', 'r/ecommerce', 'r/smallbusiness'],
    painVol: 'High', intent: 'High', toolGap: 'Medium', competition: 'High',
    monetization: 'Shopify app / affiliate',
    score: 79,
    members: '1.1M', spike: '+18%',
  },
  {
    id: 'freelance-dev',
    name: 'Freelance Developers',
    subreddits: ['r/webdev', 'r/freelance'],
    painVol: 'Medium', intent: 'Medium', toolGap: 'Medium', competition: 'Medium',
    monetization: 'SaaS / template / productized service',
    score: 76,
    members: '840k', spike: '+12%',
  },
  {
    id: 'ai-support',
    name: 'AI SaaS Support Teams',
    subreddits: ['r/SaaS', 'r/startups', 'r/CustomerSuccess'],
    painVol: 'Growing', intent: 'High', toolGap: 'High', competition: 'Medium',
    monetization: 'B2B SaaS',
    score: 81,
    members: '420k', spike: '+71%',
  },
  {
    id: 'realtors',
    name: 'Real Estate Agents',
    subreddits: ['r/realtors', 'r/RealEstate'],
    painVol: 'High', intent: 'Medium', toolGap: 'Medium', competition: 'High',
    monetization: 'Lead capture / CRM add-on',
    score: 68,
    members: '320k', spike: '+8%',
  },
  {
    id: 'creators',
    name: 'Indie Creators & Makers',
    subreddits: ['r/Entrepreneur', 'r/EtsySellers'],
    painVol: 'High', intent: 'Medium-high', toolGap: 'High', competition: 'Medium',
    monetization: 'Monitoring service / digital product',
    score: 77,
    members: '690k', spike: '+24%',
  },
];

const PAIN_TIMELINE = [
  { l: 'Jan', v: 64 }, { l: 'Feb', v: 82 }, { l: 'Mar', v: 71 }, { l: 'Apr', v: 95 },
  { l: 'May', v: 88 }, { l: 'Jun', v: 124 }, { l: 'Jul', v: 142 }, { l: 'Aug', v: 168 },
  { l: 'Sep', v: 198 }, { l: 'Oct', v: 214 }, { l: 'Nov', v: 247 }, { l: 'Dec', v: 281 },
];

const NICHE_SCORES = [
  { l: 'Etsy Sellers',      v: 84 },
  { l: 'AI SaaS Support',   v: 81 },
  { l: 'Shopify Merchants', v: 79 },
  { l: 'SaaS Founders',     v: 78 },
  { l: 'Indie Creators',    v: 77 },
  { l: 'Freelance Devs',    v: 76 },
  { l: 'Small Business',    v: 73 },
  { l: 'Realtors',          v: 68 },
];

const RECENT_SPIKES = [
  { pain: 'Shopify tax setup confusion',         niche: 'Shopify',  spike: '+220%', score: 82, monetize: 'SaaS / app',          id: 'shopify-fraud' },
  { pain: 'AI chatbot logs hard to analyze',      niche: 'SaaS',     spike: '+180%', score: 81, monetize: 'B2B analytics',       id: 'ai-chatbot-fail' },
  { pain: 'Etsy design theft from Temu/SHEIN',    niche: 'Etsy',     spike: '+145%', score: 77, monetize: 'Monitoring service', id: 'design-theft' },
  { pain: 'Freelancers chasing unpaid invoices',  niche: 'Freelance',spike: '+90%',  score: 76, monetize: 'Payment tool',        id: 'freelance-invoices' },
  { pain: 'HubSpot too pricey once you outgrow free', niche: 'SaaS', spike: '+62%',  score: 78, monetize: 'Lightweight CRM',     id: 'hubspot-cost' },
];

const RECO_ACTIONS = [
  { title: 'Generate Shopify fraud report',        sub: 'High-intent, +220% week-over-week',           icon: 'doc',     go: 'reports' },
  { title: 'Build landing page from Etsy variants pain', sub: '“Stop manually updating Etsy listings…”',icon: 'edit',    go: 'ideas' },
  { title: 'Track HubSpot alternative complaints', sub: 'Competitor monitor on r/SaaS, r/startups',    icon: 'swords',  go: 'competitor' },
  { title: 'Create weekly alert for “looking for a tool”', sub: 'Catch new buyer-intent threads daily', icon: 'bell',    go: 'alerts' },
];

const SUBREDDIT_CHOICES = ['r/EtsySellers', 'r/shopify', 'r/ecommerce', 'r/smallbusiness', 'r/webdev', 'r/freelance', 'r/SaaS', 'r/startups', 'r/Entrepreneur', 'r/realtors'];

const PAIN_EVIDENCE = {
  'etsy-variants': [
    { sub: 'r/EtsySellers', date: '4 days ago', engagement: { up: 184, comments: 47 },
      text: 'I sell 3D-printed earrings with 14 color options. Every time I run out of a filament I have to manually edit dozens of listings. Is there a way to sync listings to the colors I currently have in stock?' },
    { sub: 'r/EtsySellers', date: '1 week ago', engagement: { up: 96, comments: 31 },
      text: 'Looking for a current order list grouped by deadline so I can batch print runs and know which materials to order first. Spreadsheets are killing my Sundays.' },
    { sub: 'r/3Dprinting',  date: '2 weeks ago', engagement: { up: 142, comments: 58 },
      text: 'Anyone manage filament inventory separately from your Etsy or Shopify orders? My production queue and stock counts are constantly out of sync.' },
  ],
};

const PHRASES = [
  'update listings manually',
  'colors I currently have',
  'out of stock',
  'too many listings',
  'batch orders',
  'need to order materials',
  'current order list',
  'production queue',
];

const WORKAROUNDS = [
  { label: 'Google Sheets with material counters', icon: 'spreadsheet' },
  { label: 'Manually editing each Etsy listing',   icon: 'edit' },
  { label: 'Notes app or paper checklists',         icon: 'note' },
  { label: 'Separate material inventory tracker',   icon: 'database' },
  { label: 'Updating listings only after a customer asks', icon: 'inbox' },
  { label: 'Over-ordering filament to avoid stockouts', icon: 'layers' },
];

const PRODUCT_OPPS = [
  { icon: 'layers', name: 'Etsy Variant Inventory Sync' },
  { icon: 'list',   name: '3D Print Production Queue' },
  { icon: 'bell',   name: 'Filament Low-stock Alert' },
  { icon: 'inbox',  name: 'Etsy Order Batching Dashboard' },
];

const COMPETITOR_COMPLAINTS = [
  { id: 'price',  title: 'HubSpot becomes expensive once users need basic automation',
    summary: 'Users describe a steep price jump moving from free / Starter into Marketing/Sales Hub Pro just to unlock workflow basics.',
    frequency: 184, severity: 'high',
    lang: '“The free tier is great until you want to automate anything. Then it’s $800/mo and that’s before extra contacts.”',
    opportunity: 'Position as a lightweight CRM ops layer for founders who outgrew spreadsheets but hate enterprise CRM pricing.' },
  { id: 'addons', title: 'Too many add-ons make pricing impossible to predict',
    summary: 'Teams say they need to buy separate add-ons for AI, transactional email, dashboards, and support tickets to match what one competitor includes.',
    frequency: 121, severity: 'high',
    lang: '“By the time I added the AI add-on, transactional email, and seats, my quote was 3x what the website said.”',
    opportunity: 'Lead with “one price, no add-ons” for solo founders and 2–5 person teams.' },
  { id: 'setup',  title: 'Setup feels like a 2-day consulting engagement',
    summary: 'New users complain about onboarding sprawl — properties, pipelines, lifecycle stages — when they wanted a working CRM by lunch.',
    frequency: 96, severity: 'med',
    lang: '“I just wanted to track leads from my form and got pulled into mapping lifecycle stages for an hour.”',
    opportunity: '60-second setup with smart defaults; opinionated pipeline templates per ICP.' },
  { id: 'heavy',  title: 'Feels too heavy for solo founders and small teams',
    summary: 'Solo and 2-person teams say the UI assumes a marketing department exists, surfacing fields and reports they will never use.',
    frequency: 78, severity: 'med',
    lang: '“Three sidebars, four navs — I just wanted to see who I owe a reply to.”',
    opportunity: '“Inbox-first” CRM that puts today’s follow-ups one click away.' },
  { id: 'dedupe', title: 'Contact deduplication is painful and partly manual',
    summary: 'Imports create duplicates that have to be merged one-at-a-time; bulk merge is paywalled or limited.',
    frequency: 62, severity: 'low',
    lang: '“I imported a CSV and now I have 400 duplicates that I can only merge two at a time.”',
    opportunity: 'Free, no-login Gmail/Sheets dedupe — wedge product into the painful corner.' },
];

const ALERTS = [
  { id: 'a1', name: 'Shopify fraud & chargebacks',      niche: 'Shopify Merchants', freq: 'Weekly',    active: true,  signals: 18 },
  { id: 'a2', name: 'Etsy production workflow',         niche: 'Etsy Sellers',      freq: 'Weekly',    active: true,  signals: 12 },
  { id: 'a3', name: 'HubSpot alternative complaints',   niche: 'SaaS Founders',     freq: 'Daily',     active: true,  signals: 31 },
  { id: 'a4', name: 'AI support chatbot analytics',     niche: 'AI SaaS Support',   freq: 'Weekly',    active: false, signals: 6  },
];

const PRICING_TIERS = [
  { name: 'Free', price: '0', desc: 'Run a few pain scans and see what PainRadar finds in your niche.',
    cta: 'Start free',
    features: ['3 searches / month', '1 project', 'Limited pain evidence (3 snippets/pain)', 'Basic idea generation', 'Read-only reports'],
  },
  { name: 'Starter', price: '19', desc: 'For indie hackers researching one or two niches at a time.',
    cta: 'Start trial',
    features: ['30 searches / month', '3 projects', 'Pain score + opportunity breakdown', 'Idea generation (5 / day)', 'Basic PDF / Markdown export'],
  },
  { name: 'Pro', price: '49', desc: 'For serious founders running weekly market intelligence loops.', featured: true,
    cta: 'Start trial',
    features: ['Unlimited projects & niches', 'Weekly alerts + Slack / email delivery', 'Competitor complaint miner', 'Full pain evidence + Reddit links', 'PDF, Markdown & Notion export', 'Landing page copy generator'],
  },
  { name: 'Agency', price: '149', desc: 'For agencies producing client-ready research at volume.',
    cta: 'Talk to sales',
    features: ['Everything in Pro', 'Client-ready white-label reports', '5 team seats included', 'Multi-niche monitoring (20+)', 'Priority processing queue', 'Custom report templates'],
  },
];

const GENERATED_IDEAS = [
  {
    title: 'Etsy Filament Inventory Sync',
    type: 'Micro-SaaS', icp: 'Etsy 3D print sellers',
    problem: 'Keeping listing color variants in sync with real filament inventory is manual and error-prone.',
    mvp: ['Import Etsy listings', 'Track filament colors & weights', 'Auto-hide unavailable variants', 'Generate update checklist'],
    pricing: '$9–$29/mo',
    first10: 'Find sellers discussing filament workflow on r/EtsySellers; offer free setup; launch with a Google Sheet template upgrade path.',
  },
  {
    title: '3D Print Etsy Production Planner',
    type: 'SaaS / template hybrid', icp: 'Etsy 3D print sellers w/ 50+ orders/wk',
    problem: 'Sellers batch print runs from memory; deadlines slip and material orders are reactive.',
    mvp: ['Order queue grouped by ship-by', 'Material checklist per batch', 'Deadline grouping', 'Packing list export'],
    pricing: '$19/mo + $29 template',
    first10: 'Pitch in r/3Dprinting weekly threads; cross-post case study from one power seller.',
  },
  {
    title: 'Etsy Design Theft Monitor',
    type: 'Monitoring service', icp: 'Etsy & indie product creators',
    problem: 'Sellers see knockoffs on Temu/SHEIN late; takedown evidence is painful to assemble.',
    mvp: ['Upload product images', 'Daily image-match crawl', 'Auto-generated takedown evidence pack', 'Email summary of new matches'],
    pricing: '$29–$79/mo',
    first10: 'DM creators who tweet about copycats; offer manual scan for first 10 customers.',
  },
];

const LANDING_COPY = {
  headline: 'Stop manually updating Etsy listings every time a filament color runs out.',
  sub: 'A simple inventory and production dashboard for 3D-print Etsy sellers who want to keep colors, stock, and order deadlines under control — without another spreadsheet.',
  bullets: [
    'No more editing the same color across dozens of listings',
    'Know what filament to reorder before orders pile up',
    'Batch production by material and deadline, automatically',
    'See which variants to pause when a color runs out',
  ],
  cta: 'Get the early-access build',
};

const REPORT_SECTIONS = [
  { id: 'exec',   label: 'Executive summary' },
  { id: 'pains',  label: 'Top pain points' },
  { id: 'scores', label: 'Opportunity scores' },
  { id: 'evid',   label: 'Evidence links' },
  { id: 'ideas',  label: 'Product ideas' },
  { id: 'copy',   label: 'Landing page copy' },
  { id: 'gtm',    label: 'Go-to-market plan' },
  { id: 'comp',   label: 'Competitor complaints' },
];

const REPORT_PAINS = [
  { name: 'Etsy Production Planner',          score: 84, monetize: 'Micro-SaaS' },
  { name: 'Design Theft Monitor',             score: 77, monetize: 'Monitoring' },
  { name: 'Etsy Ads ROI Tracker',             score: 73, monetize: 'SaaS' },
  { name: 'Customer Personalization Workflow',score: 71, monetize: 'Service' },
];

Object.assign(window, {
  PAINS, NICHES, PAIN_TIMELINE, NICHE_SCORES, RECENT_SPIKES, RECO_ACTIONS,
  SUBREDDIT_CHOICES, PAIN_EVIDENCE, PHRASES, WORKAROUNDS, PRODUCT_OPPS,
  COMPETITOR_COMPLAINTS, ALERTS, PRICING_TIERS, GENERATED_IDEAS, LANDING_COPY,
  REPORT_SECTIONS, REPORT_PAINS,
});
