import { FaInstagram, FaLinkedinIn, FaGithub, FaReact } from "react-icons/fa6";
import siteConfig from "../config/siteConfig";
import { scrollToSection } from "../utils/helpers";
import logoImg from "../assets/logos/logo.png";

const navLinks = [
  { label: "Services", id: "services" },
  { label: "Work", id: "portfolio" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const socialIcons = [
  { key: "instagram", icon: FaInstagram, label: "Instagram" },
  { key: "linkedin", icon: FaLinkedinIn, label: "LinkedIn" },
  { key: "github", icon: FaGithub, label: "GitHub" },
];

export default function Footer() {
  const activeSocials = socialIcons.filter(
    (s) => siteConfig.social[s.key]
  );

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <img
                src={logoImg}
                alt={`${siteConfig.name} logo`}
                className="footer-brand-logo"
                width="40"
                height="40"
              />
              <span className="footer-brand-name">{siteConfig.name}</span>
            </div>
            <div className="footer-brand-role">{siteConfig.tagline}</div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <span className="footer-links-title">Navigation</span>
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="footer-link"
                onClick={() => scrollToSection(link.id)}
                type="button"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social */}
          {activeSocials.length > 0 && (
            <div>
              <span className="footer-links-title">Connect</span>
              <div className="footer-social" style={{ marginTop: "14px" }}>
                {activeSocials.map(({ key, icon: Icon, label }) => (
                  <a
                    key={key}
                    href={siteConfig.social[key]}
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="footer-made">
            Made with <FaReact style={{ color: "#19B5C5" }} /> React
          </span>
        </div>
      </div>
    </footer>
  );
}
