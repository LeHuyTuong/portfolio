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

            <div className="resume-container">
                <header className="resume-header">
                    <h1>{personalInfo.name.toUpperCase()}</h1>
                    <p className="resume-title">Software Engineering Intern — Java Backend & Web</p>
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
                    <p className="summary-text">Final-year Software Engineering student at FPT University with internship experience building Java/Spring Boot backend systems, REST APIs, and real-time features using SSE/WebSocket. Comfortable with basic front-end development in React. Quick to pick up new technologies and interested in applying software engineering skills to financial technology and securities systems.</p>
                </section>

                <section className="resume-section">
                    <h2>WORK EXPERIENCE</h2>
                    <div className="section-line"></div>

                    <div className="experience-item">
                        <div className="item-header">
                            <strong>Viettel Digital Services (VDS) — Backend Engineer Intern, Viettel Digital Talent Program</strong>
                            <span className="date-range">Apr 2026 – Aug 2026</span>
                        </div>
                        <ul className="resume-bullets">
                            <li>Developed a Spring Boot observability starter that correlates metrics, traces, and logs using a single traceId across Grafana, Prometheus, Tempo, and Loki, under mentorship from senior engineers.</li>
                            <li>Extended tracing to WebSocket messages, maintaining a single traceId across HTTP → WebSocket → JDBC.</li>
                            <li>Load-tested with k6 and validated end-to-end tracing across wallet and ledger demo services.</li>
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
                            <em>Backend Developer (Team of 4 — 2 BE) | Java 17, Spring Boot 3, MySQL, SSE, Docker, VNPay/PayPal/Stripe (sandbox) | <a href="https://github.com/LeHuyTuong/Carbon-Credit-Marketplace" target="_blank" rel="noopener noreferrer">GitHub</a></em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Built deposit, withdrawal, wallet-to-wallet transfer, refund, and payout flows with strict validation.</li>
                            <li>Recorded every transaction with before/after balance snapshots to support auditability across 11 transaction types.</li>
                            <li>Integrated and verified VNPay, PayPal, and Stripe payments (sandbox); built KYC status flows and marketplace listing, buying, and reselling flows.</li>
                            <li>Implemented real-time user notifications using Server-Sent Events (SSE).</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>TECHNICAL SKILLS</h2>
                    <div className="section-line"></div>
                    <div className="skills-content">
                        <ul className="resume-bullets" style={{ marginTop: '0', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '2px' }}><strong>Languages & Core:</strong> Java 17 (OOP, Collections, Exception Handling), SQL, JavaScript (basic).</li>
                            <li style={{ marginBottom: '2px' }}><strong>Web:</strong> HTML, CSS, REST API integration (Fetch API); React — basic CRUD applications; SSE/WebSocket fundamentals.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Frameworks:</strong> Spring Boot 3, Spring Security, Spring Data JPA, Hibernate.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Database:</strong> MySQL, PostgreSQL — indexing, basic query optimization.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Security & Testing:</strong> JWT, RBAC, BCrypt; JUnit 5, Mockito.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Tools:</strong> Git (GitFlow), GitHub Actions.</li>
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
