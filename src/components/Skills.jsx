import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        { key: 'backend', title: 'Backend', icon: '⚙️' },
        { key: 'database', title: 'Database', icon: '🗄️' },
        { key: 'devops', title: 'DevOps & Deployment', icon: '🚀' },
        { key: 'others', title: 'Other Skills', icon: '🛠️' }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Expertise</span>
                    <h2>Technical <span className="gradient-text">Skills</span></h2>
                    <p>Technologies and tools I work with</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <div key={category.key} className="skill-category">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skills-tags">
                                {skills[category.key]?.map((skill) => (
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
