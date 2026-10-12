// pixel.js - Meta Pixel com consentimento LGPD
// O Pixel só é carregado após o aceite no banner de cookies.
// Enquanto META_PIXEL_ID estiver vazio, nada é carregado.

import { META_PIXEL_ID } from "../config/site";

const CONSENT_KEY = "lgpd-consent";

export const pixelAtivo = () => META_PIXEL_ID !== "";

export const temConsentimento = () => {
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
};

export const salvarConsentimento = (aceito) => {
  try {
    localStorage.setItem(CONSENT_KEY, aceito ? "accepted" : "declined");
  } catch {
    /* armazenamento indisponível */
  }
};

export function carregarPixel() {
  if (!pixelAtivo() || window.fbq) return;
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

// Evento de clique em qualquer CTA de WhatsApp (só com consentimento)
export function rastrearWhatsApp(rotulo) {
  if (window.fbq && temConsentimento()) {
    window.fbq("track", "Contact", { content_name: rotulo || "whatsapp" });
  }
}
