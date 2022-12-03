import { forwardRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import {
  Menu as MenuIcon,
  X as XIcon,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";

import { items } from "/config/items.navigation.config.js";
import Platform from "./Platform";
import { classMerge } from "/src/utils/classMerge";
import { getConfig } from "/src/utils/getConfig";

const _navigationItems = items;
const _navigationInternal = getConfig({
  key: "group",
  value: "Pages",
  config: items,
});

export default function Navigation() {
  const router = useRouter();
  const isActive = (href) => {
    return router.asPath === href;
  };

  const MenuLink = forwardRef((props, ref) => {
    MenuLink.displayName = "MenuLink";
    let { href, children, ...rest } = props;

    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  });

  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <div className="items-cetner flex select-none justify-center bg-white">
            <Platform>
              <div className="flex items-center justify-between py-3">
                <Link href="/">
                  <h1 className="cursor-pointer text-lg font-semibold hover:text-blue-700">
                    Chad Fernandez
                  </h1>
                </Link>
                <nav className="flex items-center gap-x-5">
                  {_navigationInternal.items
                    .filter((item) => item.pin)
                    .map((item) => (
                      <MenuLink
                        className={classMerge(
                          "hidden rounded-lg text-sm font-bold md:block ",
                          isActive(item.href)
                            ? "text-blue-500 hover:text-blue-700"
                            : "text-neutral-500 hover:text-neutral-700"
                        )}
                        href={item.href}
                        key={item.name}
                      >
                        {item.name}
                      </MenuLink>
                    ))}
                  <Menu.Button
                    as="div"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-blue-500 p-1 text-blue-500 hover:border-blue-700 hover:text-blue-700 md:p-0.5"
                  >
                    {open ? (
                      <XIcon className="h-7 w-7 stroke-[3] text-red-500" />
                    ) : (
                      <MenuIcon className="h-7 w-7 stroke-[2]" />
                    )}
                  </Menu.Button>
                </nav>
              </div>
            </Platform>
          </div>
          <div className="absolute w-full">
            <div className="absolute mt-8 flex w-full justify-center">
              <Platform>
                <Menu.Items
                  as="div"
                  className="flex max-h-[55vh] flex-col gap-y-2.5 overflow-auto rounded-lg border-2 border-blue-700 bg-white p-2 shadow focus:outline-none md:p-4"
                >
                  {_navigationItems.map((group) => (
                    <div key={group.group}>
                      <h2 className="text-xs font-medium text-blue-700">
                        {group.group}
                      </h2>
                      <div className="mt-1 flex flex-col gap-y-1">
                        {group.items.map((item) => (
                          <Menu.Item key={item.name}>
                            <MenuLink
                              href={item.href}
                              external={item.external}
                              className={classMerge(
                                "inline-flex items-center rounded border px-4 py-2.5 align-middle text-sm font-semibold tracking-wide md:text-base",
                                isActive(item.href)
                                  ? "border-blue-800 bg-blue-800 text-white shadow"
                                  : "border-blue-500/0 text-neutral-500 hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
                              )}
                            >
                              {item.icon ? (
                                <div className="relative mr-2 h-4 w-4">
                                  <Image
                                    src={item.icon}
                                    layout="fill"
                                    alt={item.name}
                                  />
                                </div>
                              ) : null}
                              {item.name}
                              {item.external ? (
                                <ExternalLinkIcon className="ml-1 h-3 w-3 stroke-sky-500" />
                              ) : null}
                            </MenuLink>
                          </Menu.Item>
                        ))}
                      </div>
                    </div>
                  ))}
                </Menu.Items>
              </Platform>
            </div>
            <div
              className={classMerge(
                open
                  ? "fixed inset-0 -z-50 h-full w-full bg-white/20 backdrop-blur"
                  : null
              )}
            />
          </div>
        </>
      )}
    </Menu>
  );
}
