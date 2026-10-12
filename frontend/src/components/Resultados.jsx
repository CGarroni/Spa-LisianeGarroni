// Resultados.jsx - Carrossel de resultados reais (fotos de clientes)

import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "../config/site";
import foto1 from "../assets/images/resultados/resultado-01.jpg";
import foto2 from "../assets/images/resultados/resultado-02.jpg";
import foto3 from "../assets/images/resultados/resultado-03.jpg";
import foto4 from "../assets/images/resultados/resultado-04.jpg";
import foto5 from "../assets/images/resultados/resultado-05.jpg";

const IMAGENS = [
  { src: foto1, titulo: "Antes e depois — abdômen" },
  { src: foto2, titulo: "Antes e depois — flancos" },
  { src: foto3, titulo: "Antes e depois — abdômen" },
  { src: foto4, titulo: "Antes e depois — flancos" },
  { src: foto5, titulo: "Antes e depois — abdômen" },
];

function Resultados() {
  const [index, setIndex] = useState(0);
  const total = IMAGENS.length;

  const ir = (dir) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="resultados" className="section">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Resultados</span>
          <h2 className="section-title">
            Transformações <em>reais</em>
          </h2>
          <p className="section-lead">
            O método fala por si — mas é no espelho que a mudança aparece.
          </p>
        </Reveal>

        <Reveal>
          <div className="results-frame">
            <div className="results-photo">
              <img
                key={index}
                src={IMAGENS[index].src}
                alt={`Resultado: ${IMAGENS[index].titulo}`}
              />
            </div>
            <p className="results-caption">{IMAGENS[index].titulo}</p>

            <button
              className="results-nav prev"
              onClick={() => ir(-1)}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className="results-nav next"
              onClick={() => ir(1)}
              aria-label="Próximo"
            >
              ›
            </button>

            <div className="results-dots">
              {IMAGENS.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? "active" : ""}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver resultado ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="center">
          <p className="results-note">
            Quer um resultado assim?{" "}
            <a
              href={waLink("Olá! Vi os resultados e quero agendar minha sessão 🧘‍♀️")}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-cta"
              style={{ alignSelf: "center" }}
            >
              Agende sua sessão →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Resultados;
