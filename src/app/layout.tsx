import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";

import { env } from "~/env";
import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";

import Header from "~/components/header/Header";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
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
      className={cn("antialiased", inter.variable, GeistSans.variable)}
    >
      <body className="dark:bg-neutral-950 dark:text-white">
        <TRPCReactProvider>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
