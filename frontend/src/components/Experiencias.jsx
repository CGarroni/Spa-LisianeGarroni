// Experiencias.jsx - Serviços do menu + pacotes, cada um com CTA próprio

import Reveal from "./Reveal";
import { waLink } from "../config/site";
import imgMiracleTouch from "../assets/images/menu/serv-miracle-touch-v3.jpg";
import imgDrenagem from "../assets/images/menu/serv-drenagem-rf-v3.jpg";
import imgMiracleFace from "../assets/images/menu/serv-miracle-face-v3.jpg";
import imgRelaxante from "../assets/images/menu/serv-relaxante.jpg";
import imgEstetica from "../assets/images/menu/serv-estetica.jpg";
import imgNutri from "../assets/images/menu/serv-nutri.jpg";

const SERVICOS = [
  {
    tag: "Método Renata França",
    nome: "Miracle Touch",
    descricao:
      "A massagem queridinha dos famosos. Drenagem linfática do método Renata França + massagem modeladora redutora, com resultado impactante desde a primeira sessão.",
    preco: "R$ 460",
    duracao: "70 minutos",
    img: imgMiracleTouch,
  },
  {
    tag: "Método Renata França",
    nome: "Drenagem Linfática RF",
    descricao:
      "Pressão, ritmo e movimentos diferenciados, com resultado impressionante desde a primeira sessão. Leveza imediata para o corpo.",
    preco: "R$ 360",
    duracao: "55 minutos",
    img: imgDrenagem,
  },
  {
    tag: "Método Renata França",
    nome: "Miracle Face",
    descricao:
      "Massagem facial que rejuvenesce, define contornos, reduz o inchaço e devolve o viço à pele.",
    preco: "R$ 260",
    duracao: "20 minutos",
    img: imgMiracleFace,
  },
  {
    tag: "Bem-estar",
    nome: "Massagem Relaxante ou Terapêutica",
    descricao:
      "Alivia tensões, reduz o estresse e melhora a qualidade do sono, com a massoterapeuta Pamela Nunes. Uma sensação profunda de bem-estar — atendimentos às segundas e quartas.",
    preco: "R$ 165",
    duracao: "60 minutos",
    img: imgRelaxante,
  },
  {
    tag: "Estética Avançada",
    nome: "Farmácia Estética — Dra. Franciele Monteiro",
    descricao:
      "Cuidar da pele é investir em saúde, autoestima e bem-estar, com a farmacêutica esteta Dra. Franciele Monteiro. Procedimentos personalizados, seguros e com tecnologia de ponta.",
    preco: "Entre em contato",
    duracao: "Entre em contato",
    img: imgEstetica,
  },
  {
    tag: "Saúde",
    nome: "Nutrição — Dra. Juliana Urtassum Schmitt",
    descricao:
      "Orientação nutricional para um corpo mais saudável e uma vida mais equilibrada, em sintonia com o seu momento.",
    preco: "Entre em contato",
    duracao: "Entre em contato",
    img: imgNutri,
  },
];

const PACOTES = [
  {
    tag: "Pacote misto",
    nome: "Drenagem RF + Miracle Touch",
    descricao:
      "O equilíbrio perfeito para potencializar resultados: os benefícios da drenagem com a modelagem do Miracle Touch.",
    linhas: [
      ["4 sessões", "R$ 1.584"],
      ["8 sessões", "R$ 2.624"],
    ],
    destaque: true,
  },
  {
    tag: "Método Renata França",
    nome: "Miracle Touch em sequência",
    descricao:
      "Resultados visíveis e duradouros com a constância do método — 10% off em 4 sessões, 20% off em 8.",
    linhas: [
      ["4 sessões", "R$ 1.656"],
      ["8 sessões", "R$ 2.944"],
    ],
    destaque: false,
  },
  {
    tag: "Método Renata França",
    nome: "Drenagem Linfática em sequência",
    descricao:
      "Corpo mais leve e saudável semana após semana — 10% off em 4 sessões, 20% off em 8.",
    linhas: [
      ["4 sessões", "R$ 1.296"],
      ["8 sessões", "R$ 2.304"],
    ],
    destaque: false,
  },
  {
    tag: "Método Renata França",
    nome: "Miracle Face em sequência",
    descricao:
      "Rejuvenesce, define contornos e reduz o inchaço — 10% off em 4 sessões, 20% off em 8.",
    linhas: [
      ["4 sessões", "R$ 936"],
      ["8 sessões", "R$ 1.664"],
    ],
    destaque: false,
  },
  {
    tag: "Bem-estar",
    nome: "Relaxante ou Terapêutica em sequência",
    descricao:
      "Relaxamento profundo e constância no cuidado — 10% off em 4 sessões, 20% off em 8.",
    linhas: [
      ["4 sessões", "R$ 594"],
      ["8 sessões", "R$ 1.056"],
    ],
    destaque: false,
  },
];

function Experiencias() {
  return (
    <section id="experiencias" className="section section-alt">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Experiências</span>
          <h2 className="section-title">
            Rituais de <em>beleza e bem-estar</em>
          </h2>
          <p className="section-lead">
            Cada atendimento é um momento só seu. Escolha a sua experiência e
            agende direto pelo WhatsApp.
          </p>
        </Reveal>

        <div className="exp-grid">
          {SERVICOS.map((s, i) => (
            <Reveal key={s.nome} delay={(i % 3) * 120}>
              <article className="exp-card">
                <div className="exp-photo">
                  <img src={s.img} alt={s.nome} loading="lazy" />
                </div>
                <div className="exp-body">
                  <p className="exp-tag">{s.tag}</p>
                  <h3>{s.nome}</h3>
                  <p>{s.descricao}</p>
                  <div className="exp-meta">
                    <span className="exp-price">
                      <small>Sessão</small>
                      {s.preco}
                    </span>
                    <span className="exp-duration">{s.duracao}</span>
                  </div>
                  <a
                    href={waLink(`Olá! Quero agendar: ${s.nome} 🧘‍♀️`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-cta"
                  >
                    Quero essa experiência →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="packages">
          <Reveal>
            <div className="packages-head">
              <div>
                <span className="eyebrow">Pacotes</span>
                <h3>
                  Para quem quer <em>constância</em>
                </h3>
              </div>
            </div>
          </Reveal>
          <div className="packages-grid">
            {PACOTES.map((p, i) => (
              <Reveal key={p.nome} delay={i * 120}>
                <article
                  className={`package-card${p.destaque ? " featured" : ""}`}
                >
                  <p className="pkg-tag">{p.tag}</p>
                  <h4>{p.nome}</h4>
                  <p>{p.descricao}</p>
                  <div className="pkg-rows">
                    {p.linhas.map(([qtd, valor]) => (
                      <div className="pkg-row" key={qtd}>
                        <span>{qtd}</span>
                        <strong>{valor}</strong>
                      </div>
                    ))}
                  </div>
                  <a
                    href={waLink(`Olá! Quero saber mais sobre o pacote: ${p.nome} 🧘‍♀️`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-cta"
                  >
                    Quero esse pacote →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencias;
