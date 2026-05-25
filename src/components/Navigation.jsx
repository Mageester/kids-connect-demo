import React, { useState, useEffect } from 'react';

export default function Navigation({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Main">
        <div className="nav__inner">
          <button
            type="button"
            className="nav__brand"
            onClick={() => handleNav('home')}
            style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 0, cursor: 'pointer', padding: 0 }}
            aria-label="Kids Connect — Home"
          >
            <img
              src="/uploads/cropped-logo.webp"
              alt="Kids Connect"
              width="44"
              height="44"
              style={{ height: 44, width: 'auto', display: 'block', objectFit: 'fill' }}
            />
          </button>
          <div className="nav__links">
            {pages.map((p) => (
              <button
                type="button"
                key={p.id}
                className={`nav__link ${currentPage === p.id ? 'nav__link--active' : ''}`}
                onClick={() => handleNav(p.id)}
                aria-current={currentPage === p.id ? 'page' : undefined}
              >
                {p.label}
              </button>
            ))}
            <button
              type="button"
              className="btn btn--accent btn--sm"
              onClick={() => handleNav('contact')}
            >
              Inquire Today
            </button>
          </div>
          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu__panel" role="dialog" aria-label="Mobile navigation">
          <button
            type="button"
            className="mobile-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          {pages.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`mobile-menu__link ${currentPage === p.id ? 'mobile-menu__link--active' : ''}`}
              onClick={() => handleNav(p.id)}
              style={{ background: 'none', border: 0, textAlign: 'left', width: '100%', cursor: 'pointer' }}
            >
              {p.label}
            </button>
          ))}
          <div style={{ marginTop: 16 }}>
            <button
              type="button"
              className="btn btn--accent"
              style={{ width: '100%' }}
              onClick={() => handleNav('contact')}
            >
              Inquire Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
