import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowDown } from './Icons';
import ResumeVariantTabs from './ResumeVariantTabs';
import './Resume.css';
import { personalInfo, education } from '../data/portfolioData';

/**
 * Meitec Vietnam — Backend Developer (Java / Golang / NodeJS), Hà Nội, hybrid.
 * Route: /resume/meitec — not linked from the nav.
 *
 * JD angle: Java/Spring Boot is the anchor (no Go/Node backend claim on purpose).
 * Weighted toward what the JD actually lists: REST API, SQL, unit test, code
 * review, OOP/design patterns, Docker, and cross-team work with BA/FE/QA/DevOps.
 */
/* Chrome, Edge and Safari all seed the "Save as PDF" filename from
   document.title, so swap it for the duration of the print dialog and put the
   page title back afterwards. */
const PDF_FILE_NAME = 'Lê Huy Tường_Java Developer_CV';

const ResumeMeitec = () => {
    const handlePrint = () => {
        const pageTitle = document.title;
        const restoreTitle = () => {
            document.title = pageTitle;
            window.removeEventListener('afterprint', restoreTitle);
        };

        document.title = PDF_FILE_NAME;
        window.addEventListener('afterprint', restoreTitle);
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
                <ResumeVariantTabs active="meitec" />
            </div>

            <div className="resume-container resume-compact">
                <header className="resume-header">
                    <h1>{personalInfo.name.toUpperCase()}</h1>
                    <p className="resume-title">Backend Developer — Java / Spring Boot</p>
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
                    <p className="summary-text">Backend developer experienced in building RESTful APIs and transaction-heavy services on Java 17 and Spring Boot 3. Hands-on with OOP/SOLID design patterns (Strategy, Facade, Factory, Singleton, Decorator), MySQL query optimization and pessimistic locking, Redis distributed locking, JWT/RBAC security, JUnit 5/Mockito/Testcontainers testing, and Docker delivery — working in a standard team flow of Git branching, code review, and coordination with BA, front-end, and QA.</p>
                </section>

                <section className="resume-section">
                    <h2>WORK EXPERIENCE</h2>
                    <div className="section-line"></div>

                    <div className="experience-item">
                        <div className="item-header">
                            <strong>Viettel Digital — Java Backend Developer (Trainee)</strong>
                            <span className="date-range">Apr 2026 – Oct 2026</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built a zero-agent <strong>Spring Boot observability starter</strong> (Filter, OpenFeign interceptor, JDBC proxy, AOP, and WebSocket Decorator) propagating one traceId across HTTP↔OpenFeign↔JDBC↔WebSocket to Grafana (Prometheus/Tempo/Loki).</li>
                            <li>Added <strong>span-tree root-cause diagnostics</strong> and an <strong>AI-context exporter</strong> to classify DB deadlocks, slow SQL, and partner timeouts; benchmarked with <strong>k6</strong> across 36,000 HTTP requests, 9,000 transfers, and 36,000 WS messages per run (<strong>&lt; 1 ms</strong> p95 overhead).</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.3rem' }}>
                        <div className="item-header">
                            <strong>FPT Software — Backend Engineer Intern</strong>
                            <span className="date-range">Dec 2025 – Apr 2026</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Developed and maintained REST endpoints on a Spring Boot multi-service backend, following the team&apos;s technical specs and Git/code-review process.</li>
                            <li>Prevented duplicate charges on payment retries using <strong>idempotency keys</strong> and <strong>Redis distributed locks</strong>; migrated internal calls from <strong>REST to gRPC</strong> with versioned proto contracts.</li>
                            <li>Built an <strong>order-status state machine</strong> with strict transition validation and centralized exception handling, tested with JUnit 5 and Mockito.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.3rem' }}>
                        <div className="item-header">
                            <strong>NeoTCH Website Services — Backend Developer (Contract)</strong>
                            <span className="date-range">Oct 2025 – Present</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built core LMS/ERP modules (tuition billing, tax invoices, transactional Excel import, 5-rule timetable) replacing a <strong>21-sheet Excel</strong> workflow; prevented duplicate receipts via <strong>idempotency keys</strong> and <strong>pessimistic row locking</strong>.</li>
                            <li>Implemented a database-driven <strong>RBAC matrix for 5 roles</strong> with server-side branch isolation so staff cannot access other centers&apos; records.</li>
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
                            <em>Backend Developer (Team of 4 — owned wallet, ledger, profit sharing, payments &amp; settlement) | Java 17, Spring Boot 3, MySQL 8, Redis, Docker, Testcontainers, k6 | <a className="cert-link" href="https://github.com/LeHuyTuong/Carbon-Credit-Marketplace" target="_blank" rel="noopener noreferrer">https://github.com/LeHuyTuong/Carbon-Credit-Marketplace</a></em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built a <strong>double-entry wallet ledger</strong> with before/after balance snapshots across 11 transaction types and ascending ID lock ordering to prevent transfer deadlocks (93 JUnit/Testcontainers tests).</li>
                            <li>Engineered <strong>async batch profit-sharing payouts</strong> on a custom thread pool with per-owner <code>REQUIRES_NEW</code> transactions so single-wallet failures never roll back completed payouts.</li>
                            <li>Unified <strong>VNPay, PayPal, Stripe</strong> via Strategy/Facade with two-phase verification outside <code>@Transactional</code>.</li>
                            <li>Fixed Hibernate N+1 queries via <code>LEFT JOIN FETCH</code> (<strong>3,802 → 2 queries</strong>, <strong>4.91 s → 226 ms</strong>).</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>TECHNICAL SKILLS</h2>
                    <div className="section-line"></div>
                    <div className="skills-content">
                        <ul className="resume-bullets" style={{ marginTop: '0', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li><strong>Languages &amp; Core:</strong> Java 17 (OOP, SOLID, Multithreading, Collections, Exception Handling), SQL; JavaScript/TypeScript (React front-end, REST integration).</li>
                            <li><strong>Frameworks:</strong> Spring Boot 3, Spring MVC, Spring Security, Spring Data JPA, Hibernate, OpenFeign.</li>
                            <li><strong>API &amp; Architecture:</strong> RESTful API (JSON/XML), gRPC, microservices; Design Patterns (Strategy, Facade, Factory, Singleton, Decorator, Proxy, Builder); idempotency keys, state machines.</li>
                            <li><strong>Database:</strong> MySQL, PostgreSQL — schema design, indexing, N+1 optimization (P6Spy, EXPLAIN), pessimistic locking; Redis (distributed locking, caching/TTL).</li>
                            <li><strong>Testing, Security &amp; Quality:</strong> JUnit 5, Mockito, Testcontainers, k6; input validation, centralized exception handling, code review; JWT, RBAC, HMAC-SHA512 / BCrypt.</li>
                            <li><strong>DevOps &amp; Tools:</strong> Docker, Docker Compose, Git (GitFlow), GitHub Actions; Prometheus, Grafana, Tempo, Loki, distributed tracing.</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>EDUCATION &amp; LANGUAGE</h2>
                    <div className="section-line"></div>
                    {education.map(edu => (
                        <div key={edu.id} className="education-item">
                            <div className="item-header">
                                <strong>{edu.school}</strong>
                                <span className="date-range">Oct 2023 – 2027 (Expected)</span>
                            </div>
                            <div className="item-sub">
                                <em>{edu.degree} | GPA: 3.2 | English: <a className="cert-link" href="https://lehuytuong.github.io/portfolio/toeic/toeic-735.jpg" target="_blank" rel="noopener noreferrer">TOEIC 735</a> (ETS)</em>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ResumeMeitec;
