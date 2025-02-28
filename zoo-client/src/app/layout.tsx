import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Providers from './utils/providers'
import './globals.css'
import { IChildren } from '@/types/children'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Zoo',
  description: 'Zoo client',
}

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
