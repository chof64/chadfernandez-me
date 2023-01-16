import React, { forwardRef, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

import { items } from "/config/items.navigation.config";
import PlatformNavigation from "./navigation/PlatformNavigation";
import { classMerge } from "/src/utils/classMerge";

const internalNavigation = items.find((item) => item.group === "Pages");

export default function Navigation() {
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
        <div
          className={classMerge(
            "fixed inset-x-0 top-0 z-[100]",
            isOpaque || open ? "bg-white/70 backdrop-blur " : ""
          )}
        >
          <PlatformNavigation
            className={classMerge(
              "sticky inset-x-0 top-0 z-[100] h-min max-h-[100vh] w-full justify-center overflow-auto overscroll-contain py-4 transition duration-100 ease-in",
              isOpaque || open ? "border-b border-neutral-300" : ""
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <Link
                  href="/"
                  className="text-lg font-bold text-neutral-500 transition ease-in hover:text-cyan-700"
                >
                  Chad Fernandez
                </Link>
              </div>
              <nav>
                <div className="hidden gap-x-8 font-medium text-neutral-500 lg:flex">
                  {internalNavigation.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="transition ease-in hover:text-cyan-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Menu.Button className="transition-all duration-200 ease-in-out lg:hidden">
                  {open ? (
                    <XIcon className="h-8 w-8 text-red-500" />
                  ) : (
                    <MenuIcon className="h-8 w-8 text-neutral-500" />
                  )}
                </Menu.Button>
              </nav>
            </div>
            {open ? (
              <Menu.Items
                as="div"
                className="flex flex-col gap-y-2.5 border-t pt-6 focus:outline-none"
              >
                {items.map((group) => (
                  <div key={group.group}>
                    <h2 className="text-xs font-medium uppercase text-neutral-400">
                      {group.group}
                    </h2>
                    <div className="mt-1 flex flex-col gap-y-1">
                      {group.items.map((item) => (
                        <Menu.Item key={item.name}>
                          <MenuLink
                            className="py-2 px-4 align-middle font-medium"
                            href={item.href}
                            external={item.external}
                          >
                            {item.name}
                          </MenuLink>
                        </Menu.Item>
                      ))}
                    </div>
                  </div>
                ))}
              </Menu.Items>
            ) : null}
          </PlatformNavigation>
        </div>
      )}
    </Menu>
  );
}

const MenuLink = forwardRef((props, ref) => {
  MenuLink.displayName = "MenuLink";
  let { href, children, ...rest } = props;

  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});
