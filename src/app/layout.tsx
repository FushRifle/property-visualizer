// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

//Landing page components
import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Property Visualizer',
    default: 'Property Visualizer',
  },
  description: 'Explore luxury real estate properties with interactive floor plans',
  metadataBase: new URL('https://propertyvisualizer.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 max-w-[85rem] mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 