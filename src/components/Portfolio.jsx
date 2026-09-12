import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import projects from "../data/projects";
import useReveal from "../hooks/useReveal";

export default function Portfolio() {
  const headerRef = useReveal();

  // Show max 3 on home page
  const preview = projects.slice(0, 3);

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        {/* Header with inline "View All" link */}
        <div className="section-header-row reveal" ref={headerRef}>
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Selected work</h2>
          </div>
          <Link to="/work" className="section-header-link">
            View all work <HiArrowUpRight />
          </Link>
        </div>

        <div className="portfolio-home-grid">
          {preview.map((project) => (
            <HomeProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeProjectCard({ project }) {
  const ref = useReveal();

  return (
    <article className="home-project-card reveal" ref={ref}>
      <div className="home-project-card-image">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} — ${project.category} website`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <ProjectPlaceholder project={project} />
        )}
      </div>
      <div className="home-project-card-info">
        <span className="project-card-category">{project.category}</span>
        <h3 className="home-project-card-title">{project.title}</h3>
        <a
          href={project.url}
          className="home-project-card-link"
          target={project.url !== "#" ? "_blank" : undefined}
          rel={project.url !== "#" ? "noopener noreferrer" : undefined}
          aria-label={`View ${project.title} project`}
        >
          View Project <HiArrowUpRight />
        </a>
      </div>
    </article>
  );
}

function ProjectPlaceholder({ project }) {
  return (
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
          <div className="project-placeholder-bar" style={{ background: `${project.color}10` }}></div>
        </div>
      </div>
    </div>
  );
}
