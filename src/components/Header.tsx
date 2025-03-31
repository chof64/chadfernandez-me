import Link from "next/link";

import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="container max-w-2xl py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-medium hover:underline">
          Chad Fernandez
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
