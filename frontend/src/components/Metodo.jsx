// Metodo.jsx - Autoridade: o Método Renata França (seção escura de contraste)

import Reveal from "./Reveal";
import { waLink } from "../config/site";
import metodoBanner from "../assets/images/menu/metodo-banner.jpg";

const CREDENCIAIS = [
  { valor: "Pupila", rotulo: "do Método Renata França" },
  { valor: "1ª turma", rotulo: "de formação Miracle Touch" },
  { valor: "15+", rotulo: "especializações e formações" },
  { valor: "14+", rotulo: "anos de massoterapia" },
];

function Metodo() {
  return (
    <section id="metodo" className="section metodo">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">O método</span>
          <h2 className="section-title">
            Renata França, <em>na essência</em>
          </h2>
          <p className="section-lead">
            A técnica queridinha dos famosos, aplicada por quem foi formada
            diretamente na fonte — com o toque e o cuidado da nossa equipe.
          </p>
        </Reveal>

        <div className="metodo-grid">
          <Reveal>
            <div className="metodo-copy">
              <p>
                Em 2017, a Lisiane viajou a <strong>Jurerê Internacional</strong>,
                em Florianópolis, para se especializar no{" "}
                <strong>Método Renata França</strong> — e se tornou{" "}
                <strong>pupila do método</strong>.
              </p>
              <p>
                No ano seguinte, participou da{" "}
                <strong>primeira turma de formação da técnica Miracle Touch</strong>.
                Desde então, dedica-se exclusivamente a essas técnicas.
              </p>
              <p>
                Não apenas pelos resultados visíveis no corpo — mas pelo que
                acontece depois deles: a mulher se olha diferente no espelho.
              </p>

              <div className="credentials">
                {CREDENCIAIS.map((c, i) => (
                  <Reveal key={c.rotulo} delay={i * 100}>
                    <div className="credential">
                      <strong>{c.valor}</strong>
                      <span>{c.rotulo}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <a
                href={waLink(
                  "Olá! Quero agendar uma sessão do Método Renata França 🧘‍♀️"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Agendar minha sessão
              </a>
            </div>
          </Reveal>

          <Reveal className="metodo-media" delay={160}>
            <img
              src={metodoBanner}
              alt="Sessão do Método Renata França no SPA"
            />
            <p className="media-caption">Método Renata França · SPA Lisiane Garroni</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Metodo;
