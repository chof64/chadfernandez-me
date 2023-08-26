import React from "react";



import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="mx-3 my-8">
      <div className="mx-auto max-w-lg border-t pt-4">
        <p className={cn("muted mb-2")}>Site is still under development.</p>
        <p className="muted">Made with ❤️ from the Philippines.</p>
      </div>
    </footer>
  )
}