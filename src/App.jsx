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
  },
];

const districts = [
  { name: 'Bethsaida', leader: 'Elder Mary Ngatia' },
  { name: 'Jordan', leader: 'Elder Joan Kibethi' },
  { name: 'Sinai', leader: 'Elder John Njoroge' },
  { name: 'Macedonia', leader: 'Elder John Njoroge' },
];

function LogoBadge({ variant = 'pcea', label = 'PCEA', short = 'PCEA' }) {
  return (
    <div className={`group-logo group-logo--${variant}`} aria-label={`${label} logo`} title={label}>
      <span className="group-logo-crest" aria-hidden="true" />
      <span className="group-logo-text">{short}</span>
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
              <LogoBadge variant={active.id} label={active.tab} short={badgeShort} />
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
            <div className="crest-mark crest-mark--pcea">
              <span className="crest-fire" aria-hidden="true" />
              <span className="crest-cross" aria-hidden="true" />
              <span className="crest-word">PCEA</span>
              <small>Faith • Hope • Love</small>
            </div>
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
