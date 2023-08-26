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
                className="text-lg text-neutral-600 hover:text-black"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="block sm:hidden">
            <Sheet>
              <SheetTrigger className="flex items-center justify-center px-0.5">
                <div className="relative h-10 w-10 overflow-hidden">
                  <Image
                    src="/menu.svg"
                    fill
                    alt="The Burger - My hand-drawn icon"
                  />
                </div>
              </SheetTrigger>
              <SheetContent className="w-full max-w-sm">
                <SheetClose>Close</SheetClose>
                <div className="relative aspect-square h-12">
                  <Image
                    src="/bracket.svg"
                    fill
                    alt="The Bracket - My hand-drawn icon"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  {main.map((item) => (
                    <Link
                      className="text-xl text-neutral-600 hover:text-black"
                      href={item.href}
                      key={item.name}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
