export interface TimelineEntry {
  role: string;
  company: string;
  domain: string;
  sector: string;
  date: string;
  points: string[];
  env: string[];
}

export const summary =
  'Senior Fullstack Lead Developer with 20+ years building web and mobile applications. Dual-stack architect specialized in SaaS, CRM/ERP and e-commerce systems. Technical depth in React, Node.js, Svelte and NestJS, combined with solid Agile practice. Driven by AI automation and technical exploration, with constant tracking of emerging tools.';

export const skills: { label: string; value: string }[] = [
  { label: 'Methodologies', value: 'Agile, SCRUM, KANBAN, SOLID, KISS, DRY, MVC, DDD' },
  { label: 'Back-end', value: 'PHP, PHP-Symfony, Node.js, NestJS, Next.js, Express, Java, J2EE' },
  {
    label: 'Front-end',
    value: 'React, Svelte, Vue.js, Angular, React Native, TypeScript, JavaScript (ES6+), jQuery, HTML5, CSS3, Sass, Less, Bootstrap'
  },
  {
    label: 'Databases & messaging',
    value: 'MongoDB, MySQL, MariaDB, PostgreSQL, DB2, Redis, RabbitMQ, Socket.io'
  },
  { label: 'Cloud & DevOps', value: 'AWS, Google Cloud Platform, Docker, Jenkins, Ansible, Nginx, Apache, Git' },
  { label: 'Systems', value: 'Linux (Debian, CentOS), Windows, WSL' },
  { label: 'Currently exploring', value: 'Go, Rust, Python, Laravel, AI, Tauri, Angular, Vue.js, React Native, PhoneGap' }
];

export const techSkills: { label: string; level: number; value: string }[] = [
  { label: 'Languages', level: 90, value: 'PHP, JavaScript (ES6+), TypeScript, Node.js, HTML5/CSS3' },
  { label: 'Back-end frameworks', level: 85, value: 'NestJS, Symfony, Express' },
  { label: 'Front-end frameworks', level: 95, value: 'React, Next.js, Svelte, Vue.js, Sass/Less' },
  {
    label: 'Databases & streams',
    level: 75,
    value: 'MongoDB, MySQL, PostgreSQL, MariaDB, Redis, RabbitMQ, RxDB, Socket.io'
  },
  { label: 'DevOps & Cloud', level: 45, value: 'AWS, GCP, Docker, Jenkins, Ansible, Nginx, Git' },
  {
    label: 'Methodologies & tools',
    level: 70,
    value: 'Agile (Scrum, Kanban), SOLID, DRY, DDD, microservices architecture, CI/CD, code review, mentoring'
  },
  {
    label: 'AI & automation',
    level: 45,
    value: 'Vibe coding, prompt engineering, LLM, MCP, Ollama, Whisper, Piper, n8n, ComfyUI, Hugging Face, Pinokio'
  },
  { label: 'Learning', level: 30, value: 'Python, Rust, Go, Kotlin' }
];

export const recentActivities: string[] = [
  'Rust: built an AI chat application using Tauri and Actix Web with a Svelte UI',
  'Go: built a local API interfaced with MongoDB',
  'Python: applied to AI-oriented needs with LangChain'
];

export const timeline: TimelineEntry[] = [
  {
    role: 'Study & development',
    company: 'Independent R&D',
    domain: 'Generative AI',
    sector: 'Agentic architecture',
    date: '09/2025 – 03/2026',
    points: [
      'Designed an MCP server as a data-access layer for a multi-agent system: controlled source exposure, clear access contracts',
      'Built an autonomous AI agent architecture inside a messaging system: orchestration, routing, lifecycle',
      'React interface for supervising autonomous AI agents',
      'Set up an AI harness, context optimization, hooks and business skills',
      'Authored agents and business skills (maturation, communication)',
      'Integrated Anthropic SDK, n8n, Ollama into interface-driven flows'
    ],
    env: ['MCP', 'n8n', 'Ollama', 'Claude', 'Node.js', 'Python', 'React', 'Tailscale', 'Anthropic SDK']
  },
  {
    role: 'Freelance developer',
    company: 'IDAE',
    domain: 'Backoffice interfaces',
    sector: 'CRM/ERP',
    date: '01/2025 – 04/2025',
    points: [
      'PHP: migrated the application from PHP 5.6 to PHP 8',
      'MySQL: schema modeling — structuring and indexing business tables',
      'MongoDB: upgraded MongoDB libraries via Mongo-ext',
      'PHPUnit: set up unit testing',
      'JavaScript: reworked and fixed business UI libraries, jQuery and vanilla JS components',
      'Understood undocumented legacy codebase, resolved client support tickets'
    ],
    env: ['PHP', 'Node.js', 'MySQL', 'MongoDB', 'jQuery', 'Socket.io', 'JavaScript']
  },
  {
    role: 'Core Tech Lead',
    company: 'FLASHVENTE',
    domain: 'E-commerce',
    sector: 'Accessibility (RGAA)',
    date: '02/2023 – 06/2023 · 5 months',
    points: [
      'Took over existing codebase, debugged and simplified Next.js components',
      'Storybook: delivered the team component Storybook as a design-system reference',
      'Optimized load times',
      'Monitoring: server load tracking at runtime',
      'React: React-Query migration plan, design-system consistency across the team',
      'Led RGAA 4 accessibility compliance campaign',
      'Agile: mentored the core team and satellite teams',
      'Updated and coached working methodologies',
      'Code reviews: code quality assessment and developer follow-up',
      'Cross-department liaison and reporting'
    ],
    env: ['React', 'Next.js', 'Node', 'GitLab', 'Scrum', 'Kanban']
  },
  {
    role: 'Senior Lead Developer',
    company: 'DATAVAULT',
    domain: 'Big data SaaS startup',
    sector: 'B2B data privacy',
    date: '03/2021 – 02/2023 · 2 years',
    points: [
      'React: built a marketplace web application for personal data',
      'Figma: design and wireframing',
      'AWS: Amazon Cognito authentication',
      'Stripe.js: set up the payment infrastructure',
      'Svelte: built a Svelte backoffice',
      'Data modeling, code reviews, training',
      'Full participation in UI/UX challenges'
    ],
    env: ['React', 'Svelte', 'Node', 'Express', 'NestJS', 'MUI5', 'React-flow', 'React-query', 'Zustand', 'Redux', 'TypeScript', 'Spring', 'MySQL', 'AWS']
  },
  {
    role: 'Fullstack developer',
    company: 'TELIGO',
    domain: 'Telecom sector',
    sector: 'Management & maintenance',
    date: '06/2018 – 05/2020 · 2 years',
    points: [
      'PHP Symfony: built a generic REST API over MySQL with JWT tokens, single entry point for business modules',
      'RBAC: migrated the REST API to RESTful with role-based access control',
      'RabbitMQ: launched async relay processes',
      'Wrote commands for socket.io bridging',
      'Node.js: event bus — POST/socket relay routing PHP to JavaScript client; Freeswitch-style ESL module',
      'React: built management applications for telephony, marketing, statistics and sales data',
      'Live CRUD interface with Redux, Context, Hooks, Recoil, Socket.io',
      'Redux: contributed to a hooks-based Redux module',
      'Ansible/Jenkins: full setup of a telephony and web stack'
    ],
    env: ['PHP 7 Symfony', 'MySQL', 'Debian', 'Apache', 'Nginx', 'MongoDB', 'Git', 'Lua', 'Freeswitch', 'React', 'Redux', 'Node', 'Socket.io', 'NestJS', 'Jenkins', 'Ansible', 'Bash']
  },
  {
    role: 'Study & development',
    company: 'MIAMCITY',
    domain: 'Food-tech',
    sector: 'Meal delivery',
    date: '08/2017 – 07/2018 · 11 months',
    points: [
      'Technical and business strategy consulting',
      'Delivered an extensive market report on competing delivery apps',
      'Socket.io: built a real-time solution combining in-house tech and third-party APIs',
      'Built a responsive website and backend for advanced business management',
      'PHP/MongoDB: used Mongo geoindexing',
      'Node.js: heavy use of socket.io — namespaces, rooms',
      'Mobile: Ionic app for monitoring ongoing deliveries'
    ],
    env: ['Apache', 'PHP 7', 'Ionic', 'Angular', 'JavaScript', 'Bash', 'Node', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Git']
  },
  {
    role: 'Senior lead developer',
    company: 'AZUR TELECOM',
    domain: 'Telecommunications',
    sector: 'B2C telephony',
    date: '01/2018 – 06/2018 · 6 months',
    points: [
      'Feasibility studies to adapt legacy systems to new web technologies (TrunkSIP)',
      'Migrated raw PHP to PHP Vtiger',
      'JIRA: bug ticket management for internal applications',
      'Vtiger: developed an internal application evolution powered by Vtiger (TrunkSIP)',
      'JavaScript: built jQuery and vanilla JS user components for business needs',
      'Worked in Agile mode'
    ],
    env: ['Apache', 'PHP', 'JavaScript', 'Bash', 'SOAP', 'MongoDB', 'MySQL', 'Git', 'JIRA', 'Vtiger']
  },
  {
    role: 'CRM/ERP developer · Freelance',
    company: 'IDAE',
    domain: 'CRM/ERP',
    sector: 'Bicycle delivery',
    date: '08/2017 – 06/2018',
    points: [
      'Legacy takeover: understood and maintained a DDD-designed CRM/ERP',
      'MySQL: modeled and evolved business module schemas',
      'Real-time UI: bicycle delivery tracking app, client/restaurant/courier interfaces',
      'Built frontend business modules, application maintenance for client systems'
    ],
    env: ['PHP', 'Nginx', 'Docker', 'Node.js', 'Socket.io', 'Express', 'Bash', 'REST', 'MongoDB', 'MySQL', 'Vanilla JavaScript']
  },
  {
    role: 'Lead developer',
    company: 'LOCAFLEET',
    domain: 'ERP/CRM',
    sector: 'Long-term vehicle rental',
    date: '02/2015 – 10/2015 · 9 months',
    points: [
      'Responsive single-page web app, originally built in 2004',
      'Migrated to an Nginx / MongoDB / Node.js / Socket.io architecture for a web-based ERP/CRM'
    ],
    env: ['PHP', 'Apache', 'MySQL', 'MongoDB', 'Prototype', 'Ajax', 'CSS3', 'JavaScript', 'PrestaShop']
  },
  {
    role: 'Study & development',
    company: 'BLUEWAVE CROISIÈRES',
    domain: 'E-commerce',
    sector: 'Cruises',
    date: '05/2014 – 12/2015 · 20 months',
    points: [
      'Built a complete cruise-sales infrastructure, website and mobile interface',
      'Front and back-end, server administration',
      'SOAP/XML feeds from carriers and client request processing'
    ],
    env: ['Linux Debian', 'PHP', 'Apache', 'PostgreSQL', 'Vanilla JavaScript', 'Prototype', 'Socket.io', 'CSS3', 'HTML5']
  },
  {
    role: 'Co-founder & managing partner',
    company: 'EVASION VOYAGES',
    domain: 'Travel agency',
    sector: 'Management',
    date: '01/2010 – 12/2015',
    points: [
      'Hired, managed and trained technical and sales staff',
      'Supplier relations and negotiations',
      'Set up policy and tooling: mass mailing, high-traffic website, client management backoffice',
      'Mobile: Android apps (PhoneGap/Cordova), jQuery, jQuery UI'
    ],
    env: ['LAMP', 'MySQL', 'MongoDB', 'SOAP']
  },
  {
    role: 'Web & multimedia project manager',
    company: 'MEDIAPRESSE STUDIO',
    domain: 'Press & media',
    sector: '',
    date: '09/2010 – 06/2011',
    points: [
      'Built responsive websites and internal multimedia management tools',
      'Multimedia backoffice: single-page app for processing and sharing professional images',
      'Built a multilingual international collection tool for an international print guide'
    ],
    env: ['LAMP', 'DB2', 'OSX', 'SVN', 'Zend/CodeIgniter', 'CSS3', 'HTML5', 'Vanilla JavaScript', 'XML']
  },
  {
    role: 'Front & backoffice developer',
    company: 'MONACRUISE',
    domain: 'E-commerce',
    sector: 'Travel',
    date: '01/2005 – 12/2009 · 5 years',
    points: [
      'Built numerous websites for travel and cruise sales',
      'Built a white-label system',
      'Handled a very high-traffic environment',
      'Designed and built backoffice tracking tools: request tracking, management, internal communication'
    ],
    env: ['CentOS', 'Debian', 'Windows', 'Apache', 'PHP', 'MySQL', 'Vanilla JavaScript']
  },
  {
    role: 'Backoffice developer',
    company: 'BANQUE AZURA',
    domain: 'Banking',
    sector: 'KYC',
    date: '06/2004 – 06/2005 · 1 year',
    points: [
      'Worked on internal tools and gathered requirements across departments',
      'Built internal KYC tools',
      'Handled high-security and confidentiality requirements'
    ],
    env: ['Java', 'J2EE', 'Oracle', 'HTML', 'JavaScript', 'SVN']
  },
  {
    role: 'Study & development',
    company: 'IDAE',
    domain: 'E-commerce',
    sector: 'Multi-sector',
    date: '01/2002 – 12/2003 · 2 years',
    points: [
      'Built merchant websites and online stores with backoffice access',
      'Built a DDD-oriented ORM engine for e-shop, CRM and sports activities',
      'Domains: photography, boating, motorcycles, computing, perfume, online sales'
    ],
    env: ['ColdFusion', 'PHP', 'Java', '.NET', 'MySQL', 'Windows', 'OSX']
  },
  {
    role: 'Web developer',
    company: 'TEXALINK',
    domain: 'SaaS',
    sector: 'B2B textile startup',
    date: '01/2001 – 12/2002 · 2 years',
    points: ['Innovative startup with a global B2B textile application', 'SQL, ColdFusion, Homesite, TOAD'],
    env: ['ColdFusion', 'Linux', 'PostgreSQL', 'DB2', 'JavaScript', 'HTML']
  },
  {
    role: 'Application developer',
    company: 'PEOPLECARE',
    domain: 'Social sector',
    sector: 'Business software',
    date: '06/2000 – 12/2000',
    points: ['Developed social case-tracking software'],
    env: ['Visual Basic']
  }
];

export const languages = 'French — native · English — fluent, technical · Spanish — conversational';
export const interests = 'Music, composition, sport, photography, astronomy, culture';
