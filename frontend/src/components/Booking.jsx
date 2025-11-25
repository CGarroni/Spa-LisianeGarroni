import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: 'Massagem Relaxante',
    dataAgendamento: '',
    horario: '',
    observacoes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('https://spa-lisianegarroni.onrender.com/api/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.sucesso) {
        setSubmitMessage('✅ Agendamento criado com sucesso! Verifique seu email.')
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          servico: 'Massagem Relaxante',
          dataAgendamento: '',
          horario: '',
          observacoes: ''
        })
      } else {
        setSubmitMessage(`❌ Erro: ${data.erro}`)
      }
    } catch (error) {
      console.error('Erro ao agendar:', error)
      setSubmitMessage('❌ Erro ao conectar. Servidor está rodando?')
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
              name="nome"
              value={formData.nome}
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
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              placeholder="(51) 98765-4321"
            />
          </div>

          {/* Serviço */}
          <div className="form-group">
            <label>Serviço Desejado *</label>
            <select name="servico" value={formData.servico} onChange={handleChange} required>
  <option value="">Selecione um serviço</option>
  
  <option disabled style={{color: '#ff6b35', fontWeight: 'bold'}}>━━━ MÉTODOS TRADICIONAIS ━━━</option>
  <option value="Massagem Relaxante">Massagem Relaxante - R$ 150,00</option>
  <option value="Drenagem Linfática Tradicional">Drenagem Linfática Tradicional - R$ 165,00</option>
  <option value="Reiki">Reiki - R$ 120,00</option>

  <option disabled style={{color: '#ff6b35', fontWeight: 'bold'}}>━━━ MÉTODOS RENATA FRANÇA ━━━</option>
  <option value="Miracle Touch">Miracle Touch - R$ 460,00</option>
  <option value="Drenagem Linfática Renata França">Drenagem Linfática Renata França - R$ 360,00</option>
  <option value="Miracle Face">Miracle Face - R$ 240,00</option>

  <option disabled style={{color: '#ff6b35', fontWeight: 'bold'}}>━━━ NOSSOS PACOTES ━━━</option>
  <option value="Day Spa">Day Spa - R$ 300,00</option>
  <option value="Spa Renata França">Spa Renata França - R$ 550,00</option>
  <option value="Seu Momento Miracle">Seu Momento Miracle - R$ 640,00</option>
</select>

          </div>

          {/* Data */}
          <div className="form-group">
            <label>Data Desejada *</label>
            <input
              type="date"
              name="dataAgendamento"
              value={formData.dataAgendamento}
              onChange={handleChange}
              required
            />
          </div>

          {/* Hora */}
          <div className="form-group">
            <label>Hora *</label>
            <select name="horario" value={formData.horario} onChange={handleChange} required>
  <option value="">Selecione um horário</option>
  <optgroup label="Segunda a Sexta (08:00 - 19:00)">
    <option value="08:00">08:00</option>
    <option value="09:00">09:00</option>
    <option value="10:00">10:00</option>
    <option value="11:00">11:00</option>
    <option value="12:00">12:00</option>
    <option value="13:00">13:00</option>
    <option value="14:00">14:00</option>
    <option value="15:00">15:00</option>
    <option value="16:00">16:00</option>
    <option value="17:00">17:00</option>
    <option value="18:00">18:00</option>
    <option value="19:00">19:00</option>
  </optgroup>
  <optgroup label="Sábado (09:00 - 12:00)">
    <option value="09:00-sab">09:00</option>
    <option value="10:00-sab">10:00</option>
    <option value="11:00-sab">11:00</option>
    <option value="12:00-sab">12:00</option>
  </optgroup>
</select>

          </div>

          {/* Observações */}
          <div className="form-group">
            <label>Observações</label>
            <textarea
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
              placeholder="Alguma anotação importante?"
              rows="4"
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
