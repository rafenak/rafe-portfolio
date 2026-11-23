export const projects = [
  {
    slug: 'egis',
    title: 'EGIS',
    headline: 'Making a legacy platform 80× cheaper to run',
    short:
      'Re-architected a high-traffic platform, reducing monthly infrastructure costs from $160K to $2K.',
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
    ],
    challenge:
      'A legacy processing layer relied heavily on data stores, consumed excessive memory, and faced thread starvation under load.',
    approach: [
      {
        title: 'Reduce repeated work',
        body: 'Introduced in-memory and shared caching, and optimized MongoDB and Elasticsearch access.',
      },
      {
        title: 'Modernize concurrency',
        body: 'Upgraded to Java 21 and virtual threads to address blocking I/O and thread starvation.',
      },
      {
        title: 'Right-size workloads',
        body: 'Tuned Kubernetes workloads across 10 production pods as memory pressure fell.',
      },
    ],
    outcome:
      'Monthly infrastructure cost fell by approximately 98.75%, while the platform served over 35,000 requests per second.',
  },
  {
    slug: 'nucleus',
    title: 'Nucleus',
    headline: 'Upgrading data pipelines and reducing costs by 70%',
    short:
      'Upgraded Spark and Flink on AWS EMR and reduced monthly pipeline costs from $4K to $1.2K.',
    domain: 'Data Platform',
    company: 'HERE Technologies',
    period: '2024 — Present',
    role: 'Senior Software Engineer',
    tags: ['Apache Spark', 'Apache Flink', 'AWS EMR', 'Caching', 'Cost Optimization'],
    cover: { variant: 'flow', bg: '#E7E1D6', fg: '#2A2823', accent: '#B4441F' },
    metrics: [
      { value: '$4K → $1.2K', label: 'Monthly EMR cost' },
      { value: '70%', label: 'Cost reduction' },
    ],
    challenge:
      'The data pipelines needed Spark and Flink upgrades to meet AWS EMR requirements, while processing costs remained high.',
    approach: [
      {
        title: 'Upgrade the platform',
        body: 'Upgraded Spark and Flink and validated the pipelines against EMR requirements.',
      },
      {
        title: 'Optimize processing',
        body: 'Reworked processing logic and caching to reduce repeated computation and data reads.',
      },
    ],
    outcome:
      'The pipelines met EMR requirements, improved processing performance, and reduced monthly costs by 70%.',
  },
  {
    slug: 'atlas',
    title: 'Atlas',
    headline: 'Adding imagery to a long-running mapping tool',
    short:
      'Extended a 20-year-old mapping tool with advanced imagery to support map editors.',
    domain: 'Mapping',
    company: 'HERE Technologies',
    period: '2024 — Present',
    role: 'Senior Software Engineer',
    tags: ['Legacy Modernization', 'Imagery', 'Map Editing', 'Java'],
    cover: { variant: 'map', bg: '#DCE3DA', fg: '#22302A', accent: '#B4441F' },
    metrics: [
      { value: '20+ years', label: 'Codebase extended' },
      { value: '4', label: 'Map feature types supported' },
    ],
    challenge:
      'Editors needed better visual context for map changes in a tool with more than 20 years of history.',
    approach: [
      {
        title: 'Bring imagery into the workflow',
        body: 'Added advanced imagery support alongside editing workflows for nodes, links, POIs, and roundabouts.',
      },
      {
        title: 'Extend the existing tool',
        body: 'Built the new capability within the long-lived mapping application.',
      },
    ],
    outcome:
      'Editors gained visual context for improving map features without relying as heavily on domain expertise.',
  },
  {
    slug: 'ai-rag-tool',
    title: 'AI RAG Tool',
    headline: 'Making internal knowledge easier to find',
    short:
      'Built a knowledge assistant for internal systems and a tool to identify potential AWS savings.',
    domain: 'AI Tooling',
    company: 'HERE Technologies',
    period: '2024 — Present',
    role: 'Senior Software Engineer',
    tags: ['RAG', 'LLMs', 'Log Analysis', 'AWS', 'Developer Experience'],
    cover: { variant: 'graph', bg: '#16181C', fg: '#E6E8EC', accent: '#E0673B' },
    metrics: [
      { value: 'RAG', label: 'Developer knowledge assistant' },
      { value: 'AWS', label: 'Cost optimization' },
    ],
    challenge:
      'System knowledge was spread across documentation, code, and people, while identifying underused cloud services required manual analysis.',
    approach: [
      {
        title: 'Connect engineers to knowledge',
        body: 'Built a retrieval-augmented assistant for questions about internal tools and system behavior.',
      },
      {
        title: 'Surface cost opportunities',
        body: 'Analyzed log patterns, service hit rates, and usage metrics to recommend services for review.',
      },
    ],
    outcome:
      'Users can query internal system knowledge and identify AWS services that may be candidates for downscaling or removal.',
  },
  {
    slug: 'fraud-management',
    title: 'Fraud Management Platform',
    headline: 'Fraud management for banks and fintechs',
    short:
      'Built fraud-management applications and integrations for financial institutions across three countries.',
    domain: 'Fintech',
    company: 'Concerto Software and Systems',
    period: 'Sep 2019 — Mar 2024',
    role: 'Software Engineer',
    tags: ['Jakarta EE', 'Spring', 'PL/SQL', 'T-SQL', 'SSIS', 'Azure', 'WebSphere'],
    cover: { variant: 'grid', bg: '#EFE6DA', fg: '#2B2620', accent: '#B4441F' },
    metrics: [
      { value: '4', label: 'Banks and fintechs served' },
      { value: '3', label: 'Countries' },
      { value: 'Azure', label: 'Cloud implementation' },
    ],
    challenge:
      'Financial institutions needed fraud-management features and integrations suited to their existing systems.',
    approach: [
      {
        title: 'Build fraud workflows',
        body: 'Developed card-marking and risk-entry modules, user provisioning, and FASTag fraud messaging.',
      },
      {
        title: 'Modernize the platform',
        body: 'Implemented a fraud-management system on Azure and migrated data from the legacy platform.',
      },
    ],
    outcome:
      'Delivered fraud-management capabilities for HDFC Bank, SBI, Westpac, and Nymcard across India, Australia, and the UAE.',
  },
  {
    slug: 'hl7-integration',
    title: 'HL7 Healthcare Integration',
    headline: 'Connecting healthcare systems with HL7',
    short:
      'Developed and tested HL7 message-processing and data-migration solutions for AthenaHealth.',
    domain: 'Healthcare',
    company: 'CitiusTech',
    period: 'Jul 2018 — Aug 2019',
    role: 'Consultant — Development',
    tags: ['HL7', 'Integration Engine', 'SQL', 'Data Migration'],
    cover: { variant: 'pulse', bg: '#DDE4EA', fg: '#1F2A33', accent: '#B4441F' },
    metrics: [
      { value: 'HL7', label: 'Messaging standard' },
      { value: 'US', label: 'Healthcare client' },
    ],
    challenge:
      'Clinical messages needed to be transformed and stored, with data migrated between user spaces.',
    approach: [
      {
        title: 'Build and test integrations',
        body: 'Created and tested HL7 solutions using an integration engine for message transformation and storage.',
      },
      {
        title: 'Migrate data',
        body: 'Moved data between user spaces as part of the integration work.',
      },
    ],
    outcome:
      'Implemented HL7 solutions for AthenaHealth and completed data migration between user spaces.',
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
