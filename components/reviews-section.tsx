'use client'

import { ExternalLink, Star } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { CLINIC } from '@/lib/translations'

// No invented testimonials: this section links out to the platforms
// where genuine patient reviews of the practice actually live.
export function ReviewsSection() {
  const { t } = useLanguage()

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-sky-soft px-4 py-1.5 text-xs font-medium text-navy">
          {t.reviews.badge}
        </span>
        <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
          {t.reviews.title}
        </h2>
        <div className="flex gap-1 text-primary" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-5 fill-current" />
          ))}
        </div>
        <p className="leading-relaxed text-muted-foreground text-pretty">{t.reviews.text}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href={CLINIC.doctolib}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground shadow-md transition-colors hover:bg-navy/90"
          >
            {t.reviews.doctolib}
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy/30 bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
          >
            {t.reviews.google}
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
