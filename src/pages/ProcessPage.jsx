import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { HiArrowLeft, HiArrowUpRight, HiOutlineLightBulb, HiOutlineClock } from "react-icons/hi2";
import processSteps from "../data/process";
import useReveal from "../hooks/useReveal";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects are completed within 2–4 weeks from the discovery call. Simple landing pages can be done in under a week. Timelines depend on content readiness and revision rounds.",
  },
  {
    q: "Do I need to provide the content?",
    a: "Yes — you know your business best. I'll guide you on what's needed (text, images, logo) and help structure it effectively. I can also recommend copywriting resources if needed.",
  },
  {
    q: "How many revisions do I get?",
    a: "I include two rounds of revisions in every project. This is usually more than enough to get everything exactly right.",
  },
  {
    q: "Do you handle hosting and domain?",
    a: "Yes — I set up and configure your hosting and connect your custom domain as part of the launch step. I'll walk you through managing it yourself afterward.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Minor tweaks are covered for 30 days post-launch. For ongoing changes or updates, I offer flexible maintenance packages.",
  },
];

export default function ProcessPage() {
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
            <span className="section-label">How It Works</span>
            <h1 className="page-hero-title">My Process</h1>
            <p className="page-hero-subtitle">
              A clear, collaborative workflow from the first conversation to your website going live —
              with no surprises along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="process-page-timeline">
            {processSteps.map((step, i) => (
              <ProcessPageStep key={step.number} step={step} index={i} isLast={i === processSteps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* What to expect callouts */}
      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What to Expect</span>
            <h2 className="section-title">Working together</h2>
          </div>
          <div className="process-callouts">
            <div className="process-callout">
              <div className="process-callout-icon"><HiOutlineClock /></div>
              <h3>Typical Timeline</h3>
              <p>Most projects are completed in <strong>2–4 weeks</strong>. Landing pages can be turned around in under a week. I'll give you a clear timeline estimate after our discovery call.</p>
            </div>
            <div className="process-callout">
              <div className="process-callout-icon"><HiOutlineLightBulb /></div>
              <h3>What You Need to Prepare</h3>
              <p>Your <strong>logo, brand colors, and any copy / photos</strong> you have ready. Don't worry if they're not polished — I'll help structure everything into a professional result.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common questions</h2>
          </div>
          <div className="process-faq">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Ready to kick things off?</h2>
            <p>Step 1 is just a conversation. Let's talk about your project.</p>
            <Link to="/contact" className="btn btn-primary">
              Start With Step 1 <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessPageStep({ step, index, isLast }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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
      className={`process-timeline-step${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="process-timeline-left">
        <div className="process-timeline-number">{step.number}</div>
        {!isLast && <div className="process-timeline-line" aria-hidden="true" />}
      </div>
      <div className="process-timeline-content">
        <span className="process-card-tag-dot" aria-hidden="true" />
        <span className="process-tag-inline">{step.tag}</span>
        <h3 className="process-timeline-title">{step.title}</h3>
        <p className="process-timeline-description">{step.description}</p>
      </div>
    </div>
  );
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal();

  return (
    <div className={`faq-item reveal${open ? " open" : ""}`} ref={ref}>
      <button
        className="faq-question"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        type="button"
      >
        {faq.q}
        <span className="faq-chevron" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="faq-answer">{faq.a}</p>}
    </div>
  );
}
