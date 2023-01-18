import React from "react";

import Head from "next/head";

export default function LayoutHead({ title, pageTitle }) {
  return (
    <>
      <Head>
        {/* if pageTitle is not null, set title to pageTitle - title, else just use title */}
        <title>{pageTitle ? `${pageTitle} - ${title}` : title}</title>

        {/* <title>{title}</title> */}

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
      </Head>
    </>
  );
}
