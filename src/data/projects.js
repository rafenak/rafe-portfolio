// Case studies. Values wrapped in [square brackets] are editable placeholders.

export const projects = [
  {
    slug: 'egis',
    title: 'EGIS',
    headline: 'Re-architecting a legacy platform to run 80× cheaper',
    short:
      'Multi-layer caching, Java 21 virtual threads and Kubernetes right-sizing took infrastructure from $160K to $2K a month while serving 35,000+ requests per second.',
    domain: 'Location Intelligence',
    company: 'HERE Technologies',
    period: '2024 — Present',
    role: 'Senior Software Engineer',
    tags: ['Java 21', 'Virtual Threads', 'AWS ElastiCache', 'Kubernetes', 'MongoDB', 'Elasticsearch'],
    cover: { variant: 'layers', bg: '#1B1A17', fg: '#EDE8DF', accent: '#E0673B' },
    metrics: [
      { value: '$160K → $2K', label: 'Monthly infrastructure cost' },
      { value: '35,000+', label: 'Requests per second' },
      { value: '70 → 8 GB', label: 'RAM per pod' },
      { value: '10', label: 'Production pods optimized' },
    ],
    overview:
      'EGIS is an engineering tool within HERE’s global location intelligence platform. Its legacy processing layer had become expensive to run, memory-hungry, and prone to thread starvation under load. I re-architected it around caching, modern concurrency and leaner data access — without reducing what the tool could do.',
    problem: [
      'Processing paths leaned heavily on downstream data stores, driving infrastructure spend to roughly $160,000 per month.',
      'Blocking I/O on platform threads caused thread starvation and intermittent deadlocks under heavy load.',
      'Each Kubernetes pod needed 70+ GB of RAM, making scale-out expensive.',
      'MongoDB queries and Elasticsearch calls added avoidable latency across backend workflows.',
    ],
    goals: [
      'Cut infrastructure cost dramatically without reducing capability.',
      'Eliminate thread starvation and deadlocks at peak traffic.',
      'Shrink per-pod memory so scaling is affordable.',
      'Improve performance across query and processing workflows.',
    ],
    responsibilities: [
      'Re-architected the legacy processing layer',
      'Designed the multi-layer caching strategy (in-memory + AWS ElastiCache)',
      'Drove the Java 21 upgrade and virtual-thread adoption',
      'Tuned Kubernetes workloads across 10 production pods',
      'Optimized MongoDB queries and Elasticsearch access patterns',
    ],
    discovery: [
      'The cost, memory and stability problems shared a root: too much work was being repeated per request, and too many threads were parked waiting on I/O.',
      '[Add how you investigated — e.g. heap and thread dumps, APM traces, query profiling, cost explorer — and the key findings.]',
    ],
    architecture: {
      caption: 'Simplified request path after the re-architecture.',
      layers: [
        { label: 'Consumers', nodes: ['Internal tools', 'Platform services'] },
        { label: 'Service', nodes: ['Java 21 · Spring Boot', 'Virtual threads'], accent: true },
        { label: 'Cache L1', nodes: ['In-memory cache'] },
        { label: 'Cache L2', nodes: ['AWS ElastiCache'], accent: true },
        { label: 'Data', nodes: ['MongoDB', 'Elasticsearch'] },
        { label: 'Runtime', nodes: ['Kubernetes · 10 pods'] },
      ],
    },
    approach: [
      {
        title: 'Two caching tiers, one contract',
        body: 'An in-process cache absorbs the hottest reads with zero network cost, while AWS ElastiCache provides a shared tier across pods — so a miss in one pod doesn’t automatically become a database hit.',
      },
      {
        title: 'Virtual threads instead of pool tuning',
        body: 'Moving to Java 21 let blocking I/O run on lightweight virtual threads rather than a fixed platform-thread pool, removing the starvation and deadlock scenarios instead of tuning around them.',
      },
      {
        title: 'Right-sized pods',
        body: 'With caching and concurrency fixed, memory pressure dropped enough to take each pod from 70+ GB to 7–8 GB of RAM across 10 production pods.',
      },
      {
        title: 'Query hygiene',
        body: 'MongoDB queries, Elasticsearch calls and backend processing workflows were reworked so each request does less and fetches only what it needs.',
      },
    ],
    outcome:
      'Infrastructure cost fell from $160,000 to $2,000 per month — a reduction of roughly 98.75%. The service now handles 35,000+ requests per second, with per-pod memory down from 70+ GB to 7–8 GB.',
    learnings: [
      '[Add a key learning — e.g. what surprised you, or what you would do differently.]',
      '[Add a second learning — e.g. how you validated the change safely in production.]',
    ],
  },
  {
    slug: 'nucleus',
    title: 'Nucleus',
    headline: 'Upgrading distributed pipelines — and cutting their cost by 70%',
    short:
      'Upgraded Apache Spark and Flink for AWS EMR compliance, then reworked processing logic and caching to take pipeline cost from $4,000 to $1,200 a month.',
    domain: 'Data Platform',
    company: 'HERE Technologies',
    period: '2024 — Present',
    role: 'Senior Software Engineer',
    tags: ['Apache Spark', 'Apache Flink', 'AWS EMR', 'Caching', 'Cost Optimization'],
    cover: { variant: 'flow', bg: '#E7E1D6', fg: '#2A2823', accent: '#B4441F' },
    metrics: [
      { value: '$4K → $1.2K', label: 'Monthly EMR cost' },
      { value: '70%', label: 'Cost reduction' },
      { value: '2', label: 'Frameworks upgraded' },
      { value: 'EMR', label: 'Compliance achieved' },
    ],
    overview:
      'Nucleus runs data processing pipelines on AWS EMR. Its Spark and Flink versions had to be upgraded to stay compliant with EMR requirements — and I used the upgrade as an opportunity to rework processing logic and caching, improving performance and cutting cost at the same time.',
    problem: [
      'Apache Spark and Flink versions needed upgrading to meet AWS EMR compliance requirements.',
      'The processing pipeline cost around $4,000 per month to run.',
      '[Add other pain points — e.g. job duration, failure rate, data freshness.]',
    ],
    goals: [
      'Achieve EMR compliance through Spark and Flink upgrades.',
      'Improve overall processing performance.',
      'Lower monthly EMR spend.',
    ],
    responsibilities: [
      'Upgraded Apache Spark and Apache Flink',
      'Optimized pipeline processing logic',
      'Implemented efficient caching strategies',
      'Validated the platform against AWS EMR compliance requirements',
    ],
    discovery: [
      'A compliance-driven upgrade is usually treated as maintenance. Treating it as a performance project instead meant revisiting how each stage processed and re-used data.',
      '[Add how you identified the costliest stages — e.g. Spark UI, EMR metrics, cost reports.]',
    ],
    architecture: {
      caption: 'Simplified pipeline view.',
      layers: [
        { label: 'Sources', nodes: ['[Input sources]'] },
        { label: 'Processing', nodes: ['Apache Spark', 'Apache Flink'], accent: true },
        { label: 'Optimization', nodes: ['Caching layer'] },
        { label: 'Platform', nodes: ['AWS EMR'], accent: true },
        { label: 'Outputs', nodes: ['[Downstream consumers]'] },
      ],
    },
    approach: [
      {
        title: 'Upgrade with intent',
        body: 'Spark and Flink were upgraded to compliant versions, with the migration used to revisit how processing logic was written rather than porting it unchanged.',
      },
      {
        title: 'Cache what is reused',
        body: 'Efficient caching strategies avoided recomputing and re-reading data that multiple stages depended on.',
      },
      {
        title: 'Pay for less compute',
        body: 'Leaner processing logic translated directly into lower EMR spend — from $4,000 to $1,200 per month.',
      },
    ],
    outcome:
      'The pipelines are compliant with AWS EMR requirements, perform better overall, and cost 70% less to run — $1,200 per month instead of $4,000.',
    learnings: ['[Add a key learning from the upgrade.]', '[Add how you de-risked the migration.]'],
  },
  {
    slug: 'atlas',
    title: 'Atlas',
    headline: 'Bringing advanced imagery to a 20-year-old mapping tool',
    short:
      'Extended a 20+ year old legacy mapping tool with advanced imagery support so editors can intuitively improve nodes, links, POIs and roundabouts.',
    domain: 'Mapping',
    company: 'HERE Technologies',
    period: '2024 — Present',
    role: 'Senior Software Engineer',
    tags: ['Legacy Modernization', 'Imagery', 'Map Editing', 'Java'],
    cover: { variant: 'map', bg: '#DCE3DA', fg: '#22302A', accent: '#B4441F' },
    metrics: [
      { value: '20+ yrs', label: 'Legacy codebase extended' },
      { value: '4', label: 'Feature types — nodes, links, POIs, roundabouts' },
      { value: '[Metric]', label: '[e.g. editing time saved]' },
    ],
    overview:
      'Atlas is a mapping tool with more than twenty years of history. I extended it with advanced imagery support, enabling users to intuitively code and improve nodes, links, POIs and roundabouts — without needing deep domain expertise.',
    problem: [
      'A 20+ year old codebase makes every new capability risky to introduce.',
      'Editing map features such as nodes, links, POIs and roundabouts demanded deep domain expertise.',
      '[Add specifics on the previous imagery limitations.]',
    ],
    goals: [
      'Add advanced imagery support to the editing workflow.',
      'Make map feature editing intuitive for non-experts.',
      'Extend the legacy system safely, without regressions.',
    ],
    responsibilities: [
      'Designed and built advanced imagery support',
      'Extended editing workflows for nodes, links, POIs and roundabouts',
      'Worked carefully within a 20+ year old codebase',
    ],
    discovery: [
      'Imagery gives editors visual context that previously had to come from experience. The challenge was adding it to a long-lived system without disturbing workflows people already depended on.',
      '[Add what you learned from editors or from the existing code before building.]',
    ],
    architecture: {
      caption: 'Simplified view of the editing flow.',
      layers: [
        { label: 'Users', nodes: ['Map editors'] },
        { label: 'Atlas', nodes: ['Editing workflows', 'Imagery viewer'], accent: true },
        { label: 'Features', nodes: ['Nodes', 'Links', 'POIs', 'Roundabouts'] },
        { label: 'Imagery', nodes: ['Advanced imagery sources'], accent: true },
      ],
    },
    approach: [
      {
        title: 'Context where the work happens',
        body: 'Imagery appears alongside the features being edited, so editors can see what they are coding instead of inferring it.',
      },
      {
        title: 'Lower the expertise barrier',
        body: 'Visual context makes it possible to improve nodes, links, POIs and roundabouts without deep domain knowledge.',
      },
      {
        title: 'Change legacy gently',
        body: '[Describe how you integrated new capability with the existing architecture.]',
      },
    ],
    outcome:
      'Atlas now supports advanced imagery, making it intuitive for users to code and improve nodes, links, POIs and roundabouts without requiring deep domain expertise.',
    learnings: ['[Add a key learning about working in a long-lived codebase.]'],
  },
  {
    slug: 'ai-rag-tool',
    title: 'AI RAG Tool',
    headline: 'An AI assistant for system internals — and a cost detective',
    short:
      'A retrieval-augmented assistant that answers questions about tool usage and internals, plus an AWS cost module that reads log patterns to recommend what to delete or downscale.',
    domain: 'AI Tooling',
    company: 'HERE Technologies',
    period: '2024 — Present',
    role: 'Senior Software Engineer',
    tags: ['RAG', 'LLMs', 'Log Analysis', 'AWS', 'Developer Experience'],
    cover: { variant: 'graph', bg: '#16181C', fg: '#E6E8EC', accent: '#E0673B' },
    metrics: [
      { value: 'RAG', label: 'Developer knowledge assistant' },
      { value: '[Metric]', label: '[e.g. questions answered per month]' },
      { value: '[Metric]', label: '[e.g. AWS savings identified]' },
    ],
    overview:
      'An AI-powered retrieval-augmented generation (RAG) tool that lets users and developers ask questions about tool usage and system internals, and accelerates feature development through AI-assisted “vibe coding”. Alongside it, I built an AWS cost optimization module that analyzes log patterns, service hit rates and usage metrics.',
    problem: [
      'Knowledge about tool usage and system internals was spread across documentation, code and people.',
      'Feature work required engineers to dig through complex, unfamiliar systems before writing any code.',
      'Under-used AWS services were hard to spot without manual log and metrics analysis.',
    ],
    goals: [
      'Give developers a fast, conversational way to understand internal systems.',
      'Speed up feature development with AI assistance.',
      'Automatically identify AWS services to delete or downscale.',
    ],
    responsibilities: [
      'Built the RAG tool for users and developers',
      'Built the AWS cost optimization module with AI-assisted development',
      'Designed analysis of log patterns, service hit rates and usage metrics',
    ],
    discovery: [
      'The same signal kept appearing: engineers spent more time understanding systems than changing them, and cloud spend hid in services nobody was actively using.',
      '[Add which knowledge sources you indexed and how you evaluated answer quality.]',
    ],
    architecture: {
      caption: 'Simplified view of both modules.',
      layers: [
        { label: 'Inputs', nodes: ['Docs & source code', 'Log patterns', 'Service hit rates', 'Usage metrics'] },
        { label: 'Processing', nodes: ['Retrieval index', 'Log-pattern analysis'], accent: true },
        { label: 'Intelligence', nodes: ['LLM (RAG)', 'Cost recommender'] },
        { label: 'Outputs', nodes: ['Developer Q&A', 'Delete / downscale recommendations'], accent: true },
      ],
    },
    approach: [
      {
        title: 'Ground answers in real sources',
        body: 'Retrieval keeps responses anchored to actual tool documentation and internals instead of generic model knowledge.',
      },
      {
        title: 'From question to code faster',
        body: 'Developers can understand a system and start building in the same flow, accelerating feature development.',
      },
      {
        title: 'Let usage reveal waste',
        body: 'Log patterns, service hit rates and usage metrics combine into concrete recommendations for services to delete or downscale.',
      },
    ],
    outcome:
      'Developers and users can now query tool usage and system internals directly, and the cost module surfaces AWS services that are candidates for deletion or downscaling. [Add measurable impact once available.]',
    learnings: ['[Add a key learning about building with LLMs.]', '[Add how you handled accuracy or hallucinations.]'],
  },
  {
    slug: 'fraud-management',
    title: 'Fraud Management Platform',
    headline: 'Fraud infrastructure for banks across three countries',
    short:
      'Applications and APIs for financial fraud management at HDFC Bank, SBI, Westpac Australia and Nymcard — including an Azure cloud rollout and a full platform data migration.',
    domain: 'Fintech',
    company: 'Concerto Software and Systems',
    period: 'Sep 2019 — [End date]',
    role: 'Software Engineer',
    tags: ['Jakarta EE', 'Spring', 'PL/SQL', 'T-SQL', 'SSIS', 'Azure', 'WebSphere'],
    cover: { variant: 'grid', bg: '#EFE6DA', fg: '#2B2620', accent: '#B4441F' },
    metrics: [
      { value: '4', label: 'Banks & fintechs served' },
      { value: '3', label: 'Countries — India, Australia, UAE' },
      { value: 'Azure', label: 'Cloud FMS rollout' },
    ],
    overview:
      'At Concerto Software and Systems I developed applications and APIs in the financial fraud domain for HDFC Bank, SBI, Westpac Australia and Nymcard, and contributed to designing fraud management infrastructure, portfolios and message layouts.',
    problem: [
      'Banks needed to mark fraudulent cards in bulk and record risk events reliably.',
      'Users had to be provisioned into the fraud application from the bank’s common login portal.',
      'Customers needed timely alerts about FASTag fraud.',
      'A fintech client needed its fraud management system running in the cloud.',
    ],
    goals: [
      'Give fraud teams fast, reliable tools for card marking and risk entry.',
      'Integrate user provisioning with existing bank identity systems.',
      'Deliver fraud messaging directly to customers.',
      'Move fraud management to the cloud and migrate legacy data safely.',
    ],
    responsibilities: [
      'Developed Bulk Fraud Card Marking and Event Risk Entry modules for HDFC Bank',
      'Built the user-provisioning API from the bank’s common login portal',
      'Built a Java desktop application for FASTag fraud messages to SBI customers',
      'Implemented the Fraud Management System on Azure Cloud for Nymcard',
      'Migrated data from the old Fraud Management system to the new one',
    ],
    discovery: [
      'Each bank had its own infrastructure, constraints and stack — from WebSphere and AIX scripting to SQL Server and Azure — so solutions had to fit the client rather than the other way around.',
      '[Add notes on requirements gathering with bank teams.]',
    ],
    architecture: {
      caption: 'Simplified view across client implementations.',
      layers: [
        { label: 'Channels', nodes: ['Bank login portal', 'Fraud analysts'] },
        { label: 'Applications', nodes: ['Bulk Card Marking', 'Event Risk Entry', 'User provisioning API'], accent: true },
        { label: 'Platform', nodes: ['Jakarta EE · Spring', 'WebSphere', 'Azure Cloud'] },
        { label: 'Data', nodes: ['Oracle PL/SQL', 'SQL Server T-SQL', 'SSIS'] },
        { label: 'Messaging', nodes: ['FASTag fraud alerts'], accent: true },
      ],
    },
    approach: [
      {
        title: 'Fit each bank’s stack',
        body: 'Jakarta EE, Spring and WebSphere for HDFC and SBI; T-SQL, REST and Azure for Nymcard; PL/SQL for Westpac — each implementation matched its environment.',
      },
      {
        title: 'Bulk where it matters',
        body: 'Bulk card marking let fraud teams act on many cards at once rather than one at a time.',
      },
      {
        title: 'Migrate with care',
        body: 'Data was moved from the old Fraud Management system to the new, improved platform.',
      },
    ],
    outcome:
      'Fraud management capabilities delivered for four banks and fintechs across India, Australia and the UAE, including a cloud implementation on Azure. [Add measurable impact if available.]',
    learnings: ['[Add a key learning from working with regulated banking clients.]'],
  },
  {
    slug: 'hl7-integration',
    title: 'HL7 Healthcare Integration',
    headline: 'Moving clinical messages reliably between systems',
    short:
      'Created, tested and implemented HL7 solutions for AthenaHealth, transforming and storing messages through an integration engine and migrating data between user spaces.',
    domain: 'Healthcare',
    company: 'CitiusTech',
    period: 'Jul 2018 — Aug 2019',
    role: 'Consultant — Development',
    tags: ['HL7', 'Integration Engine', 'SQL', 'Data Migration'],
    cover: { variant: 'pulse', bg: '#DDE4EA', fg: '#1F2A33', accent: '#B4441F' },
    metrics: [
      { value: 'HL7', label: 'Messaging standard' },
      { value: 'US', label: 'Healthcare client' },
      { value: '[Metric]', label: '[e.g. messages processed per day]' },
    ],
    overview:
      'At CitiusTech I worked on healthcare integration for AthenaHealth in the US — creating, coding, testing and implementing HL7 solutions, transforming and storing HL7 messages through an integration engine, and migrating data between user spaces.',
    problem: [
      'Clinical data arrives as HL7 messages that must be transformed accurately before storage.',
      'Data needed to move from one user space to another without loss.',
      '[Add client-specific challenges.]',
    ],
    goals: [
      'Deliver correct, tested HL7 transformations.',
      'Store transformed messages reliably.',
      'Migrate data between user spaces safely.',
    ],
    responsibilities: [
      'Created, coded, tested and implemented HL7 solutions',
      'Transformed and stored HL7 messages through the integration engine',
      'Migrated data from one user space to another',
    ],
    discovery: [
      'In healthcare integration, correctness is the feature. Every transformation had to be tested against real message shapes before it went live.',
      '[Add notes on message types or testing approach.]',
    ],
    architecture: {
      caption: 'Simplified message flow.',
      layers: [
        { label: 'Source', nodes: ['HL7 messages'] },
        { label: 'Integration', nodes: ['Integration engine', 'Transformations'], accent: true },
        { label: 'Storage', nodes: ['SQL data store'] },
        { label: 'Migration', nodes: ['User space → user space'], accent: true },
      ],
    },
    approach: [
      { title: 'Build, then prove', body: 'Each HL7 solution was created, coded and tested before implementation.' },
      { title: 'Transform at the engine', body: 'Messages were transformed and stored through the integration engine to keep logic centralized.' },
    ],
    outcome: 'HL7 solutions implemented for AthenaHealth, with messages transformed and stored through the integration engine and data migrated across user spaces.',
    learnings: ['[Add a key learning from healthcare integration work.]'],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
