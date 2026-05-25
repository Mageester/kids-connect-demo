import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from './icons.jsx';

export default function Footer({ onNavigate }) {
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
            <button type="button" className="footer__link" onClick={() => onNavigate('home')}>Home</button>
            <button type="button" className="footer__link" onClick={() => onNavigate('programs')}>Programs</button>
            <button type="button" className="footer__link" onClick={() => onNavigate('about')}>About</button>
            <button type="button" className="footer__link" onClick={() => onNavigate('faq')}>FAQ</button>
            <button type="button" className="footer__link" onClick={() => onNavigate('contact')}>Contact</button>
          </div>
          <div>
            <div className="footer__heading">Services</div>
            <span className="footer__link">Social Play Groups</span>
            <span className="footer__link">Individual Support</span>
            <span className="footer__link">Parent Coaching</span>
            <span className="footer__link">School Advocacy</span>
            <span className="footer__link">Consultation</span>
          </div>
          <div>
            <div className="footer__heading">Contact</div>
            <span className="footer__link" style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <MapPinIcon /> <span>6711 6th Street<br />Burnaby, BC</span>
            </span>
            <a className="footer__link" href="tel:+17787723631" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PhoneIcon /> (778) 772-3631
            </a>
            <a className="footer__link" href="mailto:kidsconnectburnaby@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, wordBreak: 'break-all' }}>
              <MailIcon /> kidsconnectburnaby@gmail.com
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Kids Connect. All rights reserved.</span>
          <span>Burnaby, BC · Serving the Lower Mainland</span>
        </div>
      </div>
    </footer>
  );
}
