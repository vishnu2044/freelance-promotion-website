import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero page-hero--compact">
        <div className="container">
          <Link to="/" className="page-back-link">
            <HiArrowLeft /> Back to Home
          </Link>
          <div className="page-hero-content">
            <span className="section-label">Get In Touch</span>
            <h1 className="page-hero-title">Let's build something great</h1>
            <p className="page-hero-subtitle">
              Fill in the form below or reach out directly — whichever is easier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Reuse Contact section */}
      <Contact />
    </div>
  );
}
