'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, CalendarCheck, ChevronRight, MapPin, MessageCircle, Phone, Send, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { CLINIC, type Lang } from '@/lib/translations'
import { faqAnswer } from '@/lib/chat-faq'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { LogoMark } from '@/components/logo-mark'

type CardKind = 'whatsapp' | 'booking' | 'maps' | 'phone'
type ChatMessage = { role: 'user' | 'assistant'; text: string; local?: boolean; cards?: CardKind[]; answerLang?: Lang }

const HINTS: Record<Lang, string> = {
  de: 'Mit einem Tipp',
  fr: 'En un clic',
  ar: 'بنقرة واحدة',
  en: 'In one tap',
}

const CARD_DEFS: Record<
  CardKind,
  { href: string; external: boolean; bg: string; Icon: (p: { className?: string }) => React.ReactNode; label: Record<Lang, string>; sub: Record<Lang, string> }
> = {
  whatsapp: {
    href: CLINIC.whatsapp,
    external: true,
    bg: 'bg-[#25D366] shadow-[#25D366]/30',
    Icon: WhatsAppIcon,
    label: {
      de: 'Termin auf WhatsApp',
      fr: 'Réserver sur WhatsApp',
      ar: 'احجز عبر واتساب',
      en: 'Book on WhatsApp',
    },
    sub: { de: CLINIC.phoneDisplay, fr: CLINIC.phoneDisplay, ar: CLINIC.phoneDisplay, en: CLINIC.phoneDisplay },
  },
  booking: {
    href: '#appointment',
    external: false,
    bg: 'bg-gradient-to-r from-[#14273D] to-[#2E6E9E] shadow-navy/30',
    Icon: CalendarCheck,
    label: {
      de: 'Termin hier anfragen',
      fr: 'Prendre rendez-vous ici',
      ar: 'احجز موعدك هنا',
      en: 'Book your appointment here',
    },
    sub: { de: 'Formular der Website', fr: 'Formulaire du site', ar: 'نموذج الموقع', en: 'Website form' },
  },
  maps: {
    href: CLINIC.mapsUrl,
    external: true,
    bg: 'bg-[#1A73E8] shadow-[#1A73E8]/30',
    Icon: MapPin,
    label: {
      de: 'Anfahrt zur Praxis',
      fr: 'Itinéraire vers le cabinet',
      ar: 'الاتجاهات إلى العيادة',
      en: 'Directions to the practice',
    },
    sub: { de: 'Google Maps', fr: 'Google Maps', ar: 'Google Maps', en: 'Google Maps' },
  },
  phone: {
    href: CLINIC.landlineHref,
    external: false,
    bg: 'bg-rose-600 shadow-rose-600/30',
    Icon: Phone,
    label: {
      de: 'Praxis anrufen',
      fr: 'Appeler le cabinet',
      ar: 'اتصل بالعيادة الآن',
      en: 'Call the practice now',
    },
    sub: { de: CLINIC.landlineDisplay, fr: CLINIC.landlineDisplay, ar: CLINIC.landlineDisplay, en: CLINIC.landlineDisplay },
  },
}

type ChatStrings = {
  title: string
  subtitle: string
  greeting: string
  placeholder: string
  send: string
  open: string
  whatsappCta: string
  typing: string
  quick: { label: string; question: string }[]
}

const STRINGS: Record<Lang, ChatStrings> = {
  de: {
    title: 'Praxis-Assistent',
    subtitle: 'Sofortige Antworten, rund um die Uhr',
    greeting:
      'Herzlich willkommen in der Praxis Dr. Safwan Mousa! Ich kann Ihnen zu unseren Leistungen, Implantaten, Öffnungszeiten oder zur Terminbuchung Auskunft geben. Wie kann ich helfen?',
    placeholder: 'Ihre Frage schreiben…',
    send: 'Senden',
    open: 'Mit unserem Assistenten chatten',
    whatsappCta: 'Oder direkt auf WhatsApp buchen',
    typing: 'Der Assistent schreibt',
    quick: [
      { label: 'Kosten?', question: 'Was kostet eine Behandlung?' },
      { label: 'Öffnungszeiten', question: 'Wie sind Ihre Öffnungszeiten?' },
      { label: 'Termin vereinbaren', question: 'Ich möchte einen Termin vereinbaren.' },
      { label: 'Adresse', question: 'Wo finde ich die Praxis?' },
    ],
  },
  ar: {
    title: 'مساعد العيادة',
    subtitle: 'ردود فورية، على مدار الساعة',
    greeting:
      'مرحباً بكم في عيادة الدكتور صفوان موسى! يمكنني إخباركم بخدماتنا، زراعة الأسنان، أوقات العمل أو كيفية حجز موعد. كيف يمكنني مساعدتكم؟',
    placeholder: 'اكتب سؤالك…',
    send: 'إرسال',
    open: 'تحدث مع مساعدنا',
    whatsappCta: 'أو احجز مباشرة عبر واتساب',
    typing: 'المساعد يكتب الآن',
    quick: [
      { label: 'الأسعار؟', question: 'بشحال الثمن؟' },
      { label: 'أوقات العمل', question: 'ما هي أوقات العمل؟' },
      { label: 'احجز موعداً', question: 'أريد حجز موعد.' },
      { label: 'العنوان', question: 'أين توجد العيادة؟' },
    ],
  },
  en: {
    title: 'Practice assistant',
    subtitle: 'Instant answers, 24/7',
    greeting:
      'Hello and welcome to Praxis Dr Safwan Mousa! I can tell you about our services, implants, opening hours or how to book an appointment. How can I help you?',
    placeholder: 'Type your question…',
    send: 'Send',
    open: 'Chat with our assistant',
    whatsappCta: 'Or book directly on WhatsApp',
    typing: 'Assistant is typing',
    quick: [
      { label: 'Prices?', question: 'How much does a treatment cost?' },
      { label: 'Opening hours', question: 'What are your opening hours?' },
      { label: 'Book a visit', question: 'I would like to book an appointment.' },
      { label: 'Address', question: 'Where is the practice?' },
    ],
  },
  fr: {
    title: 'Assistant du cabinet',
    subtitle: 'Réponses immédiates, 24h/24',
    greeting:
      'Bonjour et bienvenue au cabinet du Dr Safwan Mousa ! Je peux vous renseigner sur nos soins, les implants, les horaires ou la prise de rendez-vous. Comment puis-je vous aider ?',
    placeholder: 'Écrivez votre question…',
    send: 'Envoyer',
    open: 'Discuter avec notre assistant',
    whatsappCta: 'Ou réservez directement sur WhatsApp',
    typing: "L'assistant écrit",
    quick: [
      { label: 'Tarifs ?', question: 'Combien coûte un traitement ?' },
      { label: 'Horaires', question: "Quels sont vos horaires d'ouverture ?" },
      { label: 'Rendez-vous', question: 'Je voudrais prendre rendez-vous.' },
      { label: 'Adresse', question: 'Où se trouve le cabinet ?' },
    ],
  },
}

export function ChatWidget() {
  const { lang } = useLanguage()
  const s = STRINGS[lang] ?? STRINGS.de
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', text: s.greeting, local: true }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open ])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending, open])

  function send(raw?: string) {
    const text = (raw ?? input).trim()
    if (!text || sending) return
    const next: ChatMessage[] = [...messages, { role: 'user', text }]
    setMessages(next)
    setInput('')
    setSending(true)
    // Instant local FAQ — no network call, no API, nothing to wait for
    // and nothing that can fail. A short "typing" pause (the animated
    // dots the visitor sees) keeps the exchange feeling natural while
    // the answer still lands in about a second.
    const answer = faqAnswer(text, lang)
    const cards = answer.cards.filter((c) => c in CARD_DEFS) as CardKind[]
    const delay = Math.min(1400, Math.max(650, 450 + answer.text.length * 4))
    window.setTimeout(() => {
      setMessages([...next, { role: 'assistant', text: answer.text, cards, answerLang: answer.answerLang }])
      setSending(false)
    }, delay)
  }

  return (
    <>
      {open && (
        <div
          data-testid="chat-panel"
          className="fixed bottom-24 right-5 z-50 flex h-[min(70vh,540px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-black/25"
        >
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#14273D] via-navy to-[#2E6E9E] px-4 py-3 text-navy-foreground">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
              <LogoMark variant="light" className="size-8" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{s.title}</span>
              <span className="block text-xs opacity-80">{s.subtitle}</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-full p-1.5 transition-colors hover:bg-white/10"
            >
              <X className="size-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-secondary/40 px-3.5 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                    m.role === 'user'
                      ? 'bg-navy text-navy-foreground'
                      : 'border border-border/60 bg-background text-foreground'
                  }`}
                >
                  {m.text}
                </div>
                {m.role === 'assistant' && m.cards && m.cards.length > 0 && (
                  <div className="mt-2 flex w-[85%] flex-col gap-2">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#128C4B]">
                      <ArrowDown className="size-3.5 animate-bounce" />
                      {HINTS[m.answerLang ?? lang]}
                    </div>
                    {m.cards.map((kind) => {
                      const def = CARD_DEFS[kind]
                      const Icon = def.Icon
                      const cardLang = m.answerLang ?? lang
                      return (
                        <a
                          key={kind}
                          href={def.href}
                          {...(def.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-white shadow-md transition-transform hover:scale-[1.02] ${def.bg}`}
                        >
                          <Icon className="size-6 shrink-0" />
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold">{def.label[cardLang]}</span>
                            <span className="block text-xs opacity-90" dir="ltr">
                              {def.sub[cardLang]}
                            </span>
                          </span>
                          <ChevronRight className="size-5 shrink-0 rtl:-scale-x-100" />
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
            {sending && (
              <div className="flex items-center gap-2 self-start rounded-2xl border border-border/60 bg-background px-3.5 py-2.5 shadow-sm">
                <span className="flex items-end gap-1" aria-hidden="true">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-1.5 animate-bounce rounded-full bg-navy/70"
                      style={{ animationDelay: `${d * 160}ms`, animationDuration: '0.9s' }}
                    />
                  ))}
                </span>
                <span className="text-xs text-muted-foreground">{s.typing}…</span>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-border bg-background px-3.5 pt-3" data-testid="chat-quick">
              {s.quick.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => send(q.question)}
                  className="rounded-full border border-navy/25 bg-secondary/60 px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:bg-secondary"
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}

          <div className="border-t border-border bg-background px-3.5 py-3">
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                send()
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={s.placeholder}
                maxLength={1000}
                aria-label={s.placeholder}
                className="min-w-0 flex-1 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label={s.send}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground transition-transform hover:scale-105 disabled:opacity-40"
              >
                <Send className="size-4 rtl:-scale-x-100" />
              </button>
            </form>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 block text-center text-xs font-medium text-navy underline-offset-2 hover:underline"
            >
              {s.whatsappCta} — <span dir="ltr">{CLINIC.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={s.open}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 rounded-full shadow-xl shadow-navy/40 ring-1 ring-black/10 transition-transform hover:scale-105"
      >
        {open ? (
          <span className="flex size-14 items-center justify-center rounded-full bg-navy text-navy-foreground">
            <X className="size-6" />
          </span>
        ) : (
          <span className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#14273D] to-[#2E6E9E]">
            <MessageCircle className="size-6 text-white" aria-hidden="true" />
            <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-[#25D366] ring-2 ring-white">
              <span className="size-1.5 rounded-full bg-white" />
            </span>
          </span>
        )}
      </button>
    </>
  )
}
