// ===== LÊ HUY TƯỜNG - PORTFOLIO DATA =====
// Backend Developer Fresher | FPT University

export const personalInfo = {
  name: "Le Huy Tuong",
  title: "Backend Developer",
  tagline: "Fresher Java Backend | Spring Boot & REST API Development",
  subtitle: "Seeking Backend Fresher role to grow expertise in REST API design, database optimization, and secure backend architecture",
  email: "lehuytuong2005@gmail.com",
  phone: "+84 372 728 768",
  location: "Thu Duc, Ho Chi Minh City, Vietnam",
  bio: `Software Engineering student at FPT University specializing in backend development 
  with the Java & Spring Boot ecosystem. Built REST APIs with Spring Boot for wallet transactions 
  and booking flows; implemented validation, exception handling, and basic rate limiting; 
  deployed with Docker Compose + Nginx on Linux VPS (SSL).`,
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/LeHuyTuong",
    linkedin: "https://linkedin.com/in/lehuytuong",
    email: "lehuytuong2005@gmail.com"
  }
};

export const bankingMindset = {
  title: "Backend Mindset",
  subtitle: "How I Work",
  description: `I focus on building systems that work. Clean code, proper error handling, 
  and logical architecture are my priorities. I break down complex problems into smaller pieces, 
  test my assumptions, and deliver reliable solutions.`,
  principles: [
    {
      icon: "🧠",
      title: "Logical Thinking",
      description: "Break problems into steps, find patterns, write clean solutions"
    },
    {
      icon: "✅",
      title: "Get Things Done",
      description: "Focus on delivering working features, not perfect theories"
    },
    {
      icon: "🔧",
      title: "Problem Solver",
      description: "Debug issues systematically, learn from mistakes, improve continuously"
    }
  ]
};

// Skills based on CV
export const skills = {
  backend: [
    { name: "Java 17", highlight: true },
    { name: "Spring Boot", highlight: true },
    { name: "REST API" },
    { name: "JPA/Hibernate" },
    { name: "Spring Security" },
    { name: "Servlet/JSP" },
    { name: "Validation" }
  ],
  database: [
    { name: "MySQL", highlight: true },
    { name: "MS SQL Server", highlight: true },
    { name: "JPA/Hibernate" }
  ],
  devops: [
    { name: "Docker", highlight: true },
    { name: "Docker Compose" },
    { name: "Nginx" },
    { name: "Linux VPS" },
    { name: "Git" },
    { name: "SSL/HTTPS" }
  ],
  others: [
    { name: "Payment Integration", highlight: true },
    { name: "VNPay/PayPal/Stripe" },
    { name: "Rate Limiting" },
    { name: "Excel/PDF Export" },
    { name: "Postman" },
    { name: "Swagger" },
    { name: "Cron Jobs" }
  ]
};

export const projects = [
  {
    id: 1,
    category: "star",
    categoryLabel: "⭐ Team Project",
    title: "CarbonX",
    displayName: "Carbon Credit Marketplace For EV Owners",
    role: "Backend Developer",
    period: "Sep 2025 - Nov 2025",
    problem: "Need a transparent carbon credit marketplace for electric vehicle owners",
    solution: "Spring Boot system with wallet transactions, marketplace module, and payment integration",
    challenge: "Building wallet transaction flows (deposit/withdraw/payout) for 2 user types",
    highlights: [
      "Built wallet transaction flows (deposit/withdraw/payout) for 2 user types",
      "Developed marketplace module: list credits, orders, profit-sharing",
      "Implemented scheduled daily price recalculation using cron job + SQL",
      "Integrated reporting APIs: PDF statements & Excel exports",
      "Added basic rate limiting to protect critical endpoints",
      "Containerized with Docker Compose, deployed on Linux VPS with SSL"
    ],
    technologies: ["Java 17", "Spring Boot", "JPA/Hibernate", "MySQL", "Docker", "Nginx", "PayPal", "Stripe"],
    github: "https://github.com/LeHuyTuong/Carbon-Credit-Marketplace",
    demo: "https://carbonx.io.vn/home",
    featured: true
  },
  {
    id: 2,
    category: "star",
    categoryLabel: "⭐ Solo Project",
    title: "Card Issuing System",
    displayName: "Debit Card Issuing & Ledger Core",
    role: "Solo Developer",
    period: "Dec 2025 - Jan 2026",
    problem: "Build a production-grade backend simulation of card issuing with banking standards",
    solution: "Modular Monolith with DDD-inspired architecture, immutable ledger, state machines",
    challenge: "Implementing idempotency keys to prevent duplicate card issuance on retries",
    highlights: [
      "Built immutable ledger: append-only records, balance derived from SQL aggregation",
      "Implemented card lifecycle state machine (CREATED → ACTIVE → BLOCKED)",
      "Added idempotency key mechanism for safe retries",
      "Async audit logging with @Async and REQUIRES_NEW propagation",
      "Modular Monolith structure: customer/, card/, ledger/, transaction/"
    ],
    technologies: ["Java 17", "Spring Boot 3.2", "JPA/Hibernate", "MySQL", "JUnit 5", "Mockito"],
    github: "https://github.com/LeHuyTuong/Card-Issuing-System",
    demo: null,
    featured: true
  },
  {
    id: 3,
    category: "business",
    categoryLabel: "🚂 Team Project",
    title: "Train Ticket Office",
    displayName: "Online Train Ticket Booking System",
    role: "Backend Developer",
    period: "June 2025 - Sep 2025",
    problem: "Need a train booking system with complex seat, coach, and route management",
    solution: "Spring Boot system with Thymeleaf handling booking and ticket status",
    challenge: "Generated 36,000 seat records to test pagination vs full-load behavior",
    highlights: [
      "Built trip search for one-way/round-trip with filters",
      "Developed full booking workflow: seat status lifecycle (Available → Held → Paid → Refund)",
      "Integrated VNPay sandbox to simulate payment",
      "Compared response time and memory usage during manual test"
    ],
    technologies: ["Java 17", "Spring Boot", "Thymeleaf", "MS SQL Server", "VNPay"],
    github: "https://github.com/LeHuyTuong/Train-Ticket-Office",
    demo: null,
    featured: false
  },
  {
    id: 4,
    category: "business",
    categoryLabel: "🛒 Solo Project",
    title: "E-Commerce Platform",
    displayName: "Full-Stack E-Commerce Marketplace",
    role: "Solo Developer",
    period: "Nov 2025 - Dec 2025",
    problem: "Build a complete e-commerce platform with user authentication and payment integration",
    solution: "Spring Boot backend + React frontend with JWT authentication and Stripe integration",
    challenge: "Implementing wallet payments with pessimistic locking for transaction safety",
    highlights: [
      "JWT authentication with role-based access (Admin/User)",
      "Product catalog with search, filter, and soft delete",
      "Shopping cart with real-time updates",
      "Integrated Stripe + Wallet payment options",
      "Deployed with Docker on Linux VPS"
    ],
    technologies: ["Java 17", "Spring Boot", "React 18", "MySQL", "Spring Security", "JWT", "Stripe"],
    github: "https://github.com/LeHuyTuong/-E-Commerce",
    demo: null,
    featured: false
  }
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "mindset", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];
