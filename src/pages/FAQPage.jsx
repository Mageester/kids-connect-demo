import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useReveal from '../hooks/useReveal.js';
import { ChevronDown, ArrowRight } from '../components/icons.jsx';
import CTABanner from '../components/CTABanner.jsx';
import Seo from '../components/Seo.jsx';

const faqData = [
  {
    q: 'When do you offer social play groups?',
    a: 'Social play groups run during the school year, with sessions available after school on weekday evenings and on weekends. We offer fall, winter, and spring sessions. Summer programming may also be available — contact us for current scheduling.',
  },
  {
    q: 'What ages do you work with?',
    a: 'We work with children and teens ages 5 through 17. Participants are grouped by age and developmental stage to ensure the best social fit and learning opportunities for each child.',
  },
  {
    q: 'How many children are in each social play group?',
    a: 'Groups are intentionally small — typically 4 to 6 children per group. This allows for individualized attention, meaningful interactions, and a comfortable environment where every child feels seen and supported.',
  },
  {
    q: 'Why are play-based activities used to facilitate social skills?',
    a: 'Play is the most natural way children learn about the social world. When social skills are practiced through play, children are more engaged, less anxious, and more likely to generalize those skills to real-life situations. Activities are adapted to each child\'s interests to keep learning meaningful and motivating.',
  },
  {
    q: 'Does my child have to be autistic to attend?',
    a: 'No. While many of our participants are autistic, our groups welcome all neurodiverse children who would benefit from social play-based learning. A formal diagnosis is not required to participate.',
  },
  {
    q: 'Do you provide any other services?',
    a: 'In addition to social play groups, we offer individual support sessions, parent coaching, school advocacy, and consultation services. Contact us to learn more about how we can support your family\'s specific needs.',
  },
  {
    q: 'How long is a session?',
    a: 'Sessions are typically 1.5 to 2 hours depending on the age group. Younger groups tend to be shorter, while older groups may run longer to allow for more complex social activities and reflection.',
  },
  {
    q: 'I\'m interested in registering my child. What are the next steps?',
    a: 'Start by filling out our inquiry form or giving us a call at (778) 772-3821. We\'ll schedule a brief phone consultation to learn about your child, discuss your goals, and determine the best group fit. Once matched, your child can join at the next available start date.',
  },
  {
    q: 'How does billing work?',
    a: 'We bill monthly for ongoing group participation. Our services may be eligible for coverage through autism funding, MCFD, the At Home Program, and other family support programs. We\'re happy to provide documentation to support your funding applications.',
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
                  style={{ maxHeight: openIndex === i ? 400 : 0, opacity: openIndex === i ? 1 : 0 }}
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
