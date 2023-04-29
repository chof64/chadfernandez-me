import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
