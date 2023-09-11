import "./globals.css"

import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import Footer from "./Footer"
import Navigation from "./Navigation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://chadfernandez.me"
  ),
  title: "Chad Fernandez",
  description:
    "A web developer, designer and student who likes to exploring the fascinating world of technology.",
  openGraph: {
    title: "Chad Fernandez",
    description:
      "A web developer, designer and student who likes to exploring the fascinating world of technology.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body>
        <div className="min-h-screen">
          <Navigation />
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
