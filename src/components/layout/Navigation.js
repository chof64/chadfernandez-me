import Platform from "@/components/Platform";
import navigation from "@/data/menu";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="h-1 bg-gradient-to-r from-sky-300 to-purple-300" />
        <Platform>
          <header className="flex h-12 items-center justify-between">
            <div className="rounded-lg px-1 py-1.5">
              <Link
                className="bg-white/20 px-3 py-1.5 font-medium text-neutral-800 hover:bg-white/50"
                href="/"
              >
                Chad Fernandez
              </Link>
            </div>

            <nav>
              <div className="space-x-2 rounded-lg bg-gray-100/50 px-1 py-1.5 shadow-inner backdrop-blur-md">
                {navigation.main.map((item) => (
                  <Link
                    className="rounded-lg border border-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition delay-75 duration-200 ease-in-out hover:bg-white/50 hover:text-neutral-800 hover:shadow-sm"
                    href={item.href}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </header>
        </Platform>
      </div>
    </>
  );
}
