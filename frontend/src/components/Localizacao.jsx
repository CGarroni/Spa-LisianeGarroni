// Localizacao.jsx - Onde estamos: endereço + estacionamento, sem redundância

import Reveal from "./Reveal";
import Lotus from "./Lotus";
import { waLink, MAPS_URL, ADDRESS, MSG_AGENDAR } from "../config/site";
import espacoImg from "../assets/images/menu/menu-cover-espaco.jpg";

const PARKING = [
  {
    titulo: "Shopping Praia de Belas",
    texto: "Estacionamento do shopping, ao lado do SPA.",
  },
  {
    titulo: "Área Azul · Parque Marinha do Brasil",
    texto: "Opção pública bem em frente à região do SPA.",
  },
  {
    titulo: "Lyon — conveniado",
    texto: "90 minutos por apenas R$ 10,00 durante o seu atendimento.",
  },
];

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function Localizacao() {
  return (
    <section id="location" className="section section-alt">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Onde estamos</span>
          <h2 className="section-title">
            Um refúgio no <em>coração</em> de Porto Alegre
          </h2>
          <p className="section-lead">
            Com vista para o Guaíba, em um dos endereços mais privilegiados
            da cidade.
          </p>
        </Reveal>

        <Reveal>
          <div className="location-banner">
            <img
              src={espacoImg}
              alt="Ambiente do SPA Lisiane Garroni"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="location-grid">
          <Reveal>
            <div className="address-card">
              <Lotus size={40} className="addr-lotus" />
              <h3>Nosso endereço</h3>
              <address>
                <strong>{ADDRESS.street}</strong>
                <br />
                {ADDRESS.complement}
                <br />
                {ADDRESS.reference}
              </address>
              <div className="addr-actions">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  Ver no mapa
                </a>
                <a
                  href={waLink(MSG_AGENDAR)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Agendar visita
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="parking">
              <h3>Estacionamento</h3>
              <p>
                Chegar é fácil — e o seu carro também fica bem cuidado.
              </p>
              <ul className="parking-list">
                {PARKING.map((p) => (
                  <li key={p.titulo}>
                    <span className="parking-icon">
                      <PinIcon />
                    </span>
                    <div>
                      <strong>{p.titulo}</strong>
                      <p>{p.texto}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Localizacao;
