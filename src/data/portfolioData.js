// ===== LÊ HUY TƯỜNG - PORTFOLIO DATA =====
// Backend Engineer | Java & Spring Boot

export const personalInfo = {
  name: "Le Huy Tuong",
  title: "Junior Backend Developer",
  tagline: "Java & Spring Boot | Hands-On with Real Systems",
  subtitle: "Junior Backend Developer with ~1 year of hands-on experience delivering production features in fintech and enterprise systems. Focused on writing clean, reliable backend code with a deep interest in system design.",
  email: "lehuytuong2005@gmail.com",
  phone: "0372728768",
  location: "Ho Chi Minh",
  bio: `Junior Backend Developer with ~1 year of hands-on experience building production features using Java 17 and Spring Boot 3. Contributed to real systems handling wallet flows, payment integrations, and distributed task processing. Strong interest in system design and writing reliable, maintainable backend code.`,
  resumeUrl: "/resume",
  lastUpdated: "2026-04-20",
  social: {
    github: "https://github.com/LeHuyTuong",
    linkedin: "https://linkedin.com/in/lehuytuong",
    email: "lehuytuong2005@gmail.com"
  }
};

export const professionalSummary = {
  title: "Professional Summary",
  cards: [
    {
      title: "Reliability-First Mindset",
      icon: "🛡️",
      content: "Dedicated to the rigor of financial systems, ensuring every transaction is traceable and every edge case is strictly handled."
    },
    {
      title: "Data Integrity Focus",
      icon: "🏗️",
      content: "Prioritizing structural quality and data consistency through validated architectures and ACID compliance."
    },
    {
      title: "Technical Discipline",
      icon: "📈",
      content: "Applying engineering best practices in system design, focusing on reliability and high-performance API development."
    },
    {
      title: "Full-Cycle Ownership",
      icon: "🚀",
      content: "From database design to deployment, I take full ownership of the backend modules I build."
    }
  ]
};

export const softSkills = [
  { name: "Team Collaboration", icon: "👥", description: "Effective communication within Agile teams and cross-functional syncs with BA/QA." },
  { name: "Technical Documentation", icon: "📝", description: "Producing clear API documentation and architecture diagrams for maintainability." },
  { name: "Adaptability", icon: "🚀", description: "Rapidly learning and applying new technologies to meet business-critical requirements." }
];

export const skills = {
  "Languages": [
    { name: "Java 17/21", tier: "primary" },
    { name: "Python", tier: "normal" },
    { name: "SQL", tier: "primary" },
    { name: "JavaScript / TypeScript", tier: "normal" }
  ],
  "Backend & Frameworks": [
    { name: "Spring Boot 3.x", tier: "primary" },
    { name: "Spring Security / JWT", tier: "primary" },
    { name: "Spring Data JPA", tier: "primary" },
    { name: "Hibernate", tier: "primary" },
    { name: "RESTful API", tier: "primary" },
    { name: "gRPC", tier: "primary" },
    { name: "FastAPI", tier: "normal" },
    { name: "Spring Cloud", tier: "normal" },
    { name: "Spring AOP / AspectJ", tier: "normal" },
    { name: "WebSocket", tier: "normal" }
  ],
  "Architecture & Engineering": [
    { name: "Microservices", tier: "primary" },
    { name: "Clean Architecture", tier: "primary" },
    { name: "CQRS", tier: "primary" },
    { name: "Event-Driven", tier: "primary" },
    { name: "Distributed Locking", tier: "primary" },
    { name: "Transactional Outbox", tier: "primary" },
    { name: "SOLID Principles", tier: "normal" },
    { name: "Design Patterns", tier: "normal" },
    { name: "Multithreading", tier: "normal" }
  ],
  "Databases & Caching": [
    { name: "PostgreSQL", tier: "primary" },
    { name: "MySQL", tier: "primary" },
    { name: "Redis", tier: "primary" },
    { name: "MS SQL Server", tier: "normal" },
    { name: "Neo4j (GraphDB)", tier: "normal" },
    { name: "Qdrant (VectorDB)", tier: "normal" }
  ],
  "Observability": [
    { name: "Prometheus", tier: "primary" },
    { name: "Grafana", tier: "primary" },
    { name: "Tempo", tier: "primary" },
    { name: "Loki", tier: "normal" },
    { name: "Distributed Tracing", tier: "primary" },
    { name: "SLF4J MDC", tier: "normal" },
    { name: "Micrometer", tier: "normal" }
  ],
  "DevOps & Tools": [
    { name: "Docker & Compose", tier: "primary" },
    { name: "GitHub Actions (CI/CD)", tier: "primary" },
    { name: "GitLab CI", tier: "normal" },
    { name: "Nginx", tier: "normal" },
    { name: "Postman", tier: "primary" },
    { name: "Swagger / OpenAPI", tier: "primary" },
    { name: "Playwright", tier: "normal" },
    { name: "k6 (Load Testing)", tier: "normal" },
    { name: "JUnit 5 & Mockito", tier: "primary" }
  ],
  "Domain Exposure": [
    { name: "FinTech & Banking", tier: "primary" },
    { name: "Payment Gateway (VNPay, Stripe)", tier: "primary" },
    { name: "Wallet Transactions", tier: "primary" },
    { name: "RAG / AI Systems", tier: "primary" },
    { name: "Webhook Handling", tier: "normal" },
    { name: "Idempotency", tier: "normal" }
  ]
};

export const stats = {
  javaProjects: "8+",
  companies: "1+",
  labels: {
    java: "Technical Projects",
    companies: "Year Experience"
  }
};

export const projects = [
  {
    id: 1,
    category: "fintech",
    categoryLabel: "🏦 Core Financial Logic",
    title: "Card Issuing System",
    displayName: "Transaction Processing & Data Accuracy",
    role: "Solo Developer",
    period: "2025",
    problem: "Ensuring near-zero financial discrepancy in systems handling core card management and transaction authorization.",
    solution: "Built a card management engine with strong test coverage for core business rules and financial calculations.",
    challenge: "Validating complex state transitions and preventing race conditions in ledger updates.",
    architectureNote: "Implemented a strictly validated state machine for card lifecycles and used JUnit 5/Mockito to simulate edge cases in transaction authorization.",
    whatILearned: "Mastery of defensive programming, unit testing isolation, and building high-reliability services for financial domains.",
    highlights: [
      "Designed and implemented core backend logic for card management and transaction authorization.",
      "Achieved high test coverage for core financial logic using JUnit 5 and Mockito.",
      "Caught and resolved 12+ critical edge cases (e.g., overdraft scenarios, expired card usage) before deployment.",
      "Integrated centralized exception handling to provide clear audit trails for failed transactions."
    ],
    technologies: ["Java 17", "Spring Boot", "JUnit 5", "Mockito", "MySQL"],
    github: "https://github.com/LeHuyTuong",
    demo: null,
    featured: true
  },
  {
    id: 6,
    category: "enterprise",
    categoryLabel: "🧠 AI / RAG System",
    title: "Vietnamese History RAG Platform",
    displayName: "Hybrid Retrieval-Augmented Generation Platform",
    role: "Backend Engineer",
    period: "2026",
    problem: "Answering open-ended Vietnamese history questions grounded in 15 volumes of source books — with citations, and without hallucinating relationships between historical figures.",
    solution: "Built a polyglot microservices platform: a Spring Boot gateway fronting a Python FastAPI RAG service, combining vector search (Qdrant) with a Neo4j knowledge graph for relationship-aware answers.",
    challenge: "Vector search alone misses entity relationships (lineage, succession, factions), and naive re-ingestion duplicates chunks in the vector store.",
    architectureNote: "Ingestion pipeline extract→chunk→embed→upsert with delete-before-upsert re-ingest dedup and sourceId namespacing (books vs articles). A question router keeps vector search always-on and auto-enables graph retrieval for relationship queries; chunk metadata is denormalized into the Qdrant payload so filtering needs no MySQL JOIN.",
    whatILearned: "Designing cross-language service boundaries (Java↔Python), hybrid vector/graph retrieval, and grounding LLM answers with verifiable citations and web fallback.",
    highlights: [
      "Architected a polyglot system — React SPA → Spring Boot gateway (JWT, Flyway, MySQL) → Python FastAPI RAG service.",
      "Built the full ingestion pipeline (extract → chunk with overlap → embed → upsert to Qdrant) with re-ingest deduplication.",
      "Implemented hybrid retrieval: a question router runs semantic vector search by default and auto-triggers Neo4j graph search for relationship questions.",
      "Denormalized chunk metadata into Qdrant payloads to enable filtered search without cross-database JOINs.",
      "Added grounded answers with citations, FAQ caching, and web-search fallback when local context is insufficient."
    ],
    technologies: ["Java 17", "Spring Boot 3", "Python", "FastAPI", "Qdrant", "Neo4j", "React", "Docker", "Gemini"],
    github: "https://github.com/LeHuyTuong/RAG-history",
    demo: null,
    featured: true
  },
  {
    id: 2,
    category: "fintech",
    categoryLabel: "⭐ Core Team Project",
    title: "CarbonX",
    displayName: "Carbon Credit Marketplace",
    role: "Backend Lead",
    period: "2025",
    problem: "Developing a robust marketplace for carbon credits requiring secure wallet transactions and real-time payment processing.",
    solution: "Built a wallet transaction system with multi-gateway integration (PayPal, Stripe) and automated reconciliation.",
    challenge: "Handling concurrent transaction flows and ensuring idempotency across distributed service calls.",
    architectureNote: "Utilized Redis-based distributed locking (Redlock) and Idempotency Key mechanisms to prevent redundant payment processing.",
    whatILearned: "Experienced in enterprise Git workflows, payment gateway deep-integration, and designing fault-tolerant transaction mechanisms.",
    highlights: [
      "Designed and implemented Order Lifecycle management systems using Clean Architecture and SOLID principles.",
      "Implemented Idempotency mechanisms to eliminate duplicate charge risks during high-concurrency payment events.",
      "Managed complex financial states using DB-level Locking and Redis for high-speed secondary validation.",
      "Integrated PayPal & Stripe webhook handlers with reliable state updates and automatic retry logic.",
      "Containerized the entire infrastructure using Docker for consistent environment parity."
    ],
    technologies: ["Java 17", "Spring Boot", "MySQL", "Docker", "Redis", "Jira"],
    github: "https://github.com/LeHuyTuong",
    demo: "https://carbonx.io.vn/home",
    featured: true
  },
  {
    id: 3,
    category: "enterprise",
    categoryLabel: "⚡ High-Throughput System",
    title: "URL Shortener",
    displayName: "High-Performance Link Management",
    role: "Solo Developer",
    period: "2025",
    problem: "Scaling redirection services to handle massive traffic spikes with sub-50ms latency.",
    solution: "Built a Redis-backed caching layer that reduced database pressure by 80%.",
    challenge: "Generating unique, collision-free short codes under heavy load.",
    architectureNote: "Implemented Base-62 encoding for short codes and used Redis for immediate redirection lookups.",
    whatILearned: "Optimizing database indexing for prefix searches and managing high-load server-side redirections.",
    highlights: [
      "Optimized backend performance resulting in a 62% reduction in redirection latency.",
      "Implemented Redis-based caching strategies to offload primary database read operations.",
      "Engineered collision-resilient short-code generation logic for enterprise-scale link management.",
      "Enhanced system observability through structured logging and performance metrics."
    ],
    technologies: ["Java 17", "Spring Boot", "Redis", "MySQL", "Docker"],
    github: "https://github.com/LeHuyTuong/URL-Shortener",
    demo: "https://url-shortener-tuong.vercel.app/",
    featured: true
  },
  {
    id: 4,
    category: "enterprise",
    categoryLabel: "⚙️ Distributed System",
    title: "S-Platform Engine",
    displayName: "Distributed Media Processing Platform",
    role: "Full Stack Developer",
    period: "2026",
    problem: "Orchestrating high-latency media processing tasks across multiple nodes while ensuring absolute data consistency and system reliability.",
    solution: "Designed a 'Micro-monolith' system using the Transactional Outbox pattern and Distributed Lease Management for reliable job execution.",
    challenge: "Preventing race conditions and job duplication across distributed workers while maintaining real-time status updates.",
    architectureNote: "Decoupled domain events from message delivery via Outbox pattern; implemented a leasing mechanism for worker nodes to safely claim and process tasks.",
    whatILearned: "Designing fault-tolerant distributed architectures, managing encrypted user integration settings (Telegram/Drive), and building session-aware premium UIs.",
    highlights: [
      "Implemented Transactional Outbox Pattern to guarantee message delivery consistency between DB and Telegram/Drive APIs.",
      "Engineered Distributed Lease Management to prevent worker contention and ensure high availability in task processing.",
      "Developed a session-aware React 19 frontend with Role-Based Access Control (RBAC) and dynamic workspace routing.",
      "Built Storybook component library with accessibility (a11y) checks for UI isolation and visual regression testing.",
      "Wrote Playwright E2E smoke tests covering auth flow, job submission, real-time state polling, and file download verification.",
      "Used structured architecture and code review practices to improve design quality and implementation consistency."
    ],
    technologies: ["Java 17", "Spring Boot 3", "React 19", "MySQL", "Redis", "Docker", "Playwright", "Storybook"],
    github: "https://github.com/LeHuyTuong/S-Platform-Engine",
    demo: null,
    featured: true
  },
  {
    id: 5,
    category: "fintech",
    categoryLabel: "🚂 Booking Logic",
    title: "Train Ticket Office",
    displayName: "Distributed Booking Engine",
    role: "Backend Lead",
    period: "2025",
    problem: "Managing concurrent seat reservations and preventing double-booking during peak travel periods.",
    solution: "Developed a distributed booking system with temporary seat-hold logic and secure VNPay integration.",
    challenge: "Maintaining consistency between seat status and payment confirmation states.",
    architectureNote: "Applied distributed locking for seat selection and implemented a transactional state-machine for booking lifecycles.",
    whatILearned: "Handling complex long-running transactions and integrating local payment gateways with reliable callbacks.",
    highlights: [
      "Designed and implemented complex filtering and search logic for real-time seat availability.",
      "Implemented 15-minute seat-hold mechanisms with automated cleanup for expired reservations.",
      "Integrated VNPay with secure signature verification for high-integrity payment processing.",
      "Optimized query performance for large datasets (36,000+ seat records) through database pagination."
    ],
    technologies: ["Java 17", "Spring Boot", "MS SQL Server", "VNPay"],
    github: "https://github.com/LeHuyTuong",
    demo: null,
    featured: true
  }
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "architecture", label: "Architecture" },
  { id: "contact", label: "Contact" }
];

export const experiences = [
  {
    id: 1,
    date: "Apr 2026 - Present",
    title: "Software Engineer Trainee — Viettel Digital Talent",
    company: "Viettel Digital",
    companyUrl: "https://tuyendung.viettel.vn/",
    description: "Selected for Viettel's competitive digital talent program. Building a non-invasive Spring Boot observability starter targeting banking/fintech microservices, with distributed tracing extended into WebSocket.",
    responsibilities: [
      "Building a <strong>non-invasive Spring Boot observability starter</strong> that auto-instruments <strong>HTTP/JDBC/method-level tracing</strong> with zero business-code change, correlating Metrics–Traces–Logs by a single traceId on Grafana (Prometheus/Tempo/Loki).",
      "Extending distributed tracing to <strong>WebSocket at the message level</strong> via a JSON trace-context envelope — keeping one traceId across HTTP↔WebSocket↔JDBC, a gap default APM/OpenTelemetry agents miss.",
      "Benchmarking overhead with <strong>k6</strong> (+0.1–1 ms/request; ~0% for WebSocket); validated end-to-end on two demo services (wallet↔ledger), including deadlock and error traces."
    ],
    technologies: ["Java", "Spring Boot", "Spring AOP / AspectJ", "Prometheus", "Grafana", "Tempo", "Loki", "WebSocket", "k6"]
  },
  {
    id: 2,
    date: "Dec 2025 - Apr 2026",
    title: "Backend Engineer Intern — FPT Software",
    company: "FPT Software",
    companyUrl: "https://fptsoftware.com",
    description: "Contributed to a microservices-based franchise management platform handling thousands of daily transactions.",
    responsibilities: [
      "Mitigated race conditions and <strong>double-payment risk</strong> in payment flows via Redis distributed locks.",
      "Migrated internal service-to-service calls from <strong>REST to gRPC</strong>, cutting serialization overhead.",
      "Built an <strong>order-status state machine</strong> with strict validation; centralized exception handling."
    ],
    technologies: ["Microservices", "CQRS", "gRPC", "Redis Locking"]
  },
  {
    id: 3,
    date: "Oct 2025 - Present",
    title: "Software Engineer (Freelance) — TCH Company",
    company: "TCH Company",
    companyUrl: "https://dichvuwebsitetch.com/",
    description: "Built and optimized backend infrastructures for enterprise client platforms, focusing on performance and automation.",
    responsibilities: [
      "Implemented <strong>RBAC</strong> and route-level middleware to secure admin APIs with multi-level permissions.",
      "Reduced API response time by <strong>~60%</strong> on high-traffic endpoints via caching and payload refinement.",
      "Built an <strong>end-to-end cost estimation module</strong> for the system, automating client quotation workflows."
    ],
    technologies: ["MySQL", "Redis", "RBAC", "Performance Tuning"]
  }
];

export const education = [
  {
    id: 1,
    school: "FPT University",
    degree: "Bachelor of Software Engineering",
    period: "2023 - Present",
    description: "Specializing in Backend Systems and Software Architecture",
    achievements: [
      "Consistently achieved high academic standing in software engineering and database system modules.",
      "Led multiple team-based projects focused on solving real-world enterprise logic challenges.",
      "Strong foundation in Data Structures, Algorithms, and Operating Systems."
    ],
    toeic: {
      score: "735",
      label: "English: Proficient (Technical Documentation & Communication)"
    }
  }
];