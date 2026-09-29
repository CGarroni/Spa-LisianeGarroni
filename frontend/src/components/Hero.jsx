// Hero.jsx - Abertura editorial: a frase da Lisiane + retrato em arco

import Reveal from "./Reveal";
import Lotus from "./Lotus";
import { waLink, MSG_AGENDAR } from "../config/site";
import lisianeHistoria from "../assets/images/lisiane-historia.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow">Spa Lisiane Garroni · Porto Alegre</span>
            <h1>
              Eu não sonhei apenas em <em>ter um SPA.</em>
            </h1>
            <p className="hero-sub">
              Eu sonhei em criar um lugar onde mulheres pudessem voltar a se
              enxergar.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="hero-actions">
              <a
                href={waLink(MSG_AGENDAR)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Agendar pelo WhatsApp
              </a>
              <a href="#historia" className="btn btn-outline">
                Conheça minha história
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="hero-proof">
              <div className="proof-item">
                <strong>14+</strong>
                <span>anos de experiência</span>
              </div>
              <div className="proof-item">
                <strong>15+</strong>
                <span>especializações</span>
              </div>
              <div className="proof-item">
                <strong>RF</strong>
                <span>método Renata França</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={200}>
          <div className="hero-arch">
            <img src={lisianeHistoria} alt="Lisiane Garroni, fundadora do SPA" />
          </div>
          <div className="hero-badge">
            <Lotus size={30} className="badge-lotus" />
            <strong>Método Renata França</strong>
            <span>Pupila oficial do método</span>
          </div>
        </Reveal>
      </div>

      <div className="scroll-cue">Role</div>
    </section>
  );
}

export default Hero;
