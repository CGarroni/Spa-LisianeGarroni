import { useState } from "react";
import daySpaImg from "../assets/images/day-spa.jpeg";
import spaRfImg from "../assets/images/spa-rf.jpeg";
import miracleImg from "../assets/images/miracle.jpeg";

function Pricing() {
	const [expanded, setExpanded] = useState(null);

	const packages = [
		{
			id: 1,
			name: "Day Spa",
			image: daySpaImg,
			duration: "120 min",
			price: "R$ 300,00",
			description:
				"Escalda pés, esfoliação, drink, massagem relaxante/drenagem, máscara e massagem facial.",
			packages: [
				{ qty: "5 Sessões", price: "R$ 1.350,00" },
				{ qty: "10 Sessões", price: "R$ 2.500,00" },
				{ qty: "Mensal 1x", price: "R$ 800,00" },
				{ qty: "Mensal 2x", price: "R$ 1.500,00" },
			],
		},
		{
			id: 2,
			name: "Spa Renata França",
			image: spaRfImg,
			duration: "120 min",
			price: "R$ 550,00",
			description:
				"Escalda pés, esfoliação, drink, drenagem RF, máscara facial, miracle face.",
			packages: [
				{ qty: "5 Sessões", price: "R$ 2.500,00" },
				{ qty: "10 Sessões", price: "R$ 4.800,00" },
				{ qty: "Mensal 1x", price: "R$ 1.800,00" },
				{ qty: "Mensal 2x", price: "R$ 3.200,00" },
			],
		},
		{
			id: 3,
			name: "Seu Momento Miracle",
			image: miracleImg,
			duration: "120 min",
			price: "R$ 640,00",
			description:
				"Escalda pés, esfoliação, drink, miracle touch, máscara facial, miracle face.",
			packages: [
				{ qty: "5 Sessões", price: "R$ 2.880,00" },
				{ qty: "10 Sessões", price: "R$ 5.760,00" },
				{ qty: "Mensal 1x", price: "R$ 2.050,00" },
				{ qty: "Mensal 2x", price: "R$ 3.850,00" },
			],
		},
	];

	return (
		<section id="pricing" className="services">
			<div className="container">
				<h2>Nossos Pacotes</h2>
				<div className="services-grid">
					{packages.map((item) => (
						<div key={item.id} className="service-card">
							<img src={item.image} alt={item.name} className="service-image" />
							<h4>{item.name}</h4>
							<p className="service-description">{item.description}</p>
							<div className="service-info">
								<span className="duration">⏱️ {item.duration}</span>
								<span className="price">{item.price}</span>
							</div>
							<button
								className="btn-packages"
								onClick={() =>
									setExpanded(expanded === item.id ? null : item.id)
								}
							>
								{expanded === item.id ? "Ocultar Pacotes" : "Ver Pacotes"}
							</button>
							{expanded === item.id && (
								<div className="packages-detail">
									<ul>
										{item.packages.map((pkg, idx) => (
											<li key={idx}>
												<span>{pkg.qty}</span>
												<span className="pkg-price">{pkg.price}</span>
											</li>
										))}
									</ul>
								</div>
							)}
							<button
								className="btn-primary"
								onClick={() => {
									document
										.getElementById("booking")
										.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Agendar
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Pricing;
