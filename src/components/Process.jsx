import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import processSteps from "../data/process";
import useReveal from "../hooks/useReveal";

export default function Process() {
  const headerRef = useReveal();

  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Process</span>
          <h2 className="section-title">How it works</h2>
          <p className="section-subtitle">
            A clear, proven workflow — from our first conversation to your site going live.
          </p>
        </div>

        <div className="process-cards">
          {processSteps.map((step, i) => (
            <ProcessCard key={step.number} step={step} index={i} />
          ))}
        </div>

        <div className="section-view-more">
          <Link to="/process" className="btn btn-secondary">
            See Full Process →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`process-card${visible ? " visible" : ""}${hovered ? " hovered" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${index * 110}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent line that grows on hover */}
      <div className="process-card-accent" aria-hidden="true" />

      {/* Step number badge */}
      <div className="process-card-number" aria-hidden="true">
        {step.number}
      </div>

      {/* Content */}
      <div className="process-card-content">
        <h3 className="process-card-title">{step.title}</h3>
        <p className="process-card-description">{step.description}</p>
      </div>

      {/* Tag at the bottom */}
      <div className="process-card-tag">
        <span className="process-card-tag-dot" aria-hidden="true" />
        {step.tag}
      </div>
    </div>
  );
}
