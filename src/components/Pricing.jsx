import { HiCheck } from "react-icons/hi2";
import pricing from "../data/pricing";
import { scrollToSection } from "../utils/helpers";
import useReveal from "../hooks/useReveal";

export default function Pricing() {
  const headerRef = useReveal();

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Simple pricing</h2>
          <p className="section-subtitle">
            Clear packages without unnecessary complexity.
          </p>
        </div>

        <div className="pricing-grid">
          {pricing.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="pricing-note">
          Final pricing depends on the number of pages, design requirements and
          functionality.
        </p>
      </div>
    </section>
  );
}

function PricingCard({ plan }) {
  const ref = useReveal();

  return (
    <div
      className={`pricing-card reveal${plan.popular ? " popular" : ""}`}
      ref={ref}
    >
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
      <button
        className={`btn pricing-cta ${plan.popular ? "btn-primary" : "btn-secondary"}`}
        onClick={() => scrollToSection("contact")}
        type="button"
      >
        {plan.cta}
      </button>
    </div>
  );
}
