// Historia.jsx - A história completa da Lisiane, em capítulos editoriais

import Reveal from "./Reveal";
import Lotus from "./Lotus";
import { waLink } from "../config/site";
import lisianeFormacaoRf from "../assets/images/lisiane-formacao-rf.jpg";
import lisianeTernoBege from "../assets/images/lisiane-terno-bege.jpg";

function Historia() {
  return (
    <section id="historia" className="section">
      <div className="container">
        <Reveal className="historia-head">
          <span className="eyebrow">Minha história</span>
          <h2 className="section-title">
            A mulher por trás do <em>SPA</em>
          </h2>
          <p className="section-lead">
            Lisiane Garroni — massoterapeuta, empreendedora e mãe dos gêmeos
            Pedro e Santiago.
          </p>
        </Reveal>

        {/* Capítulo 1 — O começo */}
        <div className="chapter">
          <Reveal className="chapter-media arch">
            <img src={lisianeTernoBege} alt="Lisiane Garroni" />
            <p className="media-caption">Lisiane Garroni · fundadora</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="chapter-kicker">Capítulo 1 · O começo</p>
            <h3>Um sonho maior que um endereço</h3>
            <p className="lead">
              Eu não sonhei apenas em ter um SPA. Eu sonhei em criar um lugar
              onde mulheres pudessem voltar a se enxergar.
            </p>
            <p>
              Sou Lisiane Garroni, massoterapeuta há mais de 14 anos,
              empreendedora, mãe dos gêmeos Pedro e Santiago e uma mulher
              apaixonada por pessoas, histórias e pelo poder transformador do
              cuidado.
            </p>
            <p>
              Minha história com a massoterapia começou há muitos anos e, desde
              então, nunca parei de estudar. Foram mais de 15 especializações e
              formações que me permitiram conhecer diferentes técnicas e
              compreender cada vez mais o corpo, suas necessidades e,
              principalmente, a relação entre corpo, autoestima e bem-estar.
            </p>
          </Reveal>
        </div>

        {/* Capítulo 2 — O método */}
        <div className="chapter flip">
          <Reveal className="chapter-media">
            <img
              src={lisianeFormacaoRf}
              alt="Lisiane Garroni com Renata França — formação exclusiva no método"
            />
            <p className="media-caption">Formação exclusiva · Método Renata França</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="chapter-kicker">Capítulo 2 · O método</p>
            <h3>Quando tudo ganhou um novo significado</h3>
            <p>
              Em julho de 2017, minha trajetória ganhou um novo significado.
              Viajei para Florianópolis, para Jurerê Internacional, onde
              realizei minha especialização no Método Renata França e me tornei
              pupila do método.
            </p>
            <p>
              Em fevereiro de 2018, participei da primeira turma de formação da
              técnica Miracle Touch. Foi amor à primeira experiência.
            </p>
            <div className="pullquote">
              <p>
                “Desde então, escolhi me dedicar exclusivamente às técnicas do
                Método Renata França — não apenas pelos resultados que vejo no
                corpo, mas pelo que acontece depois deles.”
              </p>
            </div>
            <p>A mulher se olha diferente no espelho.</p>
          </Reveal>
        </div>

        {/* Capítulo 3 — O sonho */}
        <div className="chapter">
          <Reveal>
            <p className="chapter-kicker">Capítulo 3 · O sonho</p>
            <h3>E nasceu o SPA Lisiane Garroni</h3>
            <p>
              E foi vendo tantas mulheres recuperarem sua autoestima que nasceu
              um novo sonho. Criar o meu próprio SPA.
            </p>
            <p>
              Um lugar bonito, acolhedor e especial. Um lugar onde cada cliente
              pudesse entrar por uma porta e, por alguns momentos, deixar o
              mundo lá fora.
            </p>
            <p>
              Eu queria um espaço que tivesse a minha essência. E também queria
              uma vista especial — daquelas que nos fazem parar e respirar.
            </p>
            <p>
              Foi assim que nasceu o SPA Lisiane Garroni, na Av. Borges de
              Medeiros, no Prime Offices, junto ao Shopping Praia de Belas.
            </p>
            <p>Mas, para mim, o SPA nunca foi somente sobre estética.</p>
            <div className="manifesto-lines">
              <p>É sobre se sentir bem na própria pele.</p>
              <p>É sobre recuperar a autoestima.</p>
              <p>É sobre desacelerar.</p>
              <p>É sobre ser cuidada.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="chapter-kicker">A essência</p>
            <h3>Muito além da estética</h3>
            <p>
              Acredito que a beleza já existe dentro de cada pessoa. Meu
              trabalho é ajudar a revelar, valorizar e lapidar essa beleza.
            </p>
            <p>E talvez por isso eu goste tanto de conversar.</p>
            <p>
              Porque, para mim, uma massagem não precisa ser apenas um momento
              de silêncio. Pode ser uma troca de histórias, experiências,
              risadas, conselhos, dicas e descobertas.
            </p>
            <p>
              A cliente chega para cuidar do corpo e muitas vezes sai com a alma
              mais leve também.
            </p>
          </Reveal>
        </div>

        {/* Capítulo 4 — Família */}
        <div className="chapter flip">
          <Reveal>
            <p className="chapter-kicker">Capítulo 4 · Raízes</p>
            <h3>Família, resiliência e propósito</h3>
            <p>Minha história é inseparável da minha família.</p>
            <p>
              Sou mãe do Pedro e do Santiago, meus gêmeos, com quem divido
              sonhos e projetos. Acredito que nossos filhos aprendem muito mais
              pelo exemplo do que pelas palavras. Por isso, todos os dias tento
              mostrar a eles que sonhos são possíveis quando temos coragem para
              construí-los.
            </p>
            <p>
              Sou filha da Maria do Carmo Garroni, funcionária pública
              aposentada e empreendedora. Foi com ela que aprendi uma palavra
              que carrego comigo até hoje: resiliência.
            </p>
            <p>
              Aprendi que nem todo caminho será fácil. Mas também aprendi que
              dificuldade não pode ser motivo para desistirmos daquilo em que
              acreditamos.
            </p>
            <p>
              Minha vida profissional também passou por diferentes caminhos.
              Iniciei cursos superiores em Engenharia Civil, Administração
              Hospitalar, Biomedicina e Estética e Cosmética. Cada experiência
              me trouxe aprendizados que hoje fazem parte da empresária e
              profissional que me tornei.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="chapter-kicker">O propósito</p>
            <h3>Um espaço completo de bem-estar</h3>
            <p>Hoje, meu propósito é ainda maior.</p>
            <p>
              Quero que o SPA Lisiane Garroni seja um espaço completo de beleza
              e bem-estar, reunindo profissionais e diferentes especialidades
              para cuidar da mulher de forma cada vez mais ampla.
            </p>
            <p>
              Porque acredito que não existe beleza verdadeira sem bem-estar. E
              acredito que toda mulher merece ter um momento para si.
            </p>
            <div className="manifesto-lines">
              <p>Um momento para respirar.</p>
              <p>Para se cuidar.</p>
              <p>Para se olhar.</p>
              <p>Para se reencontrar.</p>
            </div>
            <p>
              Meu sonho não é apenas transformar corpos. É transformar a maneira
              como cada mulher se sente quando se olha no espelho.
            </p>
          </Reveal>
        </div>

        <Reveal className="historia-closing">
          <Lotus size={44} className="closing-lotus" />
          <p>
            “Essa é a minha história. Essa é a essência do SPA Lisiane
            Garroni.”
          </p>
          <a
            href={waLink(
              "Olá! Conheci a história da Lisiane e quero agendar meu momento no SPA 🧘‍♀️"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Quero viver essa experiência
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Historia;
