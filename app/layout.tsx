import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mary Chua | Product Manager Portfolio',
  description: 'Technical Product Manager bridging scientists and engineers to create internal tools that eliminate operational friction. 8+ years experience in biotech operations and software engineering.',
  openGraph: {
    title: 'Mary Chua | Product Manager Portfolio',
    description: 'Technical Product Manager bridging scientists and engineers to create internal tools.',
    url: 'https://mc-portfolio-chi.vercel.app',
    siteName: 'Mary Chua Portfolio',
    images: [
      {
        url: '/mchualogo.png', // We'll create this
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mary Chua | Product Manager Portfolio',
    description: 'Technical Product Manager with 8+ years experience in biotech and software engineering.',
    images: ['/mchualogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}