// ===== LÊ HUY TƯỜNG - PORTFOLIO DATA =====
// Backend Developer Fresher | FPT University

export const personalInfo = {
  name: "Le Huy Tuong",
  title: "Java Fresher",
  tagline: "Ready to Learn & Grow",
  subtitle: "Seeking Java Fresher position to contribute to real projects, learn from experienced engineers, and grow in backend development",
  email: "lehuytuong2005@gmail.com",
  phone: "0372728768",
  location: "Ho Chi Minh City, Vietnam",
  bio: `Java Backend Engineering fresher with hands-on production experience in Java 17 + Spring Boot 3. Built and deployed a live Carbon Credit Marketplace handling wallet transaction flows, marketplace modules, and payment gateway integration (PayPal · Stripe). Seeking to apply backend engineering fundamentals as a Java Fresher in a high-scale environment.`,
  resumeUrl: "/resume.pdf",
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
    java: "Learning Projects",
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
    period: "Sep 2025 - Dec 2025",
    problem: "Building a marketplace for carbon credits while learning team collaboration",
    solution: "Built wallet system, marketplace features, and learned deployment to production",
    challenge: "Working with 3 teammates using Git workflow and coordinating tasks",
    whatILearned: "Team collaboration with Git and Jira, payment webhook integration, deploying to production with Docker Compose, designing idempotency and distributed locking mechanisms",
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
    displayName: "Banking Logic & Testing Practice",
    role: "Solo Developer",
    period: "Dec 2025 - Jan 2026",
    problem: "Learning why testing matters in backend development",
    solution: "Built banking features with comprehensive unit tests",
    challenge: "Writing tests that actually catch bugs, not just coverage",
    whatILearned: "Why unit testing matters in financial systems, how to write meaningful tests, proper error handling and validation, importance of defensive programming",
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
    period: "June 2025 - Sep 2025",
    problem: "Learning about booking workflows and payment integration",
    solution: "Built train ticket booking with seat reservation and VNPay payment",
    challenge: "Preventing two users from booking the same seat at the same time",
    whatILearned: "Managing booking states with automatic timeout, integrating payment gateway (VNPay), why pagination is important with large datasets, handling concurrent seat selection",
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
    period: "Nov 2025 - Dec 2025",
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
    displayName: "Learning About Caching",
    role: "Solo Developer",
    period: "Feb 2026",
    problem: "Understanding how caching improves performance",
    solution: "Built URL shortener with Redis caching to reduce database load",
    challenge: "Spent 2 days debugging CORS errors with QR code images",
    whatILearned: "Optimizing short-code generation, database indexing strategies, how caching reduces database queries by 80%, understanding CORS, generating QR codes for links",
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
    period: "Feb 2026",
    problem: "Video downloads take too long for synchronous requests",
    solution: "Used queue-based async processing so users get instant response",
    challenge: "Managing rate limits from YouTube API and handling failures",
    whatILearned: "Why synchronous processing fails at scale, producer-consumer pattern for background jobs, retry logic for handling failures, working with external APIs",
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
    problem: "Learning Spring MVC architecture pattern",
    solution: "Built course platform with Thymeleaf templates for server-side rendering",
    challenge: "Managing relationships between courses, sections, and lessons",
    whatILearned: "Spring MVC pattern (Controller → Service → Repository), server-side rendering with Thymeleaf, managing complex entity relationships with JPA",
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
    problem: "Comparing different frameworks (Laravel vs Spring Boot)",
    solution: "Built news CMS with Laravel to see how other frameworks work",
    challenge: "Learning new language (PHP) and different framework patterns",
    whatILearned: "How Laravel compares to Spring Boot, different framework philosophies, Eloquent ORM vs Hibernate patterns, Blade templating engine",
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
      "Engineered an End-to-end Cost Estimator module, automating quotations and lead tracking",
      "Produced standard API Documentation (Swagger) to align frontend and backend development",
      "Taking ownership of client bug-fix tickets and leveraging AI tools for root-cause analysis",
      "Collaborating with frontend team and bussiness analystic team through daily communication",
      "Writing API documentation with Swagger",
      "Testing functionality and taking ownership of client bug-fix tickets",
      "Leveraging AI tools to analyze and accelerate bug fixing",
      "Developed the Cost Estimate feature end-to-end (both Backend and Frontend)"
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
    description: "Teaching myself backend development through hands-on projects.",
    responsibilities: [
      "Building complete systems from scratch to understand the full picture",
      "Learning Spring Boot ecosystem step by step",
      "Exploring system design concepts through practical projects",
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
      "Specialized in Java and Spring Boot ecosystem",
      "Participated in team projects with real-world scenarios",
      "Learned software engineering principles and best practices"
    ],
    toeic: {
      score: "705",
      label: "English Proficiency"
    }
  }
];