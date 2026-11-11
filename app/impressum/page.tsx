import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Impressum | Zahnarztpraxis Dr. Safwan Mousa, Berlin',
  description:
    'Impressum der Zahnarztpraxis Dr. Safwan Mousa, Schillingstr. 12, 10179 Berlin — Zahnarzt & Fachzahnarzt für Oralchirurgie.',
}

export default function Page() {
  return <LegalPage kind="impressum" />
}
