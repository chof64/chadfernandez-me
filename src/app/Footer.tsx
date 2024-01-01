import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container my-8 mt-10 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-neutral-500/60 transition delay-75 duration-200 ease-in-out hover:text-sky-600/80"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-neutral-500/60 transition delay-75 duration-200 ease-in-out hover:text-sky-600/80"
          >
            About
          </Link>
        </div>
        <div>
          <p className="text-sm text-neutral-400">
            &copy; 2023 - present Chad Fernandez.
          </p>
          <p className="text-xs text-neutral-300">
            Made with ❤️, butter, and coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
