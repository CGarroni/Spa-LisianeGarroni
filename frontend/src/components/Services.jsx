import { useState } from "react";
import relaxanteImg from '../assets/images/relaxante.jpeg';
import linfaTradImg from '../assets/images/linfa-trad.jpeg';
import reikiImg from '../assets/images/reiki.jpeg';
import miracleTouchImg from '../assets/images/miracle-touch.jpeg';
import drenaLinfaImg from '../assets/images/drena-linfa.jpeg';
import miracleFaceImg from '../assets/images/miracle-face.jpeg';

function Services() {
  const [expandedPackages, setExpandedPackages] = useState(null);

  const therapists = [
    {
      id: 1,
      name: "CÉLIA & PALOMA (Métodos tradicionais)",
      services: [
        {
          id: 1,
          name: "Massagem Relaxante",
          description: "Massagem completa para relaxamento total",
          duration: "60 min",
          price: "R$ 150,00",
          image: relaxanteImg,
          packages: [
            { qty: "5 Sessões", price: "R$ 675,00" },
            { qty: "10 Sessões", price: "R$ 1.200,00" },
            { qty: "Mensal 1x", price: "R$ 510,00" },
            { qty: "Mensal 2x", price: "R$ 900,00" }
          ]
        },
        {
          id: 2,
          name: "Drenagem Linfática Tradicional",
          description: "Terapia para melhorar circulação",
          duration: "60 min",
          price: "R$ 165,00",
          image: linfaTradImg,
          packages: [
            { qty: "5 Sessões", price: "R$ 742,00" },
            { qty: "10 Sessões", price: "R$ 1.360,00" },
            { qty: "Mensal 1x", price: "R$ 561,00" },
            { qty: "Mensal 2x", price: "R$ 990,00" }
          ]
        },
        {
          id: 3,
          name: "Reiki",
          description: "Terapia energética para bem-estar",
          duration: "60 min",
          price: "R$ 120,00",
          image: reikiImg,
          packages: [
            { qty: "5 Sessões", price: "R$ 540,00" },
            { qty: "10 Sessões", price: "R$ 980,00" },
            { qty: "Mensal 1x", price: "R$ 408,00" },
            { qty: "Mensal 2x", price: "R$ 720,00" }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "LISIANE GARRONI (Métodos Renata França)",
      services: [
        {
          id: 4,
          name: "Miracle Touch",
          description: "Massagem terapêutica especializada",
          duration: "60 min",
          price: "R$ 460,00",
          image: miracleTouchImg,
          packages: [
            { qty: "5 Sessões", price: "R$ 2.070,00" },
            { qty: "10 Sessões", price: "R$ 3.680,00" },
            { qty: "Mensal 1x", price: "R$ 1.564,00" },
            { qty: "Mensal 2x", price: "R$ 2.760,00" }
          ]
        },
        {
          id: 5,
          name: "Drenagem Linfática",
          description: "Drenagem com técnica Renata França",
          duration: "60 min",
          price: "R$ 360,00",
          image: drenaLinfaImg,
          packages: [
            { qty: "5 Sessões", price: "R$ 1.620,00" },
            { qty: "10 Sessões", price: "R$ 2.880,00" },
            { qty: "Mensal 1x", price: "R$ 1.224,00" },
            { qty: "Mensal 2x", price: "R$ 2.160,00" }
          ]
        },
        {
          id: 6,
          name: "Miracle Face",
          description: "Tratamento facial premium Renata França",
          duration: "20 min",
          price: "R$ 240,00",
          image: miracleFaceImg,
          packages: [
            { qty: "5 Sessões", price: "R$ 1.055,00" },
            { qty: "10 Sessões", price: "R$ 1.840,00" },
            { qty: "Mensal 1x", price: "R$ 782,00" },
            { qty: "Mensal 2x", price: "R$ 1.380,00" }
          ]
        }
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <p className="services-intro">Conheça nossos profissionais e tratamentos especializados</p>

        {therapists.map((therapist) => (
          <div key={therapist.id} className="therapist-section">
            <h3 className="therapist-name">{therapist.name}</h3>
            
            <div className="services-grid">
              {therapist.services.map((service) => (
                <div 
                  key={service.id}
                  className="service-card"
                >
                  <img src={service.image} alt={service.name} className="service-image" />
                  
                  <h4>{service.name}</h4>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-info">
                    <span className="duration">⏱️ {service.duration}</span>
                    <span className="price">{service.price}</span>
                  </div>

                  <button 
                    className="btn-packages"
                    onClick={() => setExpandedPackages(
                      expandedPackages === service.id ? null : service.id
                    )}
                  >
                    {expandedPackages === service.id ? "Ocultar Pacotes" : "Ver Pacotes"}
                  </button>

                  {expandedPackages === service.id && (
                    <div className="packages-detail">
                      <ul>
                        {service.packages.map((pkg, idx) => (
                          <li key={idx}>
                            <span>{pkg.qty}</span>
                            <span className="pkg-price">{pkg.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button 
                    className="btn-primary"
                    onClick={() => {
                      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Agendar
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
