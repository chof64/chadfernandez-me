import React from "react"
import { EB_Garamond, Inter, Inter_Tight, JetBrains_Mono } from "next/font/google"

import Footer from "./Footer"
import Navigation from "./Navigation"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const inter_tight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
})

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})
export const metadata = {
  title: "Chad Fernandez",
  description: "A student and a web developer from the Philippines.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter_tight.variable} ${jetbrains_mono.variable} ${eb_garamond.variable}`}
    >
      <body className={inter.className}>
        <>
          <Navigation className="sticky inset-x-0 top-0" />
        </>
        <>{children}</>
        <>
          <Footer />
        </>
      </body>
    </html>
  )
}
