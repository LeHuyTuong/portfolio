// ===== LÊ HUY TƯỜNG - PORTFOLIO DATA =====
// Backend Developer Fresher | FPT University

export const personalInfo = {
  name: "Le Huy Tuong",
  title: "Java Backend Developer",
  tagline: "Ready to Learn & Grow",
  subtitle: "Seeking Java Fresher position to contribute to real projects, learn from experienced engineers, and grow in backend development",
  email: "lehuytuong2005@gmail.com",
  phone: "+84 372 728 768",
  location: "Thu Duc, Ho Chi Minh City, Vietnam",
  bio: `I focus on understanding how things work. I enjoy breaking down problems, writing clean code, and learning from mistakes. Every project teaches me something new about building reliable systems.`,
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
  "⚙️ Backend": [
    { name: "Java 17", highlight: true },
    { name: "Spring Boot", highlight: true },
    { name: "REST API Development" },
    { name: "Spring Data JPA, Hibernate" },
    { name: "Spring Security basics" },
    { name: "Servlet/JSP" }
  ],
  "🗄️ Database": [
    { name: "MySQL", highlight: true },
    { name: "MS SQL Server", highlight: true },
    { name: "Basic query optimization" },
    { name: "Understanding indexes" }
  ],
  "🧪 Tools & Practices": [
    { name: "JUnit 5, Mockito", highlight: true },
    { name: "Git (branching, merging)", highlight: true },
    { name: "Postman, Swagger" },
    { name: "Jira for team tasks" }
  ],
  "🚀 Learning & Exploring": [
    { name: "Docker & deployment" },
    { name: "Payment integration (VNPay, PayPal, Stripe)" },
    { name: "Redis caching" },
    { name: "Event-driven basics" },
    { name: "Microservices concepts" }
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
    whatILearned: "Team collaboration with Git and Jira, payment integration with PayPal and Stripe, deploying to production with Docker, preventing duplicate transactions in wallet system",
    highlights: [
      "Built wallet transactions (deposit/withdraw/payout) for 2 user types",
      "Developed marketplace for buying/selling credits with profit sharing",
      "Learned Git workflow with 3 teammates - handled merge conflicts",
      "Integrated payment APIs following documentation (PayPal, Stripe)",
      "Generated PDF reports and Excel exports with rate limiting",
      "Learned deployment workflow: packaged app with Docker and deployed on VPS with SSL"
    ],
    technologies: ["Java 17", "Spring Boot", "MySQL", "Docker", "PayPal", "Stripe", "Redis", "Jira", "Git"],
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
      "Built search for train trips with filters",
      "Implemented booking flow: seat holds for 15 minutes, then auto-releases",
      "Integrated VNPay payment - learned about callbacks and verification",
      "Created 36,000 test records - pagination was way faster than loading all!"
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
    whatILearned: "How caching reduces database queries by 80%, why checking Redis first is faster, understanding CORS and cross-origin requests, generating QR codes for links",
    highlights: [
      "Converted long URLs to short codes (like bit.ly)",
      "Learned Redis caching - saw database queries drop by 80%!",
      "Generated QR codes for short links",
      "Learned a lot from debugging CORS issues for 2 days"
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
    title: "Backend Developer",
    company: "FPT Software",
    companyUrl: "https://fptsoftware.com",
    description: "Contributing to a microservices system for a large coffee shop chain while learning from senior developers.",
    responsibilities: [
      "How microservices communicate with each other (Order, Payment, Notification services)",
      "Event-driven patterns and why they're useful",
      "Professional code review process and coding standards",
      "Payment integration and security practices",
      "Working in a larger development team"
    ],
    sectionLabel: "What I'm Learning:",
    technologies: ["Java", "Spring Boot", "Microservices", "Kafka/RabbitMQ", "SQL Server", "Docker"]
  },
  {
    id: 2,
    date: "Oct 2025 - Present",
    title: "Backend Developer (Remote)",
    company: "TCH Company",
    companyUrl: "https://dichvuwebsitetch.com/",
    description: "Built REST APIs for business websites while learning professional workflow.",
    responsibilities: [
      "Designing APIs that frontend developers can easily use",
      "Database schema design and relationships",
      "Collaborating with frontend team through daily communication",
      "Writing API documentation with Swagger",
      "Testing APIs thoroughly before deployment"
    ],
    sectionLabel: "What I Learned:",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API", "Git"]
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
    period: "2021 - 2025",
    description: "Focused on backend development and enterprise systems",
    achievements: [
      "Specialized in Java and Spring Boot ecosystem",
      "Participated in team projects with real-world scenarios",
      "Learned software engineering principles and best practices"
    ]
  }
];