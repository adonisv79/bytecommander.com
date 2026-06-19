import Head from "next/head";
import Link from "next/link";

const companies = [
  { name: "SOSA Israel", logoFile: "SOSA.png" },
  { name: "Samsung R&D Philippines", logoFile: "samsung.png" },
  { name: "Accenture Philippines", logoFile: "accenture.png" },
  { name: "Avanade Philippines", logoFile: "avanade.webp" },
  { name: "Navitaire", logoFile: "navitaire.png" },
  { name: "Fujitsu Philippines", logoFile: "Fujitsu.png" },
  { name: "WeServ", logoFile: "WeServ.png" },
  { name: "LenddoEFL", logoFile: "LenddoEFL.png" },
  { name: "Infinit-O Manila", logoFile: "infinito.webp" },
  { name: "ProSource", logoFile: "prosource.webp" },
  { name: "SiteMinder", logoFile: "siteminder.png" },
  { name: "Prudentialife", logoFile: "prudentialife.png" },
  { name: "Mediasoft Technologies", logoFile: "mediasoft.jpg" },
  { name: "Equicom Shared Services", logoFile: "equicom.png" },
  { name: "Console Connect", logoFile: "consoleconnect.webp" },
];

const currentTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Fastify",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "GitHub Actions",
  "Jest",
  "Playwright",
  "Redis",
  "MongoDB",
  "GCP",
];

const aiStack = [
  "Codex with OpenAI",
  "Claude Code with Opus",
  "Antigravity with Gemini",
  "Ollama",
  "Stable Diffusion",
  "Local AI hardware lab",
];

const legacyTech = [
  "C#",
  "ASP.NET",
  "SharePoint",
  "Express",
  "Sails.js",
  "Hapi.js",
  "AngularJS",
  "BPMN",
  "Camunda",
  "CircleCI",
  "Pulumi",
  "Material UI",
  "GIMP",
  "Google Workspace",
  "Jira",
  "Postman",
];

const achievements = [
  {
    title: "Current senior full-stack engineering at Console Connect",
    body: "Works on customer portal, vendor management, contract procurement, Jira and HubSpot automations, and process orchestration for global connectivity infrastructure services.",
  },
  {
    title: "Led and managed product engineering teams",
    body: "Served as Tech Lead and Engineering Manager at SiteMinder and LenddoEFL, covering delivery, 1-on-1s, hiring, onboarding, metrics, and technical planning.",
  },
  {
    title: "Architected core services at LenddoEFL",
    body: "Designed services for notifications, onboarding workflows, binary exchange, eKYC verification, SMS OTP provider balancing, and virtual FTP-style client data access.",
  },
  {
    title: "Recognized Samsung R&D leader",
    body: "Managed AUNZ project leaders, delivered many regional device projects on time, built an internal project management system, and earned GPMS 1 top-10% employee recognition for 2013 and 2014.",
  },
  {
    title: "Certified and multilingual professional",
    body: "Holds Microsoft, PMP, SharePoint, and Google Cloud Digital Leader credentials, with working language exposure in English, Filipino, and Chinese.",
  },
  {
    title: "Education foundation",
    body: "Earned an MBA from De La Salle University and a BS in Information Technology from Chiang Kai Shek College.",
  },
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Console Connect / PCCW Global",
    period: "Jun 2024 - Present",
    body: "Connectivity infrastructure portals, back-office systems, procurement workflows, automation, Camunda, BPMN, Jira, and HubSpot integrations.",
  },
  {
    role: "Senior Full-Stack Software Engineer",
    company: "SOSA",
    period: "Jun 2023 - May 2024",
    body: "Full-stack platform work using NestJS, Prisma, Rails, OpenAI API, Crunchbase API, PostgreSQL, React, React Query, Recoil, Playwright, Jest, CircleCI, Pulumi, and GCP.",
  },
  {
    role: "Tech Lead / Engineering Manager",
    company: "SiteMinder",
    period: "Aug 2020 - Mar 2023",
    body: "Led LittleHotelier delivery, image upload, SmartGuide/SmartChecklist, business calculation library, Italian compliance planning, people management, training, hiring, and technical documentation.",
  },
  {
    role: "Tech Team Leader / Engineering Manager",
    company: "LenddoEFL",
    period: "Dec 2015 - Apr 2020",
    body: "Led web, mobile, and backend teams while redesigning systems into SPA and REST-oriented services for identity, scoring, notifications, and client data workflows.",
  },
  {
    role: "Manager / Project Team Lead / Senior Software Engineer",
    company: "Samsung Electronics",
    period: "Oct 2012 - Dec 2015",
    body: "Managed project leaders for AUNZ mobile delivery, built internal management systems, led game-development learning initiatives, and earned high internal performance recognition.",
  },
  {
    role: "Senior Software Engineer",
    company: "Accenture / Navitaire",
    period: "Jul 2011 - Oct 2012",
    body: "Worked on airline client systems, SharePoint migration, baseline code, documentation, and Microsoft certification milestones.",
  },
  {
    role: "Earlier engineering and operations roles",
    company: "Fujitsu, Prudential Life, Mediasoft, 3E, Uni-Speed",
    period: "2003 - 2011",
    body: "Built issue tracking, IVR demos, pension loan systems, document management, inventory/POS systems, and operational workflows across technical and management roles.",
  },
];

const portfolio = [
  {
    title: "BocArena",
    href: "https://bocarena.com",
    status: "Under development",
    body: "A current product build that reflects his renewed interest in AI-assisted engineering, product thinking, and modern full-stack delivery.",
  },
  {
    title: "ByteCommander Portfolio",
    href: "https://github.com/adonisv79?tab=repositories",
    status: "Open source",
    body: "Public repositories and experiments showing long-term curiosity across tools, frameworks, and application patterns.",
  },
  {
    title: "Reversi",
    href: "/games/reversi",
    status: "Interactive demo",
    body: "A browser game implementation that demonstrates state management, interface logic, and product polish through a compact ruleset.",
  },
  {
    title: "Flappy Bee",
    href: "/games/flappy",
    status: "Game prototype",
    body: "A lightweight JavaScript game-engine experiment built from personal learning and creative technical play.",
  },
  {
    title: "Video Search Engine",
    href: "/search",
    status: "Search UI",
    body: "A practical interface experiment around search, results presentation, and media discovery workflows.",
  },
  {
    title: "POS UI Sample",
    href: "/pos",
    status: "Workflow demo",
    body: "A point-of-sale interface prototype for thinking through operational screens, product grids, cart flow, and admin tasks.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adonis Lee Villamor",
  alternateName: ["Don", "ByteCommander", "adonisv79"],
  url: "https://bytecommander.com",
  image: "https://bytecommander.com/images/don.webp",
  jobTitle: "Software Engineering Leader",
  email: "mailto:adonisv79@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/adonisv79/",
    "https://github.com/adonisv79",
    "https://bocarena.com",
  ],
  knowsAbout: [
    "Software engineering",
    "Engineering management",
    "Project management",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AI-assisted development",
    "Self-hosted AI",
    "Parallel programming",
    "Product engineering",
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Adonis Lee Villamor | Software Engineering Leader and AI-Adaptive
          Builder
        </title>
        <meta
          name="description"
          content="Professional profile of Adonis Lee Villamor, a Philippines-based software engineering leader, project manager, full-stack builder, and AI-adaptive technologist behind ByteCommander."
        />
        <meta
          name="keywords"
          content="Adonis Lee Villamor, ByteCommander, adonisv79, software engineering manager Philippines, React Next.js TypeScript, AI-assisted development, Ollama, Stable Diffusion, BocArena"
        />
        <link rel="canonical" href="https://bytecommander.com/" />
        <meta property="og:url" content="https://bytecommander.com" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Adonis Lee Villamor | ByteCommander"
        />
        <meta
          property="og:description"
          content="Software engineering leader and hands-on builder focused on pragmatic delivery, modern web systems, and AI-assisted development."
        />
        <meta
          property="og:image"
          content="https://bytecommander.com/images/don.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main>
        <section className="hero-section">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Philippines-based technology leader</p>
              <h1>
                Adonis Lee Villamor helps teams turn complex software work into
                usable, maintainable products.
              </h1>
              <p className="hero-lede">
                Known online as ByteCommander, Adonis brings a rare mix of
                developer depth, delivery discipline, product engineering, and
                people leadership. His current edge is practical AI adoption:
                using Claude Code, Codex, and Antigravity while building toward
                a self-hosted local AI lab.
              </p>
              <div className="hero-actions">
                <Link className="button primary" href="#portfolio">
                  View portfolio
                </Link>
                <Link className="button secondary" href="#contact">
                  Start a conversation
                </Link>
              </div>
            </div>
            <div className="portrait-panel" aria-label="Portrait of Adonis Lee Villamor">
              <img src="/images/don.webp" alt="Adonis Lee Villamor" />
              <div>
                <strong>Tech Lead / Senior Full-Stack Engineer</strong>
                <span>Product engineering, parallel programming, and AI-assisted delivery.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="section">
          <div className="site-shell two-column">
            <div>
              <p className="eyebrow">Professional signal</p>
              <h2>Experienced enough to lead, curious enough to keep rebuilding.</h2>
            </div>
            <div className="prose-block">
              <p>
                Adonis is a seasoned full-stack engineer and engineering
                manager with a track record in global, professional-grade
                systems. He focuses on turning complex business requirements
                into scalable software that teams can operate and improve.
              </p>
              <p>
                His professional style fits organizations that value adaptable
                builders: people who can write and review production code,
                understand delivery realities, guide teammates, speak with
                stakeholders, and keep learning when the technology landscape
                changes.
              </p>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="site-shell">
            <div className="section-heading">
              <p className="eyebrow">Career history</p>
              <h2>Global work exposure across product, consulting, R&D, and delivery.</h2>
            </div>
            <div className="logo-grid">
              {companies.map((company) => (
                <div className="logo-card" key={company.logoFile}>
                  <img
                    src={`/images/companies/${company.logoFile}`}
                    alt={`${company.name} logo`}
                  />
                  <span>{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <div className="section-heading">
              <p className="eyebrow">Experience timeline</p>
              <h2>A long arc from hands-on systems to technical leadership.</h2>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.period}`}>
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-lab" className="section">
          <div className="site-shell feature-grid">
            <div className="feature-card accent">
              <p className="eyebrow">Current direction</p>
              <h2>From AI skeptic to AI-powered builder.</h2>
              <p>
                His recent shift is important: after resisting the AI wave, he
                began testing it seriously, subscribing to major coding
                assistants including Antigravity with Gemini, Codex with
                OpenAI, and Claude Code with Opus, and treating AI as a new
                layer of engineering leverage rather than a shortcut.
              </p>
            </div>
            <div className="feature-card">
              <h3>AI tools in active learning</h3>
              <div className="tag-list">
                {aiStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p>
                The next milestone is self-hosted local AI: experimenting with
                dedicated hardware, Ollama, and Stable Diffusion so he can learn
                the infrastructure, model, and workflow layers directly.
              </p>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="site-shell stack-grid">
            <div>
              <p className="eyebrow">Current stack</p>
              <h2>Tools used most recently</h2>
              <div className="tag-list strong">
                {currentTech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Past and supporting stack</p>
              <h2>Useful experience carried forward</h2>
              <div className="tag-list muted">
                {legacyTech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <div className="section-heading">
              <p className="eyebrow">Achievements</p>
              <h2>Credibility that reads beyond a tool list.</h2>
            </div>
            <div className="achievement-grid">
              {achievements.map((achievement) => (
                <article className="achievement-card" key={achievement.title}>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.body}</p>
                </article>
              ))}
            </div>
            <div className="certificate-row">
              <img src="/images/certificates/mcp.png" alt="Microsoft Certified Professional" />
              <img src="/images/certificates/pmp.png" alt="Project Management Professional" />
            </div>
          </div>
        </section>

        <section id="portfolio" className="section soft-section">
          <div className="site-shell">
            <div className="section-heading">
              <p className="eyebrow">Portfolio</p>
              <h2>Selected work and experiments with professional context.</h2>
            </div>
            <div className="portfolio-grid">
              {portfolio.map((item) => (
                <article className="portfolio-card" key={item.title}>
                  <span>{item.status}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    Explore project
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
