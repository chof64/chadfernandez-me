import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Averia_Serif_Libre, Noto_Serif } from "next/font/google";

import { env } from "~/env";
import { cn } from "~/lib/utils";

import Header from "~/components/header/Header";

const notoSerif = Noto_Serif({
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const averiaSerifLibre = Averia_Serif_Libre({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-averia-serif-libre",
});

export const metadata = {
  title: { template: "%s", default: "Chad Fernandez" },
  description: "A student and a web developer from the Philippines.",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        GeistSans.variable,
        notoSerif.variable,
        averiaSerifLibre.variable,
      )}
    >
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
