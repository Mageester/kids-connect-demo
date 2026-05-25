import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import SiteSchema from './components/SiteSchema.jsx';
import HomePage from './pages/HomePage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const ROUTE_TO_PAGE = {
  '/': 'home',
  '/programs': 'programs',
  '/about': 'about',
  '/faq': 'faq',
  '/contact': 'contact',
};

const PAGE_TO_ROUTE = {
  home: '/',
  programs: '/programs',
  about: '/about',
  faq: '/faq',
  contact: '/contact',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = ROUTE_TO_PAGE[location.pathname] || 'home';

  const handleNavigate = (target) => {
    const path = PAGE_TO_ROUTE[target] || '/';
    navigate(path);
  };

  return (
    <>
      <SiteSchema />
      <ScrollToTop />
      <div className="demo-banner" role="note">
        Private Kids Connect website concept by Axiom Web — a division of Axiom International. Not the live Kids Connect website.
      </div>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main style={{ flex: 1 }} key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/programs" element={<ProgramsPage onNavigate={handleNavigate} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/faq" element={<FAQPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage onNavigate={handleNavigate} />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
