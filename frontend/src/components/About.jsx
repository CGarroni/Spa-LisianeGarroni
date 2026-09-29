// About.jsx - Minha história: quem é a Lisiane e como o SPA foi criado

import { useState } from "react";
import lisianeHistoria from "../assets/images/lisiane-historia.jpeg";

const PARAGRAFOS_INICIAIS = [
  "Eu não sonhei apenas em ter um SPA. Eu sonhei em criar um lugar onde mulheres pudessem voltar a se enxergar.",
  "Sou Lisiane Garroni, massoterapeuta há mais de 14 anos, empreendedora, mãe dos gêmeos Pedro e Santiago e uma mulher apaixonada por pessoas, histórias e pelo poder transformador do cuidado.",
  "Minha história com a massoterapia começou há muitos anos e, desde então, nunca parei de estudar. Foram mais de 15 especializações e formações que me permitiram conhecer diferentes técnicas e compreender cada vez mais o corpo, suas necessidades e, principalmente, a relação entre corpo, autoestima e bem-estar.",
  "Em julho de 2017, minha trajetória ganhou um novo significado. Viajei para Florianópolis, para Jurerê Internacional, onde realizei minha especialização no Método Renata França e me tornei pupila do método.",
];

const PARAGRAFOS_RESTANTES = [
  "Em fevereiro de 2018, participei da primeira turma de formação da técnica Miracle Touch. Foi amor à primeira experiência.",
  "Desde então, escolhi me dedicar exclusivamente às técnicas do Método Renata França. Não apenas pelos resultados que vejo no corpo, mas pelo que acontece depois deles: a mulher se olha diferente no espelho.",
  "E foi vendo tantas mulheres recuperarem sua autoestima que nasceu um novo sonho. Criar o meu próprio SPA.",
  "Um lugar bonito, acolhedor e especial. Um lugar onde cada cliente pudesse entrar por uma porta e, por alguns momentos, deixar o mundo lá fora.",
  "Eu queria um espaço que tivesse a minha essência. E também queria uma vista especial — daquelas que nos fazem parar e respirar.",
  "Foi assim que nasceu o SPA Lisiane Garroni, na Av. Borges de Medeiros, no Prime Offices, junto ao Shopping Praia de Belas.",
  "Mas, para mim, o SPA nunca foi somente sobre estética. É sobre se sentir bem na própria pele. É sobre recuperar a autoestima. É sobre desacelerar. É sobre ser cuidada.",
  "Acredito que a beleza já existe dentro de cada pessoa. Meu trabalho é ajudar a revelar, valorizar e lapidar essa beleza.",
  "E talvez por isso eu goste tanto de conversar. Porque, para mim, uma massagem não precisa ser apenas um momento de silêncio. Pode ser uma troca de histórias, experiências, risadas, conselhos, dicas e descobertas.",
  "A cliente chega para cuidar do corpo e muitas vezes sai com a alma mais leve também.",
  "Minha história é inseparável da minha família. Sou mãe do Pedro e do Santiago, meus gêmeos, com quem divido sonhos e projetos. Acredito que nossos filhos aprendem muito mais pelo exemplo do que pelas palavras. Por isso, todos os dias tento mostrar a eles que sonhos são possíveis quando temos coragem para construí-los.",
  "Sou filha da Maria do Carmo Garroni, funcionária pública aposentada e empreendedora. Foi com ela que aprendi uma palavra que carrego comigo até hoje: resiliência.",
  "Aprendi que nem todo caminho será fácil. Mas também aprendi que dificuldade não pode ser motivo para desistirmos daquilo em que acreditamos.",
  "Minha vida profissional também passou por diferentes caminhos. Iniciei cursos superiores em Engenharia Civil, Administração Hospitalar, Biomedicina e Estética e Cosmética. Cada experiência me trouxe aprendizados que hoje fazem parte da empresária e profissional que me tornei.",
  "Hoje, meu propósito é ainda maior. Quero que o SPA Lisiane Garroni seja um espaço completo de beleza e bem-estar, reunindo profissionais e diferentes especialidades para cuidar da mulher de forma cada vez mais ampla.",
  "Porque acredito que não existe beleza verdadeira sem bem-estar. E acredito que toda mulher merece ter um momento para si.",
  "Um momento para respirar. Para se cuidar. Para se olhar. Para se reencontrar.",
  "Meu sonho não é apenas transformar corpos. É transformar a maneira como cada mulher se sente quando se olha no espelho.",
  "Essa é a minha história. Essa é a essência do SPA Lisiane Garroni.",
  "Beleza e bem-estar. Experiências que transformam o corpo e a mente.",
];

function About() {
  const [historiaExpandida, setHistoriaExpandida] = useState(false);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Minha história</h2>
        <p className="section-subtitle">Lisiane Garroni — fundadora do SPA</p>

        <div className="about-content story-layout">
          <div className="about-image story-photo">
            <img src={lisianeHistoria} alt="Lisiane Garroni" />
          </div>

          <div className="about-text story-text">
            {PARAGRAFOS_INICIAIS.map((p, i) => (
              <p key={i} className={i === 0 ? "story-lead" : ""}>{p}</p>
            ))}

            {historiaExpandida &&
              PARAGRAFOS_RESTANTES.map((p, i) => <p key={i}>{p}</p>)}

            <button
              className="btn-read-more"
              onClick={() => setHistoriaExpandida(!historiaExpandida)}
            >
              {historiaExpandida ? "Ler menos ↑" : "Ler história completa ↓"}
            </button>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Clientes satisfeitos</p>
          </div>
          <div className="stat">
            <h3>14+</h3>
            <p>Anos de Experiência</p>
          </div>
          <div className="stat">
            <h3>5⭐</h3>
            <p>Avaliação Média</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
