/**
 * Portfolio Projects
 * ==================
 * Each project:
 *   - id, title, category, description
 *   - targetClient: who this was built for
 *   - about: 2-3 sentence detail about the project
 *   - specialties: array of highlight tags
 *   - image: path to screenshot (place in /public/projects/)
 *   - url: live site link (or "#" if not available)
 *   - color: accent color for the placeholder mockup
 */

const projects = [
  {
    id: 1,
    title: "Oud Al Hera",
    category: "Luxury Perfume & E-Commerce",
    description:
      "An evocative, high-end digital showcase for an artisanal luxury fragrance house featuring interactive discovery.",
    targetClient: "Artisan luxury fragrance brand targeting premium customers",
    about:
      "Oud Al Hera needed a digital presence that matched the artistry of their handcrafted fragrances. We built an immersive showcase site with cinematic scroll animations, a curated product discovery flow, and a refined editorial aesthetic. Every interaction was designed to evoke the same sensory richness as the product itself.",
    specialties: [
      "Cinematic Scroll Animations",
      "Product Discovery Flow",
      "High-End Visual Design",
      "Mobile-First Layout",
      "Fast Load Times",
    ],
    image: "/projects/oud-al-hera.webp",
    url: "https://perfume-site-demo.vercel.app/",
    color: "#1B4332",
  },
];

export default projects;
