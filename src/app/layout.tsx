import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Caveat } from "next/font/google";

import { env } from "~/env";
import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";

import Header from "~/components/header/Header";

const caveat = Caveat({
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata = {
  title: { template: "%s", default: "Chad Fernandez" },
  description: "A student and a web developer from the Philippines.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(env.BASE_URL || "https://www.chadfernandez.me"),
  openGraph: {
    siteName: "Chad Fernandez",
    url: env.BASE_URL || "https://www.chadfernandez.me",
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
      className={cn("antialiased", GeistSans.variable, caveat.variable)}
    >
      <body className="dark:bg-neutral-950">
        <TRPCReactProvider>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
