"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { main } from "@/data/navigation/main"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="block sm:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex items-center justify-center px-0.5">
          <div className="relative h-10 w-10 overflow-hidden">
            <Image src="/menu.svg" fill alt="The Burger - My hand-drawn icon" />
          </div>
        </SheetTrigger>
        <SheetContent className="w-full max-w-sm">
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
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
