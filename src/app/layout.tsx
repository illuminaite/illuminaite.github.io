import type { Metadata } from 'next'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'IlluminAI',
  description: 'Official IlluminAI Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="m-0 p-0">{children}</body>
    </html>
  )
}
