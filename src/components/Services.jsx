import { useRef, useEffect, useState } from "react";
import services from "../data/services";
import useReveal from "../hooks/useReveal";

export default function Services() {
  const ref = useReveal();

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <span className="section-label">Services</span>
          <h2 className="section-title">What I can build for you</h2>
          <p className="section-subtitle">
            Every project is scoped, designed, and built specifically around
            your business goals and your customers.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`service-card${visible ? " visible" : ""}${hovered ? " hovered" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated glow bar at top */}
      <div
        className="service-card-glow"
        style={{ "--card-accent": service.accent }}
        aria-hidden="true"
      />

      {/* Header row: number left, icon right */}
      <div className="service-card-header">
        <span className="service-card-number">{service.number}</span>
        <div
          className="service-card-icon"
          style={{ "--card-accent": service.accent }}
          aria-hidden="true"
        >
          <Icon />
        </div>
      </div>

      {/* Title + Description */}
      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
      </div>

      {/* Tags section */}
      {service.tags.length > 0 && (
        <div className="service-card-tags-section">
          <span className="service-card-tag-label">{service.tagLabel}:</span>
          <div className="service-card-tags">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="service-card-tag"
                style={{ "--card-accent": service.accent }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
