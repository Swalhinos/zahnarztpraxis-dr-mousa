import type { ReactNode } from 'react'

// Service icons for the six service cards and the implants panel are the
// real files of a duotone dental icon family sourced from Flaticon (free
// license, attribution in the footer), recolored to the site palette:
// navy outline #0A3556, fills #2E6E9E / #38BDF8. They ship as high-res
// (512px) PNG assets in /public/icons and are rendered through the same
// component API as before, so services.tsx and implants-section.tsx are
// unchanged. CheckupIcon and KidsIcon below are not placed anywhere and
// remain the previous inline vectors.

const NAVY = '#0A3556'
const BLUE = '#2E6E9E'
const SKY = '#38BDF8'
const WHITE = '#FFFFFF'

type IconProps = {
  className?: string
}

function PngIcon({ className, src }: IconProps & { src: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      draggable={false}
      className={className}
    />
  )
}

// Oralchirurgie — "Oral Surgery" concept: molar rising out of a gum block.
export function SurgeryIcon({ className }: IconProps) {
  return <PngIcon className={className} src="/icons/icon-surgery.png" />
}

// Implantologie — "Dental Implants" concept: crown on a threaded implant.
export function ImplantIcon({ className }: IconProps) {
  return <PngIcon className={className} src="/icons/icon-implant.png" />
}

// Zahnersatz & Prothetik — "Dentures" concept: denture in its glass.
export function BridgesIcon({ className }: IconProps) {
  return <PngIcon className={className} src="/icons/icon-denture.png" />
}

// Zahnerhaltung & Füllungen — "Fillings" concept: inlay piece seated
// into the molar with a downward arrow.
export function FillingsIcon({ className }: IconProps) {
  return <PngIcon className={className} src="/icons/icon-filling.png" />
}

// Ästhetische Zahnmedizin — shine concept: bright molar with sparkles.
export function WhiteningIcon({ className }: IconProps) {
  return <PngIcon className={className} src="/icons/icon-whitening.png" />
}

// Prophylaxe & Zahnreinigung — cleaning concept: molar brushed with foam.
export function CleaningIcon({ className }: IconProps) {
  return <PngIcon className={className} src="/icons/icon-cleaning.png" />
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
