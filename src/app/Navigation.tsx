"use client"

import React, { useState } from "react"
import Link from "next/link"
import { navigation } from "@/data/navigation"
import { PanelRightOpenIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menu = navigation.main

export default function Navigation({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "z-50 mx-auto w-full max-w-7xl border-b bg-white/80 backdrop-blur-lg",
        className
      )}
    >
      <div className="mx-auto flex w-svw-95 max-w-7xl justify-between py-1">
        <div className="my-auto">
          <Link href="/">
            <div>Chad Fernandez</div>
          </Link>
        </div>
        <div className="my-auto">
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {menu.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent font-tight",
                        item.external ? "after:content-['_↗']" : ""
                      )}
                      target={item.external ? "_blank" : ""}
                      rel={item.external ? "noreferrer noopener" : ""}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <nav className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                >
                  <PanelRightOpenIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent size="xl" position="right" className="">
                <div>
                  <ScrollArea className="mt-4">
                    <div className="flex flex-col gap-y-1.5">
                      {menu.map((item) => (
                        <MobileLink
                          className="w-full py-2 text-xl font-medium"
                          href={item.href}
                          key={item.name}
                          onOpenChange={setIsOpen}
                        >
                          {item.name}
                        </MobileLink>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </div>
  )
}

function MobileLink({ href, onOpenChange, className, children, ...props }) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
