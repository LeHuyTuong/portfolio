import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, navLinks } from '../data/portfolioData';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const logoName = personalInfo.name.split(' ').pop();

    // Throttled scroll handler with requestAnimationFrame
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);

        const scrollPosition = window.scrollY + 100;
        const sections = navLinks.map(link => document.getElementById(link.id));

        sections.forEach((section, index) => {
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(navLinks[index].id);
                }
            }
        });
    }, []);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [handleScroll]);

    // Close mobile menu on Escape
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isMobileMenuOpen]);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
            <a href="#main-content" className="skip-link">Skip to main content</a>

            <div
                className={`navbar-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
            />
            <div className="navbar-container">
                <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
                    <span className="logo-text">{logoName}</span>
                    <span className="logo-dot">.</span>
                </a>

                <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`} role="navigation">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link to="/resume" className="navbar-link resume-btn">
                        Resume
                    </Link>
                </div>

                <div className="navbar-actions">
                    <ThemeToggle />
                    <button
                        className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
