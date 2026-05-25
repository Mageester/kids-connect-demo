import React, { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import { MapPinIcon, PhoneIcon, MailIcon } from '../components/icons.jsx';
import Seo from '../components/Seo.jsx';

export default function ContactPage({ onNavigate }) {
  const ref = useRef(null);
  useReveal(ref);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', childAge: '',
    contactMethod: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <div className="page-enter" ref={ref}>
        <Seo
          title="Thank You"
          description="Your inquiry to Kids Connect has been received. We'll respond within 1–2 business days."
          path="/contact"
        />
        <div className="page-header">
          <div className="container">
            <span className="badge badge--primary" style={{ marginBottom: 12 }}>Thank You</span>
            <h1>We&apos;ve Received Your Inquiry</h1>
            <p>We&apos;ll be in touch within 1–2 business days to discuss how Kids Connect can support your family.</p>
          </div>
        </div>
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: 600 }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%', background: 'var(--color-primary-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px', color: 'var(--color-primary)',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 style={{ marginBottom: 16 }}>You&apos;re One Step Closer</h2>
            <p className="text-secondary" style={{ marginBottom: 32, lineHeight: 1.8 }}>
              Crista will review your message and reach out to schedule a phone consultation. In the meantime, feel free to explore our programs or read more about our approach.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn--primary" onClick={() => onNavigate('programs')}>View Programs</button>
              <button type="button" className="btn btn--outline" onClick={() => onNavigate('home')}>Back to Home</button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-enter" ref={ref}>
      <Seo
        title="Contact"
        description="Get in touch with Kids Connect. Inquire about social play groups, autism services, parent coaching, or funding eligibility in Burnaby, BC."
        path="/contact"
      />
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{ marginBottom: 12 }}>Contact</span>
          <h1>Let&apos;s Connect</h1>
          <p>We&apos;d love to hear from you. Tell us a bit about your child and we&apos;ll be in touch to discuss next steps.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2 reveal" style={{ alignItems: 'flex-start' }}>
            <div>
              <div style={{
                background: 'var(--color-card)', borderRadius: 'var(--radius)',
                padding: '40px', border: '1px solid var(--color-border)',
              }}>
                <h3 style={{ marginBottom: 24 }}>Inquiry Form</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Name <span className="required">*</span></label>
                    <input
                      id="contact-name"
                      className="form-input"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      required
                    />
                    {errors.name && <div id="err-name" className="form-error">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email <span className="required">*</span></label>
                    <input
                      id="contact-email"
                      className="form-input"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      required
                    />
                    {errors.email && <div id="err-email" className="form-error">{errors.email}</div>}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone</label>
                      <input
                        id="contact-phone"
                        className="form-input"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(xxx) xxx-xxxx"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-age">Child&apos;s Age</label>
                      <input
                        id="contact-age"
                        className="form-input"
                        type="text"
                        inputMode="numeric"
                        placeholder="e.g. 7"
                        value={form.childAge}
                        onChange={(e) => handleChange('childAge', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-method">Preferred Contact Method</label>
                    <select
                      id="contact-method"
                      className="form-select"
                      value={form.contactMethod}
                      onChange={(e) => handleChange('contactMethod', e.target.value)}
                    >
                      <option value="">Select one...</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="either">Either is fine</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Tell us a bit about your child and what you're looking for..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn--accent btn--lg"
                    style={{ width: '100%' }}
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
                <p className="text-light" style={{ fontSize: '0.82rem', marginTop: 16, textAlign: 'center' }}>
                  Your information is kept private and never shared with third parties.
                </p>
              </div>
            </div>

            <div>
              <div style={{
                background: 'var(--color-primary-light)', borderRadius: 'var(--radius)',
                padding: '36px', marginBottom: 24,
              }}>
                <h3 style={{ marginBottom: 20, color: 'var(--color-primary)' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-primary)', marginTop: 2 }}><MapPinIcon /></span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Location</div>
                      <div className="text-secondary" style={{ fontSize: '0.9rem' }}>6711 6th Street<br />Burnaby, BC</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-primary)', marginTop: 2 }}><PhoneIcon /></span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Phone</div>
                      <a className="text-secondary" href="tel:+17787723821" style={{ fontSize: '0.9rem', textDecoration: 'none', color: 'inherit' }}>(778) 772-3821</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-primary)', marginTop: 2 }}><MailIcon /></span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Email</div>
                      <a className="text-secondary" href="mailto:info@kidsconnect.ca" style={{ fontSize: '0.9rem', textDecoration: 'none', color: 'inherit' }}>info@kidsconnect.ca</a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'var(--color-card)', borderRadius: 'var(--radius)',
                padding: '36px', border: '1px solid var(--color-border)', marginBottom: 24,
              }}>
                <h3 style={{ marginBottom: 12 }}>Service Area</h3>
                <p className="text-secondary" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
                  We connect with families from Burnaby, New Westminster, Vancouver, North Vancouver, Coquitlam, Port Moody, Langley, Surrey, and throughout the Lower Mainland.
                </p>
              </div>

              <div style={{
                background: 'var(--color-accent-light)', borderRadius: 'var(--radius)',
                padding: '36px',
              }}>
                <h3 style={{ marginBottom: 12, color: 'var(--color-accent-dark)' }}>What Happens Next?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    'We review your inquiry within 1–2 business days',
                    'We schedule a phone consultation at your convenience',
                    'We match your child to the right group',
                    'Sessions begin at the next available start date',
                  ].map((item, i) => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: '50%', background: 'var(--color-accent)',
                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.72rem', fontWeight: 700, flexShrink: 0, marginTop: 1,
                      }}>{i + 1}</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
