import useScrollReveal from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolioData';
import { Email, Phone, Location, GitHub, LinkedIn } from './Icons';
import './Contact.css';

const Contact = () => {
    const ref = useScrollReveal();

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Get in Touch</span>
                    <h2>Let's <span className="gradient-text">Connect</span></h2>
                    <p>Have a question or opportunity? Let's connect!</p>
                </div>

                <div ref={ref} className="contact-card reveal">
                    <div className="contact-info-grid">
                        <a href={`mailto:${personalInfo.email}`} className="contact-info-item">
                            <div className="info-icon"><Email size={20} /></div>
                            <div className="info-content">
                                <span className="info-label">Email</span>
                                <span className="info-value">{personalInfo.email}</span>
                            </div>
                        </a>

                        <a href={`tel:${personalInfo.phone}`} className="contact-info-item">
                            <div className="info-icon"><Phone /></div>
                            <div className="info-content">
                                <span className="info-label">Phone</span>
                                <span className="info-value">{personalInfo.phone}</span>
                            </div>
                        </a>

                        <div className="contact-info-item">
                            <div className="info-icon"><Location /></div>
                            <div className="info-content">
                                <span className="info-label">Location</span>
                                <span className="info-value">{personalInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-actions">
                        <a
                            href={`mailto:${personalInfo.email}?subject=Let's Connect – Portfolio`}
                            className="btn btn-primary contact-cta-btn"
                        >
                            <Email size={18} />
                            <span>Send me an Email</span>
                        </a>
                        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            GitHub
                        </a>
                        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
