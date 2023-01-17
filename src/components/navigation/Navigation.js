import React, { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

import Platform from "./Platform";
import { classMerge } from "@utils/classMerge";

export default function Navigation({ title, nav }) {
  let [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    let offset = 50;
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true);
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [isOpaque]);

  return (
    <Menu>
      {({ open }) => (
        <div className={classMerge("fixed inset-x-0 top-0 z-[100]")}>
          <Platform
            className={classMerge(
              "",
              isOpaque || open
                ? "border-b border-neutral-200 bg-white/70 backdrop-blur-md"
                : ""
            )}
          >
            <div className="flex items-center justify-between py-3">
              <div>
                <Link href="/">
                  <h1 className="align-middle text-lg font-semibold text-neutral-500 transition-colors delay-75 duration-500 hover:text-cyan-800">
                    {title}
                  </h1>
                </Link>
              </div>
              <nav className="flex">
                <div className="hidden gap-x-6 lg:flex">
                  {nav.map((item) => (
                    <Link
                      key={item.label}
                      href={item.url}
                      className="text-neutral-500 transition-colors delay-75 duration-500 hover:text-cyan-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Menu.Button className="lg:hidden">
                  {open ? (
                    <XIcon className="h-8 w-8 align-middle text-neutral-700 " />
                  ) : (
                    <MenuIcon className="h-8 w-8 align-middle text-neutral-700" />
                  )}
                </Menu.Button>
              </nav>
            </div>
          </Platform>
          {open ? (
            <div className="h-[100vh] overscroll-contain bg-white/70 backdrop-blur-md">
              <Menu.Items as="div" className=" p-6">
                <div className="flex flex-col divide-y">
                  {nav.map((item) => (
                    <Menu.Item key={item.label}>
                      <Link
                        href={item.url}
                        className="py-3 font-medium text-neutral-700"
                      >
                        {item.label}
                      </Link>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </Menu>
  );
}
