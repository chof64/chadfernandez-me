import { forwardRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import {
  Menu as MenuIcon,
  X as XIcon,
  ArrowRight as ArrowRightIcon,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";

import Platform from "/src/components/main/Platform";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function Navigation() {
  const NAVIGATION = [
    { name: "Home", href: "/", pin: true },
    { name: "Blog", href: "/blog", pin: false },
    { name: "About", href: "/#about", pin: false },
    { name: "Contact", href: "/#contact", pin: true },
  ];

  const SOCIALS = [
    {
      name: "Github",
      href: "https://github.com/chof64",
      icon: "/icons/socials/github.svg",
      external: true,
    },
    {
      name: "Polywork",
      href: "https://polywork.chadfernandez.me",
      icon: "/icons/socials/polywork.svg",
      external: true,
    },
  ];

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
          <div className="flex justify-center bg-white select-none items-cetner">
            <Platform>
              <div className="flex items-center justify-between py-3">
                <Link href="/">
                  <h1 className="font-mono text-lg font-black cursor-pointer hover:text-blue-700">
                    Chad Fernandez
                  </h1>
                </Link>
                <nav className="flex items-center gap-x-0.5">
                  {NAVIGATION.filter((item) => item.pin).map((item) => (
                    <MenuLink
                      className={classMerge(
                        "hidden rounded-lg px-4 py-1.5 text-sm font-bold md:block ",
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
          <div
            className={classMerge(
              "absolute select-none",
              open ? "h-[92.125vh] w-full bg-gray-100/10 backdrop-blur" : null
            )}
          >
            <div className="absolute mt-10 flex max-h-[60vh] w-full justify-center">
              <Platform>
                <Menu.Items
                  as="div"
                  className="flex flex-col p-4 overflow-auto bg-white border rounded-lg shadow-md gap-y-2 border-neutral-300 shadow-gray-200/50 focus:outline-none"
                >
                  <div className="flex flex-col gap-y-0.5">
                    <p className="relative font-mono text-xs text-neutral-500">
                      Pages
                      <span className="absolute -top-1.5 ml-2 -rotate-1 select-none font-display text-lg text-blue-600/80">{`<a id="internal" />`}</span>
                    </p>
                    {NAVIGATION.map((item, index) => (
                      <Menu.Item key={index}>
                        <MenuLink
                          className={classMerge(
                            "inline-flex items-center rounded border px-4 py-2.5 align-middle text-sm font-semibold tracking-wide md:text-base",
                            isActive(item.href)
                              ? "border-blue-800 bg-blue-800 text-white shadow"
                              : "border-blue-500/0 text-neutral-500 hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
                          )}
                          href={item.href}
                        >
                          {/* <ArrowRightIcon className="mr-2 h-4 w-4 stroke-[3]" /> */}
                          {item.name}
                        </MenuLink>
                      </Menu.Item>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-0.5">
                    <p className="relative font-mono text-xs text-neutral-500">
                      Socials
                      <span className="absolute -top-1.5 ml-2 -rotate-1 select-none font-display text-lg text-blue-600/80">{`<a id="external" />`}</span>
                    </p>
                    {SOCIALS.map((item, index) => (
                      <Menu.Item key={index}>
                        <MenuLink
                          className="inline-flex items-center rounded border border-blue-700/0 px-4 py-2.5 align-middle text-sm font-medium tracking-wide hover:border-blue-700 hover:bg-blue-200 md:text-base"
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="relative w-4 h-4 mr-2">
                            <Image
                              src={item.icon}
                              layout="fill"
                              alt={item.name}
                            />
                          </div>
                          {item.name}
                          <ExternalLinkIcon className="w-3 h-3 ml-1 stroke-sky-500" />
                        </MenuLink>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Platform>
            </div>
          </div>
        </>
      )}
    </Menu>
  );
}
