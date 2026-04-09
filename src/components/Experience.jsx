import { experiences } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Roadmap</span>
                    <h2>Work <span className="gradient-text">Experience</span></h2>
                    <p>Professional Engineering Experience</p>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-dot"></div>

                            <div className="timeline-date">
                                <span>{exp.date}</span>
                            </div>

                            <div className="timeline-content">
                                <div className="exp-card">
                                    <div className="exp-header">
                                        <h3>{exp.title}</h3>
                                        {exp.companyUrl ? (
                                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company">
                                                {exp.company}
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                                </svg>
                                            </a>
                                        ) : (
                                            <span className="exp-company">{exp.company}</span>
                                        )}
                                    </div>

                                    <p className="exp-description">{exp.description}</p>

                                    {exp.responsibilities && (
                                        <div className="exp-details">
                                            <span className="details-label">{exp.sectionLabel || "Key Responsibilities:"}</span>
                                            <ul className="details-list">
                                                {exp.responsibilities.map((resp, i) => (
                                                    <li key={i}>{resp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="exp-tech">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
