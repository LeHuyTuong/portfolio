import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
    // Dynamic keys from portfolioData

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Expertise</span>
                    <h2>Technical <span className="gradient-text">Skills</span></h2>
                    <p>Technologies and tools I work with</p>
                </div>

                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="skill-category">
                            <div className="category-header">
                                <h3>{category}</h3>
                            </div>

                            <div className="skills-tags">
                                {skillList.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`skill-tag ${skill.highlight ? 'highlight' : ''}`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
