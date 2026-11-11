'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { CLINIC } from '@/lib/translations'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function ImplantsSection() {
  const { t } = useLanguage()
  return (
    <section id="implants" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-6">
        <div className="flex flex-col items-start gap-4">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">{t.implants.badge}</span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">{t.implants.title}</h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">{t.implants.subtitle}</p>
          <ul className="flex flex-col gap-3">
            {t.implants.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-navy">
                  <Check className="size-4" />
                </span>
                <span className="leading-relaxed text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#1fb457]" render={<a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" />}>
            <WhatsAppIcon className="size-4" />
            {t.implants.cta}
          </Button>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
          <img
            src="/images/practice-lab.jpg"
            alt={t.implants.title}
            width={750}
            height={1000}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_55%]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
