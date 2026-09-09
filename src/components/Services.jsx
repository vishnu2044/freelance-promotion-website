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
            Simple websites designed around your business and your customers.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const ref = useReveal();
  const Icon = service.icon;

  return (
    <div className="service-card reveal" ref={ref}>
      <span className="service-card-number">{service.number}</span>
      <div className="service-card-icon" aria-hidden="true">
        <Icon />
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-description">{service.description}</p>
      {service.examples.length > 0 && (
        <div className="service-card-examples">
          {service.examples.map((example) => (
            <span key={example} className="service-card-example">
              {example}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
