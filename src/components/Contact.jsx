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

                <div className="contact-wrapper contact-centered">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="info-description">
                            Feel free to reach out for collaboration or networking!
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">📧</div>
                                <div className="info-content">
                                    <span className="info-label">Email</span>
                                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📱</div>
                                <div className="info-content">
                                    <span className="info-label">Phone</span>
                                    <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div className="info-content">
                                    <span className="info-label">Location</span>
                                    <span>{personalInfo.location}</span>
                                </div>
                            </div>


                        </div>

                        <div className="contact-social">
                            <span>Connect on:</span>
                            <div className="social-links">
                                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                                    GitHub
                                </a>
                                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
