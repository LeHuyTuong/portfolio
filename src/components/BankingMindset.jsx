import { bankingMindset } from '../data/portfolioData';
import './BankingMindset.css';

const BankingMindset = () => {
    return (
        <section id="mindset" className="section mindset-section">
            <div className="container">
                <div className="mindset-header">
                    <span className="section-label">Philosophy</span>
                    <h2 className="gradient-text">{bankingMindset.title}</h2>
                    <p className="mindset-subtitle">{bankingMindset.subtitle}</p>
                </div>

                <div className="mindset-content">
                    <div className="mindset-quote">
                        <div className="quote-icon">"</div>
                        <p>{bankingMindset.description}</p>
                    </div>

                    <div className="mindset-principles">
                        {bankingMindset.principles.map((principle, index) => (
                            <div
                                key={index}
                                className="principle-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="principle-icon">{principle.icon}</div>
                                <h3>{principle.title}</h3>
                                <p>{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="mindset-decoration">
                <div className="decoration-line"></div>
            </div>
        </section>
    );
};

export default BankingMindset;
