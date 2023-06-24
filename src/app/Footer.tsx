import React from "react"

import { cn } from "@/lib/utils"

export default function Footer({ className = "" }) {
  return (
    <footer className={cn("border-t bg-gray-50 py-10", className)}>
      <div className="mx-auto w-svw-95 max-w-7xl">
        <div className="text-xs text-muted-foreground">
          &copy; 2023 Chad Fernandez. Made with ❤️ and Next.js.
        </div>
      </div>
    </footer>
  )
}
