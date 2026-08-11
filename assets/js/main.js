const EMAILS = ['emrekucuk74@hotmail.com', 'emre6774@gmail.com'];
const LINKEDIN_URL = 'https://www.linkedin.com/in/kucukemree/';
const GITHUB_URL = 'https://github.com/emrekucuk';
const MEDIUM_URL = 'https://medium.com/@emre-kucuk';

const content = {
  tr: {
    meta: {
      title: 'Emre KÜÇÜK — Software Developer',
      description: "Fintech ve kurumsal yazılım alanında; mikroservis mimarisi, Kubernetes altyapıları ve büyük ölçekli platformlarda çalışan Software Developer.",
    },
    nav: {
      about: 'Hakkımda', experience: 'Deneyim', projects: 'Projeler',
      skills: 'Beceriler', education: 'Eğitim', contact: 'İletişim',
    },
    hero: {
      title_line: 'Senior Software Developer',
      name: 'Emre KÜÇÜK',
      headline: 'Kurumsal ölçekte çalışan sistemler tasarlayan yazılım lideri.',
      subtitle: "Tarım Kredi Teknoloji'de Software Team Lead olarak; binlerce lokasyonda çalışan POS, yakıt otomasyonu ve kurumsal platformların mikroservis mimarisini, DevOps süreçlerini ve geliştirici ekiplerini yönetiyorum.",
      cta_primary: 'İletişime geç',
      cta_secondary: 'Deneyimi gör',
      card_location: 'Türkiye',
      card_langs: 'Türkçe · İngilizce',
      proof_1: "2019'dan bu yana yazılım geliştirme ve sistem mimarisi",
      proof_2: '1100+ lokasyonda çalışan platformların geliştirilmesi ve yönetimi',
      proof_3: 'Mikroservis, Kubernetes ve CI/CD süreçlerinde uçtan uca sorumluluk',
      focus_label: 'Odak alanı',
      focus_title: 'Koddan mimariye',
      focus_1: 'Mikroservis mimarisi',
      focus_2: 'DevOps & Kubernetes',
      focus_3: 'Ekip liderliği',
      stat1_value: '6+', stat1_label: 'Yıl deneyim',
      stat2_value: '18', stat2_label: 'Şirkette kullanılan platformlar',
      stat3_value: '1100+', stat3_label: 'Aktif lokasyon',
    },
    about: {
      label: 'Hakkımda',
      title: 'Kodun mimariyle, ekibin hedefle buluştuğu yer.',
      subtitle: '2020 yılından bu yana yazılım geliştirici olarak çalışıyor; proje analizi, sistem mimarisi ve veritabanı tasarımından sıfırdan repository kurulumuna kadar uçtan uca sorumluluk üstleniyorum. Halihazırda hem aktif geliştirici hem de takım lideri olarak görev alıyorum.',
      col1_label: 'Backend', col1_title: 'Ölçeklenebilir Mimari',
      col1_desc: '.NET Core ve mikroservis mimarisiyle; PostgreSQL, MS SQL Server ve MongoDB üzerinde yüksek trafikli, binlerce lokasyonda çalışan sistemler tasarlıyor ve geliştiriyorum.',
      col2_label: 'Liderlik', col2_title: 'Takım Liderliği',
      col2_desc: 'Aktif geliştirici olarak kod yazmaya devam ederken, ekibin teknik yol haritasını, iş planlamasını ve koordinasyonunu yönetiyorum.',
      col3_label: 'DevOps', col3_title: 'Altyapı & Otomasyon',
      col3_desc: "Jenkinsfile ve Dockerfile yazımından Jenkins pipeline'larına, Kubernetes'e dağıtımdan Serilog/Graylog ile gözlemlenebilirliğe kadar uçtan uca sorumluluk alıyorum.",
    },
    experience: {
      label: 'Deneyim', title: 'Kariyer geçmişi',
      items: [
         { role: 'Senior Software Developer', company: 'Tarım Kredi Teknoloji', period: 'Mart 2026 — Devam ediyor',
          description: 'KoopPOS Market projesinde senior developer olarak görev alıyorum.',
          tags: ['Dotnet 8', 'React', 'Kubernetes', 'Mikroservis', 'Kafka'] },
        { role: 'Software Team Lead', company: 'Tarım Kredi Teknoloji', period: 'Ekim 2024 — Mart 2026',
          description: 'KoopPOS Kooperatif ve KoopEnerji projelerinde hem aktif geliştirici hem de takım lideri olarak görev alıyorum; teknik kararlardan ekip koordinasyonuna kadar uçtan uca sorumluluk üstleniyorum.',
          tags: ['Dotnet 8', 'React', 'Kubernetes', 'Mikroservis', 'Kafka'] },
        { role: 'Software Developer', company: 'Tarım Kredi Teknoloji', period: 'Mayıs 2023 — Ekim 2024',
          description: 'KoopEnerji projesinin sıfırdan geliştirilmesinde ve Toprak platformunun mikroservis mimarisinde birçok modülde aktif rol aldım.',
          tags: ['Dotnet 8', 'React', 'MongoDB', 'Docker', 'Jenkins'] },
        { role: 'Software Developer', company: 'Crosstech Bilişim Teknolojileri', period: 'Ocak 2022 — Mart 2023',
          description: 'Şirkete gelen özel projeler doğrultusunda backend geliştirici olarak, özelleştirilmiş kurumsal çözümler üzerinde çalıştım.',
          tags: ['ASP.NET Core', 'PostgreSQL', 'Docker', 'Kubernetes'] },
        { role: 'Software Developer', company: 'Roboplas', period: 'Ağustos 2020 — Ocak 2022',
          description: 'Kurumsal bir ERP projesinin birden fazla modülünün geliştirilmesinde backend geliştirici olarak görev aldım.',
          tags: ['ASP.NET', 'MS SQL Server'] },
        { role: 'Software Developer', company: 'Roboplas', period: 'Eylül 2019 — Ekim 2019',
          description: 'Kurumsal bir ERP projesinin birden fazla modülünün geliştirilmesinde backend geliştirici olarak görev aldım.',
          tags: ['ASP.NET', 'MS SQL Server'] },
      ],
    },
    projects: {
      label: 'Projeler', title: 'Sıfırdan geliştirdiğim platformlar',
      subtitle: 'Analiz, mimari tasarım ve geliştirmeden sahaya alınmasına kadar uçtan uca rol aldığım büyük ölçekli projeler.',
      items: [
        { name: 'KoopPOS Market', scale: '2500+ lokasyon',
          description: "Modern, web tabanlı kasa platformu. Sıfırdan geliştirildi. 'KoopPOS Market' aktif geliştirilmekte olup 2500'den fazla market lokasyonunda çalışması planlanıyor.",
          tags: ['Dotnet 10', 'React', 'Postgresql', 'Quartz', 'WebSocket'] },
        { name: 'KoopPOS Koperatif', scale: '1100+ aktif lokasyon',
          description: "Modern, web tabanlı kasa platformu. Sıfırdan geliştirildi. 'KoopPOS Kooperatif' 1100'den fazla kooperatif lokasyonunda çalışıyor; 'KoopPOS Market' aktif geliştirilmekte olup 2500'den fazla market lokasyonunda çalışması planlanıyor.",
          tags: ['Dotnet 10', 'React', 'MS SQL', 'Hangfire', 'WebSocket', 'Kubernetes', 'IIS'] },
        { name: 'KoopEnerji', scale: '1600+ lokasyon',
          description: 'Modern, web tabanlı yakıt otomasyon sistemi. Sıfırdan geliştirildi, sahada aktif olarak test ediliyor. Eski versiyonu Tarpet, 1600\'den fazla lokasyonda çalışıyor ve 3 yıldır bakımı yapılıyor.',
          tags: ['Dotnet 10', 'React', 'MS SQL', 'WebSocket', 'Kubernetes', 'IIS'] },
        { name: 'Toprak', scale: '18 şirkette kullanımda',
          description: "Kurumsal modüllerden oluşan bir yazılım platformu. Sıfırdan geliştirildi; Tarım Kredi Grubu'ndaki 18 şirket tarafından kullanılıyor. Mikroservis backend, mikrofrontend web ve mobil uygulaması mevcut.",
          tags: ['Dotnet 10', 'React', 'React Native', 'Mikroservis', 'Kubernetes'] },
      ],
    },
    skills: {
      label: 'Beceriler', title: 'Teknoloji yığını',
      items: ['ASP.NET Core', 'ASP.NET MVC', 'Microservices', 'PostgreSQL', 'MS SQL Server', 'MongoDB', 'Git', 'GitLab', 'Jenkins', 'Linux', 'Docker', 'Kubernetes', 'Cloudflare', 'Jira', 'Nexus', 'Kafka', 'Serilog', 'Graylog', 'WebSocket', 'Hangfire', 'IIS'],
    },
    education: {
      label: 'Eğitim', title: 'Akademik geçmiş',
      items: [
        { school: 'Süleyman Demirel Üniversitesi', degree: 'Bilgisayar Mühendisliği, Lisans', period: '2014 — 2019',
          description: 'Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği bölümünden 2019 yılında mezun oldum.' },
      ],
    },
    contact: {
      label: 'İletişim', title: 'Birlikte çalışalım.',
      subtitle: 'Yeni fırsatlar, teknik danışmanlık veya iş birlikleri için bana ulaşabilirsiniz.',
      email_label: 'E-posta', linkedin_label: 'LinkedIn', github_label: 'GitHub', medium_label: 'Medium',
    },
    footer: { rights: 'Tüm hakları saklıdır.' },
  },
  en: {
    meta: {
      title: 'Emre KÜÇÜK — Software Developer',
      description: 'Software Developer building microservice architectures, Kubernetes infrastructure, and large-scale platforms across fintech and enterprise software.',
    },
    nav: {
      about: 'About', experience: 'Experience', projects: 'Projects',
      skills: 'Skills', education: 'Education', contact: 'Contact',
    },
    hero: {
      title_line: 'Senior Software Developer',
      name: 'Emre KÜÇÜK',
      headline: 'Software leader building systems that run at enterprise scale.',
      subtitle: 'As Software Team Lead at Tarım Kredi Teknoloji, I lead the microservice architecture, DevOps processes, and engineering teams behind POS, fuel automation, and enterprise platforms running across thousands of locations.',
      cta_primary: 'Get in touch',
      cta_secondary: 'View experience',
      card_location: 'Turkey',
      card_langs: 'Turkish · English',
      proof_1: 'Software development and systems architecture since 2019',
      proof_2: 'Built and maintained platforms running across 1,100+ locations',
      proof_3: 'End-to-end ownership of microservices, Kubernetes, and CI/CD',
      focus_label: 'Focus',
      focus_title: 'From code to architecture',
      focus_1: 'Microservice architecture',
      focus_2: 'DevOps & Kubernetes',
      focus_3: 'Team leadership',
      stat1_value: '6+', stat1_label: 'Years experience',
      stat2_value: '18', stat2_label: 'Companies running my platforms',
      stat3_value: '1,100+', stat3_label: 'Active locations',
    },
    about: {
      label: 'About',
      title: "Where architecture meets the team's goals.",
      subtitle: "I've worked as a software developer since 2020, taking end-to-end ownership from project analysis and system architecture to database design and building repositories from scratch. I currently work as both an active developer and a team lead.",
      col1_label: 'Backend', col1_title: 'Scalable Architecture',
      col1_desc: 'Designing and building high-traffic systems running across thousands of locations using .NET Core, a microservice architecture, PostgreSQL, MS SQL Server, and MongoDB.',
      col2_label: 'Leadership', col2_title: 'Team Leadership',
      col2_desc: "While staying hands-on as an active developer, I own the team's technical roadmap, planning, and coordination.",
      col3_label: 'DevOps', col3_title: 'Infrastructure & Automation',
      col3_desc: 'End-to-end ownership from writing Jenkinsfiles and Dockerfiles to Jenkins pipelines, Kubernetes deployments, and observability with Serilog/Graylog.',
    },
    experience: {
      label: 'Experience', title: 'Career history',
      items: [
        { role: 'Senior Software Developer', company: 'Tarım Kredi Teknoloji', period: 'Mar 2026 — Present',
          description: 'Working as a senior developer on the KoopPOS Market project.',
          tags: ['Dotnet 8', 'React', 'Kubernetes', 'Microservices', 'Kafka'] },
        { role: 'Software Team Lead', company: 'Tarım Kredi Teknoloji', period: 'Oct 2024 — Mar 2026',
          description: 'Worked as both an active developer and team lead on the KoopPOS Kooperatif and KoopEnerji projects — owning technical decisions end-to-end while coordinating the team.',
          tags: ['Dotnet 8', 'React', 'Kubernetes', 'Microservices', 'Kafka'] },
        { role: 'Software Developer', company: 'Tarım Kredi Teknoloji', period: 'May 2023 — Oct 2024',
          description: 'Took an active role building KoopEnerji from scratch and contributed to many modules within the Toprak platform\'s microservice architecture.',
          tags: ['Dotnet 8', 'React', 'MongoDB', 'Docker', 'Jenkins'] },
        { role: 'Software Developer', company: 'Crosstech Bilişim Teknolojileri', period: 'Jan 2022 — Mar 2023',
          description: "Worked as a backend developer on custom enterprise solutions built for the company's clients.",
          tags: ['ASP.NET Core', 'PostgreSQL', 'Docker', 'Kubernetes'] },
        { role: 'Software Developer', company: 'Roboplas', period: 'Aug 2020 — Jan 2022',
          description: 'Worked as a backend developer building several modules of an enterprise ERP project.',
          tags: ['ASP.NET', 'MS SQL Server'] },
        { role: 'Software Developer', company: 'Roboplas', period: 'Sep 2019 — Oct 2019',
          description: 'Worked as a backend developer building several modules of an enterprise ERP project.',
          tags: ['ASP.NET', 'MS SQL Server'] },
      ],
    },
    projects: {
      label: 'Projects', title: 'Platforms built from the ground up',
      subtitle: 'Large-scale projects where I owned everything end-to-end — from analysis and architecture to development and rollout.',
      items: [
        { name: 'KoopPOS Market', scale: '2,500+ locations',
          description: "A modern, web-based POS platform built from scratch. 'KoopPOS Market' is under active development and planned to run across 2,500+ market locations.",
          tags: ['Dotnet 10', 'React', 'PostgreSQL', 'Quartz', 'WebSocket'] },
        { name: 'KoopPOS Kooperatif', scale: '1,100+ active locations',
          description: "A modern, web-based POS platform built from scratch. 'KoopPOS Kooperatif' runs across 1,100+ cooperative locations; 'KoopPOS Market' is under active development and planned to run across 2,500+ market locations.",
          tags: ['Dotnet 10', 'React', 'MS SQL', 'Hangfire', 'WebSocket', 'Kubernetes', 'IIS'] },
        { name: 'KoopEnerji', scale: '1,600+ locations',
          description: 'A modern, web-based fuel automation system built from scratch, actively tested in the field. Its predecessor, Tarpet, runs across 1,600+ locations and has been maintained for 3 years.',
          tags: ['Dotnet 10', 'React', 'MS SQL', 'WebSocket', 'Kubernetes', 'IIS'] },
        { name: 'Toprak', scale: 'Used by 18 companies',
          description: 'An enterprise software platform made up of corporate modules, built from scratch and used by 18 companies within the Tarım Kredi Group. Microservice backend with a microfrontend web app and mobile application.',
          tags: ['Dotnet 10', 'React', 'React Native', 'Microservices', 'Kubernetes'] },
      ],
    },
    skills: {
      label: 'Skills', title: 'Technology stack',
      items: ['ASP.NET Core', 'ASP.NET MVC', 'Microservices', 'PostgreSQL', 'MS SQL Server', 'MongoDB', 'Git', 'GitLab', 'Jenkins', 'Linux', 'Docker', 'Kubernetes', 'Cloudflare', 'Jira', 'Nexus', 'Kafka', 'Serilog', 'Graylog', 'WebSocket', 'Hangfire', 'IIS'],
    },
    education: {
      label: 'Education', title: 'Academic background',
      items: [
        { school: 'Süleyman Demirel University', degree: 'B.Sc. Computer Engineering', period: '2014 — 2019',
          description: 'Graduated from Süleyman Demirel University, Department of Computer Engineering, in 2019.' },
      ],
    },
    contact: {
      label: 'Contact', title: "Let's work together.",
      subtitle: 'Reach out for new opportunities, technical consulting, or collaboration.',
      email_label: 'Email', linkedin_label: 'LinkedIn', github_label: 'GitHub', medium_label: 'Medium',
    },
    footer: { rights: 'All rights reserved.' },
  },
};

const NAV_KEYS = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

const state = {
  locale: localStorage.getItem('locale') || 'tr',
  menuOpen: false,
};

const SUN_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"></circle><path d="M12 2.5v2.4M12 19.1v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7"></path></svg>';
const MOON_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a.6.6 0 0 0-.75-.8A9.8 9.8 0 1 0 21.3 15.3a.6.6 0 0 0-.8-.7Z"></path></svg>';

function getStoredTheme() {
  const stored = localStorage.getItem('theme');
  return stored === 'dark' || stored === 'light' ? stored : null;
}

function effectiveTheme() {
  const stored = getStoredTheme();
  if (stored) return stored;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function renderHeader(locale) {
  const t = content[locale];
  const nav = NAV_KEYS.map((key) => `<a href="#${key}">${t.nav[key]}</a>`).join('');
  const isDark = effectiveTheme() === 'dark';
  return `
    <div class="site-header-inner">
      <a href="#top" class="brand">Emre KÜÇÜK</a>
      <nav class="main-nav" aria-label="Primary navigation">${nav}</nav>
      <div class="header-actions">
        <button type="button" class="theme-toggle" id="themeToggle" aria-label="${isDark ? 'Switch to light mode' : 'Switch to dark mode'}">${isDark ? SUN_ICON : MOON_ICON}</button>
        <button type="button" class="lang-switch" id="langSwitch" aria-label="Switch language">${locale === 'tr' ? 'EN' : 'TR'}</button>
        <button type="button" class="mobile-menu-button" id="menuButton" aria-label="Menu" aria-expanded="${state.menuOpen}">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;
}

function renderDrawer(locale) {
  const t = content[locale];
  return NAV_KEYS.map((key) => `<a href="#${key}" data-drawer-link>${t.nav[key]}</a>`).join('');
}

function sectionHeader({ label, title, subtitle }) {
  return `
    <div class="section-header reveal">
      <span class="section-label">${label}</span>
      ${title ? `<h2>${title}</h2>` : ''}
      ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}
    </div>
  `;
}

function renderHero(locale) {
  const t = content[locale].hero;
  return `
    <section id="top" class="hero">
      <div class="shell hero-grid">
        <div class="hero-copy reveal">
          <h1>${t.name}<span class="hero-role">${t.title_line}</span></h1>
          <p class="hero-headline">${t.headline}</p>
          <p class="hero-subtitle">${t.subtitle}</p>
          <div class="hero-cta">
            <a href="#contact" class="btn btn-primary">${t.cta_primary}</a>
            <a href="#experience" class="btn btn-ghost">${t.cta_secondary}</a>
          </div>
          <ul class="hero-proof">
            <li>${t.proof_1}</li>
            <li>${t.proof_2}</li>
            <li>${t.proof_3}</li>
          </ul>
        </div>
        <div class="hero-visual reveal">
          <div class="hero-card">
            <img src="assets/images/profile.png" alt="${t.name}" class="hero-photo">
            <div class="hero-card-info">
              <strong>${t.name}</strong>
              <span>${t.title_line}</span>
              <span class="muted">${t.card_location}</span>
              <span class="muted">${t.card_langs}</span>
            </div>
          </div>
          <div class="focus-card">
            <span class="focus-label">${t.focus_label}</span>
            <strong>${t.focus_title}</strong>
            <ul>
              <li>${t.focus_1}</li>
              <li>${t.focus_2}</li>
              <li>${t.focus_3}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="shell stats-row reveal">
        <div class="stat-card"><span class="stat-value">${t.stat1_value}</span><span class="stat-label">${t.stat1_label}</span></div>
        <div class="stat-card"><span class="stat-value">${t.stat2_value}</span><span class="stat-label">${t.stat2_label}</span></div>
        <div class="stat-card"><span class="stat-value">${t.stat3_value}</span><span class="stat-label">${t.stat3_label}</span></div>
      </div>
    </section>
  `;
}

function renderAbout(locale) {
  const t = content[locale].about;
  return `
    <section id="about" class="section">
      <div class="shell">
        ${sectionHeader({ label: t.label, subtitle: t.subtitle })}
        <div class="about-grid">
          <div class="about-col reveal">
            <span class="about-col-label">${t.col1_label}</span>
            <h3>${t.col1_title}</h3>
            <p>${t.col1_desc}</p>
          </div>
          <div class="about-col reveal">
            <span class="about-col-label">${t.col2_label}</span>
            <h3>${t.col2_title}</h3>
            <p>${t.col2_desc}</p>
          </div>
          <div class="about-col reveal">
            <span class="about-col-label">${t.col3_label}</span>
            <h3>${t.col3_title}</h3>
            <p>${t.col3_desc}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderExperience(locale) {
  const t = content[locale].experience;
  const items = t.items.map((item) => `
    <li class="timeline-item reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-heading">
          <h3>${item.role}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <p class="timeline-company">${item.company}</p>
        <p class="timeline-desc">${item.description}</p>
        <ul class="tag-list">${item.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
      </div>
    </li>
  `).join('');
  return `
    <section id="experience" class="section section-alt">
      <div class="shell">
        ${sectionHeader({ label: t.label, title: t.title })}
        <ol class="timeline">${items}</ol>
      </div>
    </section>
  `;
}

function renderProjects(locale) {
  const t = content[locale].projects;
  const items = t.items.map((project) => `
    <article class="project-card reveal">
      <div class="project-card-head">
        <h3>${project.name}</h3>
        <span class="project-scale">${project.scale}</span>
      </div>
      <p>${project.description}</p>
      <ul class="tag-list">${project.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
    </article>
  `).join('');
  return `
    <section id="projects" class="section">
      <div class="shell">
        ${sectionHeader({ label: t.label })}
        <div class="project-grid">${items}</div>
      </div>
    </section>
  `;
}

function renderSkills(locale) {
  const t = content[locale].skills;
  return `
    <section id="skills" class="section section-alt">
      <div class="shell">
        ${sectionHeader({ label: t.label, title: t.title })}
        <ul class="skills-grid reveal">
          ${t.items.map((skill) => `<li class="skill-pill">${skill}</li>`).join('')}
        </ul>
      </div>
    </section>
  `;
}

function renderEducation(locale) {
  const t = content[locale].education;
  const items = t.items.map((edu) => `
    <div class="education-card reveal">
      <h3>${edu.school}</h3>
      <span class="education-period">${edu.period}</span>
      <p class="education-degree">${edu.degree}</p>
      <p>${edu.description}</p>
    </div>
  `).join('');
  return `
    <section id="education" class="section">
      <div class="shell">
        ${sectionHeader({ label: t.label })}
        <div class="education-list">${items}</div>
      </div>
    </section>
  `;
}

function renderContact(locale) {
  const t = content[locale].contact;
  const cta = content[locale].hero.cta_primary;
  return `
    <section id="contact" class="section section-alt">
      <div class="shell">
        ${sectionHeader({ label: t.label })}
        <div class="contact-grid reveal">
          <div class="contact-links">
            <div class="contact-item">
              <span class="contact-item-label">${t.email_label}</span>
              ${EMAILS.map((email) => `<a href="mailto:${email}">${email}</a>`).join('')}
            </div>
            <div class="contact-item">
              <span class="contact-item-label">${t.linkedin_label}</span>
              <a href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">linkedin.com/in/kucukemree</a>
            </div>
            <div class="contact-item">
              <span class="contact-item-label">${t.github_label}</span>
              <a href="${GITHUB_URL}" target="_blank" rel="noreferrer">github.com/emrekucuk</a>
            </div>
            <div class="contact-item">
              <span class="contact-item-label">${t.medium_label}</span>
              <a href="${MEDIUM_URL}" target="_blank" rel="noreferrer">medium.com/@emre-kucuk</a>
            </div>
          </div>
          <a href="mailto:${EMAILS[0]}" class="btn btn-primary contact-cta">${cta}</a>
        </div>
      </div>
    </section>
  `;
}

function renderMain(locale) {
  return [
    renderHero(locale),
    renderAbout(locale),
    renderExperience(locale),
    renderProjects(locale),
    renderSkills(locale),
    renderEducation(locale),
    renderContact(locale),
  ].join('');
}

function renderFooter(locale) {
  const t = content[locale].footer;
  return `
    <div class="shell footer-inner">
      <span>© ${new Date().getFullYear()} Emre KÜÇÜK — ${t.rights}</span>
      <a href="#top">↑ Top</a>
    </div>
  `;
}

function initReveal() {
  const elements = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  elements.forEach((el) => observer.observe(el));
}

function bindHeaderEvents() {
  const header = document.getElementById('siteHeader');
  const drawer = document.getElementById('mobileDrawer');
  const menuButton = header.querySelector('#menuButton');
  const langSwitch = header.querySelector('#langSwitch');

  menuButton.addEventListener('click', () => {
    state.menuOpen = !state.menuOpen;
    document.body.classList.toggle('no-scroll', state.menuOpen);
    drawer.classList.toggle('is-open', state.menuOpen);
    menuButton.setAttribute('aria-expanded', String(state.menuOpen));
  });

  drawer.querySelectorAll('[data-drawer-link]').forEach((link) => {
    link.addEventListener('click', () => {
      state.menuOpen = false;
      document.body.classList.remove('no-scroll');
      drawer.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  langSwitch.addEventListener('click', () => {
    state.locale = state.locale === 'tr' ? 'en' : 'tr';
    localStorage.setItem('locale', state.locale);
    renderAll();
  });

  const themeToggle = header.querySelector('#themeToggle');
  themeToggle.addEventListener('click', () => {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
    renderAll();
  });
}

function applyMeta(locale) {
  const t = content[locale].meta;
  document.documentElement.lang = locale;
  document.title = t.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t.description);
}

function renderAll() {
  applyMeta(state.locale);
  document.getElementById('siteHeader').innerHTML = renderHeader(state.locale);
  document.getElementById('mobileDrawer').innerHTML = renderDrawer(state.locale);
  document.getElementById('mobileDrawer').classList.toggle('is-open', state.menuOpen);
  document.getElementById('main').innerHTML = renderMain(state.locale);
  document.getElementById('siteFooter').innerHTML = renderFooter(state.locale);
  bindHeaderEvents();
  initReveal();
}

function bindScrollHeader() {
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  bindScrollHeader();
});
