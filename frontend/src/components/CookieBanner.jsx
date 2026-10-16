// CookieBanner.jsx - Banner de consentimento LGPD
// Só aparece quando META_PIXEL_ID está preenchido e ainda não há escolha salva.

import { useEffect, useState } from "react";
import {
  pixelAtivo,
  temConsentimento,
  salvarConsentimento,
  carregarPixel,
} from "../lib/pixel";

function CookieBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!pixelAtivo()) return;
    let escolha = null;
    try {
      escolha = localStorage.getItem("lgpd-consent");
    } catch {
      escolha = null;
    }
    if (!escolha) {
      setVisivel(true);
    } else if (escolha === "accepted") {
      carregarPixel();
    }
  }, []);

  if (!visivel) return null;

  const escolher = (aceito) => {
    salvarConsentimento(aceito);
    if (aceito) carregarPixel();
    setVisivel(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Usamos cookies para medir visitas e melhorar sua experiência.
      </p>
      <div className="cookie-actions">
        <button
          type="button"
          className="cookie-decline"
          onClick={() => escolher(false)}
        >
          Recusar
        </button>
        <button
          type="button"
          className="cookie-accept"
          onClick={() => escolher(true)}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
