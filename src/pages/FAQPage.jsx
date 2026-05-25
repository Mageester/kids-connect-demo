import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useReveal from '../hooks/useReveal.js';
import { ChevronDown, ArrowRight } from '../components/icons.jsx';
import CTABanner from '../components/CTABanner.jsx';
import Seo from '../components/Seo.jsx';

const faqData = [
  {
    q: 'When do you offer social play groups?',
    a: 'Group sessions are available Monday to Friday after 3:00 PM and on Saturdays. Weekday sessions are often held at 3:30 or 4:30 PM. Saturday sessions are held between 9:00 AM and 6:00 PM. Fall, winter, and spring sessions are offered. Summer programming may also be available — contact for current scheduling.',
  },
  {
    q: 'What ages do you work with?',
    a: 'Kids Connect facilitates groups for preschoolers, children, and teens between ages 2–14. Session structure and activities vary depending on the age group.',
  },
  {
    q: 'How many children are in each social play group?',
    a: 'Group sizes typically range from three to four children. Groups are intentionally small to support individual strengths, needs, and comfort.',
  },
  {
    q: 'Why are play-based activities used to facilitate social skills?',
    a: 'Play is intrinsically motivating and supports participation, connection, communication, and skill development in a natural way.',
  },
  {
    q: 'Does my child have to be autistic to attend?',
    a: 'No. Kids Connect welcomes and supports all children, though many participants are autistic or neurodiverse.',
  },
  {
    q: 'Do you provide any other services?',
    a: 'In addition to social play groups, Kids Connect offers individual support sessions, parent coaching, school advocacy, consultation services, and support navigating funding, grants, community resources, JFEs, and additional service providers.',
  },
  {
    q: 'How long is a session?',
    a: 'Each session is 70 minutes.',
  },
  {
    q: 'I\'m interested in registering my child. What are the next steps?',
    a: 'Families can get in touch through the website or email kidsconnectburnaby@gmail.com. Before registration, Kids Connect requires a completed intake form and will discuss potential group placement recommendations.',
  },
  {
    q: 'How does billing work?',
    a: 'Kids Connect is on the Registry for Autism Service Providers (RASP) and can directly bill the Autism Funding Unit (AFU). Services may also qualify for CKNW Kids’ Fund, Jordan’s Principle, and Distributed Learning funds.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FAQPage({ onNavigate }) {
  const ref = useRef(null);
  useReveal(ref);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="page-enter" ref={ref}>
      <Seo
        title="FAQ — Common Questions"
        description="Answers to common questions about Kids Connect social play groups, autism services, scheduling, funding, ages served, and how to register."
        path="/faq"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{ marginBottom: 12 }}>FAQ</span>
          <h1>Frequently Asked Questions</h1>
          <p>Answers to the most common questions from families about our social play groups and autism services.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="reveal">
            {faqData.map((item, i) => (
              <div key={item.q} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-item__question"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.q}</span>
                  <ChevronDown />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq-item__answer"
                  style={{ maxHeight: openIndex === i ? 600 : 0, opacity: openIndex === i ? 1 : 0 }}
                >
                  <div className="faq-item__answer-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal" style={{ marginTop: 56 }}>
            <h3 style={{ marginBottom: 12 }}>Still Have Questions?</h3>
            <p className="text-secondary" style={{ marginBottom: 24 }}>
              We&apos;re happy to help. Reach out and we&apos;ll get back to you promptly.
            </p>
            <button type="button" className="btn btn--accent btn--lg" onClick={() => onNavigate('contact')}>
              Get in Touch <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
