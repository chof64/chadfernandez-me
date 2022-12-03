module.exports = {
  items: [
    {
      group: "Pages",
      items: [
        {
          name: "Home",
          href: "/",
          pin: true,
          external: false,
        },
        {
          name: "Blog",
          href: "/blog",
          pin: false,
          external: false,
        },
        {
          name: "Contact",
          href: "/#contact",
          pin: true,
          external: false,
        },
      ],
    },
    {
      group: "Socials",
      items: [
        {
          name: "GitHub",
          href: "https://github.com/chof64",
          pin: false,
          external: true,
          icon: "/icons/socials/github.svg",
        },
        {
          name: "Polywork",
          href: "https://polywork.chadfernandez.me",
          pin: false,
          external: true,
          icon: "/icons/socials/polywork.svg",
        },
      ],
    },
  ],
};
