import siteConfig from "../config/siteConfig";

/**
 * Generate a WhatsApp chat URL.
 * @param {string} [message] - Pre-filled message (optional).
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppUrl(message) {
  const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Smooth scroll to a section by ID.
 * @param {string} id - The section ID (without #).
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
