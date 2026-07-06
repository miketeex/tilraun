import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  ArrowRight,
  Beaker,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Mail,
  Play,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import './style.css';

const projects = [
  {
    title: 'ELKO+ Concept',
    status: 'IN PROGRESS',
    category: 'concept',
    health: 82,
    color: 'blue',
    url: 'elko-plus.tilraun.is',
    text: 'Hugmynd að betri þjónustu- og upplýsingasíðu fyrir starfsfólk og viðskiptavini.',
    details: 'Dashboard-hugsun fyrir þjónustu, upplýsingar, verkefni og mögulegar innri lausnir. Hentar vel sem concept sem hægt er að sýna hönnuði eða forritara.',
    stack: ['React', 'Design system', 'Prototype'],
  },
  {
    title: 'Bankinn / Partýlager',
    status: 'LIVE DEMO',
    category: 'app',
    health: 96,
    color: 'green',
    url: 'bankinn.tilraun.is',
    text: 'Umsóknarkerfi fyrir Partýlager þar sem starfsfólk getur fengið lánaðar vörur og búnað.',
    details: 'Lánakerfi með vörulista, körfu, láns- og skiladagsetningu, skilmálum og staðfestingu. Gæti tengst SharePoint, Power Automate eða eigin gagnagrunni.',
    stack: ['Forms', 'Power Automate', 'SharePoint'],
  },
  {
    title: 'Graphify',
    status: 'CONCEPT',
    category: 'data',
    health: 64,
    color: 'purple',
    url: 'graphify.tilraun.is',
    text: 'Tilraunaverkefni fyrir sjónræna framsetningu gagna, ferla og tenginga.',
    details: 'Tilraun til að gera flókin gögn skiljanlegri með lifandi gröfum, tengingum og einföldum sjónrænum flæðum.',
    stack: ['Charts', 'Data', 'AI assisted'],
  },
  {
    title: 'Self-hosted Lab',
    status: 'IN PROGRESS',
    category: 'infra',
    health: 89,
    color: 'orange',
    url: 'lab.tilraun.is',
    text: 'Unraid, Docker, Nginx Proxy Manager, Cloudflare og eigin hýsing heima.',
    details: 'Grunnurinn undir öllu dótinu: Docker containers, reverse proxy, DNS, SSL, status monitoring og þjónustur sem þú stjórnar sjálfur.',
    stack: ['Unraid', 'Docker', 'NPM', 'Cloudflare'],
  },
];

const services = [
  { name: 'Landing page', host: 'tilraun.is', status: 'Online', latency: '24ms' },
  { name: 'Demo apps', host: 'demo.tilraun.is', status: 'Online', latency: '41ms' },
  { name: 'Lab', host: 'lab.tilraun.is', status: 'Online', latency: '38ms' },
  { name: 'Status', host: 'status.tilraun.is', status: 'Online', latency: '19ms' },
];

const logs = [
  '[14:02] npm run build completed',
  '[14:03] container image prepared',
  '[14:04] reverse proxy route checked',
  '[14:05] SSL certificate active',
  '[14:06] demo deployed to tilraun.is',
];

const filters = [
  { key: 'all', label: 'Allt' },
  { key: 'app', label: 'Apps' },
  { key: 'concept', label: 'Concept' },
  { key: 'data', label: 'Data' },
  { key: 'infra', label: 'Infra' },
];

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(projects[1]);
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [demoMode, setDemoMode] = useState('builder');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="page-shell">
      <nav className="nav">
        <a className="logo" href="#top"><span>t</span>ilraun.is</a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#demo">Interactive demo</a>
          <a href="#status">Status</a>
          <a href="#lab">Lab</a>
        </div>
        <div className="nav-actions">
          <Github size={21} />
          <a className="outline-button" href="mailto:hello@tilraun.is"><Mail size={17} /> Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">Self-hosted playground</p>
          <h1>Tilraunir.<br />Hugmyndir.<br /><span>Verk að veruleika.</span></h1>
          <p className="lead">
            Persónulegt smíðaverkstæði fyrir vefverkefni, sjálfhýstar lausnir og tilraunir með tækni.
            Hér byggi ég, prófa og sýni verkefni sem eru í vinnslu.
          </p>
          <div className="hero-buttons">
            <a className="primary-button" href="#demo">Opna interactive demo <Play size={18} /></a>
            <a className="secondary-button" href="#projects">Skoða verkefni <ArrowRight size={17} /></a>
          </div>
          <div className="live-strip">
            <span className="pulse-dot"></span>
            <strong>Live lab:</strong> 4 þjónustur online · SSL virkt · Docker ready
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="floating-sign">TILRAUN.IS</div>
          <div className="terminal-card main-terminal">
            <div className="terminal-top"><i></i><i></i><i></i></div>
            <pre>{`const lab = {
  domain: 'tilraun.is',
  mode: 'interactive',
  hosting: 'self-hosted',
  status: 'online'
};`}</pre>
          </div>
          <div className="terminal-card side-terminal">
            <div className="terminal-top"><i></i><i></i><i></i></div>
            <div className="mini-dashboard">
              <span style={{ height: '42%' }}></span>
              <span style={{ height: '68%' }}></span>
              <span style={{ height: '54%' }}></span>
              <span style={{ height: '88%' }}></span>
              <span style={{ height: '73%' }}></span>
            </div>
          </div>
          <div className="server-box"><Server size={52} /></div>
        </div>
      </section>

      <section className="quick-panel">
        <Feature icon={<Code2 />} title="Verkefni í vinnslu" text="Síur og previews" href="#projects" />
        <Feature icon={<Beaker />} title="Interactive demo" text="Smelltu og prófaðu" href="#demo" />
        <Feature icon={<Activity />} title="Live status" text="Online þjónustur" href="#status" />
        <Feature icon={<ShieldCheck />} title="Self-hosted" text="SSL + reverse proxy" href="#lab" />
      </section>

      <section id="projects" className="content-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Verkefni</p>
            <h2>Veldu verkefni og sjáðu preview</h2>
          </div>
          <div className="filter-row">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={activeFilter === filter.key ? 'active' : ''}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <button
              className={`project-card ${selectedProject.title === project.title ? 'selected' : ''}`}
              key={project.title}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`project-preview ${project.color}`}>
                <span>{project.status}</span>
                <div className="mock-lines"></div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="card-links">
                <span><ExternalLink size={14} /> Preview</span>
                <span><Github size={14} /> GitHub</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="demo" className="content-section demo-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Interactive demo</p>
            <h2>{selectedProject.title}</h2>
          </div>
          <div className="mode-switch">
            <button className={demoMode === 'builder' ? 'active' : ''} onClick={() => setDemoMode('builder')}>Builder</button>
            <button className={demoMode === 'visitor' ? 'active' : ''} onClick={() => setDemoMode('visitor')}>Visitor</button>
          </div>
        </div>

        <div className="demo-grid">
          <article className="browser-window">
            <div className="browser-top">
              <i></i><i></i><i></i>
              <span><Globe2 size={14} /> https://{selectedProject.url}</span>
            </div>
            <div className="browser-body">
              <div className={`big-preview ${selectedProject.color}`}>
                <div>
                  <span className="status-pill">{selectedProject.status}</span>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.details}</p>
                  <div className="stack-tags">
                    {selectedProject.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="health-ring" style={{ '--health': `${selectedProject.health}%` }}>
                  <strong>{selectedProject.health}%</strong>
                  <small>ready</small>
                </div>
              </div>
              <div className="demo-actions">
                <button><ExternalLink size={16} /> Opna demo</button>
                <button><Github size={16} /> Skoða kóða</button>
                <button><Sparkles size={16} /> Bæta við roadmap</button>
              </div>
            </div>
          </article>

          <aside className="control-panel">
            <h3><Zap size={18} /> Demo controls</h3>
            <p>Þetta er bara frontend demo, en lítur út eins og lifandi kerfi.</p>

            <div className="metric-row">
              <span>Mode</span>
              <strong>{demoMode === 'builder' ? 'Builder view' : 'Visitor view'}</strong>
            </div>
            <div className="metric-row">
              <span>Project health</span>
              <strong>{selectedProject.health}%</strong>
            </div>
            <div className="metric-row">
              <span>Deployment</span>
              <strong className="online">Ready</strong>
            </div>

            <button className="primary-button full" onClick={() => setTerminalRunning(!terminalRunning)}>
              <Terminal size={17} /> {terminalRunning ? 'Stoppa deploy log' : 'Keyra deploy demo'}
            </button>
          </aside>
        </div>
      </section>

      <section id="status" className="content-section status-section">
        <div>
          <p className="eyebrow">Live status</p>
          <h2>Kerfin líta út fyrir að vera í lagi</h2>
        </div>
        <div className="status-grid">
          {services.map((service) => (
            <article className="service-card" key={service.host}>
              <CheckCircle2 />
              <div>
                <strong>{service.name}</strong>
                <span>{service.host}</span>
              </div>
              <small>{service.latency}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="lab" className="content-section terminal-section section-grid">
        <div>
          <p className="eyebrow">Deploy log</p>
          <h2>Terminal preview</h2>
          <p className="lead small">Smelltu á “Keyra deploy demo” til að láta síðuna virka meira lifandi.</p>
        </div>
        <div className="terminal-live">
          <div className="terminal-top"><i></i><i></i><i></i></div>
          <pre>
            {(terminalRunning ? logs : logs.slice(0, 2)).map((line) => `${line}\n`)}
            {terminalRunning ? '[14:07] tilraun.is is live ✓' : '$ waiting for deploy...'}
          </pre>
        </div>
      </section>

      <section className="cta-box">
        <div>
          <p className="console-line">&gt; Tilraunir í dag, lausnir á morgun.</p>
          <p>Þetta getur orðið portfolio, lab, demo-gátt og miðstöð fyrir allt sem þú ert að smíða.</p>
        </div>
        <a className="outline-button" href="mailto:hello@tilraun.is">Tengist mér <Mail size={16} /></a>
      </section>

      <footer className="footer">
        <div>
          <a className="logo" href="#top"><span>t</span>ilraun.is</a>
          <p>© 2026 tilraun.is — byggt á eigin server.</p>
        </div>
        <div>
          <h4>Demo</h4>
          <a href="#projects">Project filter</a>
          <a href="#demo">Preview panel</a>
          <a href="#status">Live status</a>
        </div>
        <div>
          <h4>Þjónustur</h4>
          <a href="#">demo.tilraun.is</a>
          <a href="#">status.tilraun.is</a>
          <a href="#">lab.tilraun.is</a>
        </div>
        <div>
          <h4>Staða kerfa</h4>
          <p className="online">● Allt kerfi í gangi</p>
          <p>Síðast uppfært: í dag</p>
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, title, text, href }) {
  return (
    <a className="feature" href={href}>
      <div>{icon}</div>
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
      <ArrowRight size={16} />
    </a>
  );
}

createRoot(document.getElementById('root')).render(<App />);
