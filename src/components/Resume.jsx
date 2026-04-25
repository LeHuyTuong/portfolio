import { Link } from 'react-router-dom';
import './Resume.css';
import { personalInfo, education, skills, projects, experiences } from '../data/portfolioData';

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="resume-page">
            <div className="resume-controls no-print">
                <Link to="/" className="btn-back">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Portfolio
                </Link>
                <button onClick={handlePrint} className="btn-download">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download PDF
                </button>
            </div>

            <div className="resume-container">
                <header className="resume-header">
                    <h1>{personalInfo.name.toUpperCase()}</h1>
                    <p className="resume-title">Junior Backend Developer | Java & Spring Boot</p>
                    <div className="resume-contact">
                        <span>{personalInfo.phone}</span>
                        <span className="divider">|</span>
                        <span><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>
                        <span className="divider">|</span>
                        <span><a href="https://github.com/LeHuyTuong" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong</a></span>
                        <span className="divider">|</span>
                        <span><a href="https://linkedin.com/in/lehuytuong" target="_blank" rel="noopener noreferrer">linkedin.com/in/lehuytuong</a></span>
                    </div>
                </header>

                <section className="resume-section">
                    <h2>RESUME SUMMARY</h2>
                    <div className="section-line"></div>
                    <p className="summary-text">Junior Backend Developer with ~1 year of hands-on experience delivering production features in fintech and enterprise environments using Java 17 and Spring Boot 3. Contributed to real systems involving wallet transaction flows, payment gateway integrations, and distributed task processing. Eager to grow within a team, deepen system design knowledge, and write clean, reliable backend code that solves real business problems.</p>
                </section>

                <section className="resume-section">
                    <h2>EDUCATION</h2>
                    <div className="section-line"></div>
                    {education.map(edu => (
                        <div key={edu.id} className="education-item">
                            <div className="item-header">
                                <strong>{edu.school}</strong>
                                <span className="date-range">Oct 2023 – 2027 (Expected)</span>
                            </div>
                            <div className="item-sub">
                                <em>{edu.degree} | GPA: 3.2</em>
                            </div>
                            <p className="coursework">
                                <strong>Relevant Coursework:</strong> Data Structures & Algorithms · Database Systems · Object-Oriented Design · Software Architecture · Computer Networking
                            </p>
                        </div>
                    ))}
                </section>

                <section className="resume-section">
                    <h2>TECHNICAL SKILLS</h2>
                    <div className="section-line"></div>
                    <div className="skills-content">
                        <ul className="resume-bullets" style={{ marginTop: '0', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '2px' }}><strong>Languages:</strong> Java, SQL.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Backend & Frameworks:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate, JUnit 5, gRPC.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Databases & Caching:</strong> PostgreSQL, Redis (Caching, Distributed Locking), MySQL, SQL Server.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Architecture & Engineering:</strong> Microservices, Clean Architecture, CQRS, Distributed Locking, SOLID, Design Patterns.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Frontend (Supporting):</strong> React 19, TailwindCSS, Framer Motion, React Router DOM.</li>
                            <li style={{ marginBottom: '2px' }}><strong>DevOps & Tools:</strong> Docker, Nginx, Git, Maven, GitHub Actions, Postman, Swagger.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Testing:</strong> JUnit 5, Mockito, Playwright (E2E), Storybook (Component/a11y), Vitest.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Domain Exposure:</strong> Payment Integration, Wallet & Transaction Flows, Webhook Handling, KYC & Compliance.</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>WORK EXPERIENCE</h2>
                    <div className="section-line"></div>

                    <div className="experience-item">
                        <div className="item-header">
                            <strong>Viettel Digital</strong>
                            <span className="date-range">Apr 2026 – Present</span>
                        </div>
                        <div className="item-sub">
                            <em>Software Engineer Trainee - Viettel Digital Talent | Part-time</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Participating in intensive training modules covering enterprise architecture, system design, and production-oriented engineering.</li>
                            <li>Collaborating in team-based delivery environments aligned with large-scale enterprise application standards.</li>
                            <li>Engaging with industry mentors to refine backend engineering discipline and software quality assurance practices.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.8rem' }}>
                        <div className="item-header">
                            <strong>FPT Software</strong>
                            <span className="date-range">Dec 2025 – Apr 2026</span>
                        </div>
                        <div className="item-sub">
                            <em>Backend Engineer | Internship</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Optimized service-to-service communication efficiency by migrating internal REST calls to gRPC, reducing latency and serialization overhead.</li>
                            <li>Resolved critical race conditions and double-payment risks in high-concurrency loops by implementing Redis-based distributed locking (SETNX).</li>
                            <li>Applied CQRS principles to separate read/write concerns, improving system maintainability and scalability.</li>
                            <li>Developed a robust Order status state machine with strict validation to ensure consistent data transitions across the fulfillment lifecycle.</li>
                            <li>Standardized request validation and centralized exception handling, reducing invalid data entry and accelerating debugging workflows.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.8rem' }}>
                        <div className="item-header">
                            <strong>TCH Company</strong>
                            <span className="date-range">Oct 2025 – Present</span>
                        </div>
                        <div className="item-sub">
                            <em>Software Engineer | Freelance</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Implemented Role-Based Access Control (RBAC) and route-level middleware to secure administrative APIs against unauthorized direct access and manage multi-level permissions.</li>
                            <li>Optimized high-traffic backend APIs through response caching and payload refinement, reducing latency by 62% and database overhead.</li>
                            <li>Developed an automated cost-estimation engine to streamline client quotation workflows, reducing manual sales overhead.</li>
                            <li>Transitioned static configuration layers into database-driven administrative systems for enhanced operational flexibility.</li>
                            <li>Enhanced technical SEO implementations resulting in a Google Lighthouse SEO score of 90/100 for client sites.</li>
                            <li>Documented clean RESTful APIs and coordinated delivery across cross-functional teams (UI/UX, Frontend).</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>PROJECTS</h2>
                    <div className="section-line"></div>

                    <div className="project-item">
                        <div className="item-header">
                            <strong>CarbonX – Carbon Credit Marketplace</strong>
                            <span className="date-range">[2025]</span>
                        </div>
                        <div className="item-sub">
                            <em>Backend Developer (Team: 4 – 2BE/2FE) | Tech: Java 17, Spring Boot 3, Spring Security, MySQL, Redis, Docker, Nginx, PayPal · Stripe (Sandbox)</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built wallet transaction flows (deposit/withdraw/payout) for 2 user types with input validation and centralized exception handling.</li>
                            <li>Developed marketplace module (list credits, create/update orders, profit-sharing) and KYC user management with status transitions.</li>
                            <li>Implemented scheduled daily price recalculation via cron job + SQL aggregate queries based on live usage data.</li>
                            <li>Applied <strong>Redis caching</strong> on high-read endpoints — reduced repeated DB hits and improved response time.</li>
                            <li>Added <strong>SQL composite indexes</strong> on frequently filtered columns — reduced query plans from full-scan to index-range.</li>
                            <li>Integrated reporting APIs (PDF/Excel); added rate limiting on critical endpoints to prevent wasteful resource consumption.</li>
                            <li>Containerized full stack (backend + frontend + DB + Nginx) with Docker Compose, deployed on Linux VPS with HTTPS/SSL.</li>
                        </ul>
                        <p className="project-links">
                            Website: <a href="https://carbonx.io.vn" target="_blank" rel="noopener noreferrer">carbonx.io.vn</a> |
                            GitHub: <a href="https://github.com/LeHuyTuong/Carbon-Credit-Marketplace" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong/Carbon-Credit-Marketplace</a>
                        </p>
                    </div>

                    <div className="project-item">
                        <div className="item-header">
                            <strong>Card Issuing & Transaction Authorization System</strong>
                            <span className="date-range">[2025]</span>
                        </div>
                        <div className="item-sub">
                            <em>Core Financial Logic | Technical Research: Banking Logic & Unit Testing Lab | Tech: Java 17, Spring Boot, Spring Data JPA, JUnit 5, Mockito</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built core backend logic for banking features (card management, ledger) with strict focus on data accuracy and financial consistency.</li>
                            <li>Applied JUnit 5 + Mockito to cover Service Layer — edge cases, error paths, and financial calculation correctness.</li>
                            <li>Implemented centralized exception handling for transactions, improving system traceability and safe financial data management.</li>
                        </ul>
                        <p className="project-links">
                            GitHub: <a href="https://github.com/LeHuyTuong/Card-Issuing-System" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong/Card-Issuing-System</a>
                        </p>
                    </div>

                    <div className="project-item" style={{ marginTop: '0.8rem' }}>
                        <div className="item-header">
                            <strong>High-Throughput URL Shortener</strong>
                            <span className="date-range">[2025]</span>
                        </div>
                        <div className="item-sub">
                            <em>Backend Developer (Solo) | Tech: Java 17, Spring Boot, Redis, MySQL, Docker, React</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Architected a Redis-backed URL redirection engine reducing database pressure by 80% and minimizing latency.</li>
                            <li>Engineered database indexing strategies for efficient redirection lookups and collision-free code generation.</li>
                            <li>Resolved complex Cross-Origin Resource Sharing (CORS) issues for dynamic image generation.</li>
                        </ul>
                    </div>

                    <div className="project-item" style={{ marginTop: '0.8rem' }}>
                        <div className="item-header">
                            <strong>S-Platform – Distributed Media Processing Engine</strong>
                            <span className="date-range">[2026]</span>
                        </div>
                        <div className="item-sub">
                            <em>Solo Developer | Tech: Java 17, Spring Boot 3, React 19, TailwindCSS, MySQL, Redis, Docker, Playwright, Storybook, Telegram API, Google Drive API</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Architected a 'Micro-monolith' distributed system using the <strong>Transactional Outbox pattern</strong> to guarantee message delivery consistency between DB and external APIs (Telegram/Drive).</li>
                            <li>Engineered <strong>Distributed Lease Management</strong> to orchestrate task execution across multiple worker nodes, preventing resource contention and ensuring high availability.</li>
                            <li>Developed a session-aware React 19 frontend with <strong>Role-Based Access Control (RBAC)</strong>, dynamic workspace routing, and Framer Motion animations.</li>
                            <li>Built <strong>Storybook</strong> component library with accessibility (a11y) checks for UI isolation and visual regression testing.</li>
                            <li>Wrote <strong>Playwright E2E smoke tests</strong> covering authentication, job submission, real-time state polling, and file download verification.</li>
                            <li>Used structured architecture and code review practices to improve design quality and implementation consistency.</li>
                        </ul>
                        <p className="project-links">
                            GitHub: <a href="https://github.com/LeHuyTuong/S-Platform-Engine" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong/S-Platform-Engine</a>
                        </p>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>ACTIVITIES</h2>
                    <div className="section-line"></div>
                    <div className="project-item">
                        <div className="item-header">
                            <strong>Mentor – FPT University for Community</strong>
                            <span className="date-range">Jan 2024 – Present</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Mentored 20+ students on career planning and technical skill development in software engineering.</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>LANGUAGE</h2>
                    <div className="section-line"></div>
                    <p><strong>English:</strong> TOEIC 735 (ETS) — Good reading and writing proficiency for technical documentation and team communication.</p>
                </section>
            </div>
        </div>
    );
};

export default Resume;
