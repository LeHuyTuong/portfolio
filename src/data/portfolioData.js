// ===== LÊ HUY TƯỜNG - PORTFOLIO DATA =====
// Junior Java Backend Developer | FPT University

export const personalInfo = {
  name: "Le Huy Tuong",
  title: "Junior Java Backend Developer",
  tagline: "Building Scalable & High-Performance Backend Systems",
  subtitle: "Junior Java Backend Developer with hands-on production experience in building scalable APIs and reliable backend systems",
  email: "lehuytuong2005@gmail.com",
  phone: "0372728768",
  location: "Ho Chi Minh City, Vietnam",
  bio: `Junior Java Backend Developer with hands-on production experience in Java 17 + Spring Boot 3. Built and deployed a live Carbon Credit Marketplace handling wallet transaction flows, marketplace modules, and payment gateway integration (PayPal · Stripe). Passionate about applying backend engineering fundamentals to build high-scale, reliable systems.`,
  resumeUrl: "/resume",
  social: {
    github: "https://github.com/LeHuyTuong",
    linkedin: "https://linkedin.com/in/lehuytuong",
    email: "lehuytuong2005@gmail.com"
  }
};

export const bankingMindset = {
  title: "Philosophy",
  subtitle: "How I Approach Development",
  description: `"I focus on understanding how things work. I enjoy breaking down problems, writing clean code, and learning from mistakes. Every project teaches me something new about building reliable systems."`,
  principles: [
    {
      icon: "🧠",
      title: "Logical Thinking",
      description: "Break problems into smaller pieces, find patterns, write code I can explain"
    },
    {
      icon: "✅",
      title: "Get Things Done",
      description: "Learn by building - working features teach more than just reading theory"
    },
    {
      icon: "🔧",
      title: "Problem Solver",
      description: "Debug step by step, understand why things fail, improve next time"
    }
  ]
};

export const skills = {
  "⚙️ Languages": [
    { name: "Java 17/21 (Core, Stream API, Multithreading)", highlight: true },
    { name: "C# (.NET)", highlight: true },
    { name: "SQL (Procedures, Indexing)", highlight: true }
  ],
  "☕ Java Ecosystem": [
    { name: "Spring Boot 3.x", highlight: true },
    { name: "Spring Security" },
    { name: "Spring Data JPA" },
    { name: "Hibernate" },
    { name: "JUnit 5 & Mockito", highlight: true }
  ],
  "🗄️ Databases & Caching": [
    { name: "MySQL", highlight: true },
    { name: "SQL Server" },
    { name: "Redis (Caching, Distributed Locking)", highlight: true },
    { name: "PostgreSQL" }
  ],
  "🏗️ Architecture & Design": [
    { name: "Microservices", highlight: true },
    { name: "Clean Architecture" },
    { name: "CQRS (MediatR)", highlight: true },
    { name: "SOLID principles" },
    { name: "Design Patterns (Singleton)" }
  ],
  "🛠️ Communication & Tools": [
    { name: "gRPC", highlight: true },
    { name: "RESTful API" },
    { name: "Docker", highlight: true },
    { name: "Nginx" },
    { name: "Git & GitHub Actions" },
    { name: "Maven" },
    { name: "Postman" }
  ]
};

export const stats = {
  javaProjects: "8",
  phpProjects: "2",
  enterpriseProjects: "Always",
  totalProjects: 8,
  labels: {
    java: "Technical Projects",
    companies: "Companies",
    total: "Improving"
  }
};

export const projects = [
  {
    id: 1,
    category: "star",
    categoryLabel: "⭐ Team Project",
    title: "CarbonX",
    displayName: "Carbon Credit Marketplace",
    role: "Backend Developer",
    period: "2025",
    problem: "Developing a robust marketplace for carbon credits with secure transaction flows",
    solution: "Built a production-grade wallet system and marketplace features with automated deployment",
    challenge: "Managing complex financial states and concurrent transactions in a distributed environment",
    whatILearned: "Experienced in enterprise Git workflows, payment gateway integration, Docker orchestration, and designing idempotent transaction mechanisms",
    highlights: [
      "Architecture: RESTful API design, MVC, RBAC, JWT, Modular Monolith, Clean Architecture, SOLID principles.",
      "Developed Order Lifecycle management systems adopting Clean Architecture principles",
      "Implemented Idempotency Key mechanisms to prevent redundant payment processing",
      "Managed complex data transactions with DB-level Locking and concurrency handling",
      "Built Global Exception Middleware for structured system observability and error handling",
      "Integrated PayPal & Stripe webhook handlers with reliable transaction state updates",
      "Deployed the infrastructure using Docker Compose on a Linux VPS environment"
    ],
    technologies: ["Java 17", "Spring Boot", "MySQL", "Docker", "Redis", "Jira", "Git"],
    github: null,
    demo: "https://carbonx.io.vn/home",
    featured: true
  },
  {
    id: 2,
    category: "star",
    categoryLabel: "⭐ Solo Project",
    title: "Card Issuing System",
    displayName: "Transaction Processing & Data Accuracy",
    role: "Solo Developer",
    period: "2025",
    problem: "Ensuring near-zero financial discrepancy in high-volume transaction systems",
    solution: "Architected a card management engine with 100% test coverage for core banking logic",
    challenge: "Validating complex business rules and preventing edge-case failures",
    whatILearned: "Expertise in JUnit 5/Mockito, defensive programming, and building high-reliability financial microservices",
    highlights: [
      "Built card management and transaction ledger features",
      "Wrote unit tests with JUnit 5 and Mockito - caught 12+ edge cases",
      "Implemented proper exception handling for better debugging",
      "Learned to test business logic in isolation using mocking",
      "Understanding: Good tests are a safety net for code changes"
    ],
    technologies: ["Java 17", "Spring Boot", "JUnit 5", "Mockito", "MySQL"],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 3,
    category: "business",
    categoryLabel: "🚂 Team Project",
    title: "Train Ticket Office",
    displayName: "Booking System",
    role: "Backend Developer",
    period: "2025",
    problem: "Managing concurrent seat reservations and real-time availability in a high-traffic booking system",
    solution: "Developed a distributed booking engine with seat-hold logic and secure VNPay integration",
    challenge: "Preventing double-booking and race conditions during peak hours",
    whatILearned: "Implementing distributed locking, managing complex booking life-cycles, and optimizing database pagination for high-volume datasets",
    highlights: [
      "Built search for train trips with complex filtering logic",
      "Implemented booking flow: seat holds for 15 minutes with auto-release system",
      "Integrated VNPay payment gateway including secure callback verification",
      "Optimized performance for 36,000+ records using database pagination"
    ],
    technologies: ["Java 17", "Spring Boot", "Thymeleaf", "MS SQL Server", "VNPay"],
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 4,
    category: "business",
    categoryLabel: "🛒 Solo Project",
    title: "E-Commerce Platform",
    displayName: "Full-Stack Learning",
    role: "Solo Developer",
    period: "2025",
    problem: "Understanding complete flow from authentication to payment",
    solution: "Built e-commerce with JWT auth, shopping cart, and dual payment options",
    challenge: "Found critical bug - wallet deducted twice with concurrent payments!",
    whatILearned: "JWT authentication and token management, shopping cart with Redis, payment integration with Stripe, fixing race conditions with database locking, deploying to VPS with Docker",
    highlights: [
      "Implemented JWT authentication with access and refresh tokens",
      "Built shopping cart stored in Redis for fast access",
      "Integrated Stripe for card payments + wallet system",
      "Discovered and fixed double-payment bug by learning about database locking",
      "Deployed on Linux VPS with SSL - very rewarding!"
    ],
    technologies: ["Java 17", "Spring Boot", "React 18", "MySQL", "JWT", "Stripe", "Docker"],
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 5,
    category: "star",
    categoryLabel: "⭐ Learning Project",
    title: "URL Shortener",
    displayName: "High-Performance URL Redirection",
    role: "Solo Developer",
    period: "2025",
    problem: "Scaling link redirection services to handle high traffic with minimal latency",
    solution: "Architected a Redis-backed URL redirection engine reducing DB pressure by 80%",
    challenge: "Generating collision-free short codes while maintaining peak performance",
    whatILearned: "Advanced Redis caching strategies, database indexing for prefix searches, and cross-origin security protocols",
    highlights: [
      "Designed a high-throughput URL shortening service with optimized short-code generation",
      "Implemented Redis caching reducing database load by 80%",
      "Engineered database indexing strategies for efficient redirection lookups",
      "Resolved complex Cross-Origin Resource Sharing (CORS) issues for image generation"
    ],
    technologies: ["Java 17", "Spring Boot", "Redis", "MySQL", "React", "Docker"],
    github: null,
    demo: "https://url-shortener-tuong.vercel.app/",
    featured: true
  },
  {
    id: 6,
    category: "star",
    categoryLabel: "⭐ System Design Practice",
    title: "YouTube Downloader",
    displayName: "Learning Async Processing",
    role: "Solo Developer",
    period: "2025",
    problem: "Processing high-latency video tasks without blocking the main application thread",
    solution: "Implemented an asynchronous worker pattern with Redis queues for non-blocking video downloading",
    challenge: "Handling external API rate limits and ensuring fallback mechanisms for failed jobs",
    whatILearned: "Engineering producer-consumer architectures, implementing fault-tolerant retry logic, and optimizing distributed background workers",
    highlights: [
      "Learned producer-consumer pattern with Redis queue",
      "Video downloads in background - users don't wait",
      "Implemented retry logic for failed downloads",
      "Understanding: Long tasks need async processing"
    ],
    technologies: ["Java 17", "Spring Boot", "Redis", "MySQL", "Docker", "yt-dlp"],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 7,
    category: "business",
    categoryLabel: "🎓 Educational",
    title: "Course Sharing System",
    displayName: "MVC Pattern Practice",
    role: "Solo Developer",
    period: "2025",
    problem: "Developing a robust Content Management System (CMS) using modular architecture",
    solution: "Built a course sharing platform utilizing Spring MVC and Thymeleaf for SEO-friendly rendering",
    challenge: "Optimizing complex relational data models and ensuring efficient entity life-cycle management",
    whatILearned: "Mastery of the Controller-Service-Repository pattern, server-side template engine logic, and sophisticated JPA entity mapping",
    highlights: [
      "Practiced Spring MVC architecture",
      "Learned Thymeleaf for server-side templates",
      "Managed course relationships with Spring Data JPA",
      "Understanding: Clean separation of concerns in MVC"
    ],
    technologies: ["Java 17", "Spring Boot", "Spring MVC", "Thymeleaf", "MySQL"],
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 8,
    category: "business",
    categoryLabel: "📰 Content Platform",
    title: "News Platform",
    displayName: "Learning PHP/Laravel",
    role: "Solo Developer",
    period: "2025",
    problem: "Requirement for a multi-platform content solution using diverse backend ecosystems",
    solution: "Developed a full-featured news portal with Laravel to compare ecosystem performance and productivity",
    challenge: "Adapting backend logic patterns across different language paradigms (PHP vs Java)",
    whatILearned: "Comparative analysis of Eloquent vs Hibernate, Blade templating engines, and cross-framework architecture design",
    highlights: [
      "Explored Laravel framework to compare with Spring Boot",
      "Learned Eloquent ORM and Blade templates",
      "Understanding: Different frameworks, similar problems",
      "Good to know multiple approaches to backend development"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Blade", "TailwindCSS"],
    github: null,
    demo: null,
    featured: false
  }
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "mindset", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const experiences = [
  {
    id: 1,
    date: "Dec 2025 - Present",
    title: "Backend Intern",
    company: "FPT Software Academy (FSA)",
    companyUrl: "https://fptsoftware.com",
    description: "Contributing to a high-scale franchise management platform built on C# .NET microservices.",
    responsibilities: [
      "Boosted system performance by transitioning internal service communication (Order to Product services) from REST to gRPC, significantly reducing serialization overhead and latency.",
      "Architected backend components using CQRS (MediatR) and Clean Architecture to segregate Read/Write operations, improving system scalability.",
      "Resolved complex Race Conditions and double-payment issues in high-concurrency Webhook handlers by implementing Distributed Locking (Redlock) via Redis."
    ],
    sectionLabel: "Key Contributions:",
    technologies: ["C# .NET", "RESTful API", "gRPC", "Redis", "SQL Server", "CQRS (MediatR)", "Clean Architecture"]
  },
  {
    id: 2,
    date: "Oct 2025 - Present",
    title: "Backend Developer (Freelancer)",
    company: "TCH Company",
    companyUrl: "https://dichvuwebsitetch.com/",
    description: "Built REST APIs for business websites while learning professional workflow.",
    responsibilities: [
      "Optimized backend API performance for a cost estimation module, focusing on response latency and data access efficiency",
      "Developed and executed benchmark workflows to measure latency and database query counts across different optimization stages",
      "Implemented high-performance response caching with invalidation logic to ensure data correctness and speed",
      "Refined payload structure and data retrieval paths, reducing redundant queries and overall backend load",
      "Achieved measurable improvements: key API latency reduced from ~245ms to ~93ms, DB queries reduced from 3 to 1, and render time reduced from ~706ms to ~538ms",
      "Developed an End-to-end Cost Estimator module, automating quotations and lead tracking",
      "Produced standard API Documentation (Swagger) to align frontend and backend development",
      "Resolved client bug-fix tickets and collaborated directly with clients and Business Analysts to finalize frontend requirements",
      "Implemented SEO metadata optimization (Meta Title & Description), achieving an overall SEO health score of 90/100 on Google Lighthouse"
    ],
    sectionLabel: "Key Achievements:",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API", "Swagger", "Git"]
  },
  {
    id: 3,
    date: "Jan 2023 - Present",
    title: "Self-Learning Journey",
    company: "Personal Projects",
    companyUrl: null,
    description: "Developing sophisticated backend systems through independent technical research and hands-on projects.",
    responsibilities: [
      "Developing complete systems from scratch to understand enterprise-grade architectures",
      "Mastering the Spring Boot ecosystem via complex feature implementations",
      "Exploring and applying system design concepts through practical projects",
      "Understanding deployment (Docker, Linux VPS)",
      "Practicing both solo and team project workflows"
    ],
    sectionLabel: "What I Focused On:",
    technologies: ["Java", "Spring Boot", "React", "Docker", "MySQL", "Redis"]
  }
];

export const education = [
  {
    id: 1,
    school: "FPT University",
    degree: "Bachelor of Software Engineering",
    period: "2023 - Present",
    description: "Focused on backend development and enterprise systems",
    achievements: [
      "Specialized in Java and Spring Boot ecosystem with high academic performance",
      "Led and participated in team projects simulating real-world enterprise scenarios",
      "Applied software engineering principles and best practices in all development cycles"
    ],
    toeic: {
      score: "705",
      label: "English Proficiency"
    }
  }
];