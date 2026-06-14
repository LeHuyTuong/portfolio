import useScrollReveal from '../hooks/useScrollReveal';
import { ExternalLink } from './Icons';
import { experiences } from '../data/portfolioData';
import './Experience.css';

const TimelineItem = ({ exp, index }) => {
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="timeline-item reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">
                <span>{exp.date}</span>
            </div>
            <div className="timeline-content">
                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-title-group">
                            <h3>{exp.title}</h3>
                            {exp.companyUrl ? (
                                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company">
                                    {exp.company}
                                    <ExternalLink />
                                </a>
                            ) : (
                                <span className="exp-company">{exp.company}</span>
                            )}
                        </div>
                    </div>
                    <p className="exp-description">{exp.description}</p>
                    {exp.responsibilities && (
                        <ul className="details-list">
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: resp }} />
                            ))}
                        </ul>
                    )}
                    <div className="exp-tech">
                        {exp.technologies.map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Roadmap</span>
                    <h2>Work <span className="gradient-text">Experience</span></h2>
                    <p>Building high-integrity backend systems in enterprise environments</p>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
