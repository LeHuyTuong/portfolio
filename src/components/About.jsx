import useScrollReveal from '../hooks/useScrollReveal';
import { professionalSummary, softSkills } from '../data/portfolioData';
import './About.css';

const About = () => {
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal();

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-grid">
                    <div ref={leftRef} className="about-summary reveal" style={{ transitionDelay: '0.1s' }}>
                        <div className="section-header" style={{ textAlign: 'left', marginBottom: '30px' }}>
                            <h2 className="gradient-text">{professionalSummary.title}</h2>
                        </div>
                        <div className="professional-cards-grid">
                            {professionalSummary.cards.map((card, index) => (
                                <div key={index} className="professional-card card">
                                    <div className="card-icon">{card.icon}</div>
                                    <div className="card-info">
                                        <h4>{card.title}</h4>
                                        <p>{card.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div ref={rightRef} className="about-skills reveal" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="skills-title">Core Competencies</h3>
                        <div className="soft-skills-grid">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="soft-skill-card card">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <div className="skill-info">
                                        <h4>{skill.name}</h4>
                                        <p>{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
