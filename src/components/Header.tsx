"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="container max-w-2xl py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-medium hover:underline">
          Chad Fernandez
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-xl">Navigation</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              <Button
                className="justify-start py-6 text-lg"
                variant="ghost"
                asChild
              >
                <Link href="/">Home</Link>
              </Button>
              <Button
                className="justify-start py-6 text-lg"
                variant="ghost"
                asChild
              >
                <Link href="/blog">Blog</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
