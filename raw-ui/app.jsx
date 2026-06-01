// PainRadar — main app shell + routing

const { useState: useStateA } = React;

function App() {
  const [page, setPage] = useStateA('landing');
  const [painId, setPainId] = useStateA('etsy-variants');
  const [feedNiche, setFeedNiche] = useStateA(null);
  const [toastMsg, toastNode] = useToast();

  const go = (target, arg) => {
    if (target === 'detail' && arg) setPainId(arg);
    if (target === 'feed' && arg)   setFeedNiche(arg);
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const openPain = (id) => go('detail', id);
  const openFeedWithNiche = (n) => { setFeedNiche(n); go('feed'); };

  // Landing has its own full chrome — no sidebar
  if (page === 'landing') {
    return (
      <>
        <Landing go={go}/>
        {toastNode}
      </>
    );
  }

  let content = null;
  switch (page) {
    case 'dashboard':  content = <Dashboard go={go} openPain={openPain}/>; break;
    case 'explorer':   content = <NicheExplorer go={go} openFeedWithNiche={openFeedWithNiche}/>; break;
    case 'feed':       content = <PainFeed go={go} openPain={openPain} initialNiche={feedNiche}/>; break;
    case 'detail':     content = <PainDetail painId={painId} go={go} toast={toastMsg}/>; break;
    case 'ideas':      content = <IdeaLab go={go} toast={toastMsg}/>; break;
    case 'competitor': content = <CompetitorMiner go={go} toast={toastMsg}/>; break;
    case 'reports':    content = <ReportBuilder go={go} toast={toastMsg}/>; break;
    case 'alerts':     content = <AlertsPage go={go} toast={toastMsg}/>; break;
    case 'pricing':    content = <PricingPage go={go}/>; break;
    default:           content = <Dashboard go={go} openPain={openPain}/>;
  }

  const sidebarCurrent = page === 'detail' ? 'feed' : page;

  return (
    <div className="app-root" data-screen-label={`PainRadar — ${page}`}>
      <Sidebar current={sidebarCurrent} go={go}/>
      <main key={page} className="fade-in" style={{ minHeight: '100vh' }}>
        {content}
      </main>
      {toastNode}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
