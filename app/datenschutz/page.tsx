import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Zahnarztpraxis Dr. Safwan Mousa, Berlin',
  description:
    'Datenschutzerklärung der Zahnarztpraxis Dr. Safwan Mousa, Berlin-Mitte: keine Cookies, kein Tracking, Karte erst nach Klick.',
}

export default function Page() {
  return <LegalPage kind="datenschutz" />
}
