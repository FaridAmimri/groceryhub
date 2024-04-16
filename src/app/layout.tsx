/** @format */

import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grocery Hub',
  description: 'Buy your fruits and vegetables'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
