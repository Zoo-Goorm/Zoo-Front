import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Providers from './utils/providers'
import './globals.css'
import { IChildren } from '@/types/children'

export const metadata: Metadata = {
  title: 'Zoo',
  description: 'Zoo client',
}

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
