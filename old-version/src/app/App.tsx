import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Tips } from "./components/Tips";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF8" }}>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Tips />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
