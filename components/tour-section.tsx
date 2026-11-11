'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

// Practice tour video: click-to-play facade — no video bytes are
// transferred until the visitor presses play (poster only).
export function TourSection() {
  const { t } = useLanguage()
  const [playing, setPlaying] = useState(false)

  return (
    <section id="tour" className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
      <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-sky-soft px-4 py-1.5 text-xs font-medium text-navy">
          {t.tour.badge}
        </span>
        <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
          {t.tour.title}
        </h2>
        <p className="leading-relaxed text-muted-foreground text-pretty">{t.tour.subtitle}</p>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
        {playing ? (
          <video
            src="/images/practice-tour.mp4"
            poster="/images/practice-tour-poster.jpg"
            controls
            autoPlay
            playsInline
            className="aspect-video w-full bg-navy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block w-full"
            aria-label={t.tour.play}
          >
            <img
              src="/images/practice-tour-poster.jpg"
              alt={t.tour.title}
              width={1280}
              height={720}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy/25 transition-colors group-hover:bg-navy/35">
              <span className="flex size-16 items-center justify-center rounded-full bg-background/95 text-navy shadow-xl transition-transform group-hover:scale-105">
                <Play className="ml-1 size-7" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-navy/80 px-4 py-1.5 text-sm font-medium text-navy-foreground">
                {t.tour.play}
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  )
}
