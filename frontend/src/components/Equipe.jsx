// Equipe.jsx - Time de profissionais do Spa

import Reveal from "./Reveal";
import { waLink } from "../config/site";
import fotoEquipe from "../assets/images/equipe.jpg";

const EQUIPE = [
  {
    iniciais: "LG",
    nome: "Lisiane Garroni",
    cargo: "Fundadora & CEO",
    detalhe: "Especialista no Método Renata França · 14+ anos de experiência",
  },
  {
    iniciais: "PN",
    nome: "Pamela Nunes",
    cargo: "Massoterapeuta",
    detalhe: "Massagem relaxante e terapêutica · segundas e quartas",
  },
  {
    iniciais: "FM",
    nome: "Dra. Franciele Monteiro",
    cargo: "Farmacêutica Esteta",
    detalhe: "Estética avançada e personalizada",
  },
  {
    iniciais: "JS",
    nome: "Dra. Juliana Urtassum Schmitt",
    cargo: "Nutricionista",
    detalhe: "CRN2 6634 · nutrição clínica e esportiva",
  },
  {
    iniciais: "MC",
    nome: "Maria de Lourdes Cargnin",
    cargo: "Terapeuta Integrativa",
    detalhe: "Atendimento temporário · outubro e novembro",
  },
];

function Equipe() {
  return (
    <section id="equipe" className="section section-alt">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Nossa equipe</span>
          <h2 className="section-title">
            Quem cuida de <em>você</em>
          </h2>
          <p className="section-lead">
            Um time multidisciplinar dedicado a realçar sua beleza, saúde e
            bem-estar — cada detalhe pensado para o seu momento.
          </p>
        </Reveal>

        <Reveal>
          <div className="team-photo">
            <img
              src={fotoEquipe}
              alt="Equipe do Spa Lisiane Garroni"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="team-grid">
          {EQUIPE.map((p, i) => (
            <Reveal key={p.nome} delay={(i % 3) * 120}>
              <article className="team-card">
                <span className="team-initials">{p.iniciais}</span>
                <h3>{p.nome}</h3>
                <p className="team-role">{p.cargo}</p>
                <p className="team-detail">{p.detalhe}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="center">
          <p className="team-cta">
            <a
              href={waLink("Olá! Quero conhecer a equipe do Spa Lisiane Garroni 🧘‍♀️")}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-cta"
            >
              Agende sua visita →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Equipe;
