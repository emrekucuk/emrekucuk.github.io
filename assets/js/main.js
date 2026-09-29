const EMAILS = ['emrekucuk74@hotmail.com'];
const LINKEDIN_URL = 'https://www.linkedin.com/in/kucukemree/';
const GITHUB_URL = 'https://github.com/emrekucuk';

const MAIL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3.5 6.5 8.5 7 8.5-7"></path></svg>';
const LINKEDIN_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"></path></svg>';
const GITHUB_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.85-2.78.6-3.37-1.19-3.37-1.19-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.53 9.53 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.2c0-5.52-4.48-10-10-10Z"></path></svg>';

const content = {
  tr: {
    meta: {
      title: 'Emre KÜÇÜK — Software Developer',
      description: ""
    },
    nav: {
      experience: 'Deneyim', projects: 'Projeler',
      skills: 'Beceriler', education: 'Eğitim', contact: 'İletişim',
    },
    hero: {
      title_line: 'Senior Software Developer',
      name: 'Emre KÜÇÜK',
      headline: "Analiz, mimari ve DevOps'tan takım liderliğine uçtan uca sorumluluk alan yazılım geliştirici.",
      subtitle: "2020'den bu yana C# ve .NET ile backend ağırlıklı kurumsal yazılımlar geliştiriyorum. Analiz, mimari ve veritabanı tasarımından sıfırdan repository kurulumuna, Jenkins pipeline ve Dockerfile yazımından Kubernetes ortamında yayına almaya kadar uçtan uca sorumluluk aldım. Tarım Kredi Teknoloji'de 1100'den fazla lokasyonda çalışan KoopPOS ve 18 grup şirketinde kullanılan Toprak gibi platformların sıfırdan geliştirilmesinde yer aldım; yaklaşık bir buçuk yıl takım lideri olarak 6 kişilik ekibi yönettim.",
      card_location: 'Türkiye',
      card_langs: 'Türkçe · İngilizce',
      proof_1: "2020'den bu yana analiz, mimari ve veritabanı tasarımında aktif rol",
      proof_2: 'Jenkinsfile, Dockerfile ve Kubernetes ile uçtan uca DevOps süreçleri',
      proof_3: 'Yaklaşık bir buçuk yıl 6 kişilik ekibe takım liderliği',
      stat1_value: '6+', stat1_label: 'Yıl deneyim',
      stat2_value: '18', stat2_label: 'Şirkette kullanılan platformlar',
      stat3_value: '1100+', stat3_label: 'Aktif lokasyon',
    },
    experience: {
      label: 'Deneyim', title: 'Kariyer geçmişi',
      items: [
        {
          role: 'Senior Software Developer',
          company: 'Tarım Kredi Teknoloji',
          period: 'Mart 2026 — Devam ediyor',
          description: 'KoopPOS Market projesinde senior backend developer olarak görev alıyorum.',
          tags: ['.NET 10', 'Dapper', 'React', 'PostgreSQL', 'NATS']
        },
        {
          role: 'Software Team Lead',
          company: 'Tarım Kredi Teknoloji',
          period: 'Ekim 2024 — Mart 2026',
          description: 'KoopPOS Kooperatif ve KoopEnerji projelerinde 6 kişilik ekipte hem aktif geliştirici hem de takım lideri olarak görev aldım; teknik kararlardan ekip koordinasyonuna kadar uçtan uca sorumluluk üstlendim.',
          tags: ['.NET 10', 'React', 'Kubernetes']
        },
        {
          role: 'Software Developer',
          company: 'Tarım Kredi Teknoloji',
          period: 'Mayıs 2023 — Ekim 2024',
          description: 'KoopEnerji projesinin sıfırdan geliştirilmesinde ve Toprak platformunun mikroservis mimarisinde birçok modülde aktif rol aldım.',
          tags: ['.NET 10', 'React', 'MongoDB', 'Docker', 'Jenkins']
        },
        {
          role: 'Software Developer',
          company: 'Crosstech Bilişim Teknolojileri',
          period: 'Ocak 2022 — Mart 2023',
          description: 'Şirkete gelen özel projeler doğrultusunda backend geliştirici olarak, özelleştirilmiş kurumsal çözümler üzerinde çalıştım. GuideFM ve MTSK gibi projelerin sıfırdan yazılmasında görev aldım.',
          tags: ['ASP.NET Core', 'PostgreSQL', 'Docker', 'Kubernetes']
        },
        {
          role: 'Software Developer',
          company: 'Roboplas',
          period: 'Ağustos 2020 — Ocak 2022',
          description: 'Kurumsal bir ERP projesinin birden fazla modülünün geliştirilmesinde backend geliştirici olarak görev aldım. İş emri, Sipariş Teknik Formu ve içeride kullanılan CRM uygulamasının istenilen modüllerinin yeni projede sıfırdan yazılmasını gerçekleştirdik.',
          tags: ['ASP.NET', 'MS SQL Server']
        },
        {
          role: 'Software Developer',
          company: 'Roboplas',
          period: 'Eylül 2019 — Ekim 2019',
          description: 'Kurumsal bir ERP projesinin birden fazla modülünün geliştirilmesinde backend geliştirici olarak görev aldım. ',
          tags: ['ASP.NET', 'MS SQL Server']
        },
      ],
    },
    projects: {
      label: 'Projeler', title: 'Sıfırdan geliştirdiğim platformlar',
      subtitle: 'Analiz, mimari tasarım ve geliştirmeden sahaya alınmasına kadar uçtan uca rol aldığım büyük ölçekli projeler.',
      items: [
        {
          name: 'KoopPOS Market',
          scale: '2500+ lokasyon',
          description: "Modern, web tabanlı kasa platformu; 2500'den fazla market lokasyonunda çalışması planlanıyor. Platformun sıfırdan geliştirilmesinde backend geliştirici olarak görev alıyorum.",
          tags: ['.NET 10', 'React', 'PostgreSQL', 'Quartz', 'WebSocket']
        },
        {
          name: 'KoopPOS Kooperatif',
          scale: '1100+ aktif lokasyon',
          description: "Modern, web tabanlı kasa platformu; 1100'den fazla kooperatif lokasyonunda çalışıyor. Sıfırdan yazılmasında backend geliştirici olarak tüm katmanlarda geliştirme yaptım; iş planlaması, CI/CD ve Kubernetes'e yayına alma süreçlerinde görev aldım.",
          tags: ['.NET 10', 'React', 'MS SQL Server', 'Hangfire', 'WebSocket', 'Kubernetes', 'IIS']
        },
        {
          name: 'KoopEnerji',
          scale: '1600+ lokasyon',
          description: "Modern, web tabanlı yakıt otomasyon sistemi; sahada aktif olarak test ediliyor. Eski versiyonu Tarpet 1600'den fazla lokasyonda çalışıyor ve 3 yıldır bakımı yapılıyor. Backend'in sıfırdan yazılmasında, iş planlamasında, CI/CD adımlarında ve Kubernetes ortamında yayına alınmasında yer aldım.",
          tags: ['.NET 10', 'React', 'MS SQL Server', 'WebSocket', 'Kubernetes', 'IIS']
        },
        {
          name: 'Toprak',
          scale: '18 şirkette kullanımda',
          description: "Kurumsal modüllerden oluşan platform; Tarım Kredi Grubu'ndaki 18 şirket tarafından kullanılıyor. Mikroservis backend, mikrofrontend web ve mobil uygulaması mevcut. Sıfırdan yazılmasında backend geliştirici olarak iş planlamasından CI/CD ve Kubernetes'e yayına almaya kadar tüm adımlarda görev aldım.",
          tags: ['.NET 10', 'React', 'Microservices', 'Kubernetes']
        },
        {
          name: 'MTSK',
          scale: '',
          description: "Sürücü kursları için yapılmış multi tenant yapıda olan sürücü kursu sahiplerinin, eğitmenlerinin ve adayların dökümanlarını, ders planlamalarını yönetip takip ettiği bir uygulamadır.",
          tags: ['.NET 6', 'React', 'PostgreSQL']
        },
        {
          name: 'GuideFM',
          scale: '',
          description: "Tur rehberleri için geliştirilen mobil ve web uygulamasıdır. Tur rehberlerinin ve katılımcıların uygulama içi kredi yükleme ve işlemlerini takip edebildikleri bir sistemdir.",
          tags: ['.NET 6', 'React', 'PostgreSQL']
        },
        {
          name: 'Sipariş Teknik Formu',
          scale: '',
          description: "Yapılacak olan robotların siparişinin alındığı, sipariş detaylarının eklendiği ve takip edildiği bir uygulamadır.",
          tags: ['.NET 6', 'Angular', 'MS SQL Server']
        },
        {
          name: 'İş Emri',
          scale: '',
          description: "İşlerin eklendiği, atandığı, durumlarının ilerletildiği ve yorumlarının yapıldığı şirket içi bir uygulamadır.",
          tags: ['ASP.NET MVC', 'Angular', 'MS SQL Server']
        },
      ],
    },
    skills: {
      label: 'Beceriler',
      items: ['C#', '.NET', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework Core', 'Dapper', 'REST API', 'Clean Architecture', 'Microservices', 'SQL', 'MS SQL Server', 'PostgreSQL', 'MongoDB', 'CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'Git', 'GitLab', 'Linux', 'Kafka', 'WebSocket', 'Hangfire', 'Serilog', 'Graylog', 'Nexus', 'Cloudflare', 'Jira', 'IIS'],
    },
    education: {
      label: 'Eğitim', title: 'Akademik geçmiş',
      items: [
        {
          school: 'Süleyman Demirel Üniversitesi',
          degree: 'Bilgisayar Mühendisliği, Lisans',
          period: '2014 — 2019',
          description: 'Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği bölümünden 2019 yılında mezun oldum.'
        },
      ],
    },
    contact: {
      label: 'İletişim', title: 'Birlikte çalışalım.',
      subtitle: 'Yeni fırsatlar, teknik danışmanlık veya iş birlikleri için bana ulaşabilirsiniz.',
      social_label: 'Sosyal',
    },
    footer: { rights: 'Tüm hakları saklıdır.' },
  },
  en: {
    meta: {
      title: 'Emre KÜÇÜK — Software Developer',
      description: "",
    },
    nav: {
      experience: 'Experience', projects: 'Projects',
      skills: 'Skills', education: 'Education', contact: 'Contact',
    },
    hero: {
      title_line: 'Senior Software Developer',
      name: 'Emre KÜÇÜK',
      headline: 'Software developer taking end-to-end ownership from architecture to team leadership.',
      subtitle: "Since 2020, I have been building backend-focused enterprise software with C# and .NET. I took end-to-end ownership — from analysis, architecture, and database design to setting up repositories from scratch, writing Jenkins pipelines and Dockerfiles, and deploying to Kubernetes. At Tarım Kredi Teknoloji, I helped build platforms from the ground up, such as KoopPOS, running across 1,100+ locations, and Toprak, used by 18 group companies; I also led a team of 6 as team lead for about a year and a half.",
      card_location: 'Turkey',
      card_langs: 'Turkish · English',
      proof_1: 'Active role in analysis, architecture, and database design since 2020',
      proof_2: 'End-to-end DevOps ownership with Jenkinsfiles, Dockerfiles, and Kubernetes',
      proof_3: 'About a year and a half leading a team of 6 as team lead',
      stat1_value: '6+', stat1_label: 'Years experience',
      stat2_value: '18', stat2_label: 'Companies running my platforms',
      stat3_value: '1,100+', stat3_label: 'Active locations',
    },
    experience: {
      label: 'Experience', title: 'Career history',
      items: [
        {
          role: 'Senior Software Developer',
          company: 'Tarım Kredi Teknoloji',
          period: 'Mar 2026 — Present',
          description: 'Working as a senior backend developer on the KoopPOS Market project.',
          tags: ['.NET 10', 'Dapper', 'React', 'PostgreSQL', 'NATS']
        },
        {
          role: 'Software Team Lead',
          company: 'Tarım Kredi Teknoloji',
          period: 'Oct 2024 — Mar 2026',
          description: 'Worked as both an active developer and team lead of a 6-person team on the KoopPOS Kooperatif and KoopEnerji projects — owning technical decisions end-to-end while coordinating the team.',
          tags: ['.NET 10', 'React', 'Kubernetes']
        },
        {
          role: 'Software Developer',
          company: 'Tarım Kredi Teknoloji',
          period: 'May 2023 — Oct 2024',
          description: 'Took an active role building KoopEnerji from scratch and contributed to many modules within the Toprak platform\'s microservice architecture.',
          tags: ['.NET 10', 'React', 'MongoDB', 'Docker', 'Jenkins']
        },
        {
          role: 'Software Developer',
          company: 'Crosstech Bilişim Teknolojileri',
          period: 'Jan 2022 — Mar 2023',
          description: "Worked as a backend developer on custom enterprise solutions built for the company's clients. Took part in building projects like GuideFM and MTSK from scratch.",
          tags: ['ASP.NET Core', 'PostgreSQL', 'Docker', 'Kubernetes']
        },
        {
          role: 'Software Developer',
          company: 'Roboplas',
          period: 'Aug 2020 — Jan 2022',
          description: 'Worked as a backend developer building several modules of an enterprise ERP project. Rebuilt the required modules of the Work Order, Order Technical Form, and internal CRM application from scratch in the new project.',
          tags: ['ASP.NET', 'MS SQL Server']
        },
        {
          role: 'Software Developer',
          company: 'Roboplas',
          period: 'Sep 2019 — Oct 2019',
          description: 'Worked as a backend developer building several modules of an enterprise ERP project.',
          tags: ['ASP.NET', 'MS SQL Server']
        },
      ],
    },
    projects: {
      label: 'Projects', title: 'Platforms built from the ground up',
      subtitle: 'Large-scale projects where I owned everything end-to-end — from analysis and architecture to development and rollout.',
      items: [
        {
          name: 'KoopPOS Market',
          scale: '2,500+ locations',
          description: "A modern, web-based POS platform planned to run across 2,500+ market locations. I work as a backend developer building the platform from scratch.",
          tags: ['.NET 10', 'React', 'PostgreSQL', 'Quartz', 'WebSocket']
        },
        {
          name: 'KoopPOS Kooperatif',
          scale: '1,100+ active locations',
          description: "A modern, web-based POS platform running across 1,100+ cooperative locations. As a backend developer, I worked across all backend layers while building it from scratch, and took part in work planning, CI/CD, and Kubernetes deployments.",
          tags: ['.NET 10', 'React', 'MS SQL Server', 'Hangfire', 'WebSocket', 'Kubernetes', 'IIS']
        },
        {
          name: 'KoopEnerji',
          scale: '1,600+ locations',
          description: 'A modern, web-based fuel automation system, actively tested in the field. Its predecessor, Tarpet, runs across 1,600+ locations and has been maintained for 3 years. I took part in building the backend from scratch, work planning, CI/CD, and deployment to Kubernetes.',
          tags: ['.NET 10', 'React', 'MS SQL Server', 'WebSocket', 'Kubernetes', 'IIS']
        },
        {
          name: 'Toprak',
          scale: 'Used by 18 companies',
          description: 'An enterprise platform made up of corporate modules, used by 18 companies within the Tarım Kredi Group, with a microservice backend, a microfrontend web app, and a mobile application. As a backend developer, I was involved in every step of building it from scratch — from work planning to CI/CD and Kubernetes deployments.',
          tags: ['.NET 10', 'React', 'Microservices', 'Kubernetes']
        },
        {
          name: 'MTSK',
          scale: '',
          description: 'A multi-tenant application built for driving schools, used to manage and track the documents and lesson schedules of driving school owners, instructors, and candidates.',
          tags: ['.NET 6', 'React', 'PostgreSQL']
        },
        {
          name: 'GuideFM',
          scale: '',
          description: 'A mobile and web application built for tour guides, letting guides and participants top up in-app credit and track their transactions.',
          tags: ['.NET 6', 'React', 'PostgreSQL']
        },
        {
          name: 'Order Technical Form',
          scale: '',
          description: 'An application for receiving orders for robots to be built, and for adding and tracking order details.',
          tags: ['.NET 6', 'Angular', 'MS SQL Server']
        },
        {
          name: 'Work Order',
          scale: '',
          description: 'An internal company application for adding and assigning tasks, progressing their status, and adding comments.',
          tags: ['ASP.NET MVC', 'Angular', 'MS SQL Server']
        },
      ],
    },
    skills: {
      label: 'Skills',
      items: ['C#', '.NET', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework Core', 'Dapper', 'REST API', 'Clean Architecture', 'Microservices', 'SQL', 'MS SQL Server', 'PostgreSQL', 'MongoDB', 'CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'Git', 'GitLab', 'Linux', 'Kafka', 'WebSocket', 'Hangfire', 'Serilog', 'Graylog', 'Nexus', 'Cloudflare', 'Jira', 'IIS'],
    },
    education: {
      label: 'Education', title: 'Academic background',
      items: [
        {
          school: 'Süleyman Demirel University',
          degree: 'B.Sc. Computer Engineering',
          period: '2014 — 2019',
          description: 'Graduated from Süleyman Demirel University, Department of Computer Engineering, in 2019.'
        },
      ],
    },
    contact: {
      label: 'Contact', title: "Let's work together.",
      subtitle: 'Reach out for new opportunities, technical consulting, or collaboration.',
      social_label: 'Social',
    },
    footer: { rights: 'All rights reserved.' },
  },
};

const NAV_KEYS = ['experience', 'projects', 'skills', 'education', 'contact'];

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
          <p class="hero-headline">${t.headline}</p>
          <p class="hero-subtitle">${t.subtitle}</p>
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
        </div>
      </div>
      <!--
      <div class="shell stats-row reveal">
        <div class="stat-card"><span class="stat-value">${t.stat1_value}</span><span class="stat-label">${t.stat1_label}</span></div>
        <div class="stat-card"><span class="stat-value">${t.stat2_value}</span><span class="stat-label">${t.stat2_label}</span></div>
        <div class="stat-card"><span class="stat-value">${t.stat3_value}</span><span class="stat-label">${t.stat3_label}</span></div>
      </div>
      -->
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
        ${sectionHeader({ label: t.label })}
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
  return `
    <section id="contact" class="section section-alt">
      <div class="shell">
        ${sectionHeader({ label: t.label })}
        <div class="contact-grid reveal">
          <div class="contact-links">
            <div class="contact-item">
              <span class="contact-item-label">${t.social_label}</span>
              <div class="social-icons">
                <a href="mailto:${EMAILS[0]}" class="icon-link" aria-label="Email">${MAIL_ICON}</a>
                <a href="${LINKEDIN_URL}" target="_blank" rel="noreferrer" class="icon-link" aria-label="LinkedIn">${LINKEDIN_ICON}</a>
                <a href="${GITHUB_URL}" target="_blank" rel="noreferrer" class="icon-link" aria-label="GitHub">${GITHUB_ICON}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderMain(locale) {
  return [
    renderHero(locale),
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
