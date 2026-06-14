import useScrollReveal from '../hooks/useScrollReveal';
import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => {
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal();

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Learning Path</span>
                    <h2>Education & <span className="gradient-text">Certifications</span></h2>
                    <p>My academic foundation and professional credentials</p>
                </div>

                <div className="education-grid">
                    {education.map(edu => (
                        <div key={edu.id} className="edu-layout">
                            <div ref={leftRef} className="edu-left reveal" style={{ transitionDelay: '0.1s' }}>
                                <div className="edu-card">
                                    <div className="edu-period">{edu.period}</div>
                                    <h4 className="edu-school">{edu.school}</h4>
                                    <div className="edu-degree">{edu.degree}</div>
                                    <p className="edu-desc">{edu.description}</p>
                                    {edu.achievements && edu.achievements.length > 0 && (
                                        <ul className="edu-achievements">
                                            {edu.achievements.map((ach, i) => (
                                                <li key={i}>{ach}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {edu.toeic && (
                                <div ref={rightRef} className="edu-right reveal" style={{ transitionDelay: '0.2s' }}>
                                    <a
                                        href="/toeic/toeic-735.jpg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <div className="toeic-highlight-card">
                                            <div className="toeic-label">{edu.toeic.label}</div>
                                            <div className="toeic-badge">
                                                <span className="toeic-text">TOEIC</span>
                                                <span className="toeic-score">{edu.toeic.score}</span>
                                            </div>
                                            <div className="toeic-status">Certified Proficiency</div>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
