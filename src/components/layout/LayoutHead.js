import React from "react";
import Head from "next/head";

export default function LayoutHead({ data }) {
  return (
    <Head>
      <title>
        {data?.title
          ? `${data.title} - Chad Fernandez`
          : "Chad Fernandez - A web developer and a student."}
      </title>
      <meta
        name="description"
        content={
          data?.description
            ? data.description
            : "Hello. I'm Chad, a web developer and a student from the Philippines. And this is my own little space in this vast world wide web. I write about programming and the world of technology. I also share things that I've learned along the way."
        }
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://chadfernandez.me" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:title"
        content={
          data?.title
            ? `${data.title} - Chad Fernandez`
            : "Chad Fernandez - A web developer and a student."
        }
      />
      <meta property="og:url" content="https://chadfernandez.me" />
      <meta
        property="og:description"
        content={
          data?.description
            ? data.description
            : "Hello. I'm Chad, a web developer and a student from the Philippines. And this is my own little space in this vast world wide web. I write about programming and the world of technology. I also share things that I've learned along the way."
        }
      />
      <meta property="og:site_name" content="Chad Fernandez" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="https://og.chadfernandez.me/api/chadfernandez-me"
      />
      <meta
        property="og:image:secure_url"
        content="https://og.chadfernandez.me/api/chadfernandez-me"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta
        property="og:image:alt"
        content="Chad Fernandez - A web developer and a student."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chof64" />
      <meta name="twitter:creator" content="@chof64" />
      <meta
        name="twitter:title"
        content={
          data?.title
            ? `${data.title} - Chad Fernandez`
            : "Chad Fernandez - A web developer and a student."
        }
      />
      <meta
        name="twitter:description"
        content={
          data?.description
            ? data.description
            : "Hello. I'm Chad, a web developer and a student from the Philippines. And this is my own little space in this vast world wide web. I write about programming and the world of technology. I also share things that I've learned along the way."
        }
      />
      <meta
        name="twitter:image"
        content="https://og.chadfernandez.me/api/chadfernandez-me"
      />
      <meta
        name="twitter:image:alt"
        content="Chad Fernandez - A web developer and a student."
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons//favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
