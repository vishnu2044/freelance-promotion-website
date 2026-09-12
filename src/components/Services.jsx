import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import services from "../data/services";
import industries from "../data/industries";
import useReveal from "../hooks/useReveal";

export default function Services() {
  const headerRef = useReveal();
  const clientsRef = useReveal();

  return (
    <section className="section services" id="services">
      <div className="container">

        {/* ── What I Build ── */}
        <div className="section-header-row reveal" ref={headerRef}>
          <div>
            <span className="section-label">Services</span>
            <h2 className="section-title">What I can build for you</h2>
          </div>
          <Link to="/services" className="section-header-link">
            See all services <HiArrowUpRight />
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        {/* ── Who I Build For ── */}
        <div className="services-clients-divider reveal" ref={clientsRef}>
          <span className="section-label" style={{ marginBottom: 0 }}>Ideal Clients</span>
          <p className="services-clients-heading">Built for small businesses</p>
          <p className="services-clients-sub">
            Select your industry on the services page to see exactly what I'd build for you.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item) => (
            <Link
              key={item.id}
              to={`/services#${item.id}`}
              className="industry-card industry-card--linked"
              aria-label={`See services for ${item.label}`}
            >
              <span className="industry-card-emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="industry-card-label">{item.label}</span>
            </Link>
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
      <div
        className="service-card-glow"
        style={{ "--card-accent": service.accent }}
        aria-hidden="true"
      />
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
      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
      </div>
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
