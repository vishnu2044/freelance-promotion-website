import {
  HiOutlineGlobeAlt,
  HiOutlineCamera,
  HiOutlineBolt,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional, dependable online homes for small businesses and local companies looking to build credibility and attract more customers.",
    tagLabel: "Tailored for",
    tags: ["Company websites", "Service businesses", "Consultants", "Agencies"],
    icon: HiOutlineGlobeAlt,
    accent: "#19B5C5",
  },
  {
    number: "02",
    title: "Portfolio Websites",
    description:
      "Curated, visually driven spaces to present high-resolution work, project case studies, and personal credentials that get you hired.",
    tagLabel: "Tailored for",
    tags: ["Photographers", "Designers", "Architects", "Freelancers"],
    icon: HiOutlineCamera,
    accent: "#4FAF7B",
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "High-impact, focused single-page funnels engineered to capture customer inquiries, lead submissions, or direct bookings.",
    tagLabel: "Key features",
    tags: ["Conversion-optimized", "Sub-second load times", "Crisp messaging hierarchy"],
    icon: HiOutlineBolt,
    accent: "#F59E0B",
  },
  {
    number: "04",
    title: "Website Updates & Refresh",
    description:
      "Targeted revamps, performance tune-ups, mobile-friendliness overhauls, and content restructuring for current websites.",
    tagLabel: "Key features",
    tags: ["Speed optimization", "Responsive fixes", "Visual modernisation"],
    icon: HiOutlineWrenchScrewdriver,
    accent: "#8B5CF6",
  },
];

export default services;
