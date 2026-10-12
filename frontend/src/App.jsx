// App.jsx - SPA Lisiane Garroni · remodel "Essência"
// Jornada: hero → essência → história → método → experiências → resultados → equipe → onde estamos → agendar

import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Essencia from "./components/Essencia";
import Historia from "./components/Historia";
import Metodo from "./components/Metodo";
import Experiencias from "./components/Experiencias";
import Resultados from "./components/Resultados";
import Equipe from "./components/Equipe";
import Localizacao from "./components/Localizacao";
import Agendar from "./components/Agendar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";
import { rastrearWhatsApp } from "./lib/pixel";

function App() {
  // Rastreia cliques em qualquer CTA de WhatsApp (só dispara com Pixel + consentimento)
  useEffect(() => {
    const aoClicar = (e) => {
      const link = e.target.closest('a[href*="wa.me"]');
      if (!link) return;
      const rotulo =
        link.getAttribute("aria-label") ||
        link.textContent.trim().slice(0, 60) ||
        "whatsapp";
      rastrearWhatsApp(rotulo);
    };
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Essencia />
        <Historia />
        <Metodo />
        <Experiencias />
        <Resultados />
        <Equipe />
        <Localizacao />
        <Agendar />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}

export default App;
