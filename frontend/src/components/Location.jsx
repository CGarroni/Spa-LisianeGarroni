// Location.jsx - Onde estamos: endereço e estacionamento

import localizacaoImg from "../assets/images/spa-localizacao.jpeg";

function Location() {
  return (
    <section id="location" className="location">
      <div className="container">
        <h2>Onde estamos</h2>
        <p className="location-intro">
          O Spa Lisiane Garroni está em um endereço privilegiado de Porto Alegre.
        </p>

        <div className="location-content">
          <div className="location-image">
            <img src={localizacaoImg} alt="Localização do Spa Lisiane Garroni" />
          </div>

          <div className="location-text">
            <div className="location-address">
              <p><strong>📍 Av. Borges de Medeiros, 2500 — Sala 908</strong></p>
              <p>Prime Offices | Praia de Belas</p>
              <p>Ao lado do Shopping Praia de Belas.</p>
            </div>

            <h3>Estacionamento</h3>
            <ul className="parking-list">
              <li>Estacionamento do <strong>Shopping Praia de Belas</strong></li>
              <li><strong>Área Azul</strong> do Parque Marinha do Brasil</li>
              <li>
                Estacionamento conveniado <strong>Lyon</strong> — nossos clientes
                contam com <strong>90 minutos de estacionamento por apenas R$ 10,00</strong>,
                durante o período do atendimento.
              </li>
            </ul>

            <p className="location-note">
              Tudo pensado para que você chegue com facilidade, tranquilidade e
              possa aproveitar sua experiência no Spa desde o primeiro momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
