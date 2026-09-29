// About.jsx - Minha história: texto completo da Lisiane Garroni

import lisianeHistoria from "../assets/images/lisiane-historia.jpeg";
import lisianeCertificacao from "../assets/images/lisiane-certificacao.jpeg";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Minha história</h2>
        <p className="section-subtitle">Lisiane Garroni — fundadora do SPA</p>

        {/* Abertura: foto + primeiros parágrafos */}
        <div className="about-content story-layout">
          <div className="about-image story-photo">
            <img src={lisianeHistoria} alt="Lisiane Garroni" />
          </div>

          <div className="about-text story-text">
            <p className="story-lead">Eu não sonhei apenas em ter um SPA.</p>
            <p className="story-lead">Eu sonhei em criar um lugar onde mulheres pudessem voltar a se enxergar.</p>
            <p>
              Sou Lisiane Garroni, massoterapeuta há mais de 14 anos, empreendedora,
              mãe dos gêmeos Pedro e Santiago e uma mulher apaixonada por pessoas,
              histórias e pelo poder transformador do cuidado.
            </p>
            <p>
              Minha história com a massoterapia começou há muitos anos e, desde
              então, nunca parei de estudar. Foram mais de 15 especializações e
              formações que me permitiram conhecer diferentes técnicas e
              compreender cada vez mais o corpo, suas necessidades e,
              principalmente, a relação entre corpo, autoestima e bem-estar.
            </p>
            <p>
              Em julho de 2017, minha trajetória ganhou um novo significado.
              Viajei para Florianópolis, para Jurerê Internacional, onde realizei
              minha especialização no Método Renata França e me tornei pupila do
              método.
            </p>
          </div>
        </div>

        {/* Especializações: foto da certificação + texto */}
        <div className="about-content story-layout story-mid">
          <div className="about-image story-photo">
            <img src={lisianeCertificacao} alt="Lisiane Garroni — certificação no Método Renata França" />
          </div>

          <div className="about-text story-text">
            <p>
              Em fevereiro de 2018, participei da primeira turma de formação da
              técnica Miracle Touch.
            </p>
            <p>Foi amor à primeira experiência.</p>
            <p>
              Desde então, escolhi me dedicar exclusivamente às técnicas do
              Método Renata França. Não apenas pelos resultados que vejo no
              corpo, mas pelo que acontece depois deles: a mulher se olha
              diferente no espelho.
            </p>
          </div>
        </div>

        {/* Restante da história em coluna única */}
        <div className="about-text story-text story-fulltext">
          <p>E foi vendo tantas mulheres recuperarem sua autoestima que nasceu um novo sonho.</p>
          <p>Criar o meu próprio SPA.</p>
          <p>
            Um lugar bonito, acolhedor e especial. Um lugar onde cada cliente
            pudesse entrar por uma porta e, por alguns momentos, deixar o mundo
            lá fora.
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

          <div className="story-manifesto">
            <p>É sobre se sentir bem na própria pele.</p>
            <p>É sobre recuperar a autoestima.</p>
            <p>É sobre desacelerar.</p>
            <p>É sobre ser cuidada.</p>
          </div>

          <p>
            Acredito que a beleza já existe dentro de cada pessoa. Meu trabalho
            é ajudar a revelar, valorizar e lapidar essa beleza.
          </p>
          <p>E talvez por isso eu goste tanto de conversar.</p>
          <p>
            Porque, para mim, uma massagem não precisa ser apenas um momento de
            silêncio. Pode ser uma troca de histórias, experiências, risadas,
            conselhos, dicas e descobertas.
          </p>
          <p>
            A cliente chega para cuidar do corpo e muitas vezes sai com a alma
            mais leve também.
          </p>
          <p>Minha história é inseparável da minha família.</p>
          <p>
            Sou mãe do Pedro e do Santiago, meus gêmeos, com quem divido sonhos
            e projetos. Acredito que nossos filhos aprendem muito mais pelo
            exemplo do que pelas palavras. Por isso, todos os dias tento mostrar
            a eles que sonhos são possíveis quando temos coragem para
            construí-los.
          </p>
          <p>
            Sou filha da Maria do Carmo Garroni, funcionária pública aposentada
            e empreendedora. Foi com ela que aprendi uma palavra que carrego
            comigo até hoje: resiliência.
          </p>
          <p>
            Aprendi que nem todo caminho será fácil. Mas também aprendi que
            dificuldade não pode ser motivo para desistirmos daquilo em que
            acreditamos.
          </p>
          <p>
            Minha vida profissional também passou por diferentes caminhos.
            Iniciei cursos superiores em Engenharia Civil, Administração
            Hospitalar, Biomedicina e Estética e Cosmética. Cada experiência me
            trouxe aprendizados que hoje fazem parte da empresária e
            profissional que me tornei.
          </p>
          <p>Hoje, meu propósito é ainda maior.</p>
          <p>
            Quero que o SPA Lisiane Garroni seja um espaço completo de beleza e
            bem-estar, reunindo profissionais e diferentes especialidades para
            cuidar da mulher de forma cada vez mais ampla.
          </p>
          <p>Porque acredito que não existe beleza verdadeira sem bem-estar.</p>
          <p>E acredito que toda mulher merece ter um momento para si.</p>

          <div className="story-manifesto">
            <p>Um momento para respirar.</p>
            <p>Para se cuidar.</p>
            <p>Para se olhar.</p>
            <p>Para se reencontrar.</p>
          </div>

          <p>Meu sonho não é apenas transformar corpos.</p>
          <p>
            É transformar a maneira como cada mulher se sente quando se olha no
            espelho.
          </p>
          <p>Essa é a minha história.</p>
          <p>Essa é a essência do SPA Lisiane Garroni.</p>

          <div className="story-closing">
            <p>Beleza e bem-estar.</p>
            <p>Experiências que transformam o corpo e a mente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
