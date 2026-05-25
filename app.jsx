/* ===== KIDS CONNECT — APP SHELL ===== */

function App() {
  const [page, setPage] = React.useState('home');
  const [pageKey, setPageKey] = React.useState(0);

  const navigate = React.useCallback((target) => {
    setPage(target);
    setPageKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'programs': return <ProgramsPage onNavigate={navigate} />;
      case 'about': return <AboutPage onNavigate={navigate} />;
      case 'faq': return <FAQPage onNavigate={navigate} />;
      case 'contact': return <ContactPage onNavigate={navigate} />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <React.Fragment>
      <Navigation currentPage={page} onNavigate={navigate} />
      <main style={{flex: 1}} key={pageKey}>
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </React.Fragment>
  );
}

Object.assign(window, { App });
