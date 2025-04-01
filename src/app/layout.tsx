import "~/styles/globals.css";

import { type Metadata } from "next";
import { Figtree } from "next/font/google";

import { Header } from "~/components/Header";
import { env } from "~/env";

const figtree = Figtree({
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Chad Fernandez",
  description:
    "A web developer building web applications that make a difference in the community.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
