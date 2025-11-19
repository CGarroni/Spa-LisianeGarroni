// App.jsx - Componente principal que reúne tudo

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import VideoSection from './components/VideoSection'
import Pricing from "./components/Pricing";
import Booking from './components/Booking'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
<div className="packages-bridge">
  <div className="container">
    <h3>💰 Quer economizar?</h3>
    <p>Confira nossos <a href="#pricing">pacotes especiais</a> com descontos exclusivos!</p>
  </div>
</div>
      <About />
      <Gallery />
      <VideoSection />
      <Pricing />
      <Booking />
      <Footer />
       <WhatsAppButton />
    </div>
  )
}

export default App