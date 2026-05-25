/* ===== KIDS CONNECT — SHARED COMPONENTS ===== */

/* ---------- SVG ICONS ---------- */
const ChevronDown = () =>
<svg className="faq-item__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>;

const ArrowRight = ({ size = 18 }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
  </svg>;

const CheckCircle = () =>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>;

const PhoneIcon = () =>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
  </svg>;

const MapPinIcon = () =>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>;

const MailIcon = () =>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>;


/* ---------- IMAGE PLACEHOLDER ---------- */
function ImagePlaceholder({ label, aspectRatio, style }) {
  return (
    <div className="img-placeholder" style={{ aspectRatio: aspectRatio || 'auto', ...style }}>
      <div className="img-icon">▢</div>
      <span>{label || 'image placeholder'}</span>
    </div>);

}

/* ---------- NAVIGATION ---------- */
function Navigation({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';else
    document.body.style.overflow = '';
    return () => {document.body.style.overflow = '';};
  }, [menuOpen]);

  const pages = [
  { id: 'home', label: 'Home' },
  { id: 'programs', label: 'Programs' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' }];


  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <React.Fragment>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <div className="nav__brand" onClick={() => handleNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="uploads/cropped-logo.webp" alt="Kids Connect" style={{ height: 44, width: 'auto', display: 'block', objectFit: "fill" }} />
          </div>
          <div className="nav__links">
            {pages.map((p) =>
            <a key={p.id}
            className={`nav__link ${currentPage === p.id ? 'nav__link--active' : ''}`}
            onClick={() => handleNav(p.id)}>
              {p.label}</a>
            )}
            <a className="btn btn--accent btn--sm" onClick={() => handleNav('contact')}>
              Inquire Today
            </a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)}></div>
        <div className="mobile-menu__panel">
          <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>×</button>
          {pages.map((p) =>
          <div key={p.id}
          className={`mobile-menu__link ${currentPage === p.id ? 'mobile-menu__link--active' : ''}`}
          onClick={() => handleNav(p.id)}>
            {p.label}</div>
          )}
          <div style={{ marginTop: 16 }}>
            <a className="btn btn--accent" style={{ width: '100%' }} onClick={() => handleNav('contact')}>
              Inquire Today
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>);

}

/* ---------- FOOTER ---------- */
function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">Kids Connect</div>
            <p className="footer__desc">
              Helping neurodiverse children build friendships, confidence, and belonging through play-based social groups in Burnaby, BC.
            </p>
          </div>
          <div>
            <div className="footer__heading">Pages</div>
            <a className="footer__link" onClick={() => onNavigate('home')}>Home</a>
            <a className="footer__link" onClick={() => onNavigate('programs')}>Programs</a>
            <a className="footer__link" onClick={() => onNavigate('about')}>About</a>
            <a className="footer__link" onClick={() => onNavigate('faq')}>FAQ</a>
            <a className="footer__link" onClick={() => onNavigate('contact')}>Contact</a>
          </div>
          <div>
            <div className="footer__heading">Services</div>
            <span className="footer__link">Social Play Groups</span>
            <span className="footer__link">Autism Services</span>
            <span className="footer__link">Parent Coaching</span>
            <span className="footer__link">Advocacy</span>
          </div>
          <div>
            <div className="footer__heading">Contact</div>
            <span className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><MapPinIcon /> Burnaby, BC</span>
            <span className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><PhoneIcon /> (778) 772-3821</span>
            <span className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><MailIcon /> info@kidsconnect.ca</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Kids Connect. All rights reserved.</span>
          <span>Burnaby, BC · Serving the Lower Mainland</span>
        </div>
      </div>
    </footer>);

}

/* ---------- CTA BANNER ---------- */
function CTABanner({ onNavigate }) {
  return (
    <div className="section section--dark" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ marginBottom: 16 }}>Ready to Help Your Child Thrive?</h2>
        <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          Every child deserves to feel connected. Let's start with a conversation about how Kids Connect can support your family.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn--accent btn--lg" onClick={() => onNavigate('contact')}>Inquire Today <ArrowRight /></a>
          <a className="btn btn--white btn--lg" onClick={() => onNavigate('programs')}>View Programs</a>
        </div>
      </div>
    </div>);

}

/* ---------- SCROLL REVEAL HOOK ---------- */
function useReveal(ref) {
  React.useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {e.target.classList.add('reveal--visible');obs.unobserve(e.target);}
      });
    }, { threshold: 0.12 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ---------- EXPORT ---------- */
Object.assign(window, {
  Navigation, Footer, CTABanner, ImagePlaceholder,
  ChevronDown, ArrowRight, CheckCircle, PhoneIcon, MapPinIcon, MailIcon,
  useReveal
});