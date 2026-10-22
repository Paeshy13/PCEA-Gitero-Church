import React, { useEffect, useMemo, useState } from 'react';

const ministries = [
  {
    id: 'cs',
    tab: 'Church School',
    who: 'For our youngest members',
    about: 'Where young children get to know their Maker from a young age.',
    quote: 'Train up a child in the way he should go: and when he is old, he will not depart from it.',
    verse: 'Proverbs 22:6',
    time: 'Church School service: 8:30 A.M. to 11:30 A.M.',
    logo: '/logos/pcea.png',
  },
  {
    id: 'wg',
    tab: 'Woman’s Guild',
    who: 'For women of the church',
    vision: 'To be an inclusive Christian women’s organization empowering women to transform society.',
    mission: 'To empower Christian women for societal transformation through worship, fellowship, advocacy, training, and Christian values.',
    motto: 'Whom I am is who I serve.',
    vals: ['Worship', 'Fellowship', 'Advocacy', 'Training', 'Christian values'],
    about: 'A ladies’ group that spreads the word with compassion.',
    logo: '/logos/wg.png',
  },
  {
    id: 'pcmf',
    tab: 'PCMF Men’s Fellowship',
    who: 'For men and boys of faith',
    vision: 'Spiritual maturity of men and service to the glory of God.',
    mission: 'To be a united Christian force for men of faith, witness, and service to Jesus Christ.',
    motto: 'Never lacking in zeal, be fervent in spirit, serving the Lord with a heart full of devotion.',
    verse: 'Romans 12:11 (also Joshua 24:15: “As for me and my house, we will serve the Lord”)',
    vals: ['Integrity', 'Faithfulness', 'Commitment', 'Humility', 'Passion', 'Zeal'],
    about: 'A fellowship that makes Christ known through generations, fostering spiritual growth and service among men and boys.',
    logo: '/logos/pcmf.png',
  },
  {
    id: 'yf',
    tab: 'Youth Fellowship',
    who: 'For young people aged 15 to 35',
    vision: 'A vibrant and well-coordinated youth movement in East Africa and beyond.',
    mission: 'To bring young people into fellowship, discipleship, and evangelism; to raise and equip emerging leaders for Church and society; and to empower young people physically, economically, and spiritually.',
    motto: 'Love, Unity, and Service.',
    vals: ['Bible and Christ-centered service', 'Democratic participation and inclusiveness', 'Teamwork and networking', 'Discipline and integrity'],
    about: 'Young people who yearn to serve the Lord in truth and spirit.',
    logo: '/logos/yf.png',
  },
  {
    id: 'bb',
    tab: 'Boys’ and Girls’ Brigade',
    who: 'For teens growing in Christ',
    vision: 'To be a Christian youth organization with a difference, raising disciplined, faithful, and community-minded people who reflect Christ’s character at home, at school, and in the community.',
    mission: 'To nurture youth into Christian leadership, service, and true followers of Christ by applying biblical values to daily life, and to train officers to lead through disciplined, Christ-centered mentorship.',
    motto: 'Sure and Steadfast · Seek, Serve and Follow Christ',
    vals: ['Spiritual growth', 'Physical growth', 'Educational growth', 'Social growth', 'Religion', 'Discipline'],
    about: 'Aiming to be a Global Model Brigade with a four-square programme. Boys are guided toward discipline and Christian character; girls toward following Jesus with self-control and responsibility.',
    logo: '/logos/bb.png',
  },
];

const districts = [
  { name: 'Bethsaida', leader: 'Elder Mary Ngatia' },
  { name: 'Jordan', leader: 'Elder Joan Kibethi' },
  { name: 'Sinai', leader: 'Elder John Njoroge' },
  { name: 'Macedonia', leader: 'Elder John Njoroge' },
];

function PceaHeroMark() {
  return (
    <svg className="crest-mark crest-mark--pcea" viewBox="0 0 360 360" role="img" aria-label="PCEA crest logo">
      <defs>
        <radialGradient id="crestGlow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fff6c2" />
          <stop offset="18%" stopColor="#f9ea79" />
          <stop offset="38%" stopColor="#f9ba2c" />
          <stop offset="60%" stopColor="#ee5b1d" />
          <stop offset="100%" stopColor="#be0d1b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g opacity="0.95">
        <path d="M180 34L193 66L214 58L210 96L237 90L236 125L265 126L254 150L281 156L255 180L287 199L255 210L273 238L236 233L236 264L210 256L214 294L191 286L180 320L169 286L146 294L150 256L124 264L123 233L97 238L115 210L83 199L117 180L89 156L116 150L105 126L134 125L133 90L160 96L156 58L177 66L180 34Z" fill="url(#crestGlow)" />
        <path d="M180 46L190 70L206 63L207 90L229 88L227 112L249 115L240 138L267 147L244 168L263 186L237 196L247 222L220 217L218 244L197 234L180 262L163 234L142 244L140 217L113 222L123 196L97 186L116 168L93 147L120 138L111 115L133 112L131 88L153 90L154 63L170 70L180 46Z" fill="#f5d66a" opacity="0.95" />
      </g>

      <circle cx="180" cy="180" r="124" fill="#2d3094" />
      <circle cx="180" cy="180" r="103" fill="#e7e0d1" />
      <circle cx="180" cy="180" r="85" fill="#2d3094" />

      <rect x="170" y="88" width="20" height="158" rx="8" fill="#fff" />
      <rect x="102" y="156" width="156" height="20" rx="8" fill="#fff" />
      <rect x="138" y="181" width="84" height="10" rx="5" fill="#d7132d" opacity="0.9" />

      <text x="180" y="118" textAnchor="middle" fill="#fff" fontSize="23" fontWeight="800" letterSpacing="4">PCEA</text>
      <text x="180" y="245" textAnchor="middle" fill="#fff" fontSize="19" fontWeight="700" letterSpacing="2">FAITH • HOPE • LOVE</text>
    </svg>
  );
}

function LogoBadge({ variant = 'pcea', label = 'PCEA', short = 'PCEA', image }) {
  const shouldTextBelow = variant === 'wg' || variant === 'bb' || variant === 'cs';

  const fallbackContent = (() => {
    switch (variant) {
      case 'wg':
        return (
          <svg className={`group-logo group-logo--${variant}`} viewBox="0 0 160 160" role="img" aria-label={label}>
            <circle cx="80" cy="80" r="72" fill="#efdf9d" />
            <circle cx="80" cy="80" r="67" fill="#2f2a82" />
            <circle cx="80" cy="80" r="54" fill="#f1edd9" />
            <path d="M80 31L90 76L102 54L114 78L123 40L130 76L140 60L132 90L118 102L106 110L92 120L80 136L68 120L56 110L44 102L30 90L22 60L32 76L41 40L49 78L61 54L70 76Z" fill="#cf101d" opacity="0.9" />
            <rect x="75" y="46" width="10" height="56" rx="4" fill="#fff" />
            <rect x="52" y="68" width="56" height="10" rx="4" fill="#fff" />
            <text x="80" y="110" textAnchor="middle" fill="#1b2167" fontSize="10" fontWeight="800" letterSpacing="1.5">WOMAN'S</text>
            <text x="80" y="122" textAnchor="middle" fill="#1b2167" fontSize="10" fontWeight="800" letterSpacing="1.5">GUILD</text>
          </svg>
        );
      case 'bb':
        return (
          <svg className={`group-logo group-logo--${variant}`} viewBox="0 0 160 160" role="img" aria-label={label}>
            <circle cx="80" cy="80" r="72" fill="#f2d96c" />
            <circle cx="80" cy="80" r="66" fill="#2b2f8f" />
            <circle cx="80" cy="80" r="52" fill="#eee8d8" />
            <path d="M80 18L92 42L108 26L101 52L124 47L114 69L136 72L113 84L127 108L100 101L97 126L80 112L63 126L60 101L33 108L47 84L24 72L46 69L36 47L59 52L52 26L68 42Z" fill="#f7d347" opacity="0.9" />
            <rect x="75" y="46" width="10" height="60" rx="4" fill="#fff" />
            <rect x="48" y="70" width="64" height="10" rx="4" fill="#fff" />
            <text x="80" y="112" textAnchor="middle" fill="#1b2167" fontSize="10" fontWeight="800" letterSpacing="1.5">B&amp;G</text>
          </svg>
        );
      case 'pcmf':
        return (
          <svg className={`group-logo group-logo--${variant}`} viewBox="0 0 160 160" role="img" aria-label={label}>
            <circle cx="80" cy="80" r="72" fill="#2a2d82" />
            <circle cx="80" cy="80" r="58" fill="#efe8d8" />
            <path d="M80 25L90 54H110L96 68L103 96L80 82L57 96L64 68L50 54H70L80 25Z" fill="#d71b30" opacity="0.9" />
            <rect x="76" y="42" width="8" height="60" rx="4" fill="#fff" />
            <rect x="52" y="66" width="56" height="8" rx="4" fill="#fff" />
            <text x="80" y="112" textAnchor="middle" fill="#1b2167" fontSize="10" fontWeight="800" letterSpacing="1.5">PCMF</text>
          </svg>
        );
      case 'yf':
        return (
          <svg className={`group-logo group-logo--${variant}`} viewBox="0 0 160 160" role="img" aria-label={label}>
            <circle cx="80" cy="80" r="72" fill="#2f2a82" />
            <circle cx="80" cy="80" r="58" fill="#efe9dc" />
            <path d="M80 32L95 58H115L100 72L107 98L80 86L53 98L60 72L45 58H65L80 32Z" fill="#cf111c" opacity="0.9" />
            <rect x="76" y="44" width="8" height="60" rx="4" fill="#fff" />
            <rect x="53" y="70" width="54" height="8" rx="4" fill="#fff" />
            <text x="80" y="112" textAnchor="middle" fill="#1b2167" fontSize="10" fontWeight="800" letterSpacing="1.5">YF</text>
          </svg>
        );
      default:
        return (
          <svg className={`group-logo group-logo--${variant}`} viewBox="0 0 160 160" role="img" aria-label={label}>
            <circle cx="80" cy="80" r="72" fill="#2b2f8b" />
            <circle cx="80" cy="80" r="60" fill="#e9e6d7" />
            <path d="M80 24L92 62L122 54L102 80L122 106L92 98L80 136L68 98L38 106L58 80L38 54L68 62Z" fill="#f1d24d" opacity="0.92" />
            <rect x="76" y="42" width="8" height="60" rx="4" fill="#fff" />
            <rect x="52" y="66" width="56" height="8" rx="4" fill="#fff" />
            <text x="80" y="112" textAnchor="middle" fill="#1b2167" fontSize="10" fontWeight="800" letterSpacing="1.5">PCEA</text>
          </svg>
        );
    }
  })();

  return (
    <div className={`group-logo-wrap group-logo-wrap--${variant}`} aria-label={`${label} logo`} title={label}>
      {image ? (
        <img src={image} alt={label} className="group-logo-image" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement.appendChild((() => {
          const wrapper = document.createElement('div');
          wrapper.className = 'group-logo-fallback';
          wrapper.innerHTML = '';
          return wrapper;
        })()); }} />
      ) : null}
      {!image && fallbackContent}
      {shouldTextBelow ? <span className="group-logo-caption">{short}</span> : null}
    </div>
  );
}

function Ministries() {
  const [selectedId, setSelectedId] = useState('cs');
  const active = useMemo(() => ministries.find((item) => item.id === selectedId) ?? ministries[0], [selectedId]);

  const badgeShort = (() => {
    switch (active.id) {
      case 'wg':
        return 'WG';
      case 'bb':
        return 'B&G';
      case 'pcmf':
        return 'PCMF';
      case 'yf':
        return 'YF';
      default:
        return 'PCEA';
    }
  })();

  return (
    <section id="groups" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">community</p>
          <h2>Fellowships and groups</h2>
        </div>
        <p className="lead">
          There is a place for everyone at Gitero. Choose a group to see its vision, mission, and values.
        </p>

        <div className="tabs" role="tablist" aria-label="Church groups">
          {ministries.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === selectedId}
              className={`tab ${item.id === selectedId ? 'active' : ''}`}
              onClick={() => setSelectedId(item.id)}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div className="group-panel" role="tabpanel" key={active.id}>
          <div className="group-copy">
            <div className="group-title-block">
              <LogoBadge variant={active.id} label={active.tab} short={badgeShort} image={active.logo} />
              <div>
                <h3>{active.tab}</h3>
                <p className="group-tag">{active.who}</p>
              </div>
            </div>

            <p>{active.about}</p>

            {active.vision && (
              <>
                <h4>Vision</h4>
                <p>{active.vision}</p>
              </>
            )}

            {active.mission && (
              <>
                <h4>Mission</h4>
                <p>{active.mission}</p>
              </>
            )}

            {active.time && (
              <>
                <h4>When we meet</h4>
                <p>{active.time}</p>
              </>
            )}

            {active.verse && !active.quote && (
              <>
                <h4>Key Bible verse</h4>
                <p>{active.verse}</p>
              </>
            )}
          </div>

          <div className="group-aside">
            {active.motto && (
              <>
                <h4 className="aside-heading">Motto</h4>
                <p className="motto">{active.motto}</p>
              </>
            )}

            {active.quote && (
              <>
                <h4 className="aside-heading">Key Bible verse</h4>
                <p className="motto">
                  “{active.quote}”
                  <small>{active.verse}</small>
                </p>
              </>
            )}

            {active.vals && (
              <>
                <h4 className="aside-heading">{active.id === 'bb' ? 'Four-square focus and foundations' : 'Core values'}</h4>
                <ul className="value-list">
                  {active.vals.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Districts() {
  const [openDistrict, setOpenDistrict] = useState('Bethsaida');

  return (
    <section id="districts" className="districts-band section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">our network</p>
          <h2>Our four districts</h2>
        </div>
        <p className="lead">Members worship and serve together in districts, each led by an elder. Select a district to see its leader.</p>

        <div className="district-grid">
          {districts.map((district) => {
            const isOpen = openDistrict === district.name;

            return (
              <button
                key={district.name}
                type="button"
                className={`district-card ${isOpen ? 'open' : ''}`}
                aria-expanded={isOpen}
                onClick={() => setOpenDistrict(isOpen ? '' : district.name)}
              >
                <div className="district-card-top">
                  <h3>{district.name}</h3>
                  <span>{isOpen ? 'Hide leader' : 'Show leader'}</span>
                </div>
                <div className="district-card-body">
                  <span>District leader</span>
                  <strong>{district.leader}</strong>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      <nav className="topbar" aria-label="Main navigation">
        <div className="container nav-inner">
          <div className="brand">
            <span className="brand-mark">P</span>
            PCEA Gitero
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#leaders">Leaders</a>
            <a href="#districts">Districts</a>
            <a href="#groups">Groups</a>
          </div>
          <button type="button" className="theme-toggle" onClick={() => setIsDark((v) => !v)}>
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Presbyterian Church of East Africa · Nyeri, Kenya</p>
            <h1>As for me and my house, we will serve the Lord.</h1>
            <p className="scripture">Joshua 24:15</p>
            <a href="#groups" className="primary-button">
              Find your fellowship
            </a>
          </div>

          <div className="hero-art" aria-label="PCEA crest illustration">
            <PceaHeroMark />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="container narrow">
            <div className="section-heading">
              <p className="eyebrow">welcome</p>
              <h2>Welcome to PCEA Gitero Church</h2>
            </div>
            <p className="lead">
              Gitero is one of the six congregations of the Nyeri Joy Parish. We are a community of families, women, men, young people, and teens learning to worship, serve, and follow Christ together.
            </p>
          </div>
        </section>

        <section id="services" className="section service-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">gathering</p>
              <h2>Service times</h2>
            </div>
            <p className="lead">Come as you are. Everyone is welcome.</p>

            <div className="service-grid">
              <div className="service-card red">
                <p>Kikuyu service</p>
                <span>10:00 A.M. to 12:00 P.M.</span>
              </div>
              <div className="service-card gold">
                <p>Church School service</p>
                <span>8:30 A.M. to 11:30 A.M.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="leaders" className="section leaders-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">leadership</p>
              <h2>Leadership</h2>
            </div>
            <p className="lead">The people who shepherd and serve our church family.</p>

            <div className="service-grid leaders-grid">
              <div className="service-card muted">
                <p>Parish minister, Nyeri Joy Parish</p>
                <strong>Reverend Daniel Wachira</strong>
              </div>
              <div className="service-card muted">
                <p>Chairperson, Gitero Church</p>
                <strong>Elder John Njoroge</strong>
              </div>
            </div>
          </div>
        </section>

        <Districts />
        <Ministries />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>PCEA Gitero Church</strong>
          </div>
          <div>Nyeri Joy Parish, Nyeri, Kenya</div>
        </div>
      </footer>
    </>
  );
}

export default App;
