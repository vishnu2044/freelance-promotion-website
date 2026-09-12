import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import services from "../data/services";
import industries from "../data/industries";
import pricing from "../data/pricing";
import { HiCheck, HiArrowLeft, HiArrowUpRight, HiCheckBadge } from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

export default function ServicesPage() {
  const headerRef = useReveal();
  const location = useLocation();

  // Scroll to industry picker if a hash is present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => {
        const el = document.getElementById("industry-picker");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

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
              Every service is tailored to your business goals — no templates,
              no cookie-cutter results. Here's what I build and how each one
              serves your customers.
            </p>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Service Types</span>
            <h2 className="section-title">What I build</h2>
          </div>
          <div className="services-page-list">
            {services.map((service, i) => (
              <ServiceDetailCard key={service.number} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Industry Picker */}
      <section
        className="section"
        id="industry-picker"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-label">Ideal Clients</span>
            <h2 className="section-title">Built for small businesses</h2>
            <p className="section-subtitle">
              Select your industry below to see exactly what I'd build for you —
              specific features, deliverables, and typical outcomes.
            </p>
          </div>
          <IndustryPicker initialHash={location.hash} />
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <p className="section-subtitle">
              No hidden fees. Choose a package or let's discuss a custom scope.
            </p>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="pricing-note">
            Final pricing depends on number of pages, design requirements and
            functionality.
          </p>
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

/* ── Interactive Industry Picker ── */
function IndustryPicker({ initialHash }) {
  const [activeId, setActiveId] = useState(() => {
    if (initialHash) {
      const id = initialHash.slice(1);
      const found = industries.find((i) => i.id === id);
      if (found) return found.id;
    }
    return industries[0].id;
  });

  const active = industries.find((i) => i.id === activeId) || industries[0];

  return (
    <div className="industry-picker">
      {/* Tab row */}
      <div className="industry-picker-tabs" role="tablist" aria-label="Select your industry">
        {industries.map((industry) => (
          <button
            key={industry.id}
            role="tab"
            aria-selected={activeId === industry.id}
            className={`industry-tab${activeId === industry.id ? " active" : ""}`}
            onClick={() => setActiveId(industry.id)}
            type="button"
          >
            <span className="industry-tab-emoji" aria-hidden="true">
              {industry.emoji}
            </span>
            {industry.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="industry-panel" key={activeId} role="tabpanel">
        <div className="industry-panel-inner">
          {/* Left: content */}
          <div className="industry-panel-content">
            <div className="industry-panel-header">
              <span className="industry-panel-emoji" aria-hidden="true">
                {active.emoji}
              </span>
              <div>
                <h3 className="industry-panel-title">{active.label}</h3>
                <span className="industry-panel-badge">{active.websiteType}</span>
              </div>
            </div>

            <p className="industry-panel-tagline">{active.tagline}</p>
            <p className="industry-panel-description">{active.description}</p>

            <div className="industry-panel-features">
              {active.features.map((f) => (
                <div key={f.title} className="industry-panel-feature">
                  <HiCheckBadge className="industry-panel-feature-icon" aria-hidden="true" />
                  <div>
                    <span className="industry-panel-feature-title">{f.title}</span>
                    <span className="industry-panel-feature-detail">{f.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="industry-panel-outcome">
              <span className="industry-panel-outcome-label">Typical Outcome</span>
              <span className="industry-panel-outcome-value">{active.outcome}</span>
            </div>
          </div>

          {/* Right: mock browser */}
          <div className="industry-panel-mockup" aria-hidden="true">
            <div className="mock-browser">
              <div className="mock-browser-bar">
                <div className="mock-browser-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="mock-browser-url">aruvi.design/{active.id}</div>
                <div className="mock-browser-live">● Live</div>
              </div>
              <div className="mock-browser-body">
                <div className="mock-content-label">{active.label.toUpperCase()}</div>
                <div className="mock-content-headline">{active.tagline}</div>
                <div className="mock-content-cards">
                  {active.features.slice(0, 2).map((f) => (
                    <div key={f.title} className="mock-content-card">
                      <div className="mock-content-card-label">{f.title.toUpperCase()}</div>
                      <div className="mock-content-card-value">{f.detail}</div>
                    </div>
                  ))}
                </div>
                <div className="mock-content-outcome">
                  <span>{active.outcome}</span>
                  <span className="mock-badge">Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA below picker */}
      <div className="industry-picker-cta">
        <Link to="/contact" className="btn btn-primary">
          Get a site like this <HiArrowUpRight />
        </Link>
      </div>
    </div>
  );
}

/* ── Service detail card ── */
function ServiceDetailCard({ service, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
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
      <div
        className="services-page-card-icon"
        style={{ "--card-accent": service.accent }}
      >
        <Icon />
      </div>
      <div className="services-page-card-body">
        <span className="services-page-card-number">{service.number}</span>
        <h3 className="services-page-card-title">{service.title}</h3>
        <p className="services-page-card-description">{service.description}</p>
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
    </div>
  );
}

/* ── Pricing card ── */
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
      <Link
        to="/contact"
        className={`btn pricing-cta ${plan.popular ? "btn-primary" : "btn-secondary"}`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
