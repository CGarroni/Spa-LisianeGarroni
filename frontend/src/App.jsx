// App.jsx - SPA Lisiane Garroni · remodel "Essência"
// Jornada: hero → essência → história → método → experiências → resultados → equipe → onde estamos → agendar

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

function App() {
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
    </>
  );
}

export default App;
