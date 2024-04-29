/** @format */

import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/app/components/AuthProvider'
import QueryProvider from '@/app/components/QueryProvider'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

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
        <AuthProvider>
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
