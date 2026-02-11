import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Learning Path</span>
                    <h2>Education & <span className="gradient-text">Certifications</span></h2>
                    <p>My academic foundation and professional credentials</p>
                </div>

                <div className="education-grid single-column">
                    <div className="edu-list">
                        {education.map(edu => (
                            <div key={edu.id} className="edu-card">
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
