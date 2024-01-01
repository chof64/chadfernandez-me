import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0">
      <div className="container flex items-center justify-between py-4 lg:grid lg:grid-cols-3">
        <div className="relative aspect-square h-10">
          <Link href="/">
            <Image src="/buttericon/icon.svg" alt="Buttericon" fill priority />
          </Link>
        </div>
        <nav className="mx-auto flex w-fit items-center gap-4 rounded-full border border-neutral-300/80 bg-gray-100/40 px-6 py-2 shadow-sm backdrop-blur-md">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-900/60 transition delay-75 duration-200 ease-in-out hover:text-sky-700/80"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-neutral-900/60 transition delay-75 duration-200 ease-in-out hover:text-sky-700/80"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
