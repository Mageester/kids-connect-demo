import React, { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import { ArrowRight, CheckCircle } from '../components/icons.jsx';
import CTABanner from '../components/CTABanner.jsx';
import Seo from '../components/Seo.jsx';

export default function HomePage({ onNavigate }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div className="page-enter" ref={ref}>
      <Seo
        title="Social Play Groups for Neurodiverse Children"
        description="Kids Connect — Brick Club is a small-group, play-based social program for neurodiverse children and teens in Burnaby, BC. RASP-registered autism services."
        path="/"
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <div className="hero__eyebrow hero-el hero-el-1">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block', flexShrink: 0 }}></span>
                Burnaby, BC · Play-Based · Neuroaffirming
              </div>
              <h1 className="hero__title hero-el hero-el-2">
                Social Play Groups for Neurodiverse Children
              </h1>
              <p className="hero__subtitle hero-el hero-el-3">
                Kids Connect – Brick Club builds real friendships, confidence, and social skills through small-group, play-based sessions designed for neurodiverse children and teens in Burnaby.
              </p>
              <div className="hero__actions hero-el hero-el-4">
                <button type="button" className="btn btn--primary btn--lg" onClick={() => onNavigate('programs')}>
                  View Programs <ArrowRight size={18} />
                </button>
                <button type="button" className="btn btn--outline btn--lg" onClick={() => onNavigate('contact')}>
                  Book a Call
                </button>
              </div>
              <div className="hero-el hero-el-5" style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {['Ages 2–13', '2–5 per group', 'Weekday & Weekend', 'Funding Eligible'].map((tag) => (
                  <span key={tag} className="badge badge--primary" style={{ fontSize: '0.8rem' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="hero__image-wrap hero-img" style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.14)' }}>
              <img
                src="/uploads/main-space_-1024x627.webp"
                alt="Kids Connect play space in Burnaby"
                width="1024"
                height="627"
                fetchpriority="high"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(21,85,85,0.85) 0%, transparent 100%)',
                  padding: '40px 24px 20px',
                }}
              >
                <div style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600, fontSize: '0.88rem' }}>
                  Our play space · 6th &amp; Mayfield, Burnaby
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: 'var(--color-primary)', padding: '18px 0' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.88)', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.01em' }}>
            Serving families across Burnaby · New Westminster · Vancouver · Coquitlam · Port Moody · North Vancouver · Langley · Surrey
          </p>
        </div>
      </div>

      {/* EMPATHY QUOTE */}
      <section className="section reveal" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            style={{
              background: 'var(--color-card)', borderRadius: 'var(--radius-lg)',
              padding: 'clamp(32px,5vw,56px)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute', top: -10, left: 24,
                fontFamily: 'Georgia,serif', fontSize: '8rem', lineHeight: 1,
                color: 'var(--color-primary)', opacity: 0.07, pointerEvents: 'none', userSelect: 'none',
              }}
            >
              &ldquo;
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <blockquote
                style={{
                  fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem,2.8vw,1.9rem)',
                  fontWeight: 600, lineHeight: 1.5, color: 'var(--color-text)',
                  marginBottom: 16, textWrap: 'pretty',
                }}
              >
                The most important thing is to make a friend.<br />That&apos;s really hard for me.
              </blockquote>
              <cite style={{ display: 'block', fontSize: '0.88rem', color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 600, marginBottom: 28 }}>
                — A.K., age 5, 2020
              </cite>
              <p className="text-secondary" style={{ fontSize: '1.02rem', lineHeight: 1.82, maxWidth: 640 }}>
                Those words belong to Crista Kundu&apos;s son. They&apos;re also why Kids Connect exists. If they resonate with you, you&apos;ve found the right place — a space built so children like yours can play, grow, and connect on their own terms, supported every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRICK CLUB FEATURE */}
      <section className="section reveal">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="badge badge--accent" style={{ marginBottom: 16 }}>Flagship Program</span>
              <h2 style={{ marginBottom: 16 }}>Kids Connect — Brick Club</h2>
              <p className="text-secondary" style={{ marginBottom: 24, lineHeight: 1.82, fontSize: '1.02rem' }}>
                Our signature program uses LEGO® building and collaborative play to develop meaningful social skills. Children work together to create, problem-solve, and connect — discovering that friendship can be built one brick at a time.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                {[
                  'Incorporates each child\'s strengths, interests, and creativity',
                  'Enhances communication, collaboration & emotional regulation',
                  'Constructive, imaginative, sensory, and STEM-based play',
                  'Celebratory sessions with parties and prizes included',
                  'Neuroaffirming, inclusive, and research-based approach',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }}><CheckCircle /></span>
                    <span className="text-secondary" style={{ fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <button type="button" className="btn btn--primary" onClick={() => onNavigate('programs')}>
                  Program Details <ArrowRight size={18} />
                </button>
                <button type="button" className="btn btn--outline" onClick={() => onNavigate('contact')}>
                  Inquire Today
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Age Range', value: '2 – 13', sub: 'Grouped by age & developmental stage' },
                { label: 'Group Size', value: '2 – 5', sub: 'Small, intentional groups only' },
                { label: 'Schedule', value: 'Flexible', sub: 'Weekday & weekend sessions available' },
                { label: 'Session', value: '1.5 – 2 hrs', sub: 'Age-appropriate duration per group' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="card reveal"
                  style={{
                    transitionDelay: `${i * 0.09}s`,
                    display: 'flex', alignItems: 'center', gap: 20,
                    padding: '20px 24px',
                  }}
                >
                  <div
                    style={{
                      minWidth: 72, textAlign: 'center',
                      fontFamily: 'var(--font-heading)', fontSize: '1.25rem',
                      fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.2,
                    }}
                  >
                    {item.value}
                  </div>
                  <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 16, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 2 }}>{item.label}</div>
                    <div className="text-light" style={{ fontSize: '0.82rem' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section section--alt reveal">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <span className="badge badge--primary" style={{ marginBottom: 12 }}>What We Offer</span>
            <h2>Not Your Typical Social Skills Group</h2>
            <p className="text-secondary" style={{ maxWidth: 580, margin: '16px auto 0', lineHeight: 1.75 }}>
              Every element of our program is designed around the child — their strengths, interests, and pace.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                title: 'Genuine Social Connection',
                text: 'Small-group play sessions where children practice real-world social skills — making friends, sharing, turn-taking — in a safe, supportive, and joyful environment.',
                type: 'teal',
              },
              {
                title: 'Confidence & Belonging',
                text: 'Activities rooted in each child\'s interests celebrate what makes them uniquely wonderful, nurturing genuine self-esteem and a true sense of belonging.',
                type: 'warm',
              },
              {
                title: 'Emotional Regulation',
                text: 'Using Zones of Regulation and play-based techniques, children learn to recognize and manage their emotions — building resilience that carries into daily life.',
                type: 'teal',
              },
            ].map((card, i) => (
              <div key={card.title} className="card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className={`card__icon card__icon--${card.type}`}>
                  {i === 0 && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 010 7.75"></path>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  )}
                </div>
                <h3 className="card__title">{card.title}</h3>
                <p className="card__text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET CRISTA */}
      <section className="section reveal">
        <div className="container">
          <div className="grid-2">
            <div style={{ position: 'relative', paddingBottom: 24 }}>
              <div className="photo-card" style={{ maxWidth: 420 }}>
                <img
                  src="/uploads/Kundu-Fall-2023_0195-683x1024.webp"
                  alt="Crista Kundu, Founder of Kids Connect"
                  width="683"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', display: 'block', maxHeight: 520, objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute', bottom: 0, right: 0,
                  background: 'var(--color-accent)', color: '#fff',
                  borderRadius: 'var(--radius)', padding: '18px 22px',
                  boxShadow: '0 8px 28px rgba(201,123,93,0.35)',
                  zIndex: 2, maxWidth: 200,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>RASP Registered</div>
                <div style={{ fontSize: '0.78rem', opacity: 0.9, lineHeight: 1.4 }}>Registry for Autism Service Providers</div>
              </div>
            </div>
            <div>
              <span className="badge badge--primary" style={{ marginBottom: 16 }}>Meet the Founder</span>
              <h2 style={{ marginBottom: 8 }}>Crista Kundu</h2>
              <p style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600,
                color: 'var(--color-primary)', marginBottom: 24, lineHeight: 1.4,
              }}>
                Certified Teacher · Autism Mom · Behavior Consultant
              </p>
              <p className="text-secondary" style={{ marginBottom: 16, lineHeight: 1.82 }}>
                As an inclusion teacher, mom of two autistic children, and RASP-registered behavior consultant, Crista understands your journey from both sides. She built Kids Connect so children like her own could play, grow, and connect — fully supported, every step of the way.
              </p>
              <p className="text-secondary" style={{ marginBottom: 28, lineHeight: 1.82 }}>
                With a Master of Education in Special Education from UBC and deep lived experience, Crista brings professional rigor and genuine personal warmth to every session. She sees and celebrates each child as an individual.
              </p>
              <button type="button" className="btn btn--outline" onClick={() => onNavigate('about')}>
                Read Crista&apos;s Full Story <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--alt reveal">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="badge badge--accent" style={{ marginBottom: 12 }}>What Families Say</span>
            <h2>Trusted by Families Across the Lower Mainland</h2>
          </div>
          <div className="grid-3">
            {[
              {
                title: 'Welcoming & Supportive',
                text: '"I am incredibly grateful to Crista. My son has been attending for over 2 years and the progress he has made on his social skills and overall confidence has been remarkable. It is one program that, week after week, my son is always excited to go to — he has never once complained."',
                name: 'Linda',
              },
              {
                title: 'Enjoyable & Engaging',
                text: '"Crista is an outstanding guide. Her captivating approach draws kids in and leads to notable improvements in social skills and emotional resilience. My children have become better at managing frustration. I wholeheartedly recommend her services, which have significantly benefited us as a family."',
                name: 'Tuliana',
              },
              {
                title: 'Learning Lifelong Skills',
                text: '"My son has been attending Kids Connect – Brick Club for 3 years and he loves it! Crista puts so much thought into each group. At Brick Club, my son is gaining lego skills while learning how to socialize. Your work is so meaningful in shaping our children and future society. Thank you."',
                name: 'Saneha',
              },
            ].map((t, i) => (
              <div key={t.name} className="testimonial reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="testimonial__stars" aria-label="5 out of 5 stars">★★★★★</div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.98rem',
                  color: 'var(--color-primary)', marginBottom: 12,
                }}>
                  {t.title}
                </div>
                <p className="testimonial__text">{t.text}</p>
                <div className="testimonial__author">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING */}
      <section className="reveal" style={{ background: 'var(--color-primary-light)', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: 10 }}>Eligible for Autism &amp; Other Funding</h3>
          <p className="text-secondary" style={{ maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.75 }}>
            Our programs may be covered through autism funding, MCFD, At Home Program, and other family support programs across BC.
          </p>
          <button type="button" className="btn btn--primary btn--sm" onClick={() => onNavigate('contact')}>
            Ask About Funding
          </button>
        </div>
      </section>

      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
