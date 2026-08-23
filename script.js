/* Centralized portfolio content — replace links and descriptions here as information grows. */
const CONFIG = {
  githubUsername: 'jessonmanoj',
  social: { github: 'https://github.com/jessonmanoj', linkedin: '', instagram: '', facebook: '' },
  skills: [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', name: 'HTML', description: 'Semantic structure for modern web experiences.', level: 'Experienced', color: '#e75c3b' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', name: 'CSS', description: 'Responsive styling, layouts, and visual detail.', level: 'Experienced', color: '#3575d3' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name: 'JavaScript', description: 'Interactive experiences and browser logic.', level: 'Developing', color: '#d8a719' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', name: 'Python', description: 'Programming fundamentals and problem solving.', level: 'Developing', color: '#3776ab' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', name: 'PHP', description: 'Web application development in progress.', level: 'Familiar', color: '#767bb5' }
  ],
  projects: [
    { title: 'EduConnect', description: 'An educational and learning platform project. Add your final project summary, image, and links here.', tech: ['Web', 'PHP'], categories: ['web', 'php'], icon: 'EC', color: 'linear-gradient(135deg,#725ee9,#af85f4)' },
    { title: 'LabMS', description: 'Laboratory Management System. Replace this placeholder with the specific project scope and features.', tech: ['Web', 'JavaScript'], categories: ['web', 'javascript'], icon: 'LM', color: 'linear-gradient(135deg,#e261ac,#f19d83)' },
    { title: 'Inventory Management System', description: 'An inventory management application. Add technologies, functionality, and project links when available.', tech: ['Python'], categories: ['python'], icon: 'IMS', color: 'linear-gradient(135deg,#319c94,#6bc88c)' }
  ]
};

const skillGrid = document.querySelector('#skills-grid');
skillGrid.innerHTML = CONFIG.skills.map(s => `<article class="skill-card reveal" style="--accent:${s.color}"><div class="skill-icon"><img src="${s.icon}" alt="${s.name} logo" width="32" height="32" /></div><h3>${s.name}</h3><p>${s.description}</p><span class="level">${s.level}</span></article>`).join('');
const projectGrid = document.querySelector('#projects-grid');
function renderProjects(filter = 'all') {
  const projects = CONFIG.projects.filter(p => filter === 'all' || p.categories.includes(filter));
  projectGrid.innerHTML = projects.map(p => `<article class="project-card"><div class="project-visual" style="--project-color:${p.color}"><span class="project-number">SELECTED BUILD</span><strong class="project-icon">${p.icon}</strong></div><div class="project-info"><h3>${p.title}</h3><p>${p.description}</p><div class="project-footer"><div class="tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</div><button class="project-link" aria-disabled="true" title="Add project URL in script.js">↗</button></div></div></article>`).join('');
}
renderProjects();
document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => { document.querySelector('.filters .active').classList.remove('active'); button.classList.add('active'); renderProjects(button.dataset.filter); }));

const header = document.querySelector('.site-header'), progress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => { const height = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${scrollY / height * 100}%`; header.classList.toggle('scrolled', scrollY > 30); }, { passive: true });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const phrases = ['I build websites.', 'I write code.', 'I solve problems.', 'I create digital experiences.']; let phraseIndex = 0; const rotating = document.querySelector('#rotating-text');
setInterval(() => { rotating.style.opacity = 0; setTimeout(() => { phraseIndex = (phraseIndex + 1) % phrases.length; rotating.textContent = phrases[phraseIndex]; rotating.style.opacity = 1; }, 260); }, 2800);

const theme = document.querySelector('.theme-toggle');
function setTheme(dark) { document.body.classList.toggle('dark', dark); document.documentElement.classList.remove('dark-preload'); localStorage.setItem('jm-theme', dark ? 'dark' : 'light'); }
setTheme(localStorage.getItem('jm-theme') === 'dark'); theme.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));
const toggle = document.querySelector('.menu-toggle'), nav = document.querySelector('nav'); toggle.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', isOpen); }); document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const form = document.querySelector('.contact-form'), message = document.querySelector('.form-message');
form.addEventListener('submit', event => { event.preventDefault(); if (!form.checkValidity()) { message.className = 'form-message'; message.textContent = 'Please complete all fields with a valid email address.'; form.reportValidity(); return; } message.className = 'form-message success'; message.textContent = 'Thanks — connect this form to your preferred email service to send messages.'; form.reset(); });
document.querySelector('#year').textContent = new Date().getFullYear();

// Confirmed education details
const educationDetails = document.querySelectorAll('.education-list article p');
if (educationDetails.length === 2) {
  educationDetails[0].textContent = 'Currently pursuing · LMCST, Trivandrum';
  educationDetails[1].textContent = 'College of Applied Science, Konni · Mahatma Gandhi University · 2022–2025';
}

const serviceHeadings = document.querySelectorAll('.services-grid article h3');
const serviceDescriptions = document.querySelectorAll('.services-grid article p');
if (serviceHeadings[3] && serviceDescriptions[3]) {
  serviceHeadings[3].textContent = 'Website Maintenance';
  serviceDescriptions[3].textContent = 'Updates and practical improvements for existing websites.';
}

const socialIcons = {
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.91.68 1.84v2.78c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.3H3.3V21h3.2V8.3ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM21 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2v-1.7H9.4V21h3.2v-6.3c0-1.7.3-3.3 2.4-3.3 2.1 0 2.1 1.9 2.1 3.4V21H21v-7.3Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none"/><circle cx="12" cy="12" r="4" fill="none"/><circle cx="17.5" cy="6.5" r="1" class="social-fill"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.2-1.5 1.5-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2H7.5v3h2.7v8h3.3Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17z" fill="none"/><path d="m4 6 8 6 8-6" fill="none"/></svg>'
};
const socialContainer = document.querySelector('.socials');
if (socialContainer) socialContainer.innerHTML = ['github', 'linkedin', 'instagram', 'facebook', 'email'].map(network => {
  const url = network === 'email' ? 'mailto:jessonmanoj1@gmail.com' : CONFIG.social[network];
  const disabled = !url;
  return `<a class="social-icon ${network}${disabled ? ' disabled-link' : ''}" href="${url || '#'}" ${disabled ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'} title="${disabled ? `Add ${network} URL in script.js` : network}" aria-label="${network}">${socialIcons[network]}</a>`;
}).join('');

const githubProfileLink = document.querySelector('.github-card .disabled-link');
if (githubProfileLink && CONFIG.githubUsername) {
  githubProfileLink.href = `https://github.com/${CONFIG.githubUsername}`;
  githubProfileLink.classList.remove('disabled-link');
  githubProfileLink.removeAttribute('aria-disabled');
  githubProfileLink.target = '_blank';
  githubProfileLink.rel = 'noreferrer';
}
const githubProfileMessage = document.querySelector('.github-card p:not(.eyebrow)');
if (githubProfileMessage && CONFIG.githubUsername) {
  githubProfileMessage.innerHTML = `Explore projects and future open-source work at <code>@${CONFIG.githubUsername}</code>.`;
}

if (matchMedia('(pointer:fine)').matches) { const dot = document.querySelector('.cursor-dot'), ring = document.querySelector('.cursor-ring'); window.addEventListener('mousemove', e => { dot.style.left = ring.style.left = `${e.clientX}px`; dot.style.top = ring.style.top = `${e.clientY}px`; }); document.querySelectorAll('a,button,input,textarea').forEach(el => el.addEventListener('mouseenter', () => ring.classList.add('hover'))); document.querySelectorAll('a,button,input,textarea').forEach(el => el.addEventListener('mouseleave', () => ring.classList.remove('hover'))); }
const creativeImage = document.querySelector('.creative-image');
if (creativeImage && !matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(min-width: 801px)').matches) {
  window.addEventListener('scroll', () => { const rect = creativeImage.getBoundingClientRect(); const offset = Math.max(-22, Math.min(22, (innerHeight / 2 - (rect.top + rect.height / 2)) * .06)); creativeImage.style.transform = `translateY(${offset}px)`; }, { passive: true });
}
let keyBuffer = ''; window.addEventListener('keydown', e => { keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-5); if (keyBuffer.includes('code')) { document.querySelector('.easter-egg').classList.add('show'); setTimeout(() => document.querySelector('.easter-egg').classList.remove('show'), 3500); } });
window.addEventListener('load', () => setTimeout(() => document.querySelector('.loader').classList.add('done'), 450));
