import useScrollReveal from '../hooks/useScrollReveal';
import { skills } from '../data/portfolioData';
import './Skills.css';

const SkillCategory = ({ category, skillList, index }) => {
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="skill-category reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="category-header">
                <h3>{category}</h3>
            </div>
            <div className="skills-tags">
                {skillList.map((skill) => (
                    <span
                        key={skill.name}
                        className={`skill-tag ${skill.tier ? `tier-${skill.tier}` : ''}`}
                    >
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Expertise</span>
                    <h2>Technical <span className="gradient-text">Skills</span></h2>
                    <p>Core backend infrastructure and fintech domain expertise</p>
                </div>

                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <SkillCategory key={category} category={category} skillList={skillList} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
