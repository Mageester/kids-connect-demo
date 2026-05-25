import React, { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import { ArrowRight } from '../components/icons.jsx';
import CTABanner from '../components/CTABanner.jsx';
import Seo from '../components/Seo.jsx';

export default function ProgramsPage({ onNavigate }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div className="page-enter" ref={ref}>
      <Seo
        title="Programs — Brick Club"
        description="Kids Connect — Brick Club uses LEGO® building and collaborative play to develop social skills for neurodiverse children ages 2–14 in Burnaby, BC."
        path="/programs"
      />
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{ marginBottom: 12 }}>Our Programs</span>
          <h1>Kids Connect – Brick Club</h1>
          <p>A play-based social group designed for neurodiverse children and teens — built on strengths, interests, and the joy of belonging.</p>
        </div>
      </div>

      <section className="section reveal">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge badge--accent" style={{ marginBottom: 16 }}>Flagship Program</span>
              <h2 style={{ marginBottom: 16 }}>What is Brick Club?</h2>
              <p className="text-secondary" style={{ marginBottom: 18, lineHeight: 1.82 }}>
                Kids Connect – Brick Club is our signature social play group, using LEGO® building as the vehicle for genuine social connection. Children work together in structured roles — Engineer, Supplier, and Builder — developing communication, cooperation, and problem-solving skills organically through play.
              </p>
              <p className="text-secondary" style={{ marginBottom: 18, lineHeight: 1.82 }}>
                Unlike scripted social skills programs, Brick Club meets children where they are. When kids are engaged in something they love — like building — the social learning happens naturally, joyfully, and in ways that stick.
              </p>
              <p className="text-secondary" style={{ lineHeight: 1.82 }}>
                Every session is thoughtfully designed around participants&apos; strengths and interests, with a neuroaffirming approach that celebrates each child exactly as they are.
              </p>
            </div>
            <div className="photo-card" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 56px rgba(0,0,0,0.12)' }}>
              <img
                src="/uploads/main-space_-1024x627.webp"
                alt="Kids Connect play space"
                width="1024"
                height="627"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 320 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt reveal">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 48 }}>Program at a Glance</h2>
          <div className="grid-4">
            {[
              { label: 'Ages', value: '2 – 14', desc: 'Preschoolers, children, and teens' },
              { label: 'Group Size', value: '3 – 4', desc: 'Small groups for meaningful interactions' },
              { label: 'Duration', value: '70 min', desc: 'Each session is 70 minutes' },
              { label: 'Schedule', value: 'Mon–Sat', desc: 'Weekdays after 3 PM · Saturdays 9 AM–6 PM' },
            ].map((item, i) => (
              <div key={item.label} className="card reveal" style={{ textAlign: 'center', transitionDelay: `${i * 0.09}s` }}>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 700,
                  color: 'var(--color-primary)', marginBottom: 4, lineHeight: 1.1,
                }}>{item.value}</div>
                <h4 style={{ marginBottom: 8, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</h4>
                <p className="card__text" style={{ fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="badge badge--primary" style={{ marginBottom: 16 }}>Our Method</span>
              <h2 style={{ marginBottom: 20 }}>Why Play-Based Learning Works</h2>
              <p className="text-secondary" style={{ marginBottom: 20, lineHeight: 1.82 }}>
                Play is the most natural way children learn about the social world. When skills are practiced through play, children are more engaged, less anxious, and far more likely to carry those skills into real-life situations.
              </p>
              <p className="text-secondary" style={{ marginBottom: 28, lineHeight: 1.82 }}>
                Our sessions incorporate four types of play to reach every kind of learner:
              </p>
              <div className="grid-2" style={{ gap: 16 }}>
                {[
                  { label: 'Constructive Play', desc: 'Building, designing, and creating together using LEGO® and other materials.' },
                  { label: 'Imaginative Play', desc: 'Storytelling, role-play, and creative scenarios that build perspective-taking.' },
                  { label: 'Sensory Play', desc: 'Tactile and sensory experiences that support regulation and engagement.' },
                  { label: 'STEM Play', desc: 'Problem-solving challenges that spark curiosity and collaborative thinking.' },
                ].map((p, i) => (
                  <div key={p.label} className="card reveal" style={{ padding: '20px', transitionDelay: `${i * 0.1}s` }}>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-primary)', marginBottom: 6 }}>{p.label}</div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{
                background: 'var(--color-primary)', borderRadius: 'var(--radius-lg)',
                padding: '36px', color: '#fff',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 16 }} aria-hidden="true">🎉</div>
                <h3 style={{ color: '#fff', marginBottom: 12 }}>Celebratory Sessions</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  Each program cycle ends with a celebratory party — complete with prizes and recognition for every participant. Children leave each session feeling accomplished, valued, and proud.
                </p>
              </div>
              <div className="card" style={{ background: 'var(--color-accent-light)', borderColor: 'transparent' }}>
                <h4 style={{ color: 'var(--color-accent-dark)', marginBottom: 10 }}>Together, we build:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {['Connection', 'Confidence', 'Community'].map((w, i) => (
                    <div key={w} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: 'var(--color-accent)', color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, fontSize: '0.82rem', flexShrink: 0,
                      }}>{i + 1}</span>
                      <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--primary reveal">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="badge badge--primary" style={{ marginBottom: 12 }}>Getting Started</span>
            <h2>How Placement Works</h2>
          </div>
          <div className="grid-3">
            {[
              { step: '01', title: 'Reach Out', desc: 'Fill out our inquiry form or give us a call at (778) 772-3631. Tell us a bit about your child and what you\'re hoping for.' },
              { step: '02', title: 'Phone Consultation', desc: 'We\'ll schedule a brief phone call to learn about your child\'s needs, goals, and interests, and determine the best group fit.' },
              { step: '03', title: 'Join a Group', desc: 'Your child is thoughtfully matched to a group by age and stage. Sessions begin at the next available intake date.' },
            ].map((item, i) => (
              <div key={item.step} className="card reveal" style={{ position: 'relative', transitionDelay: `${i * 0.1}s` }}>
                <div aria-hidden="true" style={{
                  fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700,
                  color: 'var(--color-primary)', opacity: 0.12, position: 'absolute',
                  top: 16, right: 20, lineHeight: 1, pointerEvents: 'none',
                }}>{item.step}</div>
                <h3 className="card__title" style={{ marginTop: 8 }}>{item.title}</h3>
                <p className="card__text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <h2 style={{ marginBottom: 16 }}>Funding &amp; Eligibility</h2>
          <p className="text-secondary" style={{ marginBottom: 16, lineHeight: 1.82 }}>
            Kids Connect is on the Registry for Autism Service Providers (RASP) and services can be directly billed to the Autism Funding Unit (AFU). Services may also qualify for CKNW Kids&apos; Fund, Jordan&apos;s Principle, and Distributed Learning funds.
          </p>
          <p className="text-secondary" style={{ marginBottom: 32, lineHeight: 1.82 }}>
            A formal autism diagnosis is not required to attend — our groups welcome all children who would benefit from social play-based learning. We&apos;re happy to help you navigate the Autism Funding Unit, write JFEs, and access grants and community-based resources.
          </p>
          <button type="button" className="btn btn--accent btn--lg" onClick={() => onNavigate('contact')}>
            Ask About Funding <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
