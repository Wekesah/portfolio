import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Sun, Moon, Menu, X, Github, Linkedin, Facebook, Instagram, Twitter, Mail,
  Download, ExternalLink, FlaskConical, Code2, BrainCircuit, BarChart3,
  FileSpreadsheet, GitBranch, Puzzle, Beaker, Droplets, Award,
  GraduationCap, Briefcase, Sparkles, ArrowRight, Send, MapPin, Calendar,
  ChevronRight, BookOpen, Trophy, ExternalLinkIcon, Atom
} from "lucide-react";
import profileImage from "./assets/profile.jpg";
import dataScienceCert from "./assets/intro-AI.pdf";
import aiCert from "./assets/intro-data.pdf";
import attachmentReport from "./assets/attachment-report.pdf";
 
/* =========================================================================
   DATA — edit these arrays to update site content. No markup changes needed.
   ========================================================================= */

const SKILLS = [
  { symbol: "Ac", name: "Analytical Chemistry", level: 92, icon: FlaskConical, num: 1 },
  { symbol: "Lb", name: "Laboratory Analysis", level: 90, icon: Beaker, num: 2 },
  { symbol: "Py", name: "Python", level: 88, icon: Code2, num: 3 },
  { symbol: "Ml", name: "Machine Learning", level: 78, icon: BrainCircuit, num: 4 },
  { symbol: "Da", name: "Data Analysis", level: 85, icon: BarChart3, num: 5 },
  { symbol: "Xl", name: "Microsoft Excel", level: 90, icon: FileSpreadsheet, num: 6 },
  { symbol: "Ht", name: "HTML", level: 80, icon: Code2, num: 7 },
  { symbol: "Cs", name: "CSS", level: 75, icon: Code2, num: 8 },
  { symbol: "Gh", name: "Git & GitHub", level: 82, icon: GitBranch, num: 9 },
  { symbol: "Ps", name: "Problem Solving", level: 94, icon: Puzzle, num: 10 },
];

const EDUCATION = [
  {
    degree: "B.Sc. Analytical Chemistry",
    institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    duration: "2023 — 2027",
    coursework: ["Instrumental Analysis", "Quantitative Analysis", "Chemometrics", "Physical Chemistry", "Research Methods", "Statistics for Analytical Chemists", "Organic Chemistry"],
  },
  {
    degree: "Certificate in Python for Data Science",
    institution: "Self-directed / Online Specialization",
    duration: "6 Months, 2025",
    coursework: ["NumPy & Pandas", "Data Visualization", "Scikit-learn", "SQL for Analysts"],
  },
  {
    degree: "High School",
    institution: "Kenya Certificate of Secondary Education",
    duration: "2019 — 2022",
    coursework: ["Chemistry", "Mathematics", "Physics", "Biology"],
  },
];

const EXPERIENCE = [
  {
    role: "Industrial Attachment — Laboratory Analyst",
    company: "Nzoia Sugar Company",
    duration: "2 Months, 2026",
    points: [
      "Conducted routine water analysis and boiler water analysis to ensure compliance with process safety standards.",
      "Performed juice, massecuite, and molasses analysis to monitor sugar production efficiency.",
      "Carried out conductivity testing, pH determination, and Brix measurement across production stages.",
      "Executed Pol determination and purity calculations to assess sucrose content and processing quality.",
      "Performed moisture determination on sugar samples for quality assurance.",
      "Supported laboratory quality control procedures, ensuring accuracy and consistency of analytical results.",
    ],
        reportUrl: attachmentReport,
  },
];

/* ------------------------------------------------------------------------
   🔗 EDIT YOUR LINKS HERE
   Every real-world link on the site (GitHub repos, live demos, social
   profiles, resume file) is defined as plain data below — you never need
   to touch the component markup to update a link, just edit the string.
   ------------------------------------------------------------------------ */

// Path or URL to your resume/CV file (e.g. hosted PDF link, or "/resume.pdf"
// if you add the file to your deployed project's public folder).
const RESUME_URL = "#"; // TODO: replace with your actual CV link

const PROJECTS = [
  {
    title: "Chemistry Data Analysis with Python",
    description: "A Python-based pipeline that cleans, analyzes, and visualizes analytical chemistry datasets — titration curves, calibration models, and QC trend charts — turning raw lab data into decision-ready insight.",
    tech: ["Python", "Pandas", "Matplotlib", "NumPy"],
    icon: FlaskConical,
    github: "#", // TODO: e.g. "https://github.com/your-username/chemistry-data-analysis"
    demo: "#",   // TODO: e.g. "https://your-demo-link.vercel.app"
  },
  {
    title: "Machine Learning Prediction Model",
    description: "A supervised learning model exploring predictive relationships in chemical or environmental datasets, covering preprocessing, feature engineering, model evaluation, and interpretation.",
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    icon: BrainCircuit,
    
  },
  {
    title: "Personal Portfolio Website",
    description: "This site — a responsive, animated personal portfolio built to present my work in chemistry and data science with a clean, premium interface.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icon: Code2,
    github: "#", // TODO
    demo: "#",   // TODO
  },
  {
    title: "Shopify E-commerce Store",
    description: "A fully configured Shopify storefront covering product catalog setup, theme customization, and checkout flow — practical experience in applying technical skills to real business needs.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    icon: BarChart3,
    github: "#", // TODO
    demo: "#",   // TODO
  },
  {
    title: "Future Research Project",
    description: "An upcoming research initiative bridging analytical chemistry and machine learning — applying predictive modeling to spectroscopic or chromatographic data. Details coming soon.",
    tech: ["Python", "Research", "Chemometrics"],
    icon: Sparkles,
    github: "#", // TODO
    demo: "#",   // TODO
  },
];

// Add a fileUrl to each certificate once you have hosted PDF copies (e.g. in
// your project's /public folder or a cloud link) to make Download buttons work.
const CERTIFICATIONS = [
  { title: "Introduction to Data Science", issuer: "JKUAT — Instructor: Dennis Kaburu", year: "2025", fileUrl: dataScienceCert },
  { title: "Introduction to Modern AI", issuer: "Networking Academy — Instructor: Lynn Bloomer", year: "2025", fileUrl: aiCert },
];
const ACHIEVEMENTS = [
  { title: "Completed Industrial Attachment", detail: "6-month attachment at Nzoia Sugar Company with distinction in laboratory practice.", icon: Trophy },
  { title: "Top of Class — Instrumental Analysis", detail: "Recognized for outstanding performance in instrumental analytical methods.", icon: Award },
  { title: "Self-Taught Python Developer", detail: "Built independent proficiency in Python and data analysis outside the classroom.", icon: Code2 },
  { title: "Chemistry-to-Code Bridge Builder", detail: "Personal milestone: applying ML techniques to real analytical chemistry datasets.", icon: Atom },
];

const BLOG_POSTS = [
  { title: "Why Chemists Should Learn Python", category: "Python", excerpt: "How a scripting language quietly became the most useful instrument in my lab kit.", date: "Jun 2026" },
  { title: "Reading a Titration Curve Like a Data Scientist", category: "Chemistry", excerpt: "Treating classic analytical methods as data problems worth modeling.", date: "May 2026" },
  { title: "From Brix to Bytes: My Attachment in Numbers", category: "Career Development", excerpt: "What a sugar factory laboratory taught me about data quality control.", date: "Apr 2026" },
  { title: "First Steps in Machine Learning for Lab Scientists", category: "Machine Learning", excerpt: "A practical, no-hype roadmap for scientists curious about ML.", date: "Mar 2026" },
];

// Your social/contact links — replace the "#" and mailto placeholders below.
const SOCIALS = [
  { icon: Github, href: "https://github.com/Wekesah", label: "GitHub" },   
  { icon: Linkedin, href: "https://www.linkedin.com/in/Wekesa-ezra", label: "LinkedIn" },     
  { icon: Facebook, href: "https://www.facebook.com/Wekesa039", label: "Facebook" },     
  { icon: Instagram, href: "https://www.instagram.com/code.hub.tech", label: "Instagram" },   
  { icon: Mail, href: "mailto:your.wekesaezra683@gmail.com", label: "Email" }, 
];

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

/* =========================================================================
   THEME TOKENS — light / dark palettes (blue & white, premium feel)
   ========================================================================= */

const theme = {
  light: {
    bg: "bg-slate-50",
    bgAlt: "bg-white",
    text: "text-slate-900",
    textMuted: "text-slate-600",
    textFaint: "text-slate-400",
    border: "border-slate-200",
    card: "bg-white/70",
    cardBorder: "border-slate-200/80",
    navBg: "bg-white/80",
    accent: "text-blue-600",
    accentBg: "bg-blue-600",
    accentSoft: "bg-blue-50",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
    ring: "ring-blue-100",
    cardShadow: "shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
  },
  dark: {
    bg: "bg-[#000000]",
    bgAlt: "bg-[#050810]",
    text: "text-white",
    textMuted: "text-slate-300",
    textFaint: "text-slate-500",
    border: "border-white/15",
    card: "bg-white/[0.06]",
    cardBorder: "border-white/15",
    navBg: "bg-black/90",
    accent: "text-sky-400",
    accentBg: "bg-sky-500",
    accentSoft: "bg-sky-500/15",
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    ring: "ring-sky-500/30",
    cardShadow: "shadow-[0_8px_30px_rgba(56,189,248,0.08)]",
  },
};

/* =========================================================================
   SHARED PRIMITIVES
   ========================================================================= */

// Section label — small eyebrow used to introduce each section (lab-notebook style)
const Eyebrow = ({ children, t }) => (
  <div className={`flex items-center gap-2 mb-4 font-mono text-xs tracking-[0.25em] uppercase ${t.accent}`}>
    <span className="h-px w-8 bg-current opacity-60" />
    {children}
  </div>
);

const SectionHeading = ({ eyebrow, title, t }) => (
  <div className="mb-14">
    <Eyebrow t={t}>{eyebrow}</Eyebrow>
    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${t.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {title}
    </h2>
  </div>
);

const GlassCard = ({ children, t, className = "" }) => (
  <div
    className={`backdrop-blur-xl ${t.card} border ${t.cardBorder} rounded-3xl ${t.cardShadow} ${className}`}
  >
    {children}
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* =========================================================================
   NAVBAR
   ========================================================================= */

function Navbar({ isDark, setIsDark, t }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? `${t.navBg} backdrop-blur-xl border-b ${t.border}` : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className={`flex items-center gap-2 font-bold text-lg ${t.text}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className={`w-8 h-8 rounded-xl ${t.accentBg} text-white flex items-center justify-center text-sm font-mono`}>
            Ew
          </span>
          Wekesa Ezra
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-2 text-sm rounded-lg transition-colors hover:${t.accent} ${t.textMuted}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setIsDark(!isDark)}
            className={`w-9 h-9 rounded-full flex items-center justify-center border ${t.border} ${t.textMuted} hover:${t.accent} transition-colors`}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center border ${t.border} ${t.text}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden border-t ${t.border} ${t.navBg} backdrop-blur-xl`}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`text-left px-2 py-2.5 rounded-lg text-sm ${t.textMuted}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =========================================================================
   SCROLL PROGRESS BAR
   ========================================================================= */

function ScrollProgress({ t }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r ${t.gradient}`}
    />
  );
}

/* =========================================================================
   HERO — signature: orbiting-electron frame around the profile placeholder
   ========================================================================= */

function Hero({ t, isDark }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className={`pointer-events-none absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-30 bg-gradient-to-br ${t.gradient}`} />
      <div className={`pointer-events-none absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr ${t.gradient}`} />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className={`inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border ${t.border} ${t.card} backdrop-blur-md font-mono text-xs ${t.accent}`}>
            <Atom size={14} className="animate-spin" style={{ animationDuration: "6s" }} />
            open to data science & research roles
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight ${t.text}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi, I'm <span className={`bg-clip-text text-transparent bg-gradient-to-r ${t.gradient}`}>Wekesa Ezra</span>
          </h1>

          <p className={`mt-5 text-base sm:text-lg font-mono ${t.accent}`}>
            Analytical Chemistry Student · Python Developer · ML Enthusiast · Future Data Scientist
          </p>

          <p className={`mt-6 text-base sm:text-lg leading-relaxed max-w-xl ${t.textMuted}`}>
            I sit at the intersection of the wet lab and the command line — trained to measure the world
            precisely as a chemist, and driven to model it intelligently as a developer. I'm fascinated by
            what happens when analytical rigor meets machine learning, and I'm building a career around
            solving real scientific and industrial problems with data.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-medium bg-gradient-to-r ${t.gradient} shadow-lg shadow-blue-500/20 hover:scale-[1.03] active:scale-[0.98] transition-transform`}
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={RESUME_URL}
              download
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium border ${t.border} ${t.text} hover:${t.accentSoft} transition-colors`}
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium ${t.textMuted} hover:${t.accent} transition-colors`}
            >
              Contact Me <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Profile placeholder with orbiting-electron rings (chemistry signature motif) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80"
        >
          <motion.div
            className={`absolute inset-0 rounded-full border ${t.border}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <span className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${t.accentBg}`} />
          </motion.div>
          <motion.div
            className={`absolute inset-6 rounded-full border ${t.border}`}
            style={{ borderStyle: "dashed" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className={`absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${t.accentBg} opacity-70`} />
          </motion.div>

         <div className={`absolute inset-10 rounded-full overflow-hidden border-2 ${t.cardBorder} shadow-2xl`}>
            <img
              src={profileImage}
              alt="Wekesa Ezra"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================================
   ABOUT
   ========================================================================= */

function About({ t }) {
  const stats = [
    { label: "Years in Chemistry", value: "4+" },
    { label: "Lab Analyses Performed", value: "500+" },
    { label: "Python Projects", value: "10+" },
    { label: "Certifications", value: CERTIFICATIONS.length.toString() },
  ];
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="01 — About" title="From the titration bench to the terminal" t={t} />
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
            className={`space-y-5 text-base sm:text-lg leading-relaxed ${t.textMuted}`}
          >
            <p>
              My foundation is in <span className={`${t.text} font-medium`}>Analytical Chemistry</span> — the
              discipline of measuring the world with precision. Through my degree and my industrial attachment,
              I've spent hundreds of hours running instrumental analyses, calibrating equipment, and validating
              results against strict quality standards. That training taught me something that now shapes
              everything I build: data is only useful if it's trustworthy.
            </p>
            <p>
              Alongside the lab work, I taught myself <span className={`${t.text} font-medium`}>Python and
              machine learning</span>, initially just to speed up my own data analysis. That curiosity grew into
              a genuine passion — I now spend as much time exploring datasets and building models as I do at
              the bench. I'm especially interested in <span className={`${t.text} font-medium`}>chemometrics</span>,
              scientific research automation, and using predictive modeling to solve problems that pure
              wet-chemistry methods can't reach alone.
            </p>
            <p>
              My long-term goal is to work as a <span className={`${t.text} font-medium`}>Data Scientist at the
              intersection of chemistry and technology</span> — whether in industrial quality control,
              pharmaceutical research, or environmental monitoring — building tools and models that turn raw
              laboratory data into decisions people can trust.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={1}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <GlassCard key={i} t={t} className="p-6 text-center">
                <div className={`text-3xl font-bold ${t.accent}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.value}
                </div>
                <div className={`mt-1 text-xs font-mono ${t.textMuted}`}>{s.label}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SKILLS — periodic-table element tiles (chemistry-native signature)
   ========================================================================= */

function SkillTile({ skill, t, index }) {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.4}
      whileHover={{ y: -6 }}
      className={`relative p-4 rounded-2xl border ${t.cardBorder} ${t.card} backdrop-blur-xl group transition-shadow hover:shadow-xl`}
    >
      <div className="flex items-start justify-between">
        <span className={`font-mono text-[10px] ${t.textFaint}`}>{String(skill.num).padStart(2, "0")}</span>
        <Icon size={16} className={t.accent} />
      </div>
      <div className={`mt-2 text-2xl font-bold ${t.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {skill.symbol}
      </div>
      <div className={`mt-1 text-xs leading-snug ${t.textMuted}`}>{skill.name}</div>

      <div className={`mt-3 h-1.5 rounded-full ${t.accentSoft} overflow-hidden`}>
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${t.gradient}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        />
      </div>
      <div className={`mt-1 text-right font-mono text-[10px] ${t.textFaint}`}>{skill.level}%</div>
    </motion.div>
  );
}

function Skills({ t }) {
  return (
    <section id="skills" className={`py-28 px-6 ${t.bgAlt}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="02 — Periodic Table of Skills" title="Elements of my practice" t={t} />
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {SKILLS.map((s, i) => (
            <SkillTile key={s.symbol} skill={s} t={t} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================================
   TIMELINE (shared by Education + Experience)
   ========================================================================= */

function TimelineItem({ t, icon: Icon, title, subtitle, duration, children, index, isLast }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={index}
      className="relative pl-14"
    >
      {!isLast && <span className={`absolute left-[19px] top-10 bottom-0 w-px ${t.border} bg-current opacity-30`} />}
      <span className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border ${t.cardBorder} ${t.accentSoft} ${t.accent}`}>
        <Icon size={18} />
      </span>
      <GlassCard t={t} className="p-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className={`text-lg font-semibold ${t.text}`}>{title}</h3>
          <span className={`inline-flex items-center gap-1 text-xs font-mono ${t.accent}`}>
            <Calendar size={12} /> {duration}
          </span>
        </div>
        <p className={`text-sm mb-3 ${t.textMuted}`}>{subtitle}</p>
        {children}
      </GlassCard>
    </motion.div>
  );
}

function Education({ t }) {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="03 — Education" title="Academic foundation" t={t} />
        {EDUCATION.map((e, i) => (
          <TimelineItem
            key={i} t={t} icon={GraduationCap} title={e.degree} subtitle={e.institution}
            duration={e.duration} index={i} isLast={i === EDUCATION.length - 1}
          >
            <div className="flex flex-wrap gap-2">
              {e.coursework.map((c) => (
                <span key={c} className={`px-2.5 py-1 rounded-full text-xs font-mono ${t.accentSoft} ${t.accent}`}>
                  {c}
                </span>
              ))}
            </div>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section id="experience" className={`py-28 px-6 ${t.bgAlt}`}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="04 — Experience" title="Inside the laboratory" t={t} />
        {EXPERIENCE.map((e, i) => (
          <TimelineItem
            key={i} t={t} icon={Briefcase} title={e.role} subtitle={e.company}
            duration={e.duration} index={i} isLast={i === EXPERIENCE.length - 1}
          >
            <ul className="space-y-2">
              {e.points.map((p, j) => (
                <li key={j} className={`flex gap-2 text-sm ${t.textMuted}`}>
                  <Droplets size={14} className={`mt-0.5 shrink-0 ${t.accent}`} />
                  {p}
                </li>
              ))}
            </ul>
            <a            
              href={e.reportUrl}
              target="_blank"
              rel="noreferrer"
              className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${t.accent} hover:underline`}
            >
              <BookOpen size={15} /> View Full Attachment Report <ChevronRight size={14} />
            </a>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}

/* =========================================================================
   PROJECTS
   ========================================================================= */
function ProjectCard({ project, t, index }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={index}
      whileHover={{ y: -6 }}
    >
      <GlassCard t={t} className="overflow-hidden h-full flex flex-col">
        <div className={`h-40 flex items-center justify-center bg-gradient-to-br ${t.gradient} relative`}>
          <Icon size={36} className="text-white/90" />
          <span className="absolute bottom-2 right-3 font-mono text-[10px] text-white/70">Project Preview</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className={`text-lg font-semibold mb-2 ${t.text}`}>{project.title}</h3>
          <p className={`text-sm leading-relaxed mb-4 ${t.textMuted} flex-1`}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <span key={tech} className={`px-2.5 py-1 rounded-full text-xs font-mono ${t.accentSoft} ${t.accent}`}>
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <a href={project.github} target="_blank" rel="noreferrer" className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border ${t.border} ${t.text} hover:${t.accentSoft} transition-colors`}>
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function Projects({ t }) {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="05 — Projects" title="Selected work" t={t} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
/* =========================================================================
   CERTIFICATIONS
   ========================================================================= */

function Certifications({ t }) {
  return (
    <section id="certifications" className={`py-28 px-6 ${t.bgAlt}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="06 — Certifications" title="Credentials on file" t={t} />
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={i}>
              <GlassCard t={t} className="p-7 h-full flex flex-col">
                <Award size={26} className={`mb-4 ${t.accent}`} />
                <h3 className={`font-semibold text-base mb-1.5 ${t.text}`}>{c.title}</h3>
                <p className={`text-sm mb-1.5 ${t.textMuted}`}>{c.issuer}</p>
                <p className={`text-xs font-mono mb-5 ${t.textFaint}`}>{c.year}</p>
                <a
                  href={c.fileUrl}
                  download
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium border ${t.border} ${t.text} hover:${t.accentSoft} transition-colors`}
                >
                  <Download size={13} /> Download
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* =========================================================================
   ACHIEVEMENTS
   ========================================================================= */

function Achievements({ t }) {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="07 — Achievements" title="Milestones along the way" t={t} />
        <div className="grid sm:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={i}>
                <GlassCard t={t} className="p-6 flex gap-4 items-start">
                  <span className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${t.accentSoft} ${t.accent}`}>
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className={`font-semibold mb-1 ${t.text}`}>{a.title}</h3>
                    <p className={`text-sm ${t.textMuted}`}>{a.detail}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   BLOG
   ========================================================================= */

function Blog({ t }) {
  return (
    <section id="blog" className={`py-28 px-6 ${t.bgAlt}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="08 — Blog" title="Notes from the bench & the notebook" t={t} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={i}>
              <GlassCard t={t} className="p-6 h-full flex flex-col cursor-pointer hover:shadow-xl transition-shadow">
                <span className={`inline-block mb-3 px-2.5 py-1 rounded-full text-[10px] font-mono w-fit ${t.accentSoft} ${t.accent}`}>
                  {post.category}
                </span>
                <h3 className={`font-semibold text-sm mb-2 leading-snug ${t.text}`}>{post.title}</h3>
                <p className={`text-xs leading-relaxed mb-4 ${t.textMuted} flex-1`}>{post.excerpt}</p>
                <div className={`flex items-center justify-between text-xs font-mono ${t.textFaint}`}>
                  <span className="flex items-center gap-1"><BookOpen size={12} /> {post.date}</span>
                  <ArrowRight size={14} className={t.accent} />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   CONTACT
   ========================================================================= */

function Contact({ t }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border ${t.border} ${t.bg} ${t.text} placeholder:${t.textFaint} focus:outline-none focus:ring-2 ${t.ring} transition-shadow text-sm`;

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="09 — Contact" title="Let's build something precise" t={t} />
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <p className={`text-base leading-relaxed mb-8 ${t.textMuted}`}>
              Whether it's a research collaboration, a data science opportunity, or just a question about
              chemistry and code — I'd love to hear from you. Reach out directly or find me on any of these
              platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer"
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border ${t.border} ${t.textMuted} hover:${t.accent} hover:${t.accentSoft} transition-colors`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={1}
            onSubmit={handleSubmit}
          >
            <GlassCard t={t} className="p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required type="text" placeholder="Your name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  required type="email" placeholder="Your email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <input
                required type="text" placeholder="Subject" value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={inputClass}
              />
              <textarea
                required rows={5} placeholder="Your message" value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass}
              />
              <button
                type="submit"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium bg-gradient-to-r ${t.gradient} hover:scale-[1.01] active:scale-[0.99] transition-transform`}
              >
                <Send size={16} /> {sent ? "Message Sent!" : "Send Message"}
              </button>
              {sent && (
                <p className={`text-center text-xs font-mono ${t.accent}`}>Thanks — I'll get back to you shortly.</p>
              )}
            </GlassCard>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FOOTER
   ========================================================================= */

function Footer({ t }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className={`border-t ${t.border} py-12 px-6`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className={`flex items-center gap-2 font-semibold ${t.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className={`w-7 h-7 rounded-lg ${t.accentBg} text-white flex items-center justify-center text-xs font-mono`}>Ew</span>
          Wekesa Ezra
        </div>
        <div className="flex flex-wrap justify-center gap-1">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className={`px-2.5 py-1 text-xs rounded-lg ${t.textMuted} hover:${t.accent}`}>
              {l.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2.5">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className={`${t.textFaint} hover:${t.accent} transition-colors`}>
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
      <p className={`text-center text-xs font-mono mt-8 ${t.textFaint}`}>
        © {new Date().getFullYear()} Wekesa Ezra. All rights reserved.
      </p>
    </footer>
  );
}

/* =========================================================================
   ROOT APP
   ========================================================================= */

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const t = isDark ? theme.dark : theme.light;

  // Keep the actual <body>/<html> background in sync with the theme.
  // Without this, mobile "elastic" overscroll bounce reveals the browser's
  // default white background even though every section here is dark.
  useEffect(() => {
    const bg = isDark ? "#000000" : "#f8fafc";
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }, [isDark]);

  return (
    <div className={`min-h-screen ${t.bg} transition-colors duration-500`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html, body { scroll-behavior: smooth; background-color: ${isDark ? "#000000" : "#f8fafc"}; }
        ::selection { background: rgba(56,189,248,0.3); }
      `}</style>

      <ScrollProgress t={t} />
      <Navbar isDark={isDark} setIsDark={setIsDark} t={t} />

      <main>
        <Hero t={t} isDark={isDark} />
        <About t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Certifications t={t} />
        <Achievements t={t} />
        <Blog t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
