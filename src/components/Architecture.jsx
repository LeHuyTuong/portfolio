import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { ArrowRight } from './Icons';
import './Architecture.css';

const flowNodes = [
    { icon: '📱', title: 'Client / Partner', desc: 'REST & gRPC APIs with JWT + RBAC' },
    { icon: '⚙️', title: 'API Gateway', desc: 'Rate limiting, request validation, routing' },
    { icon: '🔒', title: 'Core Services', desc: 'Spring Boot 3 · CQRS · Distributed Locking' },
    { icon: '🗄️', title: 'Data Layer', desc: 'PostgreSQL · Redis · Transactional Outbox' },
];

const pillars = [
    {
        icon: '🛡️',
        title: 'Data Integrity',
        desc: 'ACID transactions, idempotency keys, append-only ledgers. Every financial operation is traceable.',
        metric: 'Zero-Loss',
    },
    {
        icon: '⚡',
        title: 'High Reliability',
        desc: 'Distributed locking, circuit breakers, retry with backoff. Systems stay available under load.',
        metric: '99.9%',
    },
    {
        icon: '🔍',
        title: 'Observability',
        desc: 'Structured logging, W3C Trace Context, distributed tracing with traceId/spanId propagation.',
        metric: 'Traceable',
    },
];

const Architecture = () => {
    const flowRef = useScrollReveal();
    const pillarsRef = useScrollReveal();

    return (
        <section id="architecture" className="section architecture-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">System Design</span>
                    <h2>
                        How I <span className="gradient-text">Architect</span> Systems
                    </h2>
                    <p>
                        Designing reliable, traceable financial services from client to database
                    </p>
                </div>

                {/* Flow Diagram */}
                <div ref={flowRef} className="arch-flow reveal">
                    {flowNodes.map((node, i) => (
                        <React.Fragment key={i}>
                            <div className="arch-node">
                                <div className="arch-node-icon">{node.icon}</div>
                                <h4>{node.title}</h4>
                                <p>{node.desc}</p>
                            </div>
                            {i < flowNodes.length - 1 && (
                                <div className="arch-arrow" aria-hidden="true">
                                    <ArrowRight size={28} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Engineering Pillars */}
                <div ref={pillarsRef} className="arch-pillars reveal" style={{ transitionDelay: '0.2s' }}>
                    {pillars.map((p, i) => (
                        <div key={i} className="arch-pillar">
                            <div className="arch-pillar-icon">{p.icon}</div>
                            <h4>{p.title}</h4>
                            <p>{p.desc}</p>
                            <span className="metric">{p.metric}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Architecture;
