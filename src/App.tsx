import { useEffect } from "react";
import AOS from "aos";

import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import FAQ from "./components/FAQ";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div className="grain">
      <Hero />
      <About />
      <Depoimentos />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
}
