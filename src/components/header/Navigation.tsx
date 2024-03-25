import React from "react";
import Link from "next/link";

import { headerNav } from "data/navigation";

export default function Navigation() {
  return (
    <nav className="inline-flex gap-4">
      {headerNav.map((item) => (
        <Link
          className="transition-color text-sm font-medium text-black/60 delay-75 duration-300 ease-in-out hover:text-black dark:text-white/60 dark:hover:text-white"
          href={item.href}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
