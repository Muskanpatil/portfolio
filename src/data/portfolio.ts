export const profile = {
  name: 'Muskan Patil',
  role: 'Full-Stack Engineer',
  tagline: 'Full-Stack Engineer • Multi-Tenant SaaS • Systems Architecture',
  subheading:
    'I build production-grade multi-tenant SaaS — owning backend architecture, database design, frontend UX, and DevOps end-to-end. Currently scaling enterprise hospitality platforms: PMS integrations, intelligent pricing, and OTA distribution.',
  hook: 'Built hospitality SaaS powering multi-property management, rate intelligence, and OTA distribution for enterprise customers — scaling from 28 microservices to a modern monorepo architecture.',
  email: 'muskanpatil2004@gmail.com',
  phone: '+91 7974130626',
  location: 'India',
  github: '#',
  linkedin: '#',
  resume: '#',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Deep Dives', href: '#deep-dives' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const aboutSkillGroups = [
  {
    title: 'Backend',
    items: ['Node.js', 'Fastify', 'Express', 'Microservices', 'Event Sourcing'],
  },
  {
    title: 'Frontend',
    items: ['React 19', 'Redux', 'Tailwind', 'PWA', 'SSR'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'Drizzle ORM', 'Redis', 'BullMQ', 'pgvector'],
  },
  {
    title: 'Integrations',
    items: ['Oracle OPERA', 'RMS', 'Booking.com', 'Expedia', 'BrightData', 'OAuth2'],
  },
  {
    title: 'Architecture',
    items: ['Clean Architecture', 'DDD', 'Monorepo', 'Event Sourcing'],
  },
  {
    title: 'Security',
    items: ['JWT', 'AES-256-GCM', 'PCI-DSS', 'GDPR', 'Audit Trails'],
  },
];

export type Project = {
  id: string;
  name: string;
  role: string;
  timeline: string;
  tagline: string;
  challenge: string[];
  built: { title: string; detail: string }[];
  impact: string[];
  stack: string[];
  accent: 'brand' | 'violet' | 'accent';
};

export const projects: Project[] = [
  {
    id: 'hospitality-saas',
    name: 'Multi-Tenant Hospitality SaaS Platform',
    role: 'Full-Stack Architect & Developer',
    timeline: '2025 – Present • Ideas2Goal',
    tagline: 'Enterprise PMS unifying reservations, rates, and OTA distribution',
    accent: 'brand',
    challenge: [
      'Support 6+ property management systems (Oracle OPERA, RMS Cloud, GuestPoint)',
      'Maintain strict multi-tenant isolation across 18+ schemas',
      'Comply with GDPR and PCI-DSS SAQ-A standards',
      'Distribute rates to 40+ OTA channels (Booking.com, Expedia)',
    ],
    built: [
      {
        title: 'Backend',
        detail:
          'Transitioned from 28 Express microservices to a modern Fastify monorepo with TypeScript.',
      },
      {
        title: 'Integration Layer',
        detail:
          'Unified PMS adapter using a provider-registry pattern with per-vendor credential parsing.',
      },
      {
        title: 'Rate Distribution',
        detail:
          'OTA channel manager supporting 40-verb OpenTravel Alliance message types with AES-256-GCM encryption.',
      },
      {
        title: 'Tenant Isolation',
        detail: 'Postgres Row-Level Security (RLS) enforced across all data layers.',
      },
      {
        title: 'Audit Compliance',
        detail: 'Event-sourced architecture with tamper-evident audit chains.',
      },
    ],
    impact: [
      'Reduced integration complexity from O(n²) to O(n) provider management',
      'Enabled enterprise clients to centralize 6+ disparate systems',
      'Achieved WCAG 2.2 AA + PCI-DSS compliance',
    ],
    stack: ['TypeScript', 'Fastify', 'React 19', 'PostgreSQL', 'Drizzle ORM', 'Redis'],
  },
  {
    id: 'pricing-engine',
    name: 'Intelligent Pricing Engine',
    role: 'Backend Architect',
    timeline: '2025 – Present',
    tagline: 'AI-driven pricing with explainability & competitor intelligence',
    accent: 'violet',
    challenge: [
      'Design pluggable pricing strategies (formula-based, ML-driven)',
      'Score pricing confidence with full traceability',
      'Scrape competitor rates from Booking.com (BrightData) + vendor APIs (Lighthouse)',
      'Prevent race conditions during overlapping pricing runs',
    ],
    built: [
      {
        title: 'Strategy Engine',
        detail: 'Pluggable formula strategies — anchor-first, demand-based, seasonal.',
      },
      {
        title: 'Confidence Scoring',
        detail: 'ML-backed scoring with explainability traces for audit compliance.',
      },
      {
        title: 'Competitor Intelligence',
        detail: 'Parallel scraping pipelines (BrightData tiered + Lighthouse API).',
      },
      {
        title: 'DB-Backed Backoff',
        detail: '429 retry logic with exponential backoff for rate limits.',
      },
      {
        title: 'Transactional Safety',
        detail:
          'PostgreSQL advisory locks + Unit-of-Work pattern for exactly-once semantics.',
      },
    ],
    impact: [
      'Reduced manual rate updates by 80%, enabled dynamic pricing at scale',
      'Competitor intelligence latency: <2 minutes across 500+ properties',
      'Zero lost pricing transactions across distributed workers',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'BrightData API', 'Machine Learning'],
  },
  {
    id: 'bulk-publishing',
    name: 'Bulk Rate Publishing Pipeline',
    role: 'Full-Stack Owner',
    timeline: '2025 – Present',
    tagline: 'Reliable, observable bulk operations for rate distribution',
    accent: 'accent',
    challenge: [
      'Publish thousands of rates to external systems reliably',
      'Handle partial failures, retries, and circuit breakers',
      'Provide end-to-end observability and error tracking',
      'Maintain idempotency across retries',
    ],
    built: [
      {
        title: 'Bulk Publisher',
        detail: 'BullMQ-powered job queue with configurable concurrency.',
      },
      {
        title: 'Error Handling',
        detail: 'Retry logic with exponential backoff + dead-letter queue.',
      },
      {
        title: 'Observability',
        detail: 'Structured logging + distributed tracing for debugging.',
      },
      {
        title: 'Idempotency',
        detail: 'Request deduplication using event IDs.',
      },
      {
        title: 'Frontend',
        detail: 'Real-time progress UI with success/failure breakdown.',
      },
    ],
    impact: [
      'Processed 100K+ rates/day with 99.9% delivery success',
      'MTTR reduced from 4h manual to 5m automated recovery',
      'Enabled self-service rate publishing (support tickets down 60%)',
    ],
    stack: ['BullMQ', 'Express/Fastify', 'React', 'Structured Logging', 'Circuit Breakers'],
  },
];

export type DeepDive = {
  id: string;
  title: string;
  blurb: string;
  code: string;
  language: string;
  points: string[];
};

export const deepDives: DeepDive[] = [
  {
    id: 'rls',
    title: 'Why Multi-Tenant Isolation Matters',
    blurb:
      'Row-Level Security turns tenant isolation into a database guarantee rather than an application convention. Even a missed WHERE clause cannot leak another tenant’s data — the policy is enforced at the storage layer.',
    language: 'sql',
    code: `-- Every query is silently scoped to the caller's tenant.
CREATE POLICY tenant_isolation ON reservations
  USING (tenant_id = current_setting('app.tenant_id')::uuid);

SET app.tenant_id = '...'; -- set per request`,
    points: [
      'Isolation enforced at the storage layer, not just app code',
      '18+ schemas share one codebase with zero cross-tenant leakage',
      'Simplifies queries — no manual tenant filtering on every read',
    ],
  },
  {
    id: 'event-sourcing',
    title: 'Event Sourcing for Audit Compliance',
    blurb:
      'Instead of mutating state in place, we append immutable events and derive current state from them. The event log becomes a tamper-evident audit trail — essential for GDPR and PCI-DSS evidence.',
    language: 'ts',
    code: `// Append-only events; current state is a projection.
await events.append({
  type: 'RatePublished',
  payload,
  causationId,
  hash: sha256(prevHash + payload),
});`,
    points: [
      'Immutable, append-only log enables point-in-time replay',
      'Hash-chained events make tampering detectable',
      'Projections rebuild any view from the same source of truth',
    ],
  },
  {
    id: 'monorepo',
    title: 'Scaling: Microservices → Monorepo',
    blurb:
      '28 fine-grained microservices meant 28 deployables, duplicated config, and cross-service coupling. Consolidating into a typed monorepo kept boundaries intact while collapsing operational complexity.',
    language: 'text',
    code: `Before:  28 services · 28 CI pipelines · 28 deploys
After:   1 monorepo · shared types · atomic deploys
         boundaries kept via modules + Clean Architecture`,
    points: [
      'Shared TypeScript types eliminate contract drift',
      'Atomic, cross-cutting changes ship in one PR',
      'Same module boundaries — without the deploy tax',
    ],
  },
];

export const skillMatrix = [
  { label: 'Backend Architecture', level: 95, tier: 'Expert' },
  { label: 'Full-Stack SaaS', level: 95, tier: 'Expert' },
  { label: 'PostgreSQL & Databases', level: 88, tier: 'Advanced' },
  { label: 'React & Frontend', level: 87, tier: 'Advanced' },
  { label: 'Event Sourcing / DDD', level: 82, tier: 'Advanced' },
  { label: 'DevOps & Integrations', level: 75, tier: 'Intermediate' },
];

export const techStackLayers = [
  {
    layer: 'Frontend',
    items: ['React 19', 'Redux Toolkit', 'Tailwind', 'Vite', 'PWA'],
  },
  {
    layer: 'Backend',
    items: ['Node.js', 'Fastify', 'Express', 'TypeScript'],
  },
  {
    layer: 'Database',
    items: ['PostgreSQL', 'Drizzle ORM', 'Redis', 'BullMQ'],
  },
  {
    layer: 'Integrations',
    items: ['Oracle OPERA', 'RMS', 'BrightData', 'Lighthouse', 'Xero'],
  },
  {
    layer: 'Architecture',
    items: ['Event Sourcing', 'Clean Architecture', 'DDD'],
  },
  {
    layer: 'Security',
    items: ['JWT', 'AES-256-GCM', 'PCI-DSS', 'GDPR', 'OAuth2'],
  },
];

export const experience = [
  {
    period: '07/2025 – Now',
    role: 'Full Stack Developer',
    org: 'Ideas2Goal Technologies',
    points: [
      'Led multi-tenant SaaS scaling (28 microservices → monorepo)',
      'Built unified PMS integration layer (6+ vendors)',
      'Engineered intelligent pricing engine with competitor intelligence',
      'Achieved GDPR & PCI-DSS compliance',
    ],
  },
  {
    period: '2021 – 2025',
    role: 'B.Tech in Computer Science & Engineering',
    org: 'Bansal College of Engineering',
    points: ['CGPA: 8.0'],
  },
];

export const achievements = [
  { value: '100K+', label: 'rates/day published reliably', sub: '99.9% delivery success' },
  { value: '80%', label: 'reduction in manual rate updates', sub: 'via intelligent pricing' },
  { value: '6+', label: 'PMS vendors unified', sub: 'O(n²) → O(n) integration' },
  { value: '<2 min', label: 'competitor intelligence latency', sub: 'across 500+ properties' },
  { value: 'WCAG 2.2 AA', label: '+ PCI-DSS compliance', sub: 'achieved in production' },
];
