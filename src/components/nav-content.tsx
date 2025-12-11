"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { cn } from "~/lib/utils";
import NavRoot from "./nav-root";

export default function NavContent({ className }: { className?: string }) {
  const items = [
    { href: "/", label: "Home" },
    { href: "/engagements", label: "Engagements" },
    { href: "/projects", label: "Projects" },
    { href: "/post", label: "All Posts" },
  ] as const;

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <NavRoot className={className} onOpenChange={setMenuOpen} open={menuOpen}>
      <div className="h-full">
        <div className="container my-6 max-w-2xl px-6">
          <div className="flex flex-col gap-3">
            {items.map((item, index) => (
              <MobileLink
                href={item.href}
                key={`${item.href}-${index}`}
                onOpenChange={setMenuOpen}
              >
                {item.label}
              </MobileLink>
            ))}
          </div>
        </div>
      </div>
    </NavRoot>
  );
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  return (
    <Link
      className={cn(
        "pt-2 pb-3 font-medium text-muted-foreground/90 text-xl hover:text-foreground",
        className
      )}
      href={href}
      onClick={() => {
        onOpenChange?.(false);
        router.push(href.toString());
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
