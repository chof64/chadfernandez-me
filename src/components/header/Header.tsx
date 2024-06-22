import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container flex h-12 max-w-2xl items-center justify-between bg-white/80 px-6 backdrop-blur sm:px-8">
        <section>
          <div className="leading-none">
            <Link href="/">
              <div className="font-semibold transition-colors delay-75 duration-300 ease-in-out hover:text-cyan-700">
                Chad Fernandez
              </div>
            </Link>
          </div>
        </section>
        <section className="flex gap-4 hover:text-neutral-500">
          <Link
            className="font-medium transition-colors delay-75 duration-300 ease-in-out hover:text-cyan-700"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-medium transition-colors delay-75 duration-300 ease-in-out hover:text-cyan-700"
            href="/post"
          >
            Blog
          </Link>
        </section>
      </div>
    </header>
  );
}
