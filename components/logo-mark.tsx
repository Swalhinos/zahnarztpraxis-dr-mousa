// The practice logo is Dr. Mousa's own artwork — a gold tooth on a
// charcoal background, supplied by the practice as a photo. It is used
// completely unchanged (never redrawn, recoloured or reinterpreted):
// the photo itself is shown inside a dark rounded tile whose colour
// matches the photo's own charcoal background (#3F474A, sampled from
// the artwork's edges), so the full artwork sits naturally at any size.
export function LogoMark({
  className = '',
}: {
  variant?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[24%] bg-[#3F474A] ${className}`}
      role="img"
      aria-label="Praxis Dr. Safwan Mousa"
    >
      <img src="/images/logo-user.jpg" alt="" className="h-full w-full object-contain" />
    </span>
  )
}
