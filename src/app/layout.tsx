import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { Inter, Noto_Sans } from "next/font/google";
import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans",
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
      className={cn(
        "dark antialiased",
        inter.variable,
        notoSans.variable,
        GeistSans.variable,
      )}
    >
      <body className="dark:bg-neutral-950">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
