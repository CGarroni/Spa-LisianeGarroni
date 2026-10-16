// Lotus.jsx - Marca em SVG (lótus dourada, identidade do menu)

export default function Lotus({ size = 44, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        {/* Pétala central */}
        <path d="M32 10 C 38 20, 40 30, 32 44 C 24 30, 26 20, 32 10 Z" />
        {/* Pétalas laterais internas */}
        <path d="M18 18 C 26 24, 30 32, 28 44 C 20 36, 16 28, 18 18 Z" />
        <path d="M46 18 C 38 24, 34 32, 36 44 C 44 36, 48 28, 46 18 Z" />
        {/* Pétalas externas */}
        <path d="M8 30 C 16 32, 22 38, 24 48 C 15 44, 9 38, 8 30 Z" />
        <path d="M56 30 C 48 32, 42 38, 40 48 C 49 44, 55 38, 56 30 Z" />
        {/* Base */}
        <path d="M14 52 C 22 56, 42 56, 50 52" />
      </g>
    </svg>
  );
}
