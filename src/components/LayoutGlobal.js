//? ./components/LayoutGlobal.js
//* This is the global layout, which is responsible for setting the
//* head tags of the whole application.
//! Do not add any components to this layout, if you need to add a component,
//! you can put it in the local layout or layout group.

import Head from "next/head";

function LayoutGlobal({ title, children }) {
  // if title is defined, add  "defined" in the end, if not, add "undefined".
  const titleText = title ? `${title} - defined` : `undefined - defined`;

  return (
    <>
      <Head>
        {/* //? Dynamic Tags */}
        <title>
          {title
            ? "${title} - Chad Fernandez"
            : "Chad Fernandez - Student, Python, Web Developer"}
        </title>

        {/* //? Static Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* //? Site favicon/icons */}
        <link rel="shortcut icon" href="/favicons/favicon.png" />
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

      <>{children}</>
    </>
  );
}

export default LayoutGlobal;
