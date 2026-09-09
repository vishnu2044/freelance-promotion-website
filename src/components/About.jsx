import useReveal from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <span className="section-label">About</span>
          <h2 className="section-title">A little about me</h2>
        </div>

        <div className="about-inner">
          <div className="about-text">
            <p>
              I'm a freelance web developer focused on creating clean, modern
              and practical websites for businesses and individuals.
            </p>
            <p>
              My approach is simple: understand the business, build something
              that looks professional, and make it easy for customers to get in
              touch.
            </p>
          </div>

          <div className="about-visual" aria-hidden="true">
            <div className="about-code-block">
              <div className="code-line">
                <span className="code-comment">{"// developer.js"}</span>
              </div>
              <div className="code-line">
                <span className="code-bracket">{"const "}</span>
                <span className="code-key">developer</span>
                <span className="code-bracket">{" = {"}</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">focus</span>:{" "}
                <span className="code-string">"web development"</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">approach</span>:{" "}
                <span className="code-string">"clean & practical"</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">clients</span>:{" "}
                <span className="code-string">"small businesses"</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">goal</span>:{" "}
                <span className="code-string">"make it professional"</span>,
              </div>
              <div className="code-line">
                <span className="code-bracket">{"}"}</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
