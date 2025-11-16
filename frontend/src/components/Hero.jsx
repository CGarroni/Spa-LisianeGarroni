// Hero.jsx - Seção com chamada de ação //

import { VIDEOS } from "../config/videoConfig";


function Hero() {
	return (
		<section id="home" className="hero">
			{/* Vídeo de Fundo */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-video"
      >
        <source 
          src={VIDEOS.hero.url} 
          type="video/mp4" 
        />
        Seu navegador não suporta vídeo HTML5
      </video>

      {/* Overlay Escuro para Melhor Leitura */}
      <div className="hero-overlay"></div>

			<div className="container">
				<div className="hero-content">
					<h2>Bem-vindo ao Spa Lisiane Garroni</h2>
					<p>
						Experimente o verdadeiro relaxamento com nossos serviços premium. Técnicas exclusivas do método Renata França para transformar seu corpo e mente.
					</p>

					<button
						className="btn-primary"
						onClick={() => {
							// Rola até a seção de agendamento
							document
								.getElementById("booking")
								.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Agendar Agora
					</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
