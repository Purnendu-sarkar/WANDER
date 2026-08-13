import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'WANDER — Go Beyond Places',
  description:
    'Discover extraordinary places, unforgettable experiences, and stories worth taking home.',
  openGraph: {
    title: 'WANDER — Go Beyond Places',
    description:
      'Discover extraordinary places, unforgettable experiences, and stories worth taking home.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0B0B0B] text-[#F4F1EA] antialiased">{children}</body>
    </html>
  );
}
