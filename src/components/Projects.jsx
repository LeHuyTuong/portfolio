import { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const categories = [
        { key: 'all', label: 'All Projects' },
        { key: 'star', label: '⭐ Star' },
        { key: 'business', label: '🏢 Business' }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Portfolio</span>
                    <h2>Featured <span className="gradient-text">Projects</span></h2>
                    <p>Projects where I learned the most</p>
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
                        <article
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-header">
                                <span className="project-category">{project.categoryLabel}</span>
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-display-name">{project.displayName}</p>

                            <div className="project-role">
                                <span className="role-label">Role:</span> {project.role}
                            </div>

                            <div className="project-details">
                                <div className="detail-item">
                                    <span className="detail-label">🎯 Problem:</span>
                                    <p>{project.problem}</p>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">💡 Solution:</span>
                                    <p>{project.solution}</p>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">⚡ Challenge:</span>
                                    <p>{project.challenge}</p>
                                </div>
                                {project.whatILearned && (
                                    <div className="detail-item what-learned">
                                        <span className="detail-label">🎓 What I Learned:</span>
                                        <p>{project.whatILearned}</p>
                                    </div>
                                )}
                            </div>

                            <div className="project-highlights">
                                <span className="highlights-label">Key Highlights:</span>
                                <ul>
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tech">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
