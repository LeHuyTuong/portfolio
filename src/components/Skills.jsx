import useScrollReveal from '../hooks/useScrollReveal';
import { skills } from '../data/portfolioData';
import { CodeIcon, ServerIcon, MonitorIcon, DatabaseIcon, BuildingIcon, ToolIcon, BankIcon } from './Icons';
import './Skills.css';

const getCategoryIcon = (category) => {
    switch (category) {
        case "Languages": return <CodeIcon size={22} />;
        case "Backend & Frameworks": return <ServerIcon size={22} />;
        case "Observability": return <MonitorIcon size={22} />;
        case "Databases & Caching": return <DatabaseIcon size={22} />;
        case "Architecture & Engineering": return <BuildingIcon size={22} />;
        case "DevOps & Tools": return <ToolIcon size={22} />;
        case "Domain Exposure": return <BankIcon size={22} />;
        default: return <CodeIcon size={22} />;
    }
};

const SkillCategory = ({ category, skillList, index }) => {
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="skill-category reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="category-header">
                <div className="category-icon-wrapper">
                    {getCategoryIcon(category)}
                </div>
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
