import { Link } from 'react-router-dom';
import { personalInfo, stats } from '../data/portfolioData';
import { GitHub, LinkedIn, Email, ArrowRight } from './Icons';
import './Hero.css';
import './HeroStats.css';

const Hero = () => {
    return (
        <section id="home" className="hero">

            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I'm
                        <span className="hero-name gradient-text"> {personalInfo.name}</span>
                    </h1>

                    <p className="hero-tagline">{personalInfo.tagline}</p>

                    <p className="hero-subtitle">{personalInfo.subtitle}</p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">{stats.javaProjects}</span>
                            <span className="stat-label">{stats.labels.java}</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">{stats.companies}</span>
                            <span className="stat-label">{stats.labels.companies}</span>
                        </div>
                    </div>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <ArrowRight />
                        </a>
                        <Link to="/resume" className="btn btn-secondary">
                            <span>View Resume</span>
                        </Link>
                    </div>

                    <div className="hero-social">
                        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <GitHub />
                        </a>
                        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <LinkedIn />
                        </a>
                        <a href={`mailto:${personalInfo.social.email}`} className="social-link" aria-label="Email">
                            <Email />
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image-container">
                        <img
                            src="/profile.jpg"
                            alt="Lê Huy Tường - Backend Developer"
                            className="hero-profile-image"
                            loading="lazy"
                            width="320"
                            height="320"
                        />
                    </div>
                </div>
            </div>

            <div className="scroll-indicator" aria-hidden="true">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
