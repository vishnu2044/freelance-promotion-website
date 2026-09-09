import {
  HiOutlineUser,
  HiOutlineCurrencyRupee,
  HiOutlineDevicePhoneMobile,
  HiOutlineBolt,
} from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

const reasons = [
  {
    title: "Personal attention",
    description:
      "You work directly with the person building your website.",
    icon: HiOutlineUser,
  },
  {
    title: "Affordable",
    description: "No large-agency overhead.",
    icon: HiOutlineCurrencyRupee,
  },
  {
    title: "Mobile-first",
    description:
      "Your website works properly on phones, tablets and desktops.",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    title: "Simple",
    description:
      "No unnecessary features. Just what your business actually needs.",
    icon: HiOutlineBolt,
  },
];

export default function WhyMe() {
  const headerRef = useReveal();

  return (
    <section className="section why-me" id="why-me">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Why Me</span>
          <h2 className="section-title">
            Why choose a freelance developer?
          </h2>
        </div>

        <div className="why-me-grid">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason }) {
  const ref = useReveal();
  const Icon = reason.icon;

  return (
    <div className="why-me-item reveal" ref={ref}>
      <div className="why-me-icon" aria-hidden="true">
        <Icon />
      </div>
      <h3 className="why-me-title">{reason.title}</h3>
      <p className="why-me-description">{reason.description}</p>
    </div>
  );
}
