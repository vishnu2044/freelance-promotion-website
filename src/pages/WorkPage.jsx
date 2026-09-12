import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import projects from "../data/projects";
import useReveal from "../hooks/useReveal";

export default function WorkPage() {
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
            <span className="section-label">Portfolio</span>
            <h1 className="page-hero-title">Selected Work</h1>
            <p className="page-hero-subtitle">
              Real projects built for real businesses. Each one crafted with a focus on performance,
              design, and delivering results for the client.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="work-page-grid">
            {projects.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
            {/* Placeholder card encouraging more work */}
            <ComingSoonCard />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Want your project featured here?</h2>
            <p>Let's build something worth showing off.</p>
            <Link to="/contact" className="btn btn-primary">
              Start a Project <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkCard({ project }) {
  const ref = useReveal();

  return (
    <article className="work-page-card reveal" ref={ref}>
      <div className="work-page-card-image">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} — ${project.category} website`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="project-placeholder"
            style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}
          >
            <div className="project-placeholder-mockup">
              <div className="project-placeholder-toolbar">
                <span className="project-placeholder-toolbar-dot"></span>
                <span className="project-placeholder-toolbar-dot"></span>
                <span className="project-placeholder-toolbar-dot"></span>
              </div>
              <div className="project-placeholder-content">
                <div className="project-placeholder-bar" style={{ background: `${project.color}33` }}></div>
                <div className="project-placeholder-bar" style={{ background: `${project.color}22` }}></div>
                <div className="project-placeholder-bar" style={{ background: `${project.color}18` }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="work-page-card-info">
        <span className="project-card-category">{project.category}</span>
        <h3 className="work-page-card-title">{project.title}</h3>
        <p className="work-page-card-description">{project.description}</p>
        <a
          href={project.url}
          className="project-card-link"
          target={project.url !== "#" ? "_blank" : undefined}
          rel={project.url !== "#" ? "noopener noreferrer" : undefined}
          aria-label={`View ${project.title} project`}
        >
          View Live Site <HiArrowUpRight />
        </a>
      </div>
    </article>
  );
}

function ComingSoonCard() {
  return (
    <article className="work-page-card work-page-card--coming-soon">
      <div className="work-coming-soon-inner">
        <div className="work-coming-soon-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <p className="work-coming-soon-text">More projects coming soon</p>
        <Link to="/contact" className="btn btn-secondary" style={{ marginTop: "16px" }}>
          Work With Me
        </Link>
      </div>
    </article>
  );
}
