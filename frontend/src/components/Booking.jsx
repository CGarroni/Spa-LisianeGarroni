// Booking.jsx - Formulário de agendamento

import { useState } from "react";

function Booking() {
  // Estados do fomulário
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    phone: '',
    service: 'Massagem Relaxante',
    date: '',
    time: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Atualiza estado quando digita
  const handleChange = async (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Enviar formulário
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      //Simular envio (depois conectaremo com Backend)
      console.log('Dados do agendamento:', formData)

      setSubmitMessage('✅ Agendamento recebido! Entraremos em contato em breve.')

      // Limpa formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Massagem Relaxante',
        date: '',
        time: ''
      })
     } catch (error) {
  console.log('Erro ao agendar:', error)
  setSubmitMessage('❌ Erro ao agendar. Tente novamente.')
} finally {
  setIsSubmitting(false)
}
  }

  return (
    <section id="booking" className="booking">
      <div className="container">
        <h2>Agende Seu Horário</h2>

        <form onSubmit={handleSubmit} className="booking-form">
          {/* Nome */}
          <div className="form-group">
            <label>Nome Completo *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>

          {/* Telefone */}
          <div className="form-group">
            <label>Telefone/WhatsApp *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(51) 9999-8888"
            />
          </div>

          {/* Serviço */}
          <div className="form-group">
            <label>Serviço Desejado *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option>Massagem Relaxante</option>
              <option>Drenagem Linfática</option>
              <option>Massagem Terapêutica</option>
              <option>Massagem Modeladora</option>
              <option>Hot Stone (Pedras Quentes)</option>
            </select>
          </div>

          {/* Data */}
          <div className="form-group">
            <label>Data Desejada *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Hora */}
          <div className="form-group">
            <label>Hora *</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botão Enviar */}
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Agendando...' : 'Confirmar Agendamento'}
          </button>
        </form>

        {/* Mensagem de sucesso/erro */}
        {submitMessage && (
          <div className="message">
            {submitMessage}
          </div>
        )}
      </div>
    </section>
  )
}

export default Booking