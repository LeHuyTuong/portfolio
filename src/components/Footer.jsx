import { personalInfo } from '../data/portfolioData';
import { GitHub, LinkedIn } from './Icons';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const logoName = personalInfo.name.split(' ').pop();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-logo">
                            {logoName}
                            <span className="logo-dot">.</span>
                        </span>
                        <p className="footer-tagline">
                            Junior Backend Developer | Java & Spring Boot
                        </p>
                    </div>

                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-social">
                        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <GitHub size={20} />
                        </a>
                        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <LinkedIn size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {currentYear} {personalInfo.name}. Built with technical discipline ❤️
                    </p>
                    {personalInfo.lastUpdated && (
                        <p className="last-updated">
                            Last Updated: {personalInfo.lastUpdated}
                        </p>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
