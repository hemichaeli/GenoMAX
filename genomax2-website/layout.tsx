import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'GenoMAX² - Gender-Optimized Biological Operating System',
  description: 'Precision supplementation powered by AI, blood biomarkers, and gender-specific biology. Not vitamins. A complete body and mind optimization system.',
  keywords: ['supplements', 'personalized nutrition', 'AI health', 'blood test', 'biomarkers', 'mens health', 'womens health'],
  openGraph: {
    title: 'GenoMAX² - Gender-Optimized Biological Operating System',
    description: 'Precision supplementation powered by AI, blood biomarkers, and gender-specific biology.',
    url: 'https://genomax2.ai',
    siteName: 'GenoMAX²',
    images: [
      {
        url: 'https://genomax2.ai/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenoMAX² - Gender-Optimized Biological Operating System',
    description: 'Precision supplementation powered by AI, blood biomarkers, and gender-specific biology.',
    images: ['https://genomax2.ai/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
