import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-arabic',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Zahnarztpraxis Dr. Safwan Mousa | Zahnarzt & Oralchirurg in Berlin-Mitte',
  description:
    'Zahnarztpraxis Dr. Safwan Mousa — Privatpraxis für Zahnmedizin, Oralchirurgie und Implantologie in Berlin-Mitte (Schillingstr. 12, nahe Alexanderplatz). Zahnersatz, Implantate, allgemeine Zahnmedizin. Betreuung in Deutsch, Arabisch, Englisch & Französisch. Termin über WhatsApp: +49 176 3631 3068.',
  keywords: [
    'Zahnarzt Berlin-Mitte',
    'Oralchirurg Berlin',
    'Implantologie Berlin',
    'Zahnersatz Berlin',
    'Dr. Safwan Mousa',
    'Zahnarzt Alexanderplatz',
    'arabischer Zahnarzt Berlin',
    'طبيب أسنان برلين',
    'dentist Berlin Mitte',
  ],
  icons: {
    icon: '/images/logo-favicon.png',
    apple: '/images/logo-192.png',
  },
  openGraph: {
    title: 'Zahnarztpraxis Dr. Safwan Mousa | Berlin-Mitte',
    description:
      'Oralchirurgie, Implantologie & Zahnersatz in Berlin-Mitte — persönlich betreut in vier Sprachen. Schillingstr. 12, 10179 Berlin.',
    type: 'website',
    locale: 'de_DE',
  },
}

export const viewport: Viewport = {
  themeColor: '#4FC3F7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      className={`bg-background ${inter.variable} ${playfair.variable} ${plexArabic.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
