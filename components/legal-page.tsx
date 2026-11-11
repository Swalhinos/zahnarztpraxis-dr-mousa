'use client'

import { ArrowLeft } from 'lucide-react'
import { LanguageProvider, useLanguage } from '@/lib/language-context'
import { LogoMark } from '@/components/logo-mark'
import { CLINIC, type Lang } from '@/lib/translations'
import { LEGAL, type LegalDoc } from '@/lib/legal'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'ar', label: 'عربي' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

function LegalShell({ kind }: { kind: 'impressum' | 'datenschutz' }) {
  const { lang, setLang } = useLanguage()
  const doc: LegalDoc = LEGAL[lang][kind]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/90">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 lg:px-6">
          <a href="/" className="flex items-center gap-2">
            <LogoMark variant="light" className="h-9 w-9" />
            <span className="font-serif text-sm font-semibold tracking-wide text-navy">
              {CLINIC.shortName}
            </span>
          </a>
          <div
            className="flex items-center rounded-full border border-border bg-secondary p-0.5"
            role="group"
            aria-label="Language"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                data-lang={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                  lang === l.code
                    ? 'bg-navy text-navy-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 lg:px-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy underline-offset-2 hover:underline"
        >
          <ArrowLeft className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          {doc.back}
        </a>
        <h1 className="mt-6 font-serif text-3xl font-semibold text-navy md:text-4xl">{doc.title}</h1>
        <div className="mt-8 flex flex-col gap-8">
          {doc.blocks.map((block) => (
            <section key={block.h}>
              <h2 className="mb-2 font-serif text-lg font-semibold text-navy">{block.h}</h2>
              {block.lines.map((line) => (
                <p key={line} className="leading-relaxed text-muted-foreground">
                  {line}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        {`© ${new Date().getFullYear()} ${CLINIC.name} · ${CLINIC.address}`}
      </footer>
    </div>
  )
}

export function LegalPage({ kind }: { kind: 'impressum' | 'datenschutz' }) {
  return (
    <LanguageProvider>
      <LegalShell kind={kind} />
    </LanguageProvider>
  )
}
