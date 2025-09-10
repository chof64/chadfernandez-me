import '~/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '~/components/header';
import { env } from '~/env';

export const metadata: Metadata = {
  title: 'Chad Fernandez',
  description:
    'I am a software engineer driven by the love for technology and a mission to build apps that make a difference in the community.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  metadataBase: new URL(env.BASE_URL),
  openGraph: {
    siteName: 'Chad Fernandez',
    url: env.BASE_URL,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Chad Fernandez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chad Fernandez',
    images: [
      {
        url: '/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'Chad Fernandez',
      },
    ],
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${inter.variable}`} lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
