import "~/styles/local.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "~/components/header";
import { env } from "~/env";
import { ThemeProvider } from "~/lib/theme-provider";

export const metadata: Metadata = {
  title: "Chad Fernandez",
  description:
    "A self-taught full-stack developer with a BS in Information Technology. Driven by a love for technology and a curiosity to understand how things work. I build apps that aim to help people and communities — and stay active in hackathons, webinars, and the startup scene.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(env.BASE_URL),
  openGraph: {
    siteName: "Chad Fernandez",
    url: env.BASE_URL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Chad Fernandez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chad Fernandez",
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Chad Fernandez",
      },
    ],
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${inter.variable}`} lang="en">
      <body className="transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
