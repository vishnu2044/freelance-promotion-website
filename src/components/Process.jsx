import processSteps from "../data/process";
import useReveal from "../hooks/useReveal";

export default function Process() {
  const headerRef = useReveal();

  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Process</span>
          <h2 className="section-title">How it works</h2>
        </div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step }) {
  const ref = useReveal();

  return (
    <div className="process-step reveal" ref={ref}>
      <div className="process-step-number" aria-hidden="true">
        {step.number}
      </div>
      <h3 className="process-step-title">{step.title}</h3>
      <p className="process-step-description">{step.description}</p>
    </div>
  );
}
