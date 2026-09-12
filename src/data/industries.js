/**
 * Industries Data
 * ===============
 * Each industry has:
 *   - id, label, emoji
 *   - tagline: short hook shown in the panel
 *   - description: what kind of website we build for them
 *   - features: 4 specific deliverables (title + detail)
 *   - outcome: typical result
 *   - websiteType: badge shown in panel header
 */

const industries = [
  {
    id: "interior-designers",
    label: "Interior Designers",
    emoji: "🪴",
    websiteType: "Portfolio & High-Ticket",
    tagline: "Showcase transformations that attract luxury clients",
    description:
      "We design editorial-style galleries that showcase before/after transformations, room-by-room aesthetics, and integrate smooth consultation booking calendars so you spend time designing, not back-and-forth emailing.",
    features: [
      { title: "Visual Project Galleries", detail: "Fast-loading hi-res showcase" },
      { title: "Consultation Scheduler", detail: "Syncs to Calendly/Google Calendar" },
      { title: "Client Intake Questionnaire", detail: "Screens budget and room dimensions" },
      { title: "Local SEO Targeting", detail: "Rank for high-intent nearby zip codes" },
    ],
    outcome: "+70% Qualified Inquiries",
  },
  {
    id: "restaurants",
    label: "Restaurants & Cafés",
    emoji: "🍽️",
    websiteType: "Menu & Reservations",
    tagline: "Turn online browsers into booked tables",
    description:
      "We build appetite-driven websites with digital menus, reservation widgets, and Google Maps integration so customers find you easily and book instantly — without calling.",
    features: [
      { title: "Digital Menu", detail: "Easy to update, mobile-optimised" },
      { title: "Online Reservations", detail: "Integrated with your booking system" },
      { title: "Google Maps & Hours", detail: "Always-accurate local info" },
      { title: "Photo Showcase", detail: "Professional food & ambience gallery" },
    ],
    outcome: "+50% Direct Bookings",
  },
  {
    id: "clinics",
    label: "Clinics & Healthcare",
    emoji: "🏥",
    websiteType: "Trust & Appointments",
    tagline: "Build patient trust and fill appointment slots",
    description:
      "We create clean, professional clinic websites with appointment booking, doctor profiles, and service pages that communicate care and expertise — helping patients feel confident before they even walk in.",
    features: [
      { title: "Appointment Booking", detail: "Patients book 24/7 online" },
      { title: "Doctor / Team Profiles", detail: "Builds trust and credibility" },
      { title: "Service & Treatment Pages", detail: "Clear, jargon-free descriptions" },
      { title: "Patient FAQ Section", detail: "Reduces front-desk calls" },
    ],
    outcome: "+60% Online Appointments",
  },
  {
    id: "salons",
    label: "Salons & Spas",
    emoji: "💇",
    websiteType: "Bookings & Showcase",
    tagline: "Fill your chair — 7 days a week",
    description:
      "We build beautiful salon websites with online booking, service menus, and team portfolios that attract clients who are already ready to book — reducing no-shows and last-minute calls.",
    features: [
      { title: "Online Booking Widget", detail: "Available 24/7, no phone tag" },
      { title: "Service Menu", detail: "Prices, durations, and packages" },
      { title: "Team Portfolio", detail: "Stylist profiles and work galleries" },
      { title: "Google Reviews Integration", detail: "Show social proof automatically" },
    ],
    outcome: "+45% Bookings via Website",
  },
  {
    id: "photographers",
    label: "Photographers",
    emoji: "📷",
    websiteType: "Portfolio & Leads",
    tagline: "Let your work do the selling",
    description:
      "We build minimal, fast-loading portfolio sites that make your photography the hero. Galleries load instantly, clients can submit enquiry forms, and your personal brand shines through every page.",
    features: [
      { title: "Fast-Loading Gallery", detail: "Optimised images, no lag" },
      { title: "Enquiry / Contact Form", detail: "Captures leads with project details" },
      { title: "Package Pricing Page", detail: "Clear tiers reduce negotiation" },
      { title: "Instagram Feed Integration", detail: "Always fresh, always current" },
    ],
    outcome: "+80% Enquiry Conversion",
  },
  {
    id: "consultants",
    label: "Consultants",
    emoji: "💼",
    websiteType: "Authority & Leads",
    tagline: "Position yourself as the expert clients seek out",
    description:
      "We build authority-driven websites with case studies, testimonials, and clear service pages that position you as the go-to expert — so clients come pre-sold before the first call.",
    features: [
      { title: "Case Studies Section", detail: "Results-first storytelling" },
      { title: "Services / Offer Pages", detail: "Clear scope and outcomes" },
      { title: "Speaking / Media Page", detail: "Builds authority fast" },
      { title: "Discovery Call Booking", detail: "Streamlined intake process" },
    ],
    outcome: "+65% Higher-Value Clients",
  },
  {
    id: "construction",
    label: "Construction & Trades",
    emoji: "🏗️",
    websiteType: "Projects & Quotes",
    tagline: "Win more bids with a site that proves your quality",
    description:
      "We build project-showcase websites for builders, contractors, and trades businesses that prove your quality to homeowners and developers before they call — reducing back-and-forth and winning better-paying jobs.",
    features: [
      { title: "Project Portfolio", detail: "Before/after with specs" },
      { title: "Quote Request Form", detail: "Captures job details upfront" },
      { title: "Licence & Insurance Display", detail: "Builds trust instantly" },
      { title: "Service Area Map", detail: "Rank locally for your region" },
    ],
    outcome: "+55% Quality Lead Rate",
  },
  {
    id: "local-services",
    label: "Local Services",
    emoji: "📍",
    websiteType: "Local SEO & Calls",
    tagline: "Be the first business locals find — and call",
    description:
      "We build local-first websites for plumbers, electricians, cleaners, and other service providers — optimised to rank in your area and convert visitors into calls and bookings instantly.",
    features: [
      { title: "Local SEO Optimisation", detail: "Rank in your suburb/city" },
      { title: "Click-to-Call Button", detail: "One tap from mobile" },
      { title: "Service Area Pages", detail: "Rank in multiple locations" },
      { title: "Google Reviews Widget", detail: "Builds trust at a glance" },
    ],
    outcome: "+90% More Local Calls",
  },
];

export default industries;
