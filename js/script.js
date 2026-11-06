/* ==========================================================================
   🔗 EDIT YOUR CONTENT HERE — plain data, no build step, no imports needed.
   Edit any array below and refresh the page — that's it.
   ========================================================================== */

const RESUME_URL = "assets/resume.pdf"; // TODO: replace with your actual CV file in /assets

const SKILLS = [
  { symbol: "Ac", name: "Analytical Chemistry", level: 92, icon: "🧪" },
  { symbol: "Lb", name: "Laboratory Analysis", level: 90, icon: "🔬" },
  { symbol: "Py", name: "Python", level: 88, icon: "🐍" },
  { symbol: "Ml", name: "Machine Learning", level: 78, icon: "🧠" },
  { symbol: "Da", name: "Data Analysis", level: 85, icon: "📊" },
  { symbol: "Xl", name: "Microsoft Excel", level: 90, icon: "📈" },
  { symbol: "Ht", name: "HTML", level: 80, icon: "🌐" },
  { symbol: "Cs", name: "CSS", level: 75, icon: "🎨" },
  { symbol: "Gh", name: "Git & GitHub", level: 82, icon: "🔧" },
  { symbol: "Ps", name: "Problem Solving", level: 94, icon: "🧩" },
];

// GitHub repo links — replace "#" with your real repo URLs.
const PROJECTS = [
  {
    title: "Chemistry Data Analysis with Python",
    description: "A Python pipeline that cleans, analyzes, and visualizes analytical chemistry datasets — titration curves, calibration models, and QC trend charts.",
    tech: ["Python", "Pandas", "Matplotlib", "NumPy"],
    icon: "🧪",
    github: "#",
  },
  {
    title: "Machine Learning Prediction Model",
    description: "A supervised learning model exploring predictive relationships in chemical or environmental datasets — preprocessing, feature engineering, evaluation.",
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    icon: "🧠",
    github: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "This site — a responsive, animated portfolio built to present my work in chemistry and data science.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "💻",
    github: "#",
  },
  {
    title: "Shopify E-commerce Store",
    description: "A fully configured Shopify storefront covering product catalog setup, theme customization, and checkout flow.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    icon: "🛒",
    github: "#",
  },
  {
    title: "Future Research Project",
    description: "An upcoming research initiative bridging analytical chemistry and machine learning — predictive modeling on spectroscopic data.",
    tech: ["Python", "Research", "Chemometrics"],
    icon: "✨",
    github: "#",
  },
];

// fileUrl points at a PDF in /assets — drop your certificate files there.
const CERTIFICATIONS = [
  { title: "Introduction to Data Science", issuer: "JKUAT — Instructor: Dennis Kaburu", year: "2025", fileUrl: "assets/intro-data.pdf" },
  { title: "Introduction to Modern AI", issuer: "Networking Academy — Instructor: Lynn Bloomer", year: "2025", fileUrl: "assets/intro-AI.pdf" },
  { title: "Python Essentials 1", issuer: "Networking Academy — Instructor: Lynn Bloomer", year: "2026", fileUrl: "assets/python-essentials-1.pdf" },
];

// Your social links — replace the "#"/mailto placeholders below.
const SOCIALS = [
  { icon: "gh", href: "https://github.com/Wekesah", label: "GitHub" },
  { icon: "li", href: "https://www.linkedin.com/in/Wekesa-ezra", label: "LinkedIn" },
  { icon: "fb", href: "https://www.facebook.com/Wekesa039", label: "Facebook" },
  { icon: "ig", href: "https://www.instagram.com/W.e.k.e.s.a.h", label: "Instagram" },
  { icon: "x", href: "https://x.com/WekesaEzra", label: "X (Twitter)" },
  { icon: "mail", href: "mailto:wekesaezra683@gmail.com", label: "Email" },
];

const SOCIAL_SVG = {
  gh: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.78 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.3-.52-1.49.11-3.1 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.61.24 2.8.12 3.1.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.26 5.69.42.36.78 1.08.78 2.18v3.24c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
  li: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>',
  fb: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.74 3.74 0 0 1-1.38-.9 3.74 3.74 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.98c-3.15 0-3.5.01-4.73.07-1.01.05-1.56.22-1.92.36-.48.19-.83.41-1.2.78-.37.37-.6.72-.78 1.2-.14.36-.31.91-.36 1.92-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.05 1.01.22 1.56.36 1.92.19.48.41.83.78 1.2.37.37.72.6 1.2.78.36.14.91.31 1.92.36 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c1.01-.05 1.56-.22 1.92-.36.48-.19.83-.41 1.2-.78.37-.37.6-.72.78-1.2.14-.36.31-.91.36-1.92.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.05-1.01-.22-1.56-.36-1.92a3.19 3.19 0 0 0-.78-1.2 3.19 3.19 0 0 0-1.2-.78c-.36-.14-.91-.31-1.92-.36-1.23-.06-1.58-.07-4.73-.07Zm0 3.38a5.48 5.48 0 1 1 0 10.96 5.48 5.48 0 0 1 0-10.96Zm0 9.04a3.56 3.56 0 1 0 0-7.12 3.56 3.56 0 0 0 0 7.12Zm6.97-9.26a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M18.9 2H22l-7.6 8.68L23.3 22h-7.1l-5.6-7.1L4.2 22H1.1l8.1-9.3L.7 2h7.2l5.1 6.5L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
};

/* ==========================================================================
   THEME — persisted via localStorage
   ========================================================================== */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
  moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ==========================================================================
   NAVBAR scroll state + mobile menu
   ========================================================================== */
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 12);
  const progress = document.getElementById('scrollProgress');
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
});

menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* ==========================================================================
   RENDER DATA-DRIVEN SECTIONS
   ========================================================================== */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map((s, i) => `
    <div class="skill-tile reveal">
      <div class="skill-top">
        <span class="skill-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="skill-icon">${s.icon}</span>
      </div>
      <div class="skill-symbol">${s.symbol}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
      <div class="skill-pct">${s.level}%</div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map(p => `
    <div class="project-card reveal">
      <div class="project-cover">${p.icon}</div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tech">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <a href="${p.github}" target="_blank" rel="noreferrer" class="project-link">GitHub</a>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const grid = document.getElementById('certsGrid');
  grid.innerHTML = CERTIFICATIONS.map(c => `
    <div class="cert-card reveal">
      <div class="cert-icon">🏅</div>
      <h3>${c.title}</h3>
      <p class="cert-issuer">${c.issuer}</p>
      <p class="cert-year">${c.year}</p>
      <a href="${c.fileUrl}" download class="cert-download">⬇ Download</a>
    </div>
  `).join('');
}

function renderSocials() {
  const html = SOCIALS.map(s => `
    <a href="${s.href}" target="_blank" rel="noreferrer" class="social-btn" aria-label="${s.label}">${SOCIAL_SVG[s.icon]}</a>
  `).join('');
  document.getElementById('socialRow').innerHTML = html;
  document.getElementById('footerSocialRow').innerHTML = html;
}

renderSkills();
renderProjects();
renderCertifications();
renderSocials();
document.getElementById('year').textContent = new Date().getFullYear();

// Wire resume link
document.querySelector('.hero-buttons a[download]').href = RESUME_URL;

/* ==========================================================================
   SCROLL-REVEAL ANIMATION (IntersectionObserver)
   ========================================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Trigger skill bar fill when its tile reveals
      const bar = entry.target.querySelector('.skill-bar-fill');
      if (bar) bar.style.width = bar.dataset.level + '%';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Observe all .reveal elements, including ones added dynamically above
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ==========================================================================
   CONTACT FORM (client-side only — wire up a real backend/service to send)
   ========================================================================== */
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.style.display = 'block';
  form.reset();
  setTimeout(() => { successMsg.style.display = 'none'; }, 3500);
});
