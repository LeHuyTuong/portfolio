import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowDown } from './Icons';
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
                    <ArrowLeft />
                    Back to Portfolio
                </Link>
                <button onClick={handlePrint} className="btn-download">
                    <ArrowDown />
                    Download PDF
                </button>
            </div>

            <div className="resume-container">
                <table className="print-layout">
                    <thead><tr><td><div className="page-space"></div></td></tr></thead>
                    <tbody><tr><td>
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
                    <p className="summary-text">Java backend developer with ~1 year of combined internship and freelance experience building payment- and transaction-focused services on Java 17 and Spring Boot 3. Hands-on with REST/gRPC microservices, Redis caching and distributed locking, JWT/RBAC security, SQL optimization, and JUnit 5/Mockito testing.</p>
                </section>

                <section className="resume-section">
                    <h2>WORK EXPERIENCE</h2>
                    <div className="section-line"></div>

                    <div className="experience-item">
                        <div className="item-header">
                            <strong>Viettel Digital — Software Engineer Trainee (Viettel Digital Talent)</strong>
                            <span className="date-range">Apr 2026 – Present</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built a <strong>non-invasive Spring Boot observability starter</strong> (HTTP/JDBC/method tracing) correlating Metrics–Traces–Logs by one traceId on Grafana (Prometheus/Tempo/Loki).</li>
                            <li>Extended tracing to <strong>WebSocket at message level</strong> via a JSON trace-context envelope, keeping one traceId across HTTP↔WebSocket↔JDBC.</li>
                            <li>Benchmarked overhead with <strong>k6</strong> (+0.1–1 ms/request; ~0% WebSocket); validated end-to-end on two demo services (wallet↔ledger), incl. deadlock/error traces.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.6rem' }}>
                        <div className="item-header">
                            <strong>FPT Software — Backend Engineer Intern</strong>
                            <span className="date-range">Dec 2025 – Apr 2026</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Mitigated race conditions and <strong>double-payment risk</strong> in payment flows via Redis distributed locks.</li>
                            <li>Migrated internal service-to-service calls from <strong>REST to gRPC</strong>, cutting serialization overhead.</li>
                            <li>Built an <strong>order-status state machine</strong> with strict validation; centralized exception handling.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.6rem' }}>
                        <div className="item-header">
                            <strong>TCH Company — Software Engineer (Freelance)</strong>
                            <span className="date-range">Oct 2025 – Present</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Implemented <strong>RBAC</strong> and route-level middleware to secure admin APIs with multi-level permissions.</li>
                            <li>Reduced API response time by <strong>~60%</strong> on high-traffic endpoints via caching and payload refinement.</li>
                            <li>Built an <strong>end-to-end cost estimation module</strong>, automating client quotation workflows.</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>PROJECTS</h2>
                    <div className="section-line"></div>

                    <div className="project-item">
                        <div className="item-header">
                            <strong>CarbonX – Carbon Credit Marketplace</strong>
                            <span className="date-range">2025</span>
                        </div>
                        <div className="item-sub">
                            <em>Backend Developer (Team of 4 — 2 BE) | Java 17, Spring Boot 3, MySQL, Redis, Docker, VNPay/PayPal/Stripe (sandbox) | <a href="https://github.com/LeHuyTuong/Carbon-Credit-Marketplace" target="_blank" rel="noopener noreferrer">GitHub</a></em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built <strong>wallet flows</strong> — deposit, withdraw (admin-approval step), payout — with strict validation.</li>
                            <li>Integrated <strong>VNPay/PayPal/Stripe (sandbox)</strong>; built KYC status flows, orders, and profit-sharing.</li>
                            <li>Cut DB load via <strong>Redis caching</strong> and composite indexes; deployed with Docker Compose over HTTPS.</li>
                        </ul>
                    </div>

                    <div className="project-item" style={{ marginTop: '0.6rem' }}>
                        <div className="item-header">
                            <strong>Card Issuing & Ledger Core System</strong>
                            <span className="date-range">2025</span>
                        </div>
                        <div className="item-sub">
                            <em>Self-directed banking-domain lab (Solo) | Java 17, Spring Boot 3, Spring Data JPA, JUnit 5, Mockito | <a href="https://github.com/LeHuyTuong/Card-Issuing-System" target="_blank" rel="noopener noreferrer">GitHub</a></em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Designed an <strong>append-only ledger</strong> (JPA lifecycle guards); balances derived via SQL aggregation.</li>
                            <li>Implemented <strong>idempotency keys</strong> — duplicate requests run once and return the cached response.</li>
                            <li>Enforced card <strong>state machines</strong> with KYC-gated issuance; unit-tested invariants (JUnit 5, Mockito).</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>TECHNICAL SKILLS</h2>
                    <div className="section-line"></div>
                    <div className="skills-content">
                        <ul className="resume-bullets" style={{ marginTop: '0', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '2px' }}><strong>Languages & Core:</strong> Java 17 (OOP, Collections, Exception Handling), SQL.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Frameworks:</strong> Spring Boot 3, Spring Core, Spring Security, Spring Data JPA, Hibernate.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Architecture & Data:</strong> RESTful API, gRPC, microservices, CQRS-style, idempotency keys; MySQL, PostgreSQL — indexing, query optimization; Redis (caching, distributed locking — key-value NoSQL).</li>
                            <li style={{ marginBottom: '2px' }}><strong>Security & Testing:</strong> JWT, RBAC, BCrypt/SHA-256 hashing, rate limiting, OWASP Top 10; JUnit 5, Mockito, k6 (load testing).</li>
                            <li style={{ marginBottom: '2px' }}><strong>Observability:</strong> Prometheus, Grafana, Tempo, Loki, Micrometer/Spring Actuator, Spring AOP/AspectJ; distributed tracing (W3C Trace Context, SLF4J MDC).</li>
                            <li style={{ marginBottom: '2px' }}><strong>DevOps & Messaging:</strong> Docker, Docker Compose, GitHub Actions (CI/CD), Git (GitFlow), GitLab CI; RabbitMQ & Kafka (fundamentals); Transactional Outbox (side project).</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>EDUCATION & LANGUAGE</h2>
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
                        </div>
                    ))}
                    <p style={{ margin: '4px 0 0 0' }}><strong>English:</strong> <a className="cert-link" href="https://lehuytuong.vercel.app/toeic/toeic-735.jpg" target="_blank" rel="noopener noreferrer">TOEIC 735</a> (ETS) — comfortable reading technical documentation.</p>
                </section>
                    </td></tr></tbody>
                    <tfoot><tr><td><div className="page-space"></div></td></tr></tfoot>
                </table>
            </div>
        </div>
    );
};

export default Resume;
