// Footer.jsx - Rodapé minimalista

import Lotus from "./Lotus";
import { waLink, ADDRESS, HOURS } from "../config/site";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-text">
              Lisiane Garroni
              <small>Spa · Porto Alegre</small>
            </span>
            <p>
              Beleza e bem-estar. Experiências que transformam o corpo e a
              mente.
            </p>
          </div>

          <div>
            <h4>Navegar</h4>
            <ul>
              <li><a href="#historia">Minha história</a></li>
              <li><a href="#metodo">O Método</a></li>
              <li><a href="#experiencias">Experiências</a></li>
              <li><a href="#resultados">Resultados</a></li>
            </ul>
          </div>

          <div>
            <h4>Visite-nos</h4>
            <ul>
              <li>{ADDRESS.street}</li>
              <li>{ADDRESS.complement}</li>
              <li>{HOURS}</li>
            </ul>
          </div>

          <div>
            <h4>Fale conosco</h4>
            <ul>
              <li>
                <a
                  href={waLink("Olá! Gostaria de falar com o SPA Lisiane Garroni 🧘‍♀️")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lisianegarroni/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/lisiane.garroni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SPA Lisiane Garroni · Todos os direitos reservados</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Lotus size={18} /> Feito com cuidado em Porto Alegre
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
