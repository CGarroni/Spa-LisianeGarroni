// Essencia.jsx - Manifesto da marca + três pilares

import Reveal from "./Reveal";
import Lotus from "./Lotus";

const PILARES = [
  {
    titulo: "Beleza",
    texto: "Revelar e lapidar a beleza que já existe em cada mulher.",
  },
  {
    titulo: "Saúde",
    texto: "Cuidar do corpo com técnica, ciência e presença.",
  },
  {
    titulo: "Bem-estar",
    texto: "Desacelerar, respirar e sair com a alma mais leve.",
  },
];

function Essencia() {
  return (
    <section className="section section-alt essencia">
      <div className="container">
        <Reveal className="center">
          <Lotus size={52} className="essencia-lotus" />
          <p className="essencia-quote">
            “Beleza e bem-estar. Experiências que transformam o corpo e a
            mente.”
          </p>
        </Reveal>

        <div className="pillars">
          {PILARES.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 120}>
              <div className="pillar">
                <Lotus size={40} className="pillar-icon" />
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Essencia;
