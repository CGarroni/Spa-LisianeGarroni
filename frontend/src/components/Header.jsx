import { useState } from 'react'
import spaLogo from '../assets/images/spa-logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-image">
            <img src={spaLogo} alt="Spa Lisiane Garroni Logo" />
          </div>
          <div className="logo-text">
            <h1>Spa Lisiane Garroni</h1>
            <p className="tagline">Seu lugar de paz e relaxamento</p>
          </div>
        </div>
        
        {/* BOTÃO HAMBURGER */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* MENU */}
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Início</a>
          <a href="#services" onClick={closeMenu}>Serviços</a>
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#booking" onClick={closeMenu}>Agendar</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
