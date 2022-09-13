import { classMerge } from "/src/utils/tailwind-utils";
import { forwardRef } from "react";
import { Menu } from "@headlessui/react";
import {
  Menu as MenuIcon,
  X as XIcon,
  ArrowRight as ArrowRightIcon,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Navigation() {
  const navigation = [
    { name: "Home", href: "/", pin: true },
    { name: "About", href: "/#about", pin: false },
    { name: "Contact", href: "/#contact", pin: true },
  ];

  const socials = [
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
            <div className="flex w-[90vw] items-center justify-between py-3 md:w-[75vw] lg:w-[60vw]">
              <Link href="/">
                <h1 className="font-semibold cursor-pointer text-neutral-700 hover:text-neutral-800 md:text-lg md:text-neutral-500">
                  Chad Fernandez
                </h1>
              </Link>
              <nav className="flex items-center gap-x-0.5">
                {/* Filter navigation, only list if pin is true and map it out */}
                {navigation
                  .filter((item) => item.pin)
                  .map((item) => (
                    <MenuLink
                      className={classMerge(
                        "hidden rounded-lg px-4 py-1.5 font-mono text-sm font-bold hover:bg-gray-200 md:block ",
                        isActive(item.href)
                          ? "text-blue-500"
                          : "text-neutral-700 hover:text-neutral-800 md:text-neutral-500"
                      )}
                      href={item.href}
                      key={item.name}
                    >
                      {item.name}
                    </MenuLink>
                  ))}
                <Menu.Button
                  as="div"
                  className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-200 p-1 md:bg-transparent md:p-1.5 md:hover:bg-gray-200"
                >
                  {open ? (
                    <XIcon className="h-5 w-5 stroke-neutral-700 stroke-[2.25]" />
                  ) : (
                    <MenuIcon className="h-5 w-5 stroke-neutral-700 stroke-[2.25]" />
                  )}
                </Menu.Button>
              </nav>
            </div>
          </div>
          <div
            className={classMerge(
              "absolute select-none",
              open ? "h-[92.405vh] w-full bg-gray-100/10 backdrop-blur" : null
            )}
          >
            <div className="absolute mt-10 flex max-h-[60vh] w-full justify-center">
              <Menu.Items
                as="div"
                className="flex w-[90vw] flex-col gap-y-2 overflow-auto rounded-lg border border-neutral-300 bg-white p-4 shadow-md shadow-gray-200/50 focus:outline-none md:w-[75vw] lg:w-[60vw]"
              >
                <div className="flex flex-col gap-y-0.5">
                  <p className="font-mono text-xs text-neutral-400 md:text-xs">
                    Pages
                  </p>
                  {navigation.map((item, index) => (
                    <Menu.Item key={index}>
                      <MenuLink
                        className={classMerge(
                          "flex items-center rounded-lg px-4 py-3 text-sm font-medium tracking-wide md:text-base",
                          isActive(item.href)
                            ? "bg-blue-50 text-blue-500 hover:bg-gray-200"
                            : "bg-gray-50 text-neutral-700 hover:bg-gray-200 hover:text-neutral-800 md:text-neutral-500"
                        )}
                        href={item.href}
                      >
                        <ArrowRightIcon className="mr-2 h-4 w-4 stroke-neutral-500 stroke-[3]" />
                        {item.name}
                      </MenuLink>
                    </Menu.Item>
                  ))}
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <p className="font-mono text-xs text-neutral-400 md:text-xs">
                    Socials
                  </p>
                  {socials.map((item, index) => (
                    <Menu.Item key={index}>
                      <MenuLink
                        className="flex items-center px-4 py-3 text-sm font-medium tracking-wide rounded-lg bg-gray-50 text-neutral-700 hover:bg-gray-200 hover:text-neutral-800 md:text-base md:text-neutral-500"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="relative w-4 h-4 mr-2">
                          <Image src={item.icon} layout="fill" alt={item.name}/>
                        </div>
                        {item.name}
                        <ExternalLinkIcon className="w-3 h-3 ml-1 stroke-sky-500" />
                      </MenuLink>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </div>
          </div>
        </>
      )}
    </Menu>
  );
}

export default Navigation;
