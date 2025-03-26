import type { Metadata } from 'next';
import Providers from '../utils/providers';
import './globals.css';
import { IChildren } from '@/types/children';
import { Anta } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Zoo',
  description: 'Zoo client',
};

const AntaKR = Anta({
  weight: ['400'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html lang="ko">
      <body className={`h-screen bg-bg-primary ${AntaKR}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
