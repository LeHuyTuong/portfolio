import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowDown } from './Icons';
import ResumeVariantTabs from './ResumeVariantTabs';
import './Resume.css';
import { personalInfo, education } from '../data/portfolioData';

/**
 * General-purpose intern CV — broad Java backend/web internship applications.
 * Route: /resume/general — not linked from the nav or the variant tabs, so it
 * only surfaces to whoever has the direct URL.
 */
const ResumeGeneral = () => {
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
                <ResumeVariantTabs active="general" />
            </div>

            <div className="resume-container resume-roomy">
                <header className="resume-header">
                    <h1>{personalInfo.name.toUpperCase()}</h1>
                    <p className="resume-title">Software Engineering Intern — Java Backend &amp; Web</p>
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
                    <h2>SUMMARY</h2>
                    <div className="section-line"></div>
                    <p className="summary-text">Software Engineering Intern targeting Java Backend &amp; Web roles, final-year student at FPT University with internship experience on Java 17 and Spring Boot 3. Delivers REST APIs and real-time features with SSE/WebSocket, with working React knowledge for front-end API integration and an interest in fintech and enterprise systems.</p>
                </section>

                <section className="resume-section">
                    <h2>WORK EXPERIENCE</h2>
                    <div className="section-line"></div>

                    <div className="experience-item">
                        <div className="item-header">
                            <strong>Viettel Digital Services (VDS) — Backend Engineer Intern, Viettel Digital Talent Program</strong>
                            <span className="date-range">Apr 2026 – Oct 2026</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built a zero-agent <strong>Spring Boot observability starter</strong> (Filter, OpenFeign interceptor, JDBC proxy, AOP, and WebSocket Decorator) propagating one traceId across HTTP↔OpenFeign↔JDBC↔WebSocket to Grafana (Prometheus/Tempo/Loki).</li>
                            <li>Added <strong>span-tree root-cause diagnostics</strong> and an <strong>AI-context exporter</strong> to auto-classify DB deadlocks, slow SQL, and partner timeouts for LLM incident triage.</li>
                            <li>Benchmarked with <strong>k6</strong> across 36,000 HTTP requests, 9,000 transfer flows, and 36,000 WebSocket messages per run (up to 2,500 req/s), keeping p95 overhead <strong>&lt; 1 ms</strong>.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.3rem' }}>
                        <div className="item-header">
                            <strong>FPT Software — Backend Engineer Intern</strong>
                            <span className="date-range">Dec 2025 – Apr 2026</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Prevented duplicate charges on payment retries using <strong>idempotency keys</strong> and <strong>Redis distributed locks</strong>; migrated internal REST calls to <strong>gRPC</strong> with versioned proto contracts.</li>
                            <li>Built an <strong>order-status state machine</strong> with strict transition validation and centralized exception handling, tested with JUnit 5 and Mockito.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.3rem' }}>
                        <div className="item-header">
                            <strong>NeoTCH Website Services (OneWorld LMS/ERP) — Backend Developer (Contract)</strong>
                            <span className="date-range">Oct 2025 – Present</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built core LMS/ERP modules—tuition billing, tax invoices, transactional Excel import, and a 5-rule timetable—replacing a manual <strong>21-sheet Excel</strong> workflow.</li>
                            <li>Prevented duplicate tuition receipts during concurrent cashier collection using <strong>idempotency keys</strong>, <strong>pessimistic row locking</strong>, and unique receipt numbering.</li>
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
                            <em>Backend Developer (Team of 4 — owned wallet, ledger, profit sharing, payments &amp; settlement) | Java 17, Spring Boot 3, MySQL 8, Redis, Docker, Testcontainers, k6 | GitHub: <a href="https://github.com/LeHuyTuong/Carbon-Credit-Marketplace" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong/Carbon-Credit-Marketplace</a></em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built a <strong>double-entry wallet ledger</strong> with before/after balance snapshots across 11 transaction types and ascending ID lock ordering to prevent transfer deadlocks (93 JUnit/Testcontainers tests).</li>
                            <li>Engineered <strong>async batch profit-sharing payouts</strong> on a custom thread pool with per-owner <code>REQUIRES_NEW</code> transactions so single-wallet failures never roll back completed payouts.</li>
                            <li>Unified <strong>VNPay, PayPal, and Stripe</strong> via Strategy/Facade patterns with two-phase verification outside <code>@Transactional</code>, and fixed Hibernate N+1 queries via <code>LEFT JOIN FETCH</code> (<strong>3,802 → 2 queries</strong>, <strong>4.91 s → 226 ms</strong>).</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>TECHNICAL SKILLS</h2>
                    <div className="section-line"></div>
                    <div className="skills-content">
                        <ul className="resume-bullets" style={{ marginTop: '0', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '2px' }}><strong>Languages &amp; Core:</strong> Java 17 (OOP, SOLID, Design Patterns: Strategy, Facade, Factory, Singleton, Decorator, Proxy; Multithreading, Collections), SQL, JavaScript.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Frameworks:</strong> Spring Boot 3, Spring MVC, Spring Security, Spring Data JPA, Hibernate, OpenFeign; React (basic CRUD / API integration).</li>
                            <li style={{ marginBottom: '2px' }}><strong>Database &amp; Architecture:</strong> MySQL, PostgreSQL — indexing, N+1 optimization (P6Spy), pessimistic locking; Redis (distributed locking, TTL); RESTful API, gRPC, SSE/WebSocket.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Security &amp; Testing:</strong> JWT, RBAC, HMAC-SHA512 / BCrypt; JUnit 5, Mockito, Testcontainers, k6.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Observability &amp; DevOps:</strong> Prometheus, Grafana, Tempo, Loki, Docker, Git (GitFlow), GitHub Actions.</li>
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
                    <p style={{ margin: '4px 0 0 0' }}><strong>English:</strong> <a className="cert-link" href="https://lehuytuong.vercel.app/toeic/toeic-735.jpg" target="_blank" rel="noopener noreferrer">TOEIC 735</a> (ETS). Comfortable with technical documentation.</p>
                </section>
            </div>
        </div>
    );
};

export default ResumeGeneral;
