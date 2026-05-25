import React from 'react';
import { ArrowRight } from './icons.jsx';

export default function CTABanner({ onNavigate }) {
  return (
    <div className="section section--dark" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ marginBottom: 16 }}>Ready to Help Your Child Thrive?</h2>
        <p
          className="text-secondary"
          style={{ fontSize: '1.1rem', marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}
        >
          Every child deserves to feel connected. Let's start with a conversation about how Kids Connect can support your family.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button type="button" className="btn btn--accent btn--lg" onClick={() => onNavigate('contact')}>
            Inquire Today <ArrowRight />
          </button>
          <button type="button" className="btn btn--white btn--lg" onClick={() => onNavigate('programs')}>
            View Programs
          </button>
        </div>
      </div>
    </div>
  );
}
