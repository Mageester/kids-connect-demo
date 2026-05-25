import React, { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import { CheckCircle } from '../components/icons.jsx';
import CTABanner from '../components/CTABanner.jsx';
import Seo from '../components/Seo.jsx';

export default function AboutPage({ onNavigate }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div className="page-enter" ref={ref}>
      <Seo
        title="About — Crista Kundu & Our Mission"
        description="Meet Crista Kundu — RASP-registered behavior consultant, autism mom, and founder of Kids Connect. Professional autism services rooted in lived experience."
        path="/about"
        image="/uploads/Kundu-Fall-2023_0195-683x1024.webp"
      />
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{ marginBottom: 12 }}>About Us</span>
          <h1>Autism Services With Heart</h1>
          <p>Professional expertise and lived experience — creating a space where every child truly belongs.</p>
        </div>
      </div>

      <section className="section reveal">
        <div className="container">
          <div className="grid-2">
            <div style={{ position: 'relative', paddingBottom: 28 }}>
              <div className="photo-card" style={{ maxWidth: 440 }}>
                <img
                  src="/uploads/Kundu-Fall-2023_0195-683x1024.webp"
                  alt="Crista Kundu, Founder of Kids Connect"
                  width="683"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: 580, objectPosition: 'top center' }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                background: 'var(--color-accent)', color: '#fff',
                borderRadius: 'var(--radius)', padding: '18px 22px',
                boxShadow: '0 8px 28px rgba(201,123,93,0.35)',
                maxWidth: 210, zIndex: 2,
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>RASP Registered</div>
                <div style={{ fontSize: '0.78rem', opacity: 0.88, lineHeight: 1.4 }}>Registry for Autism Service Providers</div>
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: 8 }}>Crista Kundu</h2>
              <p style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600,
                color: 'var(--color-primary)', marginBottom: 24, lineHeight: 1.4,
              }}>
                Certified Teacher · Autism Mom · RASP Behavior Consultant
              </p>
              <p className="text-secondary" style={{ marginBottom: 16, lineHeight: 1.82 }}>
                As an inclusion teacher, mom of two autistic children, and behavior consultant, I truly understand. You are your child&apos;s strongest advocate and biggest supporter. You know what makes them shine, where they struggle, and the barriers that stand in their way.
              </p>
              <p className="text-secondary" style={{ marginBottom: 16, lineHeight: 1.82 }}>
                Our autism services and social play groups are rooted in both professional expertise and lived experience. I&apos;m registered with the Registry for Autism Service Providers (RASP), and my passion lies in supporting children with diverse needs, celebrating their strengths, and building strong, collaborative relationships with families.
              </p>
              <p className="text-secondary" style={{ lineHeight: 1.82 }}>
                I&apos;m also a proud mom of two amazing kids — my 10-year-old who loves freight trains and my 8-year-old who adores Calico Critters. Both are on the autism spectrum, and they&apos;ve deeply shaped how I view connection, communication, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt reveal">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="text-center" style={{ marginBottom: 40 }}>Why Kids Connect Exists</h2>
          <div style={{
            background: 'var(--color-card)', borderRadius: 'var(--radius-lg)',
            padding: 'clamp(32px,5vw,52px)', border: '1px solid var(--color-border)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden="true" style={{
              position: 'absolute', top: -10, left: 24,
              fontFamily: 'Georgia,serif', fontSize: '8rem', lineHeight: 1,
              color: 'var(--color-primary)', opacity: 0.06, pointerEvents: 'none',
            }}>&ldquo;</div>
            <p className="text-secondary" style={{ lineHeight: 1.85, marginBottom: 18, fontSize: '1.02rem', position: 'relative', zIndex: 1 }}>
              My autistic son was nearly five when he said, &ldquo;The most important thing is to make a friend. That&apos;s really hard for me.&rdquo; His words cut deep. Here was my bright, creative little boy — with an incredible memory and insatiable curiosity — struggling to connect with his peers.
            </p>
            <p className="text-secondary" style={{ lineHeight: 1.85, marginBottom: 18, fontSize: '1.02rem', position: 'relative', zIndex: 1 }}>
              That longing, that brave honesty, inspired me. I wanted to create a space where he would be embraced — a place where he could play, grow, and connect at his own pace, supported every step of the way.
            </p>
            <p className="text-secondary" style={{ lineHeight: 1.85, fontSize: '1.02rem', position: 'relative', zIndex: 1 }}>
              This is how Kids Connect was born — a play-based social group built on acceptance, encouragement, and the joy of discovery. It is what I wanted for my son, and now provide through research-based autism services to families across the Lower Mainland.
            </p>
            <div style={{
              marginTop: 28, paddingTop: 24,
              borderTop: '1px solid var(--color-border)',
              fontFamily: 'var(--font-heading)', fontSize: '0.95rem',
              fontWeight: 600, color: 'var(--color-primary)',
            }}>
              — Crista Kundu, Founder of Kids Connect
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 48 }}>Education &amp; Qualifications</h2>
          <div className="grid-3">
            {[
              {
                title: 'Education',
                items: [
                  'Master of Education in Special Education — Autism & Developmental Disabilities, UBC',
                  'Bachelor of Education, York University',
                  'Honours Bachelor of Art, York University',
                ],
              },
              {
                title: 'Certifications',
                items: [
                  'BC Certified Learning Support Teacher',
                  'Certified PEERS and PEERS for Preschoolers Facilitator',
                  'Certified Reading Recovery Teacher',
                  'Special Education Specialist',
                  'PECS Level 1 & 2 Certified',
                ],
              },
              {
                title: 'Training',
                items: [
                  'Zones of Regulation',
                  'Low Arousal Approach',
                  'Executive Function Skills — Sarah Ward',
                  'Collaborative Proactive Solutions — Dr. Ross Greene',
                  'Positive Behavior Interventions and Supports',
                ],
              },
            ].map((col, i) => (
              <div key={col.title} className="card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="card__title" style={{ color: 'var(--color-primary)', marginBottom: 20 }}>{col.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 3 }}><CheckCircle /></span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--primary reveal">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 48 }}>Our Philosophy</h2>
          <div className="grid-3">
            {[
              { num: '01', title: 'Our Mission', text: 'Facilitate social connections, social engagement, and social belonging for neurodiverse children and their families — one play session at a time.' },
              { num: '02', title: 'Our Vision', text: 'Provide programs and autism services that help neurodiverse individuals live authentically with confidence, joy, and a genuine sense of community.' },
              { num: '03', title: 'Our Values', text: 'An inclusive space that balances research-based practices with neuroaffirming approaches — celebrating every child\'s unique strengths and honoring their individuality.' },
            ].map((item, i) => (
              <div key={item.num} className="card reveal" style={{ textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'var(--color-primary-light)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700,
                  color: 'var(--color-primary)',
                }}>{item.num}</div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
