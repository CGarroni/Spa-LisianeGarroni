// Depoimentos.jsx - Avaliações reais do Google, com curadoria manual

import Reveal from "./Reveal";

const DEPOIMENTOS = [
  {
    texto:
      "Melhor massagem da vida!!!! Drena, modela e relaxa com a massagem e com as risadas que sempre rolam nesse atendimento maravilhoso!",
    nome: "Priscila Perin",
    meta: "Local Guide · Avaliação no Google",
  },
  {
    texto:
      "A Lisi é uma profissional maravilhosa! Além de ser uma pessoa querida, atenciosa e super acolhedora, faz uma massagem simplesmente perfeita. Ela tem mãos de fada, é super cuidadosa, atenciosa e faz tudo com muito carinho. Não troco por nada! Recomendo de olhos fechados.",
    nome: "Daniella Los Angeles",
    meta: "Avaliação no Google",
  },
  {
    texto:
      "A Lisi é maravilhosa! Mãos maravilhosas e uma pessoa linda e divertida!! Sou cliente faz anos e ela transforma minhas segundas de manhã num início de semana revigorante!",
    nome: "Tais Gerhardt",
    meta: "Avaliação no Google",
  },
  {
    texto: "Melhor massagem do planeta terra.",
    nome: "Aline Verissimo",
    meta: "Avaliação no Google",
  },
];

function Estrelas() {
  return (
    <span className="dep-stars" aria-label="5 de 5 estrelas">
      ★★★★★
    </span>
  );
}

function Depoimentos() {
  return (
    <section id="depoimentos" className="section section-alt">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="section-title">
            O que dizem nossas <em>clientes</em>
          </h2>
          <p className="dep-badge">
            <Estrelas /> 5,0 · 8 avaliações no Google
          </p>
        </Reveal>

        <div className="dep-grid">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.nome} delay={(i % 2) * 120}>
              <figure className="dep-card">
                <Estrelas />
                <blockquote>“{d.texto}”</blockquote>
                <figcaption>
                  <strong>{d.nome}</strong>
                  <span>{d.meta}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
