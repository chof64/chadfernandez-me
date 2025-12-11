import Link from "next/link";
import NavContent from "./nav-content";

export default function Header() {
  return (
    <header className="container relative z-50 max-w-2xl py-4">
      <div className="flex items-center justify-between">
        <Link className="font-medium text-base tracking-tight" href="/">
          Chad Fernandez
        </Link>
        <NavContent />
      </div>
    </header>
  );
}
