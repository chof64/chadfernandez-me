import "./globals.css"

import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Open_Sans } from "next/font/google"

import Navigation from "./Navigation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Chad Fernandez",
  description:
    "A web developer, designer and student who likes to exploring the fascinating world of technology.",
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <div className="min-h-screen">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
