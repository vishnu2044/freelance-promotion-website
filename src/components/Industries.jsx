import useReveal from "../hooks/useReveal";

const industries = [
  "Interior Designers",
  "Construction Companies",
  "Clinics",
  "Restaurants",
  "Salons",
  "Photographers",
  "Consultants",
  "Local Service Businesses",
];

export default function Industries() {
  const ref = useReveal();

  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <span className="section-label">Ideal Clients</span>
          <h2 className="section-title">Built for small businesses</h2>
        </div>

        <div className="industries-tags">
          {industries.map((industry) => (
            <span key={industry} className="industry-tag">
              {industry}
            </span>
          ))}
        </div>

        <p className="industries-note">
          If your business needs a professional online presence without
          unnecessary complexity, I can help.
        </p>
      </div>
    </section>
  );
}
