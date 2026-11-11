'use client'

import { useLanguage } from '@/lib/language-context'
import {
  CleaningIcon,
  CrownIcon,
  ImplantIcon,
  ShieldIcon,
  SurgeryIcon,
  WhiteningIcon,
} from '@/components/service-icons'

// One consistent icon system for all services: the shared inline-SVG
// family in components/service-icons.tsx (24 viewBox, 2px stroke,
// currentColor) — no raster icons, no emoji, no icon fonts.
const icons = [SurgeryIcon, ImplantIcon, CrownIcon, ShieldIcon, WhiteningIcon, CleaningIcon]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-sky-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.services.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.services.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">{t.services.subtitle}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <article
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-navy/15 text-navy shadow-inner">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
