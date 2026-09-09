import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import siteConfig from "../config/siteConfig";
import { getWhatsAppUrl } from "../utils/helpers";
import useReveal from "../hooks/useReveal";

const websiteTypes = [
  "Business Website",
  "Portfolio Website",
  "Landing Page",
  "Website Update / Redesign",
  "Other",
];

const initialForm = {
  name: "",
  business: "",
  email: "",
  type: "",
  message: "",
};

export default function Contact() {
  const headerRef = useReveal();
  const formRef = useReveal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email.";
    }
    if (!form.type) errs.type = "Please select a website type.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      /**
       * TODO: Connect your form backend here.
       * Options:
       *   - Formspree: action="https://formspree.io/f/YOUR_ID" method="POST"
       *   - Web3Forms: fetch("https://api.web3forms.com/submit", {...})
       *   - EmailJS: emailjs.send(serviceID, templateID, form)
       *   - Custom backend: fetch("/api/contact", {...})
       *
       * For now, we just log and show success.
       */
      console.log("Form submission:", form);
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left: CTA */}
          <div className="reveal" ref={headerRef}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Have a project in mind?</h2>
            <p className="section-subtitle">
              Tell me a little about your business and what you need. I'll get
              back to you with the next steps.
            </p>

            <div className="contact-cta-buttons">
              <a
                href={getWhatsAppUrl()}
                className="contact-cta-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <IoLogoWhatsapp /> Chat on WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="contact-cta-btn email"
                aria-label="Send an email"
              >
                <HiOutlineEnvelope /> Send an Email
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" ref={formRef}>
            {submitted ? (
              <div className="form-success" role="alert">
                Thank you! Your enquiry has been received. I'll get back to you
                soon.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <span className="form-error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-business">Business name</label>
                    <input
                      id="contact-business"
                      type="text"
                      name="business"
                      placeholder="Your business"
                      value={form.business}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-type">
                    What type of website do you need? *
                  </label>
                  <select
                    id="contact-type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.type}
                  >
                    <option value="" disabled>
                      Select a type
                    </option>
                    {websiteTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.type && (
                    <span className="form-error" role="alert">
                      {errors.type}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                >
                  <HiPaperAirplane /> Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
