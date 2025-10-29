import { useState } from 'react'

// Importe as fotos que você tem na pasta images
import foto1 from '../assets/images/drenagem-linfatica.jpeg'
import foto2 from '../assets/images/galeria-2.jpeg'
import foto3 from '../assets/images/miracle-touch.jpeg'

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Use as fotos importadas
  const images = [
    { 
      src: foto1,
      title: 'Resultado Drenagem Linfática'
    },
    { 
      src: foto2,
      title: 'Resultado Massagem Modeladora'
    },
    { 
      src: foto3,
      title: 'Resultado Miracle Touch'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="gallery-carousel">
      <h3 className="gallery-title">✨ Veja os Resultados Reais</h3>
      
      <div className="carousel-container">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].title}
          className="carousel-image"
        />
        <div className="carousel-caption">
          {images[currentIndex].title}
        </div>
      </div>

      <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Anterior">
        ❮
      </button>

      <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Próximo">
        ❯
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
