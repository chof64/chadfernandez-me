import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Menu from "@radix-ui/react-navigation-menu";

import Platform from "@/components/Platform";
import { classMerge } from "@/utils/classMerge";

export default function Navigation() {
  return (
    <div className="sticky top-0 inset-x-0">
      <Platform className="py-4 bg-white shadow-sm" type="minimal-9">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <h1 className="font-semibold text-neutral-500">Chad Fernandez</h1>
            </Link>
          </div>
          <Menu.Root className="">
            <Menu.List className="flex gap-x-2">
              <Menu.Item>
                <MenuLink
                  href="/"
                  className="px-3 py-1 rounded-md bg-white font-medium hover:bg-gray-100 transition duration-150 delay-75"
                >
                  Home
                </MenuLink>
              </Menu.Item>
              <Menu.Item>
                <MenuLink
                  href="/blog"
                  className="px-3 py-1 rounded-md bg-white  font-medium hover:bg-gray-100 transition duration-150 delay-75"
                >
                  Blog
                </MenuLink>
              </Menu.Item>
            </Menu.List>
          </Menu.Root>
        </div>
      </Platform>
    </div>
  );
}

const MenuLink = ({ children, href, className, ...props }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Menu.Link asChild>
      <Link
        href={href}
        className={classMerge(className, isActive ? "text-cyan-700" : "")}
        {...props}
      >
        {children}
      </Link>
    </Menu.Link>
  );
};
