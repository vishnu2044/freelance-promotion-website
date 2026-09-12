import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyMe from "./components/WhyMe";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <Portfolio />
      <Process />
      <WhyMe />
      <About />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
