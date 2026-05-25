import React from 'react';
import Seo from '../components/Seo.jsx';

export default function NotFoundPage({ onNavigate }) {
  return (
    <div className="page-enter">
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found. Return to Kids Connect home."
        path="/"
      />
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{ marginBottom: 12 }}>404</span>
          <h1>Page Not Found</h1>
          <p>The page you were looking for doesn&apos;t exist or has moved.</p>
        </div>
      </div>
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn--primary btn--lg" onClick={() => onNavigate('home')}>Back to Home</button>
            <button type="button" className="btn btn--outline btn--lg" onClick={() => onNavigate('contact')}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}
