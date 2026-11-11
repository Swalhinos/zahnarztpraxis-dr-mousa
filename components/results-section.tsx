'use client'

import { useCallback, useEffect, useState } from 'react'
import { Expand, X } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { useLanguage } from '@/lib/language-context'
import { CLINIC } from '@/lib/translations'

// Before/After results: Dr Mousa's OWN published case photos (his
// Instagram @safwan_87m), each a finished before/after composite.
// The graphic clinical imagery lives only inside this section.
const CASES = [
  { src: '/images/case-1.jpg', w: 900, h: 900 },
  { src: '/images/case-2.jpg', w: 715, h: 894 },
  { src: '/images/case-3.jpg', w: 900, h: 900 },
  { src: '/images/case-4.jpg', w: 900, h: 900 },
]

export function ResultsSection() {
  const { t } = useLanguage()
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close])

  return (
    <section id="results" className="bg-sky-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.results.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.results.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">{t.results.subtitle}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {CASES.map((c, i) => (
            <figure
              key={c.src}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background shadow-sm"
            >
              <img
                src={c.src}
                alt={`${t.results.caption} — ${t.results.before} / ${t.results.after} · ${CLINIC.name}`}
                width={c.w}
                height={c.h}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] sm:aspect-square"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent p-4 pt-10">
                <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-navy">
                  {t.results.caption}
                </span>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${t.results.enlarge}: ${t.results.caption} ${i + 1}`}
                  className="flex size-9 items-center justify-center rounded-full bg-background/90 text-navy shadow transition-transform hover:scale-105"
                >
                  <Expand className="size-4" aria-hidden="true" />
                </button>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          {t.results.note}
        </p>
        <div className="mt-5 flex justify-center">
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground shadow-md transition-colors hover:bg-navy/90"
          >
            <InstagramIcon className="size-4" aria-hidden="true" />
            {t.results.ctaInstagram}
          </a>
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${t.results.caption} ${active + 1}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={t.results.close}
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-background text-navy shadow-lg"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <img
            src={CASES[active].src}
            alt={`${t.results.caption} — ${t.results.before} / ${t.results.after} · ${CLINIC.name}`}
            className="max-h-[86vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
