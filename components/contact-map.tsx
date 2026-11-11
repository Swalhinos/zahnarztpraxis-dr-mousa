'use client'

import { useState } from 'react'
import { Clock, MapPin, Phone, TrainFront } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { CLINIC } from '@/lib/translations'

// Privacy-first map: no Google request is made until the visitor
// actively clicks "load map" (also keeps the initial page weight lean).
const MAP_LOAD_LABEL: Record<string, string> = {
  de: 'Karte laden',
  ar: 'تحميل الخريطة',
  en: 'Load map',
  fr: 'Charger la carte',
}
const MAP_NOTE: Record<string, string> = {
  de: 'Erst beim Laden wird eine Verbindung zu Google Maps aufgebaut.',
  ar: 'لن يُنشأ اتصال بـ Google Maps إلا عند التحميل.',
  en: 'A connection to Google Maps is only made when you load it.',
  fr: "La connexion à Google Maps n'a lieu qu'au chargement.",
}

export function ContactMap() {
  const { t, lang } = useLanguage()
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <section id="contact" className="bg-sky-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.contact.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-3xl border border-border bg-background p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <MapPin className="size-5 text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-navy">{t.contact.addressLabel}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{CLINIC.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Phone className="size-5 text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-navy">{t.contact.phoneLabel}</h3>
                <a
                  href={CLINIC.landlineHref}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  dir="ltr"
                >
                  {CLINIC.landlineDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <WhatsAppIcon className="size-5 text-navy" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-navy">{t.contact.whatsappLabel}</h3>
                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  dir="ltr"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Clock className="size-5 text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-navy">{t.contact.hoursLabel}</h3>
                <p className="text-sm text-muted-foreground">{t.contact.hoursValue}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <TrainFront className="size-5 text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-navy">{t.contact.transitLabel}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.contact.transitValue}</p>
              </div>
            </div>

            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground shadow-md transition-colors hover:bg-navy/90"
            >
              <MapPin className="size-4" aria-hidden="true" />
              {t.contact.directions}
            </a>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-border bg-background">
            {mapLoaded ? (
              <iframe
                src={CLINIC.mapsEmbed}
                title={`Google Maps — ${CLINIC.name}, ${CLINIC.address}`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setMapLoaded(true)}
                className="group flex h-full min-h-80 w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-sky-soft to-primary/20 px-6 text-center"
                aria-label={MAP_LOAD_LABEL[lang]}
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-navy text-navy-foreground shadow-lg transition-transform group-hover:scale-105">
                  <MapPin className="size-7" aria-hidden="true" />
                </span>
                <span className="font-serif text-lg font-semibold text-navy">
                  {MAP_LOAD_LABEL[lang]}
                </span>
                <span className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                  {MAP_NOTE[lang]}
                </span>
                <span className="text-sm font-medium text-navy">{CLINIC.address}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
