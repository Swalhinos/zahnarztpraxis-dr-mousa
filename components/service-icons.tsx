import type { ReactNode } from 'react'

// Service icon family: original duotone vectors in one visual language —
// a bold navy outline (#0A3556) with flat blue fills (#2E6E9E / #38BDF8),
// drawn on a 48 viewBox with consistent 2.8 stroke, rounded caps and
// joins. Eight icons, one per service area; the services grid and the
// implants panel draw from this family only — no raster icons, no
// emoji, no icon fonts.

const NAVY = '#0A3556'
const BLUE = '#2E6E9E'
const SKY = '#38BDF8'
const WHITE = '#FFFFFF'

type IconProps = {
  className?: string
}

function IconShell({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke={NAVY}
      strokeWidth={2.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

// Shared molar silhouette (white enamel, navy outline, two roots).
const molarPath =
  'M15 7 C10 7 6.5 10.5 6.5 16 C6.5 20.5 8 24 9.2 29 C10.3 33.8 11.2 41 15 41 C18.2 41 18.9 35.8 20.4 31.8 C21.5 29 26.5 29 27.6 31.8 C29.1 35.8 29.8 41 33 41 C36.8 41 37.7 33.8 38.8 29 C40 24 41.5 20.5 41.5 16 C41.5 10.5 38 7 33 7 C29.8 7 27.8 9.2 24 9.2 C20.2 9.2 18.2 7 15 7 Z'

// Vorsorge & Check-up: the dental-visit scene — patient reclined on the
// chair (sky body, navy chair silhouette) under the treatment lamp.
export function CheckupIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d="M40.5 5.5 L40.5 13" strokeWidth={3} />
      <path d="M40.5 5.5 L33.5 5.5" strokeWidth={3} />
      <path d="M30.5 5.5 L37.5 5.5 L35.8 11 L32.2 11 Z" fill={NAVY} stroke="none" />
      <path
        d="M10.5 12.5 C9.3 12.5 8.4 13.6 8.8 15 L11.3 29.8 C11.6 31.8 13 33 15 33 L36.5 33 C38.6 33 39.8 31.4 39.3 29.6 L38.8 27.8 C38.5 26.6 37.5 25.9 36.2 25.6 L16.5 14.6 C14.5 13.5 12.3 12.5 10.5 12.5 Z"
        fill={NAVY}
        stroke="none"
      />
      <path d="M17.5 15.8 C22.5 18.3 28 21.4 32.8 24.2 L31.2 27.6 C26.2 24.8 21.2 22 16.8 19.4 Z" fill={SKY} stroke="none" />
      <circle cx="14.8" cy="13.8" r="3.1" fill={SKY} stroke="none" />
      <rect x="22.5" y="33" width="4" height="4.5" fill={NAVY} stroke="none" />
      <rect x="15" y="37.5" width="18" height="3" rx="1.5" fill={NAVY} stroke="none" />
    </IconShell>
  )
}

// Professionelle Zahnreinigung: molar with a water droplet at its side
// and two polish sparkles.
export function CleaningIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <g transform="translate(3.2 2.8) scale(0.9)">
        <path d={molarPath} fill={WHITE} />
      </g>
      <path
        d="M42.5 2.8 C43.1 5 43.4 5.4 45.7 6.2 C43.4 6.9 43.1 7.3 42.5 9.6 C41.9 7.3 41.6 6.9 39.3 6.2 C41.6 5.4 41.9 5 42.5 2.8 Z"
        fill={SKY}
        stroke="none"
      />
      <path
        d="M43.5 13.3 C43.9 14.6 44.1 14.9 45.7 15.4 C44.1 15.9 43.9 16.2 43.5 17.7 C43.1 16.2 42.9 15.9 41.3 15.4 C42.9 14.9 43.1 14.6 43.5 13.3 Z"
        fill={SKY}
        stroke="none"
      />
      <path
        d="M4.2 24 C5.7 26.4 6.5 27.9 6.5 29.4 C6.5 31.1 5.5 32.2 4.2 32.2 C2.9 32.2 1.9 31.1 1.9 29.4 C1.9 27.9 2.7 26.4 4.2 24 Z"
        fill={BLUE}
        stroke="none"
      />
    </IconShell>
  )
}

// Zahnaufhellung: bright molar radiating shine — short rays around the
// crown and a sky sparkle over the centre dip.
export function WhiteningIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d={molarPath} fill={WHITE} />
      <path d={molarPath} fill={SKY} fillOpacity={0.1} stroke="none" />
      <path
        d="M24 0.8 C24.5 2.3 24.8 2.7 26.8 3.3 C24.8 3.9 24.5 4.3 24 6.2 C23.5 4.3 23.2 3.9 21.2 3.3 C23.2 2.7 23.5 2.3 24 0.8 Z"
        fill={SKY}
        stroke="none"
      />
      <path d="M4.2 3.8 L7.6 7.2" strokeWidth={2.6} />
      <path d="M43.8 3.8 L40.4 7.2" strokeWidth={2.6} />
      <path d="M1.6 15.2 L5.2 16.2" strokeWidth={2.6} />
      <path d="M46.4 15.2 L42.8 16.2" strokeWidth={2.6} />
    </IconShell>
  )
}

// Implantologie: a rootless crown over a blue threaded implant screw
// with three ridge lines.
export function ImplantIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M13.5 6.5 C13.5 5 15.2 4 17.2 4 C19.8 4 21.2 5.8 24 5.8 C26.8 5.8 28.2 4 30.8 4 C32.8 4 34.5 5 34.5 6.5 L34.5 11 C34.5 14.6 32.2 16.8 29.2 17.6 C26.4 18.3 21.6 18.3 18.8 17.6 C15.8 16.8 13.5 14.6 13.5 11 Z"
        fill={WHITE}
      />
      <path d="M18.8 21.5 L29.2 21.5 L27.9 37.5 C27.6 40.3 26 42.5 24 42.5 C22 42.5 20.4 40.3 20.1 37.5 Z" fill={BLUE} />
      <path d="M17.6 26.8 H30.4" strokeWidth={2.6} />
      <path d="M18.4 31.8 H29.6" strokeWidth={2.6} />
      <path d="M19.2 36.8 H28.8" strokeWidth={2.6} />
    </IconShell>
  )
}

// Oralchirurgie: a molar rising out of a solid blue gum block, tilted
// like a tooth being gently lifted.
export function SurgeryIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M7.5 30.5 C7.5 26.8 10 24.5 13.5 24.5 L34.5 24.5 C38 24.5 40.5 26.8 40.5 30.5 L40.5 35.5 C40.5 39 38.5 41.5 35.2 41.5 L12.8 41.5 C9.5 41.5 7.5 39 7.5 35.5 Z"
        fill={BLUE}
      />
      <g transform="translate(24 19.5) rotate(-6) scale(0.78) translate(-24 -24)">
        <path d={molarPath} fill={WHITE} />
      </g>
    </IconShell>
  )
}

// Zahnersatz: a three-crown bridge (scalloped lower edge) floating over
// a blue denture base with two abutment posts.
export function BridgesIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M8.5 10.5 C8.5 7.3 10.6 5.5 13.2 5.5 C15.7 5.5 16.8 7.6 18.6 7.6 C20.9 7.6 21.7 5.7 24 5.7 C26.3 5.7 27.1 7.6 29.4 7.6 C31.2 7.6 32.3 5.5 34.8 5.5 C37.4 5.5 39.5 7.3 39.5 10.5 L39.5 14.5 C39.5 16.6 38.2 17.8 36.4 17.8 C34.4 17.8 33.9 16.4 32.2 16.4 C30.5 16.4 30 17.8 28 17.8 C26 17.8 25.5 16.4 24 16.4 C22.5 16.4 22 17.8 20 17.8 C18 17.8 17.5 16.4 15.8 16.4 C14.1 16.4 13.6 17.8 11.6 17.8 C9.8 17.8 8.5 16.6 8.5 14.5 Z"
        fill={WHITE}
      />
      <path
        d="M10.5 31 C10.5 29.2 11.9 28.2 13.8 28.2 L15.2 28.2 C16 22.5 18.6 22.5 19.4 28.2 L28.6 28.2 C29.4 22.5 32 22.5 32.8 28.2 L34.2 28.2 C36.1 28.2 37.5 29.2 37.5 31 L37.5 35.8 C37.5 38.3 35.8 39.8 33.4 39.8 L14.6 39.8 C12.2 39.8 10.5 38.3 10.5 35.8 Z"
        fill={BLUE}
      />
    </IconShell>
  )
}

// Füllungstherapie: molar with a solid blue filling shape seated in the
// crown — a centre dip on top, tapering down between the roots.
export function FillingsIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d={molarPath} fill={WHITE} />
      <path
        d="M16.5 11.8 C19.5 11.8 21 13.4 24 15.4 C27 13.4 28.5 11.8 31.5 11.8 C32.4 15.6 31.2 19.8 29.5 23.8 C28.2 26.9 27.6 30.5 24 30.5 C20.4 30.5 19.8 26.9 18.5 23.8 C16.8 19.8 15.6 15.6 16.5 11.8 Z"
        fill={BLUE}
        stroke="none"
      />
    </IconShell>
  )
}

// Kinderzahnheilkunde: a smaller, rounder tooth with a friendly face —
// dot eyes, a smile arc and sky-blue cheeks on a soft sky tint.
export function KidsIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M16.5 8.5 C11.8 8.5 8.2 12 8.2 16.8 C8.2 20.8 9.4 24.2 10.3 28.5 C11.1 32.6 11.9 39.5 15.4 39.5 C18.5 39.5 19.2 34.9 20.5 31.5 C21.6 28.7 26.4 28.7 27.5 31.5 C28.8 34.9 29.5 39.5 32.6 39.5 C36.1 39.5 36.9 32.6 37.7 28.5 C38.6 24.2 39.8 20.8 39.8 16.8 C39.8 12 36.2 8.5 31.5 8.5 C28.4 8.5 27 10.6 24 10.6 C21 10.6 19.6 8.5 16.5 8.5 Z"
        fill={WHITE}
      />
      <path
        d="M16.5 8.5 C11.8 8.5 8.2 12 8.2 16.8 C8.2 20.8 9.4 24.2 10.3 28.5 C11.1 32.6 11.9 39.5 15.4 39.5 C18.5 39.5 19.2 34.9 20.5 31.5 C21.6 28.7 26.4 28.7 27.5 31.5 C28.8 34.9 29.5 39.5 32.6 39.5 C36.1 39.5 36.9 32.6 37.7 28.5 C38.6 24.2 39.8 20.8 39.8 16.8 C39.8 12 36.2 8.5 31.5 8.5 C28.4 8.5 27 10.6 24 10.6 C21 10.6 19.6 8.5 16.5 8.5 Z"
        fill={SKY}
        fillOpacity={0.16}
        stroke="none"
      />
      <circle cx="19.3" cy="20.5" r="1.7" fill={NAVY} stroke="none" />
      <circle cx="28.7" cy="20.5" r="1.7" fill={NAVY} stroke="none" />
      <circle cx="15.6" cy="24.8" r="1.8" fill={SKY} stroke="none" />
      <circle cx="32.4" cy="24.8" r="1.8" fill={SKY} stroke="none" />
      <path d="M20.2 25.2 C22 27.6 26 27.6 27.8 25.2" strokeWidth={2.4} />
    </IconShell>
  )
}
