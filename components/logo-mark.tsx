// Original logo for Zahnarztpraxis Dr. Safwan Mousa (newly designed for
// this site — the practice has no public logo): a white molar with a
// smile arc on a sky-to-navy gradient tile. Inline SVG so it stays crisp
// at every size and costs no extra request.
export function LogoMark({
  variant = 'light',
  className = '',
}: {
  variant?: 'light' | 'dark'
  className?: string
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Praxis Dr. Safwan Mousa">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4FC3F7" />
          <stop offset="1" stopColor="#14273D" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="28" fill="url(#logoGrad)" />
      <path
        d="M60 26 C46 15 22 24 24 46 C25 62 35 67 37 82 C38 93 42 100 49 100 C57 100 56 88 60 88 C64 88 63 100 71 100 C78 100 82 93 83 82 C85 67 95 62 96 46 C98 24 74 15 60 26 Z"
        fill={variant === 'dark' ? '#0E2233' : '#FFFFFF'}
      />
      <path
        d="M42 106 C52 111 68 111 78 106"
        fill="none"
        stroke="#4FC3F7"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  )
}
