import { IoLogoWhatsapp } from "react-icons/io5";
import { getWhatsAppUrl } from "../utils/helpers";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <IoLogoWhatsapp />
    </a>
  );
}
