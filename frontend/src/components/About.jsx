// About.jsx - Informações sobre o spa

import lisianePerfil from "../assets/images/lisiane-perfil.jpeg";
import imageFlyer from "../assets/images/spa-logo.png"

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre o Spa Lisiane Garroni</h2>
          <div className="about-content">
            <div className="about-image">
            <img src={lisianePerfil} alt="Lisiane Garroni - Massoterapeuta" />
          </div>
            <div className="about-text">
              <h3>Quem Sou Eu?</h3>
              <p>Sou Lisiane Garroni, massoterapeuta apaixonada por transformar corpos e mentes há mais de 12 anos proporcionando uma experiência premium em bem-estar, relaxamento profundo e modelagem corporal. Certificada no método Renata França, nosso spa é um refúgio de paz em meio à rotina agitada.
              </p>
                <h3>✨ Por que escolher nosso spa?</h3>
                  <ul>
                    <li> Terapeutas experientes e certificadas no Método Renata França</li>
                    <li> Ambiente relaxante, aconchegante e acolhedor</li>
                    <li> Produtos naturais e de alta qualidade</li>
                    <li> Atendimento personalizado</li>
                    <li> Resultados visíveis desde a primeira sessão</li>
                    <li> Localização privilegiada em Porto Alegre</li>
                  </ul>
            </div>

            <div className="about-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Clientes satisfeitos</p>
              </div>
              <div className="stat">
                <h3>12+</h3>
                <p>Anos de Experiência</p>
              </div>
              <div className="stat">
                <h3>5⭐</h3>
                <p>Avaliação Média</p>
              </div>
            </div>
            <div className="about-image">
            <div className="logo-circle">
              <img src={imageFlyer} alt="Spa Lisiane Garroni - Logo" />
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default About