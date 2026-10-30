export const profile = {
  name: 'Muskan Patil',
  role: 'Full-Stack Engineer',
  tagline: 'Full-Stack Engineer • Revenue Management • ML & AI Systems',
  subheading:
    'I build Propeter, a multi-tenant hospitality SaaS: pricing engines, demand forecasting, PMS integrations and an AI revenue copilot, end-to-end from Postgres to React.',
  hook: 'Propeter runs pricing, forecasting and PMS sync for live hotel properties. V3 is a Turborepo monorepo of 20+ Fastify services on PostgreSQL 18 and Redis 8. I have shipped 700+ commits to it, across revenue, ML, integrations and the admin app.',
  email: 'muskanpatil2004@gmail.com',
  phone: '+91 7974130626',
  location: 'Nagpur, India',
  github: 'https://github.com/muskan-patil-dev',
  linkedin: 'https://linkedin.com/in/muskan-patil-dev',
  resume: '/resume.pdf',
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
    items: ['Node.js', 'Fastify 5', 'Zod', 'Microservices', 'Turborepo'],
  },
  {
    title: 'Frontend',
    items: ['React 19', 'TanStack Query', 'Tailwind', 'Vite', 'Expo'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL 18', 'Drizzle ORM', 'Redis 8', 'BullMQ', 'pgvector'],
  },
  {
    title: 'ML & AI',
    items: ['Python', 'XGBoost', 'PyTorch', 'LLM tool-use', 'MCP'],
  },
  {
    title: 'Integrations',
    items: ['RMS', 'Oracle OPERA', 'GuestPoint', 'Xero', 'BrightData', 'PredictHQ'],
  },
  {
    title: 'Security',
    items: ['JWT', 'AES-256-GCM', 'Postgres RLS', 'PCI-DSS SAQ-A', 'GDPR'],
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
    id: 'pricing-engine',
    name: 'Revenue Management & Pricing Engine',
    role: 'Backend & Full-Stack',
    timeline: '2025 – Present • Propeter V3',
    tagline: 'Rate recommendations that can explain themselves, and get published to the PMS safely',
    accent: 'brand',
    challenge: [
      'Recommend rates per room type and rate plan, every night, for every property',
      'Never publish a rate nobody can explain or audit',
      'Overlapping pricing runs must not double-write',
      'Feed in competitor rates and local events',
    ],
    built: [
      {
        title: 'Anchor-first engine',
        detail:
          'Price the anchor room type, then derive the rest through room-type differentials, with strategies scoped to rate plans and min/max guards.',
      },
      {
        title: 'Rate provenance',
        detail:
          'Every recommendation stores point-in-time inputs, so "why this rate?" has an answer months later.',
      },
      {
        title: 'Publish to PMS',
        detail:
          'Recommendations publish back to the PMS with a publish-audit trail, plus a no-publish simulation mode for what-if scenarios.',
      },
      {
        title: 'Market signals',
        detail:
          'Competitor rate shopping (Lighthouse, BrightData) and PredictHQ events land in a feature store via BullMQ workers.',
      },
      {
        title: 'Subscription plans',
        detail:
          'Per-plan limits on rooms, competitors, history and forecast horizon, enforced in each service through a shared package.',
      },
    ],
    impact: [
      'Running in production for live hotel properties',
      'Postgres advisory locks keep concurrent pricing runs safe',
      'Every published rate traceable to its inputs',
    ],
    stack: ['TypeScript', 'Fastify 5', 'Drizzle', 'PostgreSQL 18', 'BullMQ', 'React 19'],
  },
  {
    id: 'forecasting-ai',
    name: 'Demand Forecasting & "Peter" AI Copilot',
    role: 'ML & AI Engineering',
    timeline: '2025 – Present • Propeter V3',
    tagline: 'Forecasts that earn their way into production, and a copilot that answers from real data',
    accent: 'violet',
    challenge: [
      'Forecast demand, ADR, RevPAR and room revenue per property',
      'Never promote a model that loses to its baseline',
      'Let revenue managers ask questions in plain English',
      'Keep the copilot scoped to the tenant and property it serves',
    ],
    built: [
      {
        title: 'Forecasting pipeline',
        detail:
          'Python XGBoost/PyTorch models with booking-curve and lead-time features, run by worker-service and extendable to 365-day horizons.',
      },
      {
        title: 'Promotion gates',
        detail:
          'A model is only promoted once backtest metrics beat the baseline; the ADR model went live this way.',
      },
      {
        title: 'Price elasticity',
        detail: 'A per-property elasticity model whose curves feed the RevPAR optimizer.',
      },
      {
        title: 'Multi-agent copilot',
        detail:
          '"Peter" calls scoped, read-only tools with the user\'s forwarded JWT, exposes an MCP surface, and keeps per-tenant prompts and conversation history.',
      },
      {
        title: 'Grounded answers',
        detail:
          'Aggregate endpoints so answers come from the full dataset, not a sample, and truncated tool results are disclosed instead of silently cut.',
      },
    ],
    impact: [
      'ADR forecast promoted to production',
      'Copilot answers grounded in live revenue data',
      'Forecasting extended to 365-day horizons',
    ],
    stack: ['Python', 'XGBoost', 'PyTorch', 'LLM tool-use', 'MCP', 'Fastify'],
  },
  {
    id: 'integrations',
    name: 'PMS Integrations & Platform Reliability',
    role: 'Full-Stack Owner',
    timeline: '2025 – Present • Propeter V3',
    tagline: 'Getting reservations, rates and inventory in and out of hotel systems, reliably',
    accent: 'accent',
    challenge: [
      'Every PMS speaks a different dialect',
      'Bad upstream data must not fail a whole sync batch',
      'Side-effects must survive crashes and retries',
      'Large tables must stay fast as history grows',
    ],
    built: [
      {
        title: 'PMS adapters',
        detail:
          'Sync adapters for RMS, Oracle OPERA and GuestPoint (pull, webhooks, normalizers) behind a provider registry, plus a GuestPoint OpenChannel integration.',
      },
      {
        title: 'Encrypted credentials',
        detail: 'Vendor credentials stored with AES-256-GCM envelope encryption.',
      },
      {
        title: 'Transactional outbox',
        detail:
          'Domain events written in the same transaction as the change; failed rows retried and stale dispatches recovered.',
      },
      {
        title: 'Database audit',
        detail:
          'Index-driven loaders, partitioned audit logs and reduced write churn on pricing and forecasting tables.',
      },
      {
        title: 'Xero',
        detail: 'Fixed the single-use OAuth code exchange that failed on every retry.',
      },
    ],
    impact: [
      'Multi-leg OPERA bookings no longer fail sync batches',
      'Outbox now self-heals stuck and failed events',
      'Faster grid, insight and recommendation queries',
    ],
    stack: ['Fastify', 'PostgreSQL', 'Redis', 'BullMQ', 'Zod', 'AES-256-GCM'],
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
    title: 'Tenant Isolation in the Database',
    blurb:
      'Row-Level Security turns tenant isolation into a database guarantee rather than an application convention. Even a missed WHERE clause cannot leak another tenant’s data. The policy is enforced at the storage layer.',
    language: 'sql',
    code: `-- Every query is silently scoped to the caller's tenant.
CREATE POLICY chain_isolation ON guest.guest_profiles
  AS PERMISSIVE FOR ALL
  USING (chain_id = ops.current_chain_id());

ALTER TABLE guest.guest_profiles FORCE ROW LEVEL SECURITY;`,
    points: [
      'Isolation enforced at the storage layer, not just app code',
      'Repositories still scope by chain as defence in depth',
      'A missed filter fails closed instead of leaking',
    ],
  },
  {
    id: 'audit-chain',
    title: 'Tamper-Evident Audit Log',
    blurb:
      'Pricing and accounting changes need evidence that holds up later. Each audit row is HMAC-signed over its content plus the previous row’s hash, so editing or deleting any row breaks the chain from that point on.',
    language: 'ts',
    code: `// Lock the tenant's chain head, then sign row + previous HMAC.
const [head] = await tx.select().from(chainHeads)
  .where(eq(chainHeads.chainId, chainId)).for('update');

const prev = head?.headHmac ?? '';
const seq = (head?.headSeq ?? 0n) + 1n;
const rowHmac = createHmac('sha256', secret)
  .update(buildHmacMaterial({ ...row, prevRowHash: prev, chainSeq: seq }))
  .digest('hex');`,
    points: [
      'Rows linked by prev_row_hash, one chain per tenant',
      'SELECT … FOR UPDATE on the head serializes concurrent writers',
      'Tampering is detectable by re-walking the chain',
    ],
  },
  {
    id: 'monorepo',
    title: 'Microservices, One Monorepo',
    blurb:
      'Propeter V3 keeps 20+ services with one concern each, but they share one Turborepo. Typed @propeter/* packages hold the database, outbox, crypto and contracts, so services stay separate without drifting apart.',
    language: 'text',
    code: `apps/      gateway · revenue-service · pricing-service
           pms-sync-service · agent-service · worker-service …
packages/  @propeter/db · outbox · crypto · contracts
           plan-limits · messaging · audit …
layering   Route → Service → Repository → Database`,
    points: [
      'Shared types eliminate contract drift between services',
      'Cross-cutting changes ship in one PR',
      'Strict layering: no SQL outside repositories',
    ],
  },
];

export const focusAreas = [
  {
    label: 'Revenue & pricing systems',
    detail: 'Anchor-first pricing, differentials, simulations, publishing to the PMS',
  },
  {
    label: 'Backend architecture',
    detail: 'Fastify services, layered modules, outbox, BullMQ workers',
  },
  {
    label: 'PostgreSQL',
    detail: 'Drizzle, RLS, advisory locks, partitioning, query tuning',
  },
  {
    label: 'ML & AI',
    detail: 'XGBoost/PyTorch forecasting, LLM tool-use agents, MCP',
  },
  {
    label: 'Frontend',
    detail: 'React 19 admin app: dashboards, grids, revenue analytics',
  },
  {
    label: 'Integrations',
    detail: 'PMS adapters, webhooks, OAuth, encrypted credentials',
  },
];

export const techStackLayers = [
  {
    layer: 'Frontend',
    items: ['React 19', 'TanStack Query', 'Tailwind', 'Vite', 'React Native'],
  },
  {
    layer: 'Backend',
    items: ['Node.js', 'Fastify 5', 'TypeScript', 'Zod'],
  },
  {
    layer: 'Data',
    items: ['PostgreSQL 18', 'Drizzle ORM', 'Redis 8', 'BullMQ', 'pgvector'],
  },
  {
    layer: 'ML & AI',
    items: ['Python', 'XGBoost', 'PyTorch', 'LLM agents', 'MCP'],
  },
  {
    layer: 'Integrations',
    items: ['RMS', 'Oracle OPERA', 'GuestPoint', 'Lighthouse', 'Xero'],
  },
  {
    layer: 'Security',
    items: ['JWT', 'AES-256-GCM', 'RLS', 'PCI-DSS SAQ-A', 'GDPR'],
  },
];

export const experience = [
  {
    period: '07/2025 – Now',
    role: 'Full Stack Developer',
    org: 'Ideas2Goal Technologies',
    points: [
      'Core contributor to Propeter V3 (700+ commits) across revenue, pricing, forecasting, PMS sync and the AI copilot',
      'Built PMS adapters for RMS, Oracle OPERA and GuestPoint',
      'Shipped demand/ADR forecasting and the "Peter" multi-agent revenue copilot',
      'Led a database performance audit across revenue, forecasting and worker services',
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
  { value: '700+', label: 'commits to Propeter V3', sub: 'revenue, ML, integrations, UI' },
  { value: '20+', label: 'Fastify services', sub: 'in one Turborepo monorepo' },
  { value: '3', label: 'PMS adapters built', sub: 'RMS · Oracle OPERA · GuestPoint' },
  { value: '4', label: 'forecast targets', sub: 'demand · ADR · RevPAR · revenue' },
  { value: '1', label: 'AI revenue copilot', sub: 'multi-agent + MCP' },
];
