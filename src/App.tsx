import { useEffect } from "react";
import AOS from "aos";

import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import FAQ from "./components/FAQ";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Seo from "./SEO/Seo";

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
      <Seo
      title='Livro Método CEV | Conteúdo, Estratégia e Vendas — Cleane Fontenele'
      description='O método usado em 7 continentes para transformar redes sociais em máquina de vendas. Aprenda a unir Conteúdo, Estratégia e Vendas para atrair clientes todos os dias — sem depender de sorte ou só de indicações.'
    />
      <Hero />
      <About />
      <Depoimentos />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
}
