// ===== LÊ HUY TƯỜNG - PORTFOLIO DATA =====
// Backend Engineer | Java & Spring Boot

export const personalInfo = {
  name: "Le Huy Tuong",
  title: "Junior Backend Developer",
  tagline: "Java & Spring Boot | Hands-On with Real Systems",
  subtitle: "Junior Backend Developer with ~1 year of hands-on experience delivering production features in fintech and enterprise systems. Focused on writing clean, reliable backend code with a deep interest in system design.",
  email: "lehuytuong.work@gmail.com",
  phone: "0372728768",
  location: "Ho Chi Minh",
  bio: `Junior Backend Developer with ~1 year of hands-on experience building production features using Java 17 and Spring Boot 3. Contributed to real systems handling wallet flows, payment integrations, and distributed task processing. Strong interest in system design and writing reliable, maintainable backend code.`,
  resumeUrl: "/resume",
  lastUpdated: "2026-04-20",
  social: {
    github: "https://github.com/LeHuyTuong",
    linkedin: "https://linkedin.com/in/lehuytuong",
    email: "lehuytuong.work@gmail.com"
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
  "AI-Assisted Development": [
    { name: "Reviewing & verifying AI output", tier: "primary" },
    { name: "Scaffolding controller/service/repository", tier: "primary" },
    { name: "Refactoring & optimization", tier: "primary" },
    { name: "Unit & Integration test generation", tier: "primary" },
    { name: "Prompt design for code tasks", tier: "normal" },
    { name: "Playwright-driven UI verification", tier: "normal" }
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
  javaProjects: "20+",
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
  },
  // Shipped products. These carry `image` + `demo` so the card shows a live
  // screenshot and links to the running deployment instead of bullets alone.
  {
    id: 7,
    category: "product",
    categoryLabel: "🎨 Shipped Product",
    title: "WiseTech",
    displayName: "Laptop Recommendation Engine",
    role: "Product Owner & Full-stack",
    period: "2026",
    problem: "Buying a laptop in Vietnam means hundreds of SKUs, specs nobody can read, and reviews that contradict each other — people burn weeks on the decision and still aren't sure they got it right.",
    solution: "A 9-question quiz that scores stated needs against a curated catalogue and returns the top 3 matches with a match score and a plain-language reason, plus price links across 7 Vietnamese retailers.",
    challenge: "Staying vendor-neutral. The product doesn't sell hardware, so rankings can't be driven by margin — which means the scoring function has to be defensible on its own terms.",
    architectureNote: "Next.js App Router on Vercel, with email/password accounts that persist quiz history. Answers map to weighted requirement vectors scored against the laptop catalogue across CPU/GPU benchmarks, 3–5 year durability and budget fit; the top 3 come back with a match score, a budget breakdown, and an AI note on where the picks fall short.",
    whatILearned: "Owning a product end to end — framing the problem, pitching it, shipping it, then reading real feedback. Also where my gaps are: the business and marketing side, not the build.",
    highlights: [
      "Owned the product end to end — idea, problem framing, implementation, and fixing what broke after launch.",
      "Built a 9-question quiz that ranks the laptop catalogue and returns the top 3 matches with a match score and a plain-language reason for each.",
      "Kept recommendations vendor-neutral by aggregating prices across 7 Vietnamese retailers instead of selling hardware.",
      "Shipped a separate PC valuation tool and a new-vs-used comparison that states the tradeoffs explicitly.",
      "Pitched into the Top 20 of FPT University's EXE startup competition; reached #4 on the Unikorn.vn product leaderboard."
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: null,
    demo: "https://wisetechlap.vercel.app/",
    productPage: { url: "https://unikorn.vn/p/wisetech", label: "Unikorn" },
    image: "/projects/wisetech.jpg",
    imageAlt: "WiseTech landing page — a quiz that returns the top 3 matching laptops with match scores",
    gallery: [
      { src: "/projects/wisetech.jpg", alt: "WiseTech landing page", caption: "Landing — the pitch, in one screen" },
      { src: "/projects/wisetech-quiz.jpg", alt: "A quiz question with five weighted options", caption: "Quiz — 9 questions, each answer weighted" },
      { src: "/projects/wisetech-results.jpg", alt: "Top 3 laptop results with match scores and prices", caption: "Results — top 3 with match score, price and budget fit" },
      { src: "/projects/wisetech-estimate.jpg", alt: "PC valuation tool with simple and technical input modes", caption: "PC valuation — simple or technical spec entry" }
    ],
    evidence: {
      image: "/projects/wisetech-unikorn-rank.jpg",
      alt: "Unikorn.vn product leaderboard showing WiseTech ranked #4 with 9 points",
      caption: "Reached #4 on the Unikorn.vn product leaderboard",
      url: "https://unikorn.vn/leaderboard/products"
    },
    featured: true
  },
  {
    id: 8,
    category: "product",
    categoryLabel: "🎨 Shipped Product",
    title: "Atrium",
    displayName: "Digital Industrial History Museum",
    role: "Solo Developer",
    period: "2026",
    problem: "Industrial history usually arrives as disconnected dates, so the causal thread — how Watt's steam engine leads to the Intel 4004 and then to neural networks — never gets drawn.",
    solution: "A museum you walk through as a visitor: four era rooms, 17 curated artifacts you can rotate in 3D, and cross-era threads that connect one invention to what it made possible.",
    challenge: "Making a web page behave like a visit rather than an article — rooms, a route, and a sense of progress, with each exhibit an object you handle instead of a paragraph you skim.",
    architectureNote: "Next.js with Three.js. Each artifact opens a WebGL viewer on a lit pedestal — drag to rotate, scroll to zoom, expand to fullscreen — beside its story, stats and sourced historical photo. Four rooms span 1760–1840, 1870–1914, 1969–2010 and 2011–now; visitors pick a guided ~6-minute route or free roam while a HUD tracks artifacts seen, badges and time in the museum.",
    whatILearned: "Pacing a narrative across a route instead of a page, and building visit mechanics — 3D exhibits, progress, badges, a guestbook — that give a static subject a sense of movement.",
    highlights: [
      "Built an interactive 3D viewer for each artifact in Three.js — drag to rotate, scroll to zoom, expand to fullscreen on a lit pedestal.",
      "Curated 17 artifacts across four era rooms, each credited to inventor, place and year, with a sourced historical photo alongside the model.",
      "Paired every exhibit with its story, hard numbers, and a plain-language \"why it matters\" so the object carries an argument, not just a date.",
      "Linked artifacts across eras with cross-time threads so each invention shows what it enabled downstream.",
      "Offered a guided ~6-minute route or free roam on entry, with visit mechanics: artifacts-seen counter, badges, per-room stats, guestbook, and a build-your-own-tour tool."
    ],
    technologies: ["Next.js", "React", "Three.js", "WebGL", "Vercel"],
    github: null,
    demo: "https://atrium-delta-nine.vercel.app/",
    image: "/projects/atrium.jpg",
    imageAlt: "Atrium landing page — an industrial history museum spanning four eras from steam to silicon",
    gallery: [
      { src: "/projects/atrium.jpg", alt: "Atrium landing page asking how we went from steam to silicon", caption: "Entrance — the framing question" },
      { src: "/projects/atrium-map.jpg", alt: "Museum map showing four industrial era rooms", caption: "Museum map — four eras, pick your room" },
      { src: "/projects/atrium-room.jpg", alt: "Industry 1.0 room showing curated artifacts with attribution", caption: "Industry 1.0 — artifacts credited to inventor, place and year" },
      { src: "/projects/atrium-artifact.jpg", alt: "Clermont steamship artifact with 3D viewer, stats and sourced historical photo", caption: "Artifact — 3D model beside its story, stats and sourced photo" },
      { src: "/projects/atrium-3d.jpg", alt: "Fullscreen WebGL viewer showing the Clermont steamship model on a lit pedestal", caption: "Fullscreen 3D — drag to rotate, scroll to zoom" }
    ],
    featured: true
  },
  {
    id: 9,
    category: "product",
    categoryLabel: "🛍️ E-commerce Frontend",
    title: "Weloris",
    displayName: "Watch Store E-commerce UI",
    role: "Frontend Developer",
    period: "2026",
    problem: "Practicing a full e-commerce storefront beyond a basic product list — categories, filtering, and the pre-checkout flow a real watch retailer needs.",
    solution: "A complete storefront UI: category and brand navigation, wishlist, product comparison, cart, and an editorial section for buying-guide articles.",
    challenge: "Structuring nested category/brand navigation (men's/women's/couple watches × strap type × brand) without the mega-menu becoming unmanageable.",
    architectureNote: "Category mega-menus driven by nested route data, with wishlist/cart/compare state kept client-side across the product catalogue.",
    whatILearned: "Modeling real-world retail navigation (multi-axis category × brand × material filtering) and building the supporting cart/wishlist/comparison UI.",
    highlights: [
      "Built category mega-menus spanning men's, women's, couple and sport watches, each cross-filterable by strap material and brand.",
      "Built a 3-step guided product finder (gender → style → budget) that narrows the catalogue instead of leaving customers to filter manually.",
      "Implemented wishlist, and a side-by-side product comparison page (up to 3 items) that diffs every spec and highlights the ones that differ.",
      "Added an editorial/blog section for buying guides (sizing, water resistance, usage tips)."
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: null,
    demo: "https://weloris.vercel.app/",
    image: "/projects/weloris.jpg",
    imageAlt: "Weloris landing page — a watch store storefront with category navigation and product grid",
    gallery: [
      { src: "/projects/weloris.jpg", alt: "Weloris landing page with hero banner and navigation", caption: "Landing — hero banner and category nav" },
      { src: "/projects/weloris-flashsale.jpg", alt: "Flash sale coupon cards with countdown timer", caption: "Flash sale — coupon cards with a live countdown" },
      { src: "/projects/weloris-finder.jpg", alt: "Guided product finder asking who the watch is for, step 1 of 3", caption: "Guided finder — gender → style → budget, step 1/3" },
      { src: "/projects/weloris-compare-demo.mp4", alt: "Adding three watches to compare, then viewing the side-by-side spec table with differences highlighted", caption: "Compare — adding 3 watches, then the diffed spec table" },
      { src: "/projects/weloris-bestseller.jpg", alt: "Bestseller product grid with discount badges and compare checkboxes", caption: "Bestsellers — pricing, discount badges, compare" }
    ],
    featured: true
  },
  {
    id: 10,
    category: "product",
    categoryLabel: "🛍️ E-commerce Frontend",
    title: "Cellona",
    displayName: "CellphoneS-style Electronics Storefront Clone",
    role: "Frontend Developer",
    period: "2026",
    problem: "Cloning a large-scale Vietnamese electronics retailer's UI (CellphoneS) to practice building a storefront with real retail complexity: multi-category catalogue, membership perks, and trade-in flows.",
    solution: "A multi-category storefront (phones, laptops, tablets, smartwatches, headphones, monitors/PCs) with location-based pricing, a membership signup flow, trade-in and B2B sections, and installment/promo messaging.",
    challenge: "Reproducing the dense information architecture of a real retail homepage — sidebar categories, rotating promo banners, membership/trade-in/B2B panels — while keeping the layout responsive.",
    architectureNote: "Sidebar category navigation driving route-based product listing pages, with a location-aware pricing header and modular promo panels (student deals, trade-in, B2B) composed independently of the main catalogue.",
    whatILearned: "Reading and reproducing a production retailer's information architecture, and structuring a large component tree (category sidebar, promo carousel, membership panels) that stays maintainable.",
    highlights: [
      "Rebuilt a 6-category electronics catalogue (phones, laptops, tablets, smartwatches, headphones, monitors/PC) with sidebar navigation.",
      "Implemented location-aware price display and a rotating weekly promo carousel.",
      "Built a full Smember account system — tiered ranks (Blue/Silver/Gold), vouchers, saved addresses, and a trade-in (thu cũ đổi mới) quote form.",
      "Wired a real 3-step checkout (address → payment → review) and cart, on top of login/register flows matching the original site's UX."
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: null,
    demo: "https://cellphones-clone-mu.vercel.app/",
    image: "/projects/cellphones-clone.jpg",
    imageAlt: "Cellona landing page — an electronics storefront clone of CellphoneS with category sidebar and promo banners",
    gallery: [
      { src: "/projects/cellphones-clone.jpg", alt: "Cellona landing page with category sidebar and promo banners", caption: "Landing — category sidebar and promo carousel" },
      { src: "/projects/cellona-smember-overview.jpg", alt: "Smember account dashboard showing tier status, spend progress and active vouchers", caption: "Smember dashboard — tier status, vouchers, order history" },
      { src: "/projects/cellona-smember-tiers.jpg", alt: "Membership tier ladder showing Blue, Silver and Gold ranks with their perks", caption: "Membership ranks — Blue → Silver → Gold, perks per tier" },
      { src: "/projects/cellona-checkout.jpg", alt: "Three-step checkout review page showing shipping address, payment method and order total", caption: "Checkout — address, COD payment, order review" },
      { src: "/projects/cellona-tradein.jpg", alt: "Trade-in quote request form for devices being upgraded", caption: "Thu cũ đổi mới — trade-in quote request form" }
    ],
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
    title: "Java Backend Developer — Viettel Digital",
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
    title: "Backend Developer — NeoTCH Website Services",
    company: "NeoTCH Website Services",
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