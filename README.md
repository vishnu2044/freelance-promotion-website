# Freelance Web Developer — Portfolio & Promotional Website

A modern, responsive promotional website built with **React + Vite** for freelance web developers targeting small and local businesses.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## How to Customize

### 1. Change Your Name, Contact & Social Links

Edit **one file**: [`src/config/siteConfig.js`](src/config/siteConfig.js)

```js
const siteConfig = {
  name: "Your Name",
  role: "Freelance Web Developer",
  email: "you@example.com",
  whatsapp: "919876543210", // Country code + number, no spaces
  location: "Your City",
  social: {
    instagram: "https://instagram.com/you",
    linkedin: "https://linkedin.com/in/you",
    github: "https://github.com/you",
  },
  // ...
};
```

> Leave any social link as `""` (empty string) to hide it from the footer.

### 2. Change WhatsApp Number

Update `whatsapp` in `src/config/siteConfig.js`. The number is used everywhere through a centralized helper — you only need to change it in one place.

### 3. Add or Edit Portfolio Projects

Edit [`src/data/projects.js`](src/data/projects.js):

```js
{
  id: 4,
  title: "Project Name",
  category: "Industry",
  description: "Short description of the project.",
  image: "/projects/screenshot.jpg",  // Place image in public/projects/
  url: "https://livesite.com",
  color: "#6366F1",  // Only used for placeholder if image is null
}
```

- Place project screenshots in the `public/projects/` directory.
- Set `image: null` to use a color-coded placeholder mockup.

### 4. Change Pricing

Edit [`src/data/pricing.js`](src/data/pricing.js). Each plan has:
- `name`, `price`, `description`
- `features` array
- `popular: true` to add the "Most Popular" badge

### 5. Change Services

Edit [`src/data/services.js`](src/data/services.js).

### 6. Connect the Contact Form

The contact form currently logs submissions to the console. To connect a backend, open [`src/components/Contact.jsx`](src/components/Contact.jsx) and look for the `TODO` comment in `handleSubmit`.

**Options:**
- [Formspree](https://formspree.io) — Add `action` and `method` to the form
- [Web3Forms](https://web3forms.com) — Add a `fetch` call with your access key
- [EmailJS](https://emailjs.com) — Use `emailjs.send()` with your service/template IDs
- Custom backend — `fetch("/api/contact", { ... })`

### 7. Update SEO Metadata

Edit the `<title>`, `<meta>` tags, and Open Graph tags in [`index.html`](index.html).

Also update `siteTitle` and `siteDescription` in [`src/config/siteConfig.js`](src/config/siteConfig.js).

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the `dist/` folder to Netlify, or connect your GitHub repo
```

### GitHub Pages

```bash
npm run build
# Deploy the `dist/` folder
```

### Any Static Host

Run `npm run build` and deploy the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with mobile hamburger
│   ├── Hero.jsx            # Hero section with browser mockup visual
│   ├── Services.jsx        # Service cards (data-driven)
│   ├── Industries.jsx      # Target customer categories
│   ├── Portfolio.jsx       # Project showcase with placeholder mockups
│   ├── Pricing.jsx         # Three-tier pricing cards
│   ├── Process.jsx         # 4-step process timeline
│   ├── WhyMe.jsx           # Value propositions
│   ├── About.jsx           # Brief about section with code visual
│   ├── Contact.jsx         # Contact form + WhatsApp/email CTAs
│   ├── Footer.jsx          # Footer with conditional social links
│   └── WhatsAppButton.jsx  # Floating WhatsApp button
│
├── config/
│   └── siteConfig.js       # ⬅️ All personal info lives here
│
├── data/
│   ├── projects.js         # Portfolio projects
│   ├── services.js         # Service listings
│   ├── pricing.js          # Pricing plans
│   └── process.js          # Process steps
│
├── hooks/
│   └── useReveal.js        # Scroll-reveal animation hook
│
├── utils/
│   └── helpers.js          # WhatsApp URL builder + scroll helper
│
├── App.jsx                 # Main app layout
├── main.jsx                # React entry point
└── index.css               # All styles
```

## Tech Stack

- **React 19** — UI components
- **Vite** — Build tool & dev server
- **React Icons** — Lightweight icons
- **CSS** — Custom properties, no CSS framework

## License

MIT
