/* ===== KIDS CONNECT — PROGRAMS & ABOUT PAGES v2 ===== */

/* ---------- PROGRAMS PAGE ---------- */
function ProgramsPage({ onNavigate }) {
  const ref = React.useRef(null);
  useReveal(ref);

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{marginBottom:12}}>Our Programs</span>
          <h1>Kids Connect – Brick Club</h1>
          <p>A play-based social group designed for neurodiverse children and teens — built on strengths, interests, and the joy of belonging.</p>
        </div>
      </div>

      {/* ---- MAIN PROGRAM ---- */}
      <section className="section reveal">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge badge--accent" style={{marginBottom:16}}>Flagship Program</span>
              <h2 style={{marginBottom:16}}>What is Brick Club?</h2>
              <p className="text-secondary" style={{marginBottom:18,lineHeight:1.82}}>
                Kids Connect – Brick Club is our signature social play group, using LEGO® building as the vehicle for genuine social connection. Children work together in structured roles — Engineer, Supplier, and Builder — developing communication, cooperation, and problem-solving skills organically through play.
              </p>
              <p className="text-secondary" style={{marginBottom:18,lineHeight:1.82}}>
                Unlike scripted social skills programs, Brick Club meets children where they are. When kids are engaged in something they love — like building — the social learning happens naturally, joyfully, and in ways that stick.
              </p>
              <p className="text-secondary" style={{lineHeight:1.82}}>
                Every session is thoughtfully designed around participants' strengths and interests, with a neuroaffirming approach that celebrates each child exactly as they are.
              </p>
            </div>
            <div className="photo-card" style={{overflow:'hidden',borderRadius:'var(--radius-lg)',boxShadow:'0 20px 56px rgba(0,0,0,0.12)'}}>
              <img src="uploads/main-space_-1024x627.webp" alt="Kids Connect Play Space"
                style={{width:'100%',height:'100%',objectFit:'cover',display:'block',minHeight:320}} />
            </div>
          </div>
        </div>
      </section>

      {/* ---- DETAILS GRID ---- */}
      <section className="section section--alt reveal">
        <div className="container">
          <h2 className="text-center" style={{marginBottom:48}}>Program at a Glance</h2>
          <div className="grid-4">
            {[
              {label:'Ages',value:'2 – 13',desc:'Grouped by age and developmental stage'},
              {label:'Group Size',value:'2 – 5',desc:'Small groups for meaningful interactions'},
              {label:'Duration',value:'1.5 – 2 hrs',desc:'Age-appropriate session lengths'},
              {label:'Schedule',value:'Weekday & Weekend',desc:'Flexible after-school & morning sessions'},
            ].map((item, i) => (
              <div key={i} className="card reveal" style={{textAlign:'center',transitionDelay:`${i*0.09}s`}}>
                <div style={{
                  fontFamily:'var(--font-heading)',fontSize:'1.9rem',fontWeight:700,
                  color:'var(--color-primary)',marginBottom:4,lineHeight:1.1
                }}>{item.value}</div>
                <h4 style={{marginBottom:8,fontSize:'0.92rem',textTransform:'uppercase',letterSpacing:'0.04em'}}>{item.label}</h4>
                <p className="card__text" style={{fontSize:'0.85rem'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- PLAY TYPES ---- */}
      <section className="section reveal">
        <div className="container">
          <div className="grid-2" style={{alignItems:'flex-start'}}>
            <div>
              <span className="badge badge--primary" style={{marginBottom:16}}>Our Method</span>
              <h2 style={{marginBottom:20}}>Why Play-Based Learning Works</h2>
              <p className="text-secondary" style={{marginBottom:20,lineHeight:1.82}}>
                Play is the most natural way children learn about the social world. When skills are practiced through play, children are more engaged, less anxious, and far more likely to carry those skills into real-life situations.
              </p>
              <p className="text-secondary" style={{marginBottom:28,lineHeight:1.82}}>
                Our sessions incorporate four types of play to reach every kind of learner:
              </p>
              <div className="grid-2" style={{gap:16}}>
                {[
                  {label:'Constructive Play',desc:'Building, designing, and creating together using LEGO® and other materials.'},
                  {label:'Imaginative Play',desc:'Storytelling, role-play, and creative scenarios that build perspective-taking.'},
                  {label:'Sensory Play',desc:'Tactile and sensory experiences that support regulation and engagement.'},
                  {label:'STEM Play',desc:'Problem-solving challenges that spark curiosity and collaborative thinking.'},
                ].map((p, i) => (
                  <div key={i} className="card reveal" style={{padding:'20px',transitionDelay:`${i*0.1}s`}}>
                    <div style={{fontWeight:700,fontSize:'0.88rem',color:'var(--color-primary)',marginBottom:6}}>{p.label}</div>
                    <p style={{fontSize:'0.84rem',color:'var(--color-text-secondary)',lineHeight:1.65}}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:20}}>
              <div style={{
                background:'var(--color-primary)',borderRadius:'var(--radius-lg)',
                padding:'36px',color:'#fff'
              }}>
                <div style={{fontSize:'2rem',marginBottom:16}}>🎉</div>
                <h3 style={{color:'#fff',marginBottom:12}}>Celebratory Sessions</h3>
                <p style={{color:'rgba(255,255,255,0.8)',lineHeight:1.75,fontSize:'0.95rem'}}>
                  Each program cycle ends with a celebratory party — complete with prizes and recognition for every participant. Children leave each session feeling accomplished, valued, and proud.
                </p>
              </div>
              <div className="card" style={{background:'var(--color-accent-light)',borderColor:'transparent'}}>
                <h4 style={{color:'var(--color-accent-dark)',marginBottom:10}}>Together, we build:</h4>
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  {['Connection','Confidence','Community'].map((w, i) => (
                    <div key={i} style={{display:'flex',alignItems:'center',gap:10}}>
                      <span style={{
                        width:32,height:32,borderRadius:8,
                        background:'var(--color-accent)',color:'#fff',
                        display:'flex',alignItems:'center',justifyContent:'center',
                        fontWeight:700,fontSize:'0.82rem',flexShrink:0
                      }}>{i+1}</span>
                      <span style={{fontWeight:600,color:'var(--color-text)'}}>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- HOW TO JOIN ---- */}
      <section className="section section--primary reveal">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <span className="badge badge--primary" style={{marginBottom:12}}>Getting Started</span>
            <h2>How Placement Works</h2>
          </div>
          <div className="grid-3">
            {[
              {step:'01',title:'Reach Out',desc:'Fill out our inquiry form or give us a call at (778) 772-3631. Tell us a bit about your child and what you\'re hoping for.'},
              {step:'02',title:'Phone Consultation',desc:'We\'ll schedule a brief phone call to learn about your child\'s needs, goals, and interests, and determine the best group fit.'},
              {step:'03',title:'Join a Group',desc:'Your child is thoughtfully matched to a group by age and stage. Sessions begin at the next available intake date.'},
            ].map((item, i) => (
              <div key={i} className="card reveal" style={{position:'relative',transitionDelay:`${i*0.1}s`}}>
                <div style={{
                  fontFamily:'var(--font-heading)',fontSize:'3rem',fontWeight:700,
                  color:'var(--color-primary)',opacity:0.12,position:'absolute',
                  top:16,right:20,lineHeight:1,pointerEvents:'none'
                }}>{item.step}</div>
                <h3 className="card__title" style={{marginTop:8}}>{item.title}</h3>
                <p className="card__text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FUNDING ---- */}
      <section className="section reveal">
        <div className="container" style={{textAlign:'center',maxWidth:720}}>
          <h2 style={{marginBottom:16}}>Funding &amp; Eligibility</h2>
          <p className="text-secondary" style={{marginBottom:16,lineHeight:1.82}}>
            Kids Connect programs are eligible for coverage through autism funding, MCFD, At Home Program, and other BC family support programs. A formal autism diagnosis is not required to attend — our groups welcome all neurodiverse children who would benefit from social play-based learning.
          </p>
          <p className="text-secondary" style={{marginBottom:32,lineHeight:1.82}}>
            We're happy to provide documentation to support your funding applications and guide you through the process.
          </p>
          <a className="btn btn--accent btn--lg" onClick={() => onNavigate('contact')}>
            Ask About Funding <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}

/* ---------- ABOUT PAGE ---------- */
function AboutPage({ onNavigate }) {
  const ref = React.useRef(null);
  useReveal(ref);

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-header">
        <div className="container">
          <span className="badge badge--primary" style={{marginBottom:12}}>About Us</span>
          <h1>Autism Services With Heart</h1>
          <p>Professional expertise and lived experience — creating a space where every child truly belongs.</p>
        </div>
      </div>

      {/* ---- CRISTA INTRO ---- */}
      <section className="section reveal">
        <div className="container">
          <div className="grid-2">
            <div style={{position:'relative',paddingBottom:28}}>
              <div className="photo-card" style={{maxWidth:440}}>
                <img src="uploads/Kundu-Fall-2023_0195-683x1024.webp"
                  alt="Crista Kundu — Founder of Kids Connect"
                  style={{width:'100%',display:'block',objectFit:'cover',maxHeight:580,objectPosition:'top center'}} />
              </div>
              <div style={{
                position:'absolute',bottom:0,right:0,
                background:'var(--color-accent)',color:'#fff',
                borderRadius:'var(--radius)',padding:'18px 22px',
                boxShadow:'0 8px 28px rgba(201,123,93,0.35)',
                maxWidth:210,zIndex:2
              }}>
                <div style={{fontWeight:700,fontSize:'0.95rem',marginBottom:2}}>RASP Registered</div>
                <div style={{fontSize:'0.78rem',opacity:0.88,lineHeight:1.4}}>Registry for Autism Service Providers</div>
              </div>
            </div>
            <div>
              <h2 style={{marginBottom:8}}>Crista Kundu</h2>
              <p style={{
                fontFamily:'var(--font-heading)',fontSize:'1.1rem',fontWeight:600,
                color:'var(--color-primary)',marginBottom:24,lineHeight:1.4
              }}>
                Certified Teacher · Autism Mom · RASP Behavior Consultant
              </p>
              <p className="text-secondary" style={{marginBottom:16,lineHeight:1.82}}>
                As an inclusion teacher, mom of two autistic children, and behavior consultant, I truly understand. You are your child's strongest advocate and biggest supporter. You know what makes them shine, where they struggle, and the barriers that stand in their way.
              </p>
              <p className="text-secondary" style={{marginBottom:16,lineHeight:1.82}}>
                Our autism services and social play groups are rooted in both professional expertise and lived experience. I'm registered with the Registry for Autism Service Providers (RASP), and my passion lies in supporting children with diverse needs, celebrating their strengths, and building strong, collaborative relationships with families.
              </p>
              <p className="text-secondary" style={{lineHeight:1.82}}>
                I'm also a proud mom of two amazing kids — my 10-year-old who loves freight trains and my 8-year-old who adores Calico Critters. Both are on the autism spectrum, and they've deeply shaped how I view connection, communication, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- ORIGIN STORY ---- */}
      <section className="section section--alt reveal">
        <div className="container" style={{maxWidth:820}}>
          <h2 className="text-center" style={{marginBottom:40}}>Why Kids Connect Exists</h2>
          <div style={{
            background:'var(--color-card)',borderRadius:'var(--radius-lg)',
            padding:'clamp(32px,5vw,52px)',border:'1px solid var(--color-border)',
            position:'relative',overflow:'hidden'
          }}>
            <div style={{
              position:'absolute',top:-10,left:24,
              fontFamily:'Georgia,serif',fontSize:'8rem',lineHeight:1,
              color:'var(--color-primary)',opacity:0.06,pointerEvents:'none'
            }}>"</div>
            <p className="text-secondary" style={{lineHeight:1.85,marginBottom:18,fontSize:'1.02rem',position:'relative',zIndex:1}}>
              My autistic son was nearly five when he said, "The most important thing is to make a friend. That's really hard for me." His words cut deep. Here was my bright, creative little boy — with an incredible memory and insatiable curiosity — struggling to connect with his peers.
            </p>
            <p className="text-secondary" style={{lineHeight:1.85,marginBottom:18,fontSize:'1.02rem',position:'relative',zIndex:1}}>
              That longing, that brave honesty, inspired me. I wanted to create a space where he would be embraced — a place where he could play, grow, and connect at his own pace, supported every step of the way.
            </p>
            <p className="text-secondary" style={{lineHeight:1.85,fontSize:'1.02rem',position:'relative',zIndex:1}}>
              This is how Kids Connect was born — a play-based social group built on acceptance, encouragement, and the joy of discovery. It is what I wanted for my son, and now provide through research-based autism services to families across the Lower Mainland.
            </p>
            <div style={{
              marginTop:28,paddingTop:24,
              borderTop:'1px solid var(--color-border)',
              fontFamily:'var(--font-heading)',fontSize:'0.95rem',
              fontWeight:600,color:'var(--color-primary)'
            }}>
              — Crista Kundu, Founder of Kids Connect
            </div>
          </div>
        </div>
      </section>

      {/* ---- CREDENTIALS ---- */}
      <section className="section reveal">
        <div className="container">
          <h2 className="text-center" style={{marginBottom:48}}>Education &amp; Qualifications</h2>
          <div className="grid-3">
            {[
              {
                title:'Education',
                items:[
                  'Master of Education in Special Education — Autism & Developmental Disabilities, UBC',
                  'Bachelor of Education, York University',
                  'Honours Bachelor of Art, York University'
                ]
              },
              {
                title:'Certifications',
                items:[
                  'BC Certified Learning Support Teacher',
                  'Certified PEERS and PEERS for Preschoolers Facilitator',
                  'Certified Reading Recovery Teacher',
                  'Special Education Specialist',
                  'PECS Level 1 & 2 Certified'
                ]
              },
              {
                title:'Training',
                items:[
                  'Zones of Regulation',
                  'Low Arousal Approach',
                  'Executive Function Skills — Sarah Ward',
                  'Collaborative Proactive Solutions — Dr. Ross Green',
                  'Positive Behavior Interventions and Supports'
                ]
              }
            ].map((col, i) => (
              <div key={i} className="card reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <h3 className="card__title" style={{color:'var(--color-primary)',marginBottom:20}}>{col.title}</h3>
                <div style={{display:'flex',flexDirection:'column',gap:12}}>
                  {col.items.map((item, j) => (
                    <div key={j} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                      <span style={{color:'var(--color-primary)',flexShrink:0,marginTop:3}}><CheckCircle /></span>
                      <span style={{fontSize:'0.9rem',color:'var(--color-text-secondary)',lineHeight:1.55}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- PHILOSOPHY ---- */}
      <section className="section section--primary reveal">
        <div className="container">
          <h2 className="text-center" style={{marginBottom:48}}>Our Philosophy</h2>
          <div className="grid-3">
            {[
              {num:'01',title:'Our Mission',text:'Facilitate social connections, social engagement, and social belonging for neurodiverse children and their families — one play session at a time.'},
              {num:'02',title:'Our Vision',text:'Provide programs and autism services that help neurodiverse individuals live authentically with confidence, joy, and a genuine sense of community.'},
              {num:'03',title:'Our Values',text:'An inclusive space that balances research-based practices with neuroaffirming approaches — celebrating every child\'s unique strengths and honoring their individuality.'}
            ].map((item, i) => (
              <div key={i} className="card reveal" style={{textAlign:'center',transitionDelay:`${i*0.1}s`}}>
                <div style={{
                  width:52,height:52,borderRadius:'50%',
                  background:'var(--color-primary-light)',display:'flex',
                  alignItems:'center',justifyContent:'center',
                  margin:'0 auto 20px',
                  fontFamily:'var(--font-heading)',fontSize:'1.2rem',fontWeight:700,
                  color:'var(--color-primary)'
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

Object.assign(window, { ProgramsPage, AboutPage });
