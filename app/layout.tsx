import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: 'Hotel',
  description: 'Luxury hotel with breathtaking views and world-class amenities',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}