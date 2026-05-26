"use client";

import Link from "next/link";
import { useTheme } from "~/lib/theme-provider";
import NavContent from "./nav-content";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="container relative z-50 max-w-2xl py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="font-medium text-base tracking-tight" href="/">
            Chad Fernandez
          </Link>
          <button
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onClick={toggleTheme}
            type="button"
          >
            {theme === "light" ? (
              <svg
                className="size-4"
                fill="none"
                role="img"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <title>Moon icon</title>
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="size-4"
                fill="none"
                role="img"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <title>Sun icon</title>
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <NavContent />
      </div>
    </header>
  );
}
