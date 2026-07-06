const projects = [
  {title:'ELKO+ Concept', status:'progress', tag:'IN PROGRESS', description:'Hugmynd að betri þjónustu- og upplýsingasíðu fyrir starfsfólk og viðskiptavini.', demo:'#', github:'https://github.com/'},
  {title:'Bankinn / Partýlager', status:'live', tag:'LIVE DEMO', description:'Umsóknarkerfi þar sem starfsfólk getur fengið lánaðar vörur og búnað.', demo:'#', github:'https://github.com/'},
  {title:'Graphify', status:'concept', tag:'CONCEPT', description:'Tilraunaverkefni fyrir sjónræna framsetningu gagna, ferla og tenginga.', demo:'#', github:'https://github.com/'},
  {title:'Self-hosted Lab', status:'progress', tag:'IN PROGRESS', description:'Unraid, Docker, Nginx Proxy Manager, Cloudflare og eigin þjónustur.', demo:'#', github:'https://github.com/'},
  {title:'Home Assistant', status:'live', tag:'LIVE', description:'Sjálfvirkni, lýsing, hiti, skynjarar og dashboard fyrir heimilið.', demo:'#', github:'https://github.com/'},
  {title:'Status Dashboard', status:'concept', tag:'PLANNED', description:'Uptime og stöðusíða fyrir þjónustur á tilraun.is.', demo:'#', github:'https://github.com/'},
  {title:'Vaultwarden Setup', status:'progress', tag:'SECURE', description:'Sjálfhýst lykilorðageymsla með eigin domaini og reverse proxy.', demo:'#', github:'https://github.com/'},
  {title:'AI Experiments', status:'concept', tag:'LAB', description:'Smáverkefni með gervigreind, automation og gagnavinnslu.', demo:'#', github:'https://github.com/'}
];

const grid = document.querySelector('#projectGrid');
const filters = document.querySelectorAll('.filter');
const modal = document.querySelector('#projectModal');
const modalClose = document.querySelector('#modalClose');

function renderProjects(filter = 'all') {
  grid.innerHTML = '';
  projects.filter(p => filter === 'all' || p.status === filter).forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-visual"></div>
      <span class="tag">${project.tag}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-links"><span>Skoða</span><span>GitHub</span></div>
    `;
    card.addEventListener('click', () => openModal(project));
    grid.appendChild(card);
  });
}

function openModal(project) {
  document.querySelector('#modalStatus').textContent = project.tag;
  document.querySelector('#modalTitle').textContent = project.title;
  document.querySelector('#modalDescription').textContent = project.description;
  document.querySelector('#modalDemo').href = project.demo;
  document.querySelector('#modalGithub').href = project.github;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function animateNumbers() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = Number(el.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 28);
  });
}

let counted = false;
const statsObserver = new IntersectionObserver(entries => {
  if (entries.some(e => e.isIntersecting) && !counted) {
    counted = true;
    animateNumbers();
  }
});
statsObserver.observe(document.querySelector('.stats'));

const terminalForm = document.querySelector('#terminalForm');
const terminalInput = document.querySelector('#terminalInput');
const terminalOutput = document.querySelector('#terminalOutput');

const commands = {
  help: 'commands: projects, status, lab, stack, github, sudo, clear',
  projects: 'ELKO+, Bankinn, Graphify, Self-hosted Lab, Home Assistant, Vaultwarden, AI Experiments',
  status: 'All core services nominal. Lab environment: building.',
  lab: 'Internet -> Cloudflare -> NPM -> Docker -> Application',
  stack: 'Unraid, Docker, Nginx Proxy Manager, Cloudflare, Uptime Kuma, Home Assistant, PostgreSQL, Gitea',
  github: 'Opnaðu GitHub linkana í verkefnaspjöldunum og tengdu þá við þín repo.',
  sudo: 'Nice try.',
  'rm -rf /': 'Permission denied. Þetta er ekki þannig lab.'
};

terminalForm.addEventListener('submit', e => {
  e.preventDefault();
  const value = terminalInput.value.trim();
  if (!value) return;
  if (value === 'clear') {
    terminalOutput.innerHTML = '';
    terminalInput.value = '';
    return;
  }
  const response = commands[value.toLowerCase()] || `Óþekkt skipun: ${value}. Prófaðu help.`;
  terminalOutput.insertAdjacentHTML('beforeend', `<p><span>&gt;</span> ${value}</p><p>${response}</p>`);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
  terminalInput.value = '';
});

renderProjects();
