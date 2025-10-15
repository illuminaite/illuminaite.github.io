import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'

const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-karla',
})

export const metadata: Metadata = {
  title: {
    default: 'illuminaite academy',
    template: '%s | illuminaite academy'
  },
  description: 'Demystifying the world of CS & AI. Building a network of interdisciplinary students & opportunities.',
  keywords: ['AI', 'computer science', 'education', 'technology', 'interdisciplinary', 'workshops', 'community'],
  authors: [{ name: 'illuminaite academy' }],
  creator: 'illuminaite academy',
  publisher: 'illuminaite academy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://illuminaite.github.io',
    siteName: 'illuminaite academy',
    title: 'illuminaite academy',
    description: 'Demystifying the world of CS & AI. Building a network of interdisciplinary students & opportunities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'illuminaite academy',
    description: 'Demystifying the world of CS & AI. Building a network of interdisciplinary students & opportunities.',
  },
  icons: {
    icon: '/images/illuminaite_logo.ico',
    shortcut: '/images/illuminaite_logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={karla.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${karla.className} font-karla antialiased bg-black min-h-screen`}>
        {children}
      </body>
    </html>
  )
}