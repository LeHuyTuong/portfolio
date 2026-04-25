import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Get in Touch</span>
                    <h2>Let's <span className="gradient-text">Connect</span></h2>
                    <p>Have a question or opportunity? Let's connect!</p>
                </div>

                <div className="contact-card">
                    <div className="contact-info-grid">
                        <a href={`mailto:${personalInfo.email}`} className="contact-info-item">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <span className="info-label">Email</span>
                                <span className="info-value">{personalInfo.email}</span>
                            </div>
                        </a>

                        <a href={`tel:${personalInfo.phone}`} className="contact-info-item">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <span className="info-label">Phone</span>
                                <span className="info-value">{personalInfo.phone}</span>
                            </div>
                        </a>

                        <div className="contact-info-item">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
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
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                            </svg>
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
