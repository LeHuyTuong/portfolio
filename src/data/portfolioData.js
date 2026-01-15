// ===== LÊ HUY TƯỜNG - PORTFOLIO DATA =====
// Backend Developer Fresher | FPT University

export const personalInfo = {
  name: "Le Huy Tuong",
  title: "Backend Developer",
  tagline: "Fresher Java Backend | Spring Boot & REST API Development",
  subtitle: "Seeking Java Fresher position to grow in scalable backend design, database systems, and real-world software development processes",
  email: "lehuytuong2005@gmail.com",
  phone: "+84 372 728 768",
  location: "Thu Duc, Ho Chi Minh City, Vietnam",
  bio: `Backend-oriented Software Engineering student specializing in Java and Spring Boot. 
  Hands-on experience building RESTful APIs, transactional workflows, and SQL-based systems. 
  Deployed with Docker Compose + Nginx on Linux VPS with SSL.`,
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
    { name: "Servlet/JSP" },
    { name: "Validation" }
  ],
  database: [
    { name: "MySQL", highlight: true },
    { name: "MS SQL Server", highlight: true },
    { name: "PostgreSQL" }
  ],
  devops: [
    { name: "Git", highlight: true },
    { name: "Docker", highlight: true },
    { name: "Docker Compose" },
    { name: "Nginx" },
    { name: "Linux VPS" }
  ],
  testing: [
    { name: "JUnit 5", highlight: true },
    { name: "Mockito", highlight: true },
    { name: "Postman" },
    { name: "Swagger" }
  ],
  others: [
    { name: "Jira", highlight: true },
    { name: "Payment Integration" },
    { name: "Rate Limiting" },
    { name: "Excel/PDF Export" },
    { name: "Cron Jobs" },
    { name: "Exception Handling" }
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
    period: "Sep 2025 - Dec 2025",
    problem: "Need a transparent carbon credit marketplace for electric vehicle owners",
    solution: "Spring Boot system with wallet transactions, marketplace module, and payment integration",
    challenge: "Coordinating tasks with team using Jira and managing Git workflow across multiple branches",
    highlights: [
      "Coordinated tasks using Jira and managed Git workflow (main/test/demo), resolved merge conflicts",
      "Collaborated with frontend to integrate REST APIs and support data flow for UI",
      "Built wallet transaction flows (deposit/withdraw/payout) for 2 user types with validation",
      "Developed marketplace module: list credits, orders, profit-sharing",
      "Implemented KYC user management (CRUD, status handling) for verification flow",
      "Scheduled daily price recalculation using cron job + SQL based on usage data",
      "Integrated PDF statements & Excel exports with rate limiting for critical endpoints",
      "Containerized backend + frontend + DB + Nginx using Docker Compose, deployed on Linux VPS with SSL"
    ],
    technologies: ["Java 17", "Spring Boot", "JPA/Hibernate", "MySQL", "Docker", "Nginx", "Jira", "Git", "PayPal", "Stripe"],
    github: null,
    demo: "https://carbonx.io.vn/home",
    featured: true
  },
  {
    id: 2,
    category: "star",
    categoryLabel: "⭐ Solo Project",
    title: "Card Issuing System",
    displayName: "Banking Logic & Unit Testing Lab",
    role: "Solo Developer",
    period: "Dec 2025 - Jan 2026",
    problem: "Practice building core backend logic for banking features with proper testing",
    solution: "Spring Boot system focusing on card management, ledger, and comprehensive unit testing",
    challenge: "Applying JUnit 5 and Mockito to cover various business scenarios in Service Layer",
    highlights: [
      "Built core backend logic for card management and ledger with data accuracy focus",
      "Applied JUnit 5 and Mockito to cover Service Layer with various business scenarios",
      "Implemented centralized exception handling for transaction traceability",
      "Designed strict backend system with focus on error prevention",
      "Gained understanding of unit testing importance in professional development"
    ],
    technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "JUnit 5", "Mockito"],
    github: null,
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
    github: null,
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
    github: null,
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
