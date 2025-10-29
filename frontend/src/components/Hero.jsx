// Hero.jsx - Seção com chamada de ação //

import spaAmbiente from "../assets/images/spa-ambiente.jpeg"


function Hero() {
	return (
		<section id="home" className="hero">
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

				<div className="hero-image">
					<img src={spaAmbiente} alt="Ambiente do Spa Lisiane Garroni" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
