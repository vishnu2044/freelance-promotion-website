import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import services from "../data/services";
import pricing from "../data/pricing";
import { HiCheck, HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import { scrollToSection } from "../utils/helpers";
import useReveal from "../hooks/useReveal";

export default function ServicesPage() {
  const headerRef = useReveal();

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Link to="/" className="page-back-link">
            <HiArrowLeft /> Back to Home
          </Link>
          <div className="page-hero-content reveal" ref={headerRef}>
            <span className="section-label">What I Can Offer</span>
            <h1 className="page-hero-title">Services</h1>
            <p className="page-hero-subtitle">
              Every service is tailored to your business goals — no templates, no cookie-cutter results.
              Here's what I build and how each one serves your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section">
        <div className="container">
          <div className="services-page-list">
            {services.map((service, i) => (
              <ServiceDetailCard key={service.number} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <p className="section-subtitle">No hidden fees. Choose a package or let's discuss a custom scope.</p>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="pricing-note">Final pricing depends on number of pages, design requirements and functionality.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Ready to get started?</h2>
            <p>Tell me about your project and I'll get back to you with the next steps.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceDetailCard({ service, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = service.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`services-page-card${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="services-page-card-icon" style={{ "--card-accent": service.accent }}>
        <Icon />
      </div>
      <div className="services-page-card-body">
        <span className="services-page-card-number">{service.number}</span>
        <h3 className="services-page-card-title">{service.title}</h3>
        <p className="services-page-card-description">{service.description}</p>
        <div className="service-card-tags">
          {service.tags.map((tag) => (
            <span key={tag} className="service-card-tag" style={{ "--card-accent": service.accent }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PricingCard({ plan }) {
  return (
    <div className={`pricing-card${plan.popular ? " popular" : ""}`}>
      {plan.popular && <span className="pricing-badge">Most Popular</span>}
      <h3 className="pricing-name">{plan.name}</h3>
      <span className="pricing-label">{plan.label}</span>
      <div className="pricing-price">{plan.price}</div>
      <p className="pricing-description">{plan.description}</p>
      <div className="pricing-features">
        {plan.features.map((feature) => (
          <div key={feature} className="pricing-feature">
            <HiCheck className="pricing-feature-icon" aria-hidden="true" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Link to="/contact" className={`btn pricing-cta ${plan.popular ? "btn-primary" : "btn-secondary"}`}>
        {plan.cta}
      </Link>
    </div>
  );
}
