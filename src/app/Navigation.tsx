import React from "react"
import Image from "next/image"
import Link from "next/link"
import { main } from "@/data/navigation/main"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import MobileNav from "./MobileNav"

export default function Navigation() {
  return (
    <header className="mx-3">
      <div className="mx-auto flex max-w-lg items-center justify-between py-2 pt-4">
        <Link className="relative aspect-square h-10" href="/">
          <Image
            src="/bracket.svg"
            fill
            alt="The Bracket - My hand-drawn icon"
          />
        </Link>

        <nav className="ml-4">
          <div className="hidden items-center gap-4 sm:flex">
            {main.map((item) => (
              <Link
                className="text-neutral-600 hover:text-black"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <MobileNav />
        </nav>
      </div>
    </header>
  )
}
