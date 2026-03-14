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
                    <p className="resume-title">{personalInfo.title}</p>
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
                    <p className="summary-text">Java Backend Engineering fresher with hands-on production experience in Java 17 + Spring Boot 3. Built and deployed a live Carbon Credit Marketplace handling wallet transaction flows, marketplace modules, and payment gateway integration (PayPal · Stripe). Seeking to apply backend engineering fundamentals as a Java Fresher in a high-scale environment.</p>
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
                            <li style={{ marginBottom: '2px' }}><strong>Languages:</strong> Java 17/21 (Core, Stream API, Multithreading), C# (.NET), SQL (Procedures, Indexing).</li>
                            <li style={{ marginBottom: '2px' }}><strong>Java Ecosystem:</strong> Spring Boot 3.x, Spring Security, Spring Data JPA, Hibernate, JUnit 5, Mockito.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Databases & Caching:</strong> MySQL, SQL Server, Redis (Caching, Distributed Locking), PostgreSQL.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Architecture & Design:</strong> Microservices, Clean Architecture, CQRS (MediatR), SOLID principles, Design Patterns (Singleton).</li>
                            <li style={{ marginBottom: '0' }}><strong>Communication & Tools:</strong> gRPC, RESTful API, Docker, Nginx, Git, Maven, GitHub Actions, Postman.</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>WORK EXPERIENCE</h2>
                    <div className="section-line"></div>
                    
                    <div className="experience-item">
                        <div className="item-header">
                            <strong>TCH Company</strong>
                            <span className="date-range">[Oct 2025] – Present</span>
                        </div>
                        <div className="item-sub">
                            <em>Backend Developer (Freelancer) | Tech: Java, Spring Boot, MySQL, REST API, Swagger, Git</em>
                        </div>
                        <ul className="resume-bullets">
                            <li>Engineered an End-to-end Cost Estimator module, automating quotations and lead tracking.</li>
                            <li>Produced standard API Documentation (Swagger) to align frontend and backend development.</li>
                            <li>Taking ownership of client bug-fix tickets and leveraging AI tools for root-cause analysis.</li>
                            <li>Collaborating with frontend team and business analytics team through daily communication.</li>
                        </ul>
                    </div>

                    <div className="experience-item" style={{ marginTop: '0.8rem' }}>
                        <div className="item-header">
                            <strong>FPT Software Academy (FSA)</strong>
                            <span className="date-range">[Dec 2025] – Present</span>
                        </div>
                        <div className="item-sub">
                            <em>Backend Intern | Tech: C# .NET, RESTful API, gRPC, Redis, SQL Server, CQRS (MediatR), Clean Architecture</em>
                        </div>
                        <ul className="resume-bullets">
                            <li><strong>Performance Optimization:</strong> Boosted system performance by transitioning internal service communication from REST to gRPC, significantly reducing serialization overhead and latency.</li>
                            <li><strong>Architecture & Design:</strong> Orchestrated backend logic using CQRS (MediatR) and Clean Architecture to segregate Read/Write operations, improving scalability.</li>
                            <li><strong>Concurrency Management:</strong> Resolved complex Race Conditions and double-payment issues in high-concurrency Webhook handlers by implementing Distributed Locking (Redlock) via Redis.</li>
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
                            <em>Technical Research: Banking Logic & Unit Testing Lab | Tech: Java 17, Spring Boot, Spring Data JPA, JUnit 5, Mockito</em>
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
                    <p><strong>English:</strong> TOEIC 705 (ETS) — Good reading and writing proficiency for technical documentation and team communication.</p>
                </section>
            </div>
        </div>
    );
};

export default Resume;
