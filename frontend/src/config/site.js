// site.js - Dados centrais do site

export const WHATSAPP_NUMBER = "5551999308532";

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const MSG_AGENDAR =
  "Olá! Gostaria de agendar um horário no Spa Lisiane Garroni 🧘‍♀️";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Borges+de+Medeiros,+2500,+Sala+908,+Porto+Alegre+RS";

export const ADDRESS = {
  street: "Av. Borges de Medeiros, 2500 — Sala 908",
  complement: "Prime Offices | Praia de Belas",
  reference: "Ao lado do Shopping Praia de Belas · Porto Alegre/RS",
};

export const HOURS = "Segunda a Sexta, das 08:00 às 19:00 · Sábado, das 09:00 às 12:00";
