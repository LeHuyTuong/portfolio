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
                    <p className="summary-text">Backend developer with ~1 year of combined internship and freelance experience building RESTful APIs and transaction-heavy services on Java 17 and Spring Boot 3. Hands-on with MySQL schema design and query optimization, Redis caching, JWT/RBAC security, JUnit 5/Mockito unit testing, and Docker delivery — working in a normal team flow of Git branching, code review, and coordination with BA, front-end and QA.</p>
                </section>

                <section className="resume-section">
                    <h2>WORK EXPERIENCE</h2>
                    <div className="section-line"></div>

                    <div className="experience-item">
                        <div className="item-header">
                            <strong>Viettel Digital — Java Backend Developer</strong>
                            <span className="date-range">Apr 2026 – Present</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built a <strong>non-invasive Spring Boot observability starter</strong> (HTTP/JDBC/method tracing) correlating metrics, traces and logs by one traceId on Grafana (Prometheus/Tempo/Loki) — cutting the time to locate a failing request.</li>
                            <li>Extended tracing to <strong>WebSocket at message level</strong>, keeping one traceId across HTTP↔WebSocket↔JDBC; benchmarked overhead with <strong>k6</strong> (+0.1–1 ms/request) and validated it end to end on two local demo services (wallet↔ledger), including deadlock and error traces.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.3rem' }}>
                        <div className="item-header">
                            <strong>FPT Software — Backend Engineer Intern</strong>
                            <span className="date-range">Dec 2025 – Apr 2026</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Developed and maintained REST endpoints on a Spring Boot multi-service backend, following the team&apos;s technical specs and Git/code-review process.</li>
                            <li>Debugged and fixed <strong>race conditions causing double-payment risk</strong> in payment flows using Redis distributed locks; migrated internal service-to-service calls from <strong>REST to gRPC</strong>.</li>
                            <li>Built an <strong>order-status state machine</strong> with strict validation and centralized exception handling.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.3rem' }}>
                        <div className="item-header">
                            <strong>NeoTCH Website Services — Freelancer</strong>
                            <span className="date-range">Oct 2025 – Present</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Implemented <strong>RBAC</strong> and route-level middleware to secure admin APIs with multi-level permissions; reduced API response time by <strong>~60%</strong> on high-traffic endpoints via caching and payload refinement.</li>
                            <li>Built an <strong>end-to-end cost estimation module</strong> from the client&apos;s business requirements, automating their quotation workflow.</li>
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
                            <em>Backend Developer | Java 17, Spring Boot 3, MySQL, Redis, Docker, VNPay/PayPal/Stripe (sandbox)<br />
                            <a className="cert-link" href="https://github.com/LeHuyTuong/Carbon-Credit-Marketplace" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong/Carbon-Credit-Marketplace</a></em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Designed and built the <strong>wallet REST APIs</strong> — deposit, withdraw (admin-approval step), payout — with strict request validation and a shared error response format.</li>
                            <li>Integrated <strong>VNPay/PayPal/Stripe (sandbox)</strong> behind one payment interface (Strategy pattern); built KYC status flows, orders and profit-sharing.</li>
                            <li>Cut DB load via <strong>Redis caching</strong> and composite indexes; shipped the stack with Docker Compose over HTTPS.</li>
                        </ul>
                    </div>

                    <div className="project-item" style={{ marginTop: '0.3rem' }}>
                        <div className="item-header">
                            <strong>Card Issuing &amp; Ledger Core System</strong>
                            <span className="date-range">2025</span>
                        </div>
                        <div className="item-sub">
                            <em>Backend Developer (personal project) | Java 17, Spring Boot 3, Spring Data JPA, JUnit 5, Mockito<br />
                            <a className="cert-link" href="https://github.com/LeHuyTuong/Card-Issuing-System" target="_blank" rel="noopener noreferrer">github.com/LeHuyTuong/Card-Issuing-System</a></em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Designed an <strong>append-only ledger</strong> (JPA lifecycle guards); balances derived via SQL aggregation instead of a mutable column.</li>
                            <li>Implemented <strong>idempotency keys</strong> (duplicate requests processed once, cached response returned) and card <strong>state machines</strong> with KYC-gated issuance; unit-tested domain invariants and error paths (JUnit 5, Mockito).</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>TECHNICAL SKILLS</h2>
                    <div className="section-line"></div>
                    <div className="skills-content">
                        <ul className="resume-bullets" style={{ marginTop: '0', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li><strong>Languages &amp; Core:</strong> Java 17 (OOP, Collections, Exception Handling), SQL; JavaScript/TypeScript (React front-end, REST integration).</li>
                            <li><strong>Frameworks:</strong> Spring Boot 3, Spring MVC, Spring Security, Spring Data JPA, Hibernate.</li>
                            <li><strong>API &amp; Architecture:</strong> RESTful API design, gRPC, microservices (service-to-service); OOP and design patterns (Strategy, Factory, Builder, Singleton); idempotency keys, state machines.</li>
                            <li><strong>Database:</strong> MySQL, PostgreSQL — schema design, indexing, query optimization (EXPLAIN); Redis (caching, distributed locking — key-value NoSQL).</li>
                            <li><strong>Testing, Security &amp; Quality:</strong> JUnit 5, Mockito, k6; input validation, centralized exception handling, code review; JWT, RBAC.</li>
                            <li><strong>DevOps &amp; Tools:</strong> Docker, Docker Compose, Git (GitFlow), Jira; Prometheus/Grafana, distributed tracing.</li>
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
                                <em>{edu.degree} | GPA: 3.2 | English: <a className="cert-link" href="https://lehuytuong.vercel.app/toeic/toeic-735.jpg" target="_blank" rel="noopener noreferrer">TOEIC 735</a> (ETS)</em>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ResumeMeitec;
