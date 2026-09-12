import useReveal from "../hooks/useReveal";

const industries = [
  { label: "Salons & Spas", emoji: "💇" },
  { label: "Restaurants & Cafés", emoji: "🍽️" },
  { label: "Clinics & Healthcare", emoji: "🏥" },
  { label: "Interior Designers", emoji: "🪴" },
  { label: "Photographers", emoji: "📷" },
  { label: "Consultants", emoji: "💼" },
  { label: "Construction & Trades", emoji: "🏗️" },
  { label: "Local Services", emoji: "📍" },
];

export default function Industries() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Ideal Clients</span>
          <h2 className="section-title">Built for small businesses</h2>
          <p className="section-subtitle">
            If your business needs a professional online presence without
            unnecessary complexity, I can help.
          </p>
        </div>

        <div className="industries-grid reveal" ref={gridRef}>
          {industries.map((item) => (
            <div key={item.label} className="industry-card">
              <span className="industry-card-emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="industry-card-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
