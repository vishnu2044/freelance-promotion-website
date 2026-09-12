import { useState } from "react";
import { HiPaperAirplane, HiOutlineEnvelope, HiOutlinePhone, HiOutlineUser, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
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
  phone: "",
  type: "",
  message: "",
};

export default function Contact() {
  const headerRef = useReveal();
  const formRef = useReveal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setSubmitError("");

    try {
      const formData = new FormData();
      formData.append("access_key", "0b214784-f5fa-4c9b-a25c-14f834d4fcc9");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append(
        "message",
        `Business: ${form.business || "N/A"}\nPhone: ${form.phone || "N/A"}\nWebsite Type: ${form.type}\n\n${form.message}`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setSubmitError("Something went wrong. Please try again or reach out via WhatsApp.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
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

            <div className="contact-info-cards">
              <a
                href={getWhatsAppUrl()}
                className="contact-info-card whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <div className="contact-info-card-icon">
                  <IoLogoWhatsapp />
                </div>
                <div className="contact-info-card-text">
                  <span className="contact-info-card-label">WhatsApp</span>
                  <span className="contact-info-card-value">Chat instantly</span>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="contact-info-card email"
                aria-label="Send an email"
              >
                <div className="contact-info-card-icon">
                  <HiOutlineEnvelope />
                </div>
                <div className="contact-info-card-text">
                  <span className="contact-info-card-label">Email</span>
                  <span className="contact-info-card-value">{siteConfig.email !== "[YOUR EMAIL]" ? siteConfig.email : "Send a message"}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" ref={formRef}>
            {submitted ? (
              <div className="form-success" role="alert">
                <div className="form-success-icon">✓</div>
                <h3>Enquiry received!</h3>
                <p>Thank you! I'll review your message and get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Row 1: Name + Business */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">
                      <HiOutlineUser aria-hidden="true" /> Name *
                    </label>
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
                    <label htmlFor="contact-business">
                      <HiOutlineBuildingOffice2 aria-hidden="true" /> Business name
                    </label>
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

                {/* Row 2: Email + Phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-email">
                      <HiOutlineEnvelope aria-hidden="true" /> Email *
                    </label>
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
                    <label htmlFor="contact-phone">
                      <HiOutlinePhone aria-hidden="true" /> Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Website type */}
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

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message">
                    <HiOutlineChatBubbleBottomCenterText aria-hidden="true" /> Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project, goals, timeline..."
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {submitError && (
                  <p className="form-error form-error--block" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={loading}
                  aria-disabled={loading}
                >
                  <HiPaperAirplane /> {loading ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
