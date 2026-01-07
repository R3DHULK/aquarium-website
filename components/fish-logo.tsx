export function FishLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fish body */}
      <ellipse cx="32" cy="32" rx="20" ry="14" fill="url(#fishGradient)" />

      {/* Fish eye */}
      <circle cx="40" cy="28" r="3" fill="white" />
      <circle cx="41" cy="28" r="1.5" fill="black" />

      {/* Fish fin - top */}
      <path d="M 28 20 Q 26 10 32 18 Q 38 10 36 20 Z" fill="url(#finGradient)" opacity="0.8" />

      {/* Fish fin - bottom */}
      <path d="M 28 44 Q 26 54 32 46 Q 38 54 36 44 Z" fill="url(#finGradient)" opacity="0.6" />

      {/* Fish tail */}
      <path d="M 52 32 L 64 24 L 60 32 L 64 40 Z" fill="url(#tailGradient)" />

      {/* Mouth */}
      <path d="M 45 35 Q 48 36 48 37" stroke="currentColor" strokeWidth="1" fill="none" />

      <defs>
        <linearGradient id="fishGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="100%" stopColor="#0288d1" />
        </linearGradient>
        <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00bcd4" />
          <stop offset="100%" stopColor="#00e5ff" />
        </linearGradient>
        <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="100%" stopColor="#0288d1" />
        </linearGradient>
      </defs>
    </svg>
  )
}
