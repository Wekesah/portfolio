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
  { icon: "ig", href: "https://www.instagram.com/Chem2Data", label: "Instagram" },
  { icon: "x", href: "https://x.com/WekesaEzra", label: "X (Twitter)" },
  { icon: "mail", href: "mailto:wekesaezra683@gmail.com", label: "Email" },
  { icon: "phone", href: "tel:+254795303275", label: "Call" },
  { icon: "whatsapp", href: "https://wa.me/254795303275", label: "WhatsApp" },
];

/* ==========================================================================
   THEME — persisted via localStorage
   ========================================================================== */
const root = document.documentElement;
SOCIAL_SVG.phone = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>';
SOCIAL_SVG.whatsapp = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.89 9.88ZM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42Z"/></svg>';
const themeToggle = document.getElementById ('themeToggle');
const sunIcon = document.getElementById ('sunIcon');
const moonIcon = document.getElementById ('moonIcon');

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
