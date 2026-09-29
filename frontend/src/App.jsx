// App.jsx - Componente principal que reúne tudo

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import VideoSection from './components/VideoSection'
import Pricing from "./components/Pricing";
import Booking from './components/Booking'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <VideoSection />
      <Pricing />
      <Location />
      <Booking />
      <Footer />
       <WhatsAppButton />
    </div>
  )
}

export default App