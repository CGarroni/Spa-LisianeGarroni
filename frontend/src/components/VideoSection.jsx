// VideoSection.jsx - Seção com 2 vídeos de demonstração

import { VIDEOS } from '../config/videoConfig';

function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">
        <h2>Conheça Nossos Serviços em Vídeo</h2>
        <p className="video-intro">
          Assista a apresentação dos nossos ambientes
        </p>

        <div className="videos-grid">
          {/* Vídeo 1 */}
          <div className="video-card">
            <div className="video-player">
              <video 
                controls 
                poster="https://via.placeholder.com/400x300?text=Vídeo+1"
              >
                <source 
                  src={VIDEOS.section.url} 
                  type="video/mp4" 
                />
                Seu navegador não suporta vídeo HTML5
              </video>
            </div>
            <h3>Serviços Exclusivos</h3>
            <p>Conheça nossa variedade de tratamentos premium</p>
          </div>

          {/* Vídeo 2 */}
          <div className="video-card">
            <div className="video-player">
              <video 
                controls 
                poster="https://via.placeholder.com/400x300?text=Vídeo+2"
              >
                <source 
                  src={VIDEOS.hero.url} 
                  type="video/mp4" 
                />
                Seu navegador não suporta vídeo HTML5
              </video>
            </div>
            <h3>Ambiente Premium</h3>
            <p>Visite nosso espaço de relaxamento e bem-estar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
