'use client'

import { useLanguage } from '@/lib/language-context'
import { LogoMark } from '@/components/logo-mark'
import { CLINIC } from '@/lib/translations'

export function SiteFooter() {
  const { t } = useLanguage()

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#implants', label: t.nav.implants },
    { href: '#results', label: t.nav.results },
    { href: '#faq', label: t.nav.faq },
    { href: '#appointment', label: t.nav.book },
  ]

  const socials = [
    { href: CLINIC.instagram, label: 'Instagram' },
    { href: CLINIC.tiktok, label: 'TikTok' },
    { href: CLINIC.doctolib, label: 'Doctolib' },
  ]

  return (
    <footer className="bg-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <LogoMark variant="light" className="h-10 w-10" />
            <div className="leading-tight">
              <p className="font-serif font-semibold text-navy-foreground">{CLINIC.shortName}</p>
              <p className="text-xs text-navy-foreground/60">{CLINIC.city}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-navy-foreground/70">{t.footer.desc}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.footer.quickLinks}
          </h3>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-fit text-sm text-navy-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.footer.servicesTitle}
          </h3>
          {t.services.items.map((s) => (
            <a
              key={s.title}
              href="#services"
              className="w-fit text-sm text-navy-foreground/70 transition-colors hover:text-primary"
            >
              {s.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.footer.contactTitle}
          </h3>
          <a
            href={CLINIC.landlineHref}
            className="w-fit text-sm text-navy-foreground/70 transition-colors hover:text-primary"
            dir="ltr"
          >
            {CLINIC.landlineDisplay}
          </a>
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm text-navy-foreground/70 transition-colors hover:text-primary"
            dir="ltr"
          >
            {CLINIC.phoneDisplay}
          </a>
          <p className="text-sm leading-relaxed text-navy-foreground/70">{CLINIC.address}</p>
          <div className="mt-1 flex flex-col gap-1.5">
            <span className="text-xs font-medium uppercase tracking-wider text-navy-foreground/50">
              {t.footer.socials}
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-navy-foreground/70 transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-navy-foreground/50 sm:flex-row sm:text-left lg:px-6">
          <span>{`© ${new Date().getFullYear()} ${CLINIC.name}. ${t.footer.rights}`}</span>
          <span className="flex gap-5">
            <a href="/impressum.html" className="transition-colors hover:text-primary">
              {t.footer.impressum}
            </a>
            <a href="/datenschutz.html" className="transition-colors hover:text-primary">
              {t.footer.datenschutz}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
