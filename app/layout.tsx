import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PAMoR | Real-Time Affective Motion for Humanoid Robots',
  description:
    'PAMoR generates real-time humanoid motion with independently editable action, valence, and arousal controls.',
  authors: [
    { name: 'Yan Pan' },
    { name: 'Lingfan Bao' },
    { name: 'Tianhu Peng' },
    { name: 'Chengxu Zhou' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
