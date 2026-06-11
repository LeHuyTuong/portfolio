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
                    <p className="resume-title">Java Backend Developer | Spring Boot · Microservices · Payment Systems</p>
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
                    <p className="summary-text">Java backend developer with ~1 year of combined internship and freelance experience building payment- and transaction-focused services on Java 17 and Spring Boot 3. Hands-on with REST/gRPC microservices, Redis caching and distributed locking, JWT/RBAC security, SQL indexing & query optimization, and JUnit 5/Mockito unit testing. Built and deployed a wallet platform (deposit/withdraw/payout, KYC status flows, sandbox payment gateways); currently prototyping a distributed-tracing library in the Viettel Digital Talent program.</p>
                </section>

                <section className="resume-section">
                    <h2>TECHNICAL SKILLS</h2>
                    <div className="section-line"></div>
                    <div className="skills-content">
                        <p style={{ margin: '0 0 2px 0' }}><strong>Hands-on</strong></p>
                        <ul className="resume-bullets" style={{ marginTop: '0', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '2px' }}><strong>Languages:</strong> Java 17, SQL.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Frameworks:</strong> Spring Boot 3, Spring Core, Spring Security, Spring Data JPA, Hibernate.</li>
                            <li style={{ marginBottom: '2px' }}><strong>APIs & Architecture:</strong> RESTful APIs, gRPC, microservices (service-to-service), CQRS-style read/write separation, state machines, idempotency keys.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Databases & Caching:</strong> MySQL, PostgreSQL, SQL Server — indexing, query optimization, execution-plan analysis; Redis (caching, distributed locking — key-value NoSQL).</li>
                            <li style={{ marginBottom: '2px' }}><strong>Security:</strong> JWT authentication, RBAC, password hashing (BCrypt/SHA-256), rate limiting, input validation, centralized exception handling.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Observability:</strong> Distributed tracing (W3C Trace Context, traceId/spanId), SLF4J/Logback, MDC log correlation.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Testing:</strong> JUnit 5, Mockito (service-layer unit tests); Playwright (E2E basics).</li>
                            <li style={{ marginBottom: '2px' }}><strong>DevOps & Tools:</strong> Docker, Docker Compose, Nginx, GitHub Actions (CI/CD), Git (GitFlow), Maven, Swagger/OpenAPI, Postman.</li>
                        </ul>
                        <p style={{ margin: '6px 0 2px 0' }}><strong>Familiar / Working Knowledge</strong></p>
                        <ul className="resume-bullets" style={{ marginTop: '0', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '2px' }}><strong>Messaging & Event-driven:</strong> RabbitMQ (queues, exchanges, acknowledgements); Kafka fundamentals (topics, partitions, consumer groups); Transactional Outbox pattern (applied in a side project).</li>
                            <li style={{ marginBottom: '2px' }}><strong>Security concepts:</strong> OWASP API Security Top 10.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Tooling & Observability:</strong> GitLab CI concepts; OpenTelemetry, Micrometer, Spring Cloud Sleuth (researching for the tracing library).</li>
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
                            <li>Developing a plug-in <strong>observability library</strong> for Java/Spring Boot microservices under Viettel mentorship (<strong>prototype stage</strong>): traceId/spanId generation and W3C-style trace context propagation across the request lifecycle.</li>
                            <li>Prototyping <strong>non-invasive instrumentation</strong> — Servlet Filter, Spring HandlerInterceptor, and AOP — so services gain tracing and request-lifecycle metadata without changes to business code.</li>
                            <li>Packaging the library as a <strong>Spring Boot starter</strong> with auto-configuration, enabling tracing through a single dependency and a configuration toggle; validated end-to-end across two local demo services.</li>
                            <li>Correlating logs via <strong>SLF4J MDC</strong> so each log line carries traceId/spanId; writing JUnit 5 tests for trace-context parsing and ID-generation edge cases.</li>
                            <li>Researching <strong>OpenTelemetry, Micrometer, and Spring Cloud Sleuth</strong> with mentors to align the library design with industry tracing standards.</li>
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
                            <li>Developed order- and payment-related backend features on a Java/Spring Boot microservices codebase.</li>
                            <li>Mitigated race conditions and double-payment risk in concurrent payment flows by implementing Redis-based distributed locks.</li>
                            <li>Migrated internal service-to-service calls from REST to gRPC, reducing serialization overhead on internal hot paths.</li>
                            <li>Built an order-status state machine with strict transition validation, preventing invalid state changes across the fulfillment lifecycle.</li>
                            <li>Standardized request validation and centralized exception handling; applied CQRS-style read/write separation between command and query paths.</li>
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
                            <li>Implemented role-based access control (RBAC) and route-level middleware to secure admin APIs and enforce multi-level permissions.</li>
                            <li>Reduced API response time by ~60% on high-traffic endpoints through response caching and payload refinement.</li>
                            <li>Replaced hard-coded configuration with a database-driven admin system, enabling content updates without redeployments.</li>
                            <li>Built an automated cost-estimation API for client quotations; documented REST APIs for cross-functional delivery.</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>SELECTED PROJECTS</h2>
                    <div className="section-line"></div>

                    <div className="project-item">
                        <div className="item-header">
                            <strong>CarbonX – Carbon Credit Marketplace</strong>
                            <span className="date-range">[2025]</span>
                        </div>
                        <div className="item-sub">
                            <em>Backend Developer (Team of 4 — 2 backend) | Tech: Java 17, Spring Boot 3, Spring Security, MySQL, Redis, Docker, Nginx, VNPay/PayPal/Stripe (sandbox)</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built <strong>wallet transaction flows</strong> — deposit, withdraw (with an admin-approval step), payout — for two user roles, with strict input validation and centralized exception handling to keep transaction records consistent.</li>
                            <li>Integrated <strong>VNPay, PayPal, and Stripe (sandbox) payments</strong> into wallet top-up and payout flows.</li>
                            <li>Implemented <strong>KYC user management with explicit status transitions</strong>, plus marketplace orders and profit-sharing logic.</li>
                            <li>Cut database load on high-read endpoints with <strong>Redis caching</strong>; added <strong>SQL composite indexes</strong>, turning full-table scans into index-range queries (verified via execution plans).</li>
                            <li>Added <strong>rate limiting</strong> on sensitive endpoints (authentication, payment) to protect against abuse.</li>
                            <li>Deployed the full stack (Spring Boot, MySQL, Redis, Nginx) with <strong>Docker Compose</strong> on a Linux VPS with HTTPS.</li>
                        </ul>
                        <p className="project-links">
                            GitHub: <a href="https://github.com/LeHuyTuong/Carbon-Credit-Marketplace" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong/Carbon-Credit-Marketplace</a>
                        </p>
                    </div>

                    <div className="project-item" style={{ marginTop: '0.8rem' }}>
                        <div className="item-header">
                            <strong>Card Issuing & Ledger Core System</strong>
                            <span className="date-range">[2025]</span>
                        </div>
                        <div className="item-sub">
                            <em>Self-directed banking-domain lab (Solo) | Tech: Java 17, Spring Boot 3, Spring Data JPA, JUnit 5, Mockito</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Designed an <strong>append-only ledger</strong>: updates/deletes blocked at the entity level via JPA lifecycle events; balances derived through SQL aggregation instead of stored mutable fields.</li>
                            <li>Implemented <strong>idempotency keys</strong> so duplicate requests (e.g., a double card-issue submission) are processed exactly once and return the cached response.</li>
                            <li>Enforced <strong>card-lifecycle state machines</strong> (CREATED → ACTIVE → BLOCKED) with KYC-gated issuance; covered domain invariants and error paths with JUnit 5/Mockito unit tests.</li>
                        </ul>
                        <p className="project-links">
                            GitHub: <a href="https://github.com/LeHuyTuong/Card-Issuing-System" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong/Card-Issuing-System</a>
                        </p>
                    </div>

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
                    <h2>LANGUAGE</h2>
                    <div className="section-line"></div>
                    <p><strong>English:</strong> <a className="cert-link" href="https://lehuytuong.vercel.app/toeic/toeic-735.jpg" target="_blank" rel="noopener noreferrer">TOEIC 735</a> (ETS) — comfortable reading technical documentation and writing project documents.</p>
                </section>
            </div>
        </div>
    );
};

export default Resume;
