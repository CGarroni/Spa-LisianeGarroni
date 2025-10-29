// App.jsx - Componente principal que reúne tudo

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Booking />
      <Footer />
       <WhatsAppButton />
    </div>
  )
}

export default App