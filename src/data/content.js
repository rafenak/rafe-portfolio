// Values wrapped in [square brackets] are editable placeholders and render with a placeholder style.

export const profile = {
  name: 'Rafe Nakhuda',
  title: 'Senior Software Engineer',
  discipline: 'Backend Systems · Distributed Data · AI Tooling',
  experience: '7+ Years',
  location: 'Maharashtra, India',
  currently: 'Product & Tools Engineering at HERE Technologies',
  email: 'nakhudarafe@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rafe-nakhuda-a5bb07130/',
  github: 'https://github.com/rafenak',
  twitter: 'https://twitter.com/RafeNakhuda',
  // Drop your resume into /public with this exact file name.
  resume: '/Rafe_Nakhuda_Senior_Software_Engineer.pdf',
  // Optional: path to a portrait in /public (e.g. '/portrait.jpg'). Leave empty for the abstract visual.
  portrait: '',
};

export const heroStats = [
  { value: '7+', label: 'Years of experience' },
  { value: '98%', label: 'Lower infrastructure cost' },
  { value: '35K+', label: 'Requests per second' },
];

export const about = {
  statement:
    'I don’t just write services. I untangle complex systems, make them faster and cheaper to run, and build the tools that help other engineers move with confidence.',
  paragraphs: [
    'I’m a Senior Software Engineer with over seven years of experience building the systems underneath products people rely on — fraud management platforms for banks, integration engines for healthcare, and the engineering tools behind HERE Technologies’ global location intelligence platform.',
    'My work lives where scale, cost and reliability meet. I re-architect legacy systems, tune distributed pipelines, and design services that stay fast and affordable as traffic grows — like taking a platform from $160,000 to $2,000 a month in infrastructure while serving more than 35,000 requests per second.',
    'Most recently I’ve been building AI-powered developer tooling: a RAG assistant that helps engineers understand complex internal systems, and a cost-optimization module that reads log patterns to surface AWS services worth downscaling or removing.',
  ],
  focus: [
    'Scalable backend & microservices architecture',
    'Distributed data processing — Spark, Flink, EMR',
    'Performance engineering & JVM tuning',
    'Multi-layer caching strategies',
    'Cloud infrastructure & cost optimization',
    'Database engineering — MongoDB, Elasticsearch, SQL',
    'Legacy system modernization',
    'AI tooling — RAG & log-pattern analysis',
    'Close collaboration with product & platform teams',
  ],
};

export const expertise = [
  {
    title: 'Backend Engineering',
    description: 'Services that stay predictable under load and simple to evolve.',
    items: [
      'Java 21 & Spring Boot',
      'Microservices architecture',
      'REST API design',
      'Concurrency & virtual threads',
      'Enterprise integration (HL7)',
      'Legacy modernization',
    ],
  },
  {
    title: 'Data & Distributed Systems',
    description: 'Pipelines and data stores tuned for throughput, freshness and cost.',
    items: [
      'Apache Spark',
      'Apache Flink',
      'AWS EMR pipelines',
      'MongoDB & Elasticsearch',
      'Oracle PL/SQL & T-SQL',
      'Data migration',
    ],
  },
  {
    title: 'Cloud & Performance',
    description: 'Infrastructure that is right-sized, observable and economical.',
    items: [
      'AWS & Azure',
      'Kubernetes workload tuning',
      'AWS ElastiCache & in-memory caching',
      'Memory & throughput optimization',
      'Cloud cost optimization',
      'Production troubleshooting',
    ],
  },
  {
    title: 'AI-Powered Tooling',
    description: 'Practical AI that shortens the path from question to shipped feature.',
    items: [
      'Retrieval-augmented generation (RAG)',
      'Developer knowledge assistants',
      'Log-pattern analysis',
      'Usage & hit-rate analytics',
      'AI-assisted development',
      'Cost recommendation engines',
    ],
  },
];

export const tools = [
  { group: 'Languages & Frameworks', items: ['Java', 'Spring Boot', 'Jakarta EE', 'PL/SQL', 'T-SQL', 'Angular'] },
  { group: 'Data & Processing', items: ['Apache Spark', 'Apache Flink', 'MongoDB', 'Elasticsearch', 'Oracle', 'SQL Server', 'SSIS'] },
  { group: 'Cloud & Platform', items: ['AWS EMR', 'AWS ElastiCache', 'Kubernetes', 'Azure', 'WebSphere', 'Linux'] },
  { group: 'Craft', items: ['Git', 'Bash & Ksh', 'REST', 'HL7', 'RAG / LLMs'] },
];

export const experience = [
  {
    company: 'HERE Technologies',
    role: 'Senior Software Engineer — Product & Tools Engineering',
    period: 'Mar 2024 — Present',
    summary:
      'Build backend services and internal tools for HERE’s global location platform.',
    contributions: [
      'Improved performance and reduced infrastructure costs across backend and data platforms.',
      'Built AI-powered tools for engineering knowledge and cloud-cost analysis.',
    ],
    achievements: ['70 GB → 8 GB RAM per pod'],
  },
  {
    company: 'Concerto Software and Systems',
    role: 'Software Engineer',
    period: 'Sep 2019 — Mar 2024',
    summary:
      'Built fraud-management products for banks and fintechs across India, Australia, and the UAE.',
    contributions: [
      'Delivered fraud-management features and integrations for HDFC Bank and SBI.',
      'Implemented an Azure fraud platform and data migration for Nymcard.',
    ],
    achievements: ['4 banks & fintechs', '3 countries', 'Azure cloud rollout'],
  },
  {
    company: 'CitiusTech Healthcare Technology',
    role: 'Consultant — Development',
    period: 'Jul 2018 — Aug 2019',
    summary:
      'Developed healthcare integrations for AthenaHealth in the US.',
    contributions: [
      'Built HL7 message-processing flows and migrated data between user spaces.',
    ],
    achievements: ['HL7 integration', 'US healthcare client'],
  },
];

export const education = [
  { degree: 'Bachelor of Engineering — Information Technology', school: 'Thadomal Shahani Engineering College, Bandra', period: '2015 — 2018' },
  { degree: 'Diploma — Computer Engineering', school: 'A.I. Kalsekar Polytechnic, Panvel', period: '2012 — 2015' },
];

export const philosophy = {
  quote:
    'Great software isn’t just code that runs. It’s about how gracefully it scales, how much it really costs, and how much faster it makes the people who depend on it.',
  principles: [
    { title: 'Measure before optimizing', body: 'Profiles, traces and bills tell the truth. Intuition only tells you where to look.' },
    { title: 'Simplicity over complexity', body: 'The best fix often removes a moving part instead of adding one.' },
    { title: 'Cost is a feature', body: 'A system that’s 80× cheaper to run is a system the business can afford to grow.' },
    { title: 'Respect the legacy', body: 'Twenty-year-old code earned its place. Understand it before you change it.' },
    { title: 'Every abstraction earns its keep', body: 'Layers, caches and services should each have a clear, measurable purpose.' },
  ],
};

export const testimonials = [
  {
    quote: '[Recommendation from an engineering manager or tech lead — paste their words here.]',
    name: '[Name]',
    title: '[Title, Company]',
  },
  {
    quote: '[Recommendation from a product manager or stakeholder you partnered with.]',
    name: '[Name]',
    title: '[Title, Company]',
  },
  {
    quote: '[Recommendation from a peer engineer or someone you mentored.]',
    name: '[Name]',
    title: '[Title, Company]',
  },
];
