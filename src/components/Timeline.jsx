import { timeline } from '../data/portfolioData';
import './Timeline.css';

const Timeline = () => {
    return (
        <section id="journey" className="section timeline-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Evolution</span>
                    <h2>My <span className="gradient-text">Journey</span></h2>
                    <p>My path from CS fundamentals to Backend Development</p>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    {timeline.map((item, index) => (
                        <div
                            key={item.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="timeline-marker">
                                <span className="marker-icon">{item.icon}</span>
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-year">{item.year}</div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-description">{item.description}</p>
                                <span className={`timeline-type ${item.type}`}>{item.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
