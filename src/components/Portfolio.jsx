import { HiArrowUpRight } from "react-icons/hi2";
import projects from "../data/projects";
import useReveal from "../hooks/useReveal";

export default function Portfolio() {
  const headerRef = useReveal();

  // First project is featured, rest are secondary
  const [featured, ...rest] = projects;

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A featured project showcasing modern design, interactive storytelling, and fast performance.
          </p>
        </div>

        <div className="portfolio-grid">
          <ProjectCard project={featured} featured />
          {rest.length > 0 && (
            <div className="portfolio-grid-sub">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }) {
  const ref = useReveal();

  return (
    <article
      className={`project-card reveal${featured ? " featured" : ""}`}
      ref={ref}
    >
      <div className="project-card-image">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} — ${project.category} website`}
            loading="lazy"
            decoding="async"
            width="800"
            height="500"
          />
        ) : (
          <ProjectPlaceholder project={project} />
        )}
      </div>
      <div className="project-card-info">
        <span className="project-card-category">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <a
          href={project.url}
          className="project-card-link"
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
