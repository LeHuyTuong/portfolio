import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { GitHub, ExternalLink } from './Icons';
import ProjectGallery from './ProjectGallery';
import { projects } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
    const ref = useScrollReveal();
    return (
        <article
            ref={ref}
            className={`project-card reveal ${project.featured ? 'featured' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="project-header">
                <span className="project-category">{project.categoryLabel}</span>
                <span className="project-role-badge">{project.role}</span>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub" aria-label="View source on GitHub">
                            <GitHub size={18} />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo" aria-label="View live demo">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="project-title">{project.title}</h3>

            {/* Shipped products lead with real screens from the running deployment —
                the whole point is that it is live, not described. */}
            {project.gallery && project.demo && (
                <ProjectGallery slides={project.gallery} href={project.demo} title={project.title} />
            )}

            {!project.gallery && project.image && project.demo && (
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-preview"
                    aria-label={`Open the live ${project.title} deployment`}
                >
                    <img src={getAssetUrl(project.image)} alt={project.imageAlt || `${project.title} screenshot`} loading="lazy" />
                    <span className="project-preview-cta">
                        Visit live site
                        <ExternalLink size={14} />
                    </span>
                </a>
            )}

            <p className="project-summary">{project.solution}</p>

            <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                ))}
            </ul>

            {project.evidence && (
                <figure className="project-evidence">
                    <a href={project.evidence.url} target="_blank" rel="noopener noreferrer">
                        <img src={getAssetUrl(project.evidence.image)} alt={project.evidence.alt} loading="lazy" />
                    </a>
                    <figcaption>{project.evidence.caption}</figcaption>
                </figure>
            )}

            <div className="project-tech">
                {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                ))}
                {project.productPage && (
                    <a
                        href={project.productPage.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-tag tech-tag-link"
                    >
                        {project.productPage.label}
                        <ExternalLink size={12} />
                    </a>
                )}
            </div>
        </article>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const categories = [
        { key: 'all', label: 'All Projects' },
        { key: 'fintech', label: '🏦 Fintech' },
        { key: 'enterprise', label: '⚡ Enterprise' },
        { key: 'product', label: '🎨 Product' }
    ];

    const filteredProjects = filter === 'all'
        ? projects.filter(p => !p.hidden)
        : projects.filter(p => p.category === filter && !p.hidden);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Portfolio</span>
                    <h2>Featured <span className="gradient-text">Projects</span></h2>
                    <p>Building reliable systems with technical depth</p>
                </div>

                <div className="project-filters">
                    {categories.map(cat => (
                        <button
                            key={cat.key}
                            className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
                            onClick={() => setFilter(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
