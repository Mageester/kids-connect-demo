/* ===== KIDS CONNECT — FAQ & CONTACT PAGES ===== */

/* ---------- FAQ PAGE ---------- */
function FAQPage({ onNavigate }) {
  const ref = React.useRef(null);
  useReveal(ref);
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqData = [
    {
      q: 'When do you offer social play groups?',
      a: 'Social play groups run during the school year, with sessions available after school on weekday evenings and on weekends. We offer fall, winter, and spring sessions. Summer programming may also be available — contact us for current scheduling.'
    },
    {
      q: 'What ages do you work with?',
      a: 'We work with children and teens ages 5 through 17. Participants are grouped by age and developmental stage to ensure the best social fit and learning opportunities for each child.'
    },
    {
      q: 'How many children are in each social play group?',
      a: 'Groups are intentionally small — typically 4 to 6 children per group. This allows for individualized attention, meaningful interactions, and a comfortable environment where every child feels seen and supported.'
    },
    {
      q: 'Why are play-based activities used to facilitate social skills?',
      a: 'Play is the most natural way children learn about the social world. When social skills are practiced through play, children are more engaged, less anxious, and more likely to generalize those skills to real-life situations. Activities are adapted to each child\'s interests to keep learning meaningful and motivating.'
    },
    {
      q: 'Does my child have to be autistic to attend?',
      a: 'No. While many of our participants are autistic, our groups welcome all neurodiverse children who would benefit from social play-based learning. A formal diagnosis is not required to participate.'
    },
    {
      q: 'Do you provide any other services?',
      a: 'In addition to social play groups, we offer individual support sessions, parent coaching, school advocacy, and consultation services. Contact us to learn more about how we can support your family\'s specific needs.'
    },
    {
      q: 'How long is a session?',
      a: 'Sessions are typically 1.5 to 2 hours depending on the age group. Younger groups tend to be shorter, while older groups may run longer to allow for more complex social activities and reflection.'
    },
    {
      q: 'I\'m interested in registering my child. What are the next steps?',
      a: 'Start by filling out our inquiry form or giving us a call at (778) 772-3821. We\'ll schedule a brief phone consultation to learn about your child, discuss your goals, and determine the best group fit. Once matched, your child can join at the next available start date.'
    },
    {
      q: 'How does billing work?',
      a: 'We bill monthly for ongoing group participation. Our services may be eligible for coverage through autism funding, MCFD, the At Home Program, and other family support programs. We\'re happy to provide documentation to support your funding applications.'
    }
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{marginBottom: 12}}>FAQ</span>
          <h1>Frequently Asked Questions</h1>
          <p>Answers to the most common questions from families about our social play groups and autism services.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{maxWidth: 800}}>
          <div className="reveal">
            {faqData.map((item, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                <button className="faq-item__question" onClick={() => toggleFAQ(i)}>
                  <span>{item.q}</span>
                  <ChevronDown />
                </button>
                <div className="faq-item__answer" style={{maxHeight: openIndex === i ? 300 : 0, opacity: openIndex === i ? 1 : 0}}>
                  <div className="faq-item__answer-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal" style={{marginTop: 56}}>
            <h3 style={{marginBottom: 12}}>Still Have Questions?</h3>
            <p className="text-secondary" style={{marginBottom: 24}}>
              We're happy to help. Reach out and we'll get back to you promptly.
            </p>
            <a className="btn btn--accent btn--lg" onClick={() => onNavigate('contact')}>
              Get in Touch <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}

/* ---------- CONTACT PAGE ---------- */
function ContactPage({ onNavigate }) {
  const ref = React.useRef(null);
  useReveal(ref);

  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', childAge: '',
    contactMethod: '', message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

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
    setForm(prev => ({...prev, [field]: value}));
    if (errors[field]) setErrors(prev => ({...prev, [field]: undefined}));
  };

  if (submitted) {
    return (
      <div className="page-enter" ref={ref}>
        <div className="page-header">
          <div className="container">
            <span className="badge badge--primary" style={{marginBottom: 12}}>Thank You</span>
            <h1>We've Received Your Inquiry</h1>
            <p>We'll be in touch within 1–2 business days to discuss how Kids Connect can support your family.</p>
          </div>
        </div>
        <section className="section" style={{textAlign: 'center'}}>
          <div className="container" style={{maxWidth: 600}}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%', background: 'var(--color-primary-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px', color: 'var(--color-primary)'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 style={{marginBottom: 16}}>You're One Step Closer</h2>
            <p className="text-secondary" style={{marginBottom: 32, lineHeight: 1.8}}>
              Crista will review your message and reach out to schedule a phone consultation. In the meantime, feel free to explore our programs or read more about our approach.
            </p>
            <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
              <a className="btn btn--primary" onClick={() => onNavigate('programs')}>View Programs</a>
              <a className="btn btn--outline" onClick={() => onNavigate('home')}>Back to Home</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{marginBottom: 12}}>Contact</span>
          <h1>Let's Connect</h1>
          <p>We'd love to hear from you. Tell us a bit about your child and we'll be in touch to discuss next steps.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2 reveal" style={{alignItems: 'flex-start'}}>
            {/* Form */}
            <div>
              <div style={{
                background: 'var(--color-card)', borderRadius: 'var(--radius)',
                padding: '40px', border: '1px solid var(--color-border)'
              }}>
                <h3 style={{marginBottom: 24}}>Inquiry Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Name <span className="required">*</span></label>
                    <input className="form-input" type="text" placeholder="Your full name"
                      value={form.name} onChange={e => handleChange('name', e.target.value)} />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email <span className="required">*</span></label>
                    <input className="form-input" type="email" placeholder="you@example.com"
                      value={form.email} onChange={e => handleChange('email', e.target.value)} />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input className="form-input" type="tel" placeholder="(xxx) xxx-xxxx"
                        value={form.phone} onChange={e => handleChange('phone', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Child's Age</label>
                      <input className="form-input" type="text" placeholder="e.g. 7"
                        value={form.childAge} onChange={e => handleChange('childAge', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Contact Method</label>
                    <select className="form-select"
                      value={form.contactMethod} onChange={e => handleChange('contactMethod', e.target.value)}>
                      <option value="">Select one...</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="either">Either is fine</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea"
                      placeholder="Tell us a bit about your child and what you're looking for..."
                      value={form.message} onChange={e => handleChange('message', e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn--accent btn--lg" style={{width: '100%'}}
                    disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
                <p className="text-light" style={{fontSize: '0.82rem', marginTop: 16, textAlign: 'center'}}>
                  Your information is kept private and never shared with third parties.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{
                background: 'var(--color-primary-light)', borderRadius: 'var(--radius)',
                padding: '36px', marginBottom: 24
              }}>
                <h3 style={{marginBottom: 20, color: 'var(--color-primary)'}}>Contact Information</h3>
                <div style={{display:'flex',flexDirection:'column',gap:16}}>
                  <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                    <span style={{color:'var(--color-primary)',marginTop:2}}><MapPinIcon /></span>
                    <div>
                      <div style={{fontWeight:600,fontSize:'0.95rem'}}>Location</div>
                      <div className="text-secondary" style={{fontSize:'0.9rem'}}>6711 6th Street<br/>Burnaby, BC</div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                    <span style={{color:'var(--color-primary)',marginTop:2}}><PhoneIcon /></span>
                    <div>
                      <div style={{fontWeight:600,fontSize:'0.95rem'}}>Phone</div>
                      <div className="text-secondary" style={{fontSize:'0.9rem'}}>(778) 772-3821</div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                    <span style={{color:'var(--color-primary)',marginTop:2}}><MailIcon /></span>
                    <div>
                      <div style={{fontWeight:600,fontSize:'0.95rem'}}>Email</div>
                      <div className="text-secondary" style={{fontSize:'0.9rem'}}>info@kidsconnect.ca</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'var(--color-card)', borderRadius: 'var(--radius)',
                padding: '36px', border: '1px solid var(--color-border)', marginBottom: 24
              }}>
                <h3 style={{marginBottom: 12}}>Service Area</h3>
                <p className="text-secondary" style={{fontSize:'0.92rem',lineHeight:1.7}}>
                  We connect with families from Burnaby, New Westminster, Vancouver, North Vancouver, Coquitlam, Port Moody, Langley, Surrey, and throughout the Lower Mainland.
                </p>
              </div>

              <div style={{
                background: 'var(--color-accent-light)', borderRadius: 'var(--radius)',
                padding: '36px'
              }}>
                <h3 style={{marginBottom: 12, color: 'var(--color-accent-dark)'}}>What Happens Next?</h3>
                <div style={{display:'flex',flexDirection:'column',gap:14}}>
                  {[
                    'We review your inquiry within 1–2 business days',
                    'We schedule a phone consultation at your convenience',
                    'We match your child to the right group',
                    'Sessions begin at the next available start date'
                  ].map((item, i) => (
                    <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                      <span style={{
                        width:22,height:22,borderRadius:'50%',background:'var(--color-accent)',
                        color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',
                        fontSize:'0.72rem',fontWeight:700,flexShrink:0,marginTop:1
                      }}>{i+1}</span>
                      <span style={{fontSize:'0.9rem',color:'var(--color-text-secondary)'}}>{item}</span>
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

Object.assign(window, { FAQPage, ContactPage });
