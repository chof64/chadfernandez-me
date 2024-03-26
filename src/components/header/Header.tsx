import React from "react";
import Link from "next/link";

import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto mt-4 max-w-2xl px-2 pt-4">
      <div className="container flex h-9 w-full items-center justify-between rounded-full border border-black/10 px-6 backdrop-blur-md dark:border-white/10 dark:bg-white/10">
        <Link
          className="text-sm font-semibold text-black/60 transition-colors delay-75 duration-300 ease-in-out hover:text-black dark:text-white/60 dark:hover:text-white"
          href="/"
        >
          Chad Fernandez
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
