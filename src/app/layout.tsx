import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Caveat } from "next/font/google";

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
  title: "Chad Fernandez",
  description: "A student and a web developer from the Philippines.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
