// Services.jsx - Lista de serviços com preços

import { useState } from "react";

function Services() {
  //useState = estado do componente (mudança de dados)
  const [selectedService, setSelectedService] = useState(null)

  //Array com dados dos serviços
  const services = [
    {
      id: 1,
      name: "Massagem Relaxante",
      description: "Massagem completa para relaxamento total",
      duration: "60 min",
      price: "R$ 180,00"
    },
    {
      id: 2,
      name: "Drenagem Linfática",
      description: "Terapia para melhorar circulação",
      duration: "90 min",
      price: "R$ 170,00"
    },
    {
      id: 3,
      name: "Massagem Terapêutica",
      description: "Para alívio de dores e tensões",
      duration: "60 min",
      price: "R$ 210,00"
    },
    {
      id: 4,
      name: "Hot Stone (Pedras Quentes)",
      description: "Massagem com pedras quentes relaxantes",
      duration: "90 min",
      price: "R$ 195,00"
    },
    {
      id: 4,
      name: "Massagem Modelafora",
      description: "Massagem estética com movimentos firmes e ótimos resultados",
      duration: "90 min",
      price: "R$ 160,00"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>

        <div className="services-grid">
          {/* map = percorre array e cria card para cada um */}
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service)}
              style={{
                cursor: 'pointer',
                borderLeft: selectedService?.id === service.id ? '4px solid #8b7355' : 'none'
              }}
            >
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-info">
                <span>⏱️ {service.duration}</span>
                <span className="price">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mostrar detalhes se clicou em um serviço */}
        {selectedService && (
          <div className="service-details">
            <h3>Selecionou: {selectedService.name}</h3>
            <p>{selectedService.description}</p>
            <button className="btn-primary">Agendar {selectedService.name}</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services