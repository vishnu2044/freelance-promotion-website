import {
  HiOutlineGlobeAlt,
  HiOutlineCamera,
  HiOutlineCursorArrowRipple,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites for small businesses and local companies.",
    examples: ["Company websites", "Service businesses", "Consultants", "Agencies"],
    icon: HiOutlineGlobeAlt,
  },
  {
    number: "02",
    title: "Portfolio Websites",
    description: "Beautiful websites to showcase your work and projects.",
    examples: ["Photographers", "Designers", "Architects", "Freelancers"],
    icon: HiOutlineCamera,
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "Focused pages designed to generate enquiries, leads or bookings.",
    examples: [],
    icon: HiOutlineCursorArrowRipple,
  },
  {
    number: "04",
    title: "Website Updates",
    description:
      "Improvements, redesigns and content updates for existing websites.",
    examples: [],
    icon: HiOutlineWrenchScrewdriver,
  },
];

export default services;
