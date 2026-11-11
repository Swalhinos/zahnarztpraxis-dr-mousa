'use client'

import { LanguageProvider } from '@/lib/language-context'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { ImplantsSection } from '@/components/implants-section'
import { ResultsSection } from '@/components/results-section'
import { TourSection } from '@/components/tour-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ReviewsSection } from '@/components/reviews-section'
import { Faq } from '@/components/faq'
import { AppointmentForm } from '@/components/appointment-form'
import { ContactMap } from '@/components/contact-map'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ChatWidget } from '@/components/chat-widget'

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <ImplantsSection />
        <ResultsSection />
        <TourSection />
        <WhyChooseUs />
        <ReviewsSection />
        <Faq />
        <AppointmentForm />
        <ContactMap />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <ChatWidget />
    </LanguageProvider>
  )
}
