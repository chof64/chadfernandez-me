export interface homeProjectCardDataItem {
  title: string;
  description: string;
  stack: { name: string; src: string }[];
  link?: string;
}

export const homeProjectCardData: homeProjectCardDataItem[] = [
  {
    title: "Unified Barangay System",
    description:
      "A web-based application that bring Barangay services online and streamlines transactions.",
    stack: [
      { name: "Next.js", src: "/logo/nextjs.svg" },
      { name: "Tailwind CSS", src: "/logo/tailwindcss.svg" },
      { name: "tRPC", src: "/logo/trpc.svg" },
      { name: "Prisma ORM", src: "/logo/prisma.svg" },
      { name: "MySQL", src: "/logo/mysqldb.png" },
      { name: "TypeScript", src: "/logo/typescript.svg" },
    ],
  },
  {
    title: "UACCS Attendance App",
    description:
      "A web-based attendance monitoring for the College of Computer Studies at the University of Antique.",
    stack: [
      { name: "Next.js", src: "/logo/nextjs.svg" },
      { name: "Tailwind CSS", src: "/logo/tailwindcss.svg" },
      { name: "Prisma ORM", src: "/logo/prisma.svg" },
      { name: "MongoDB", src: "/logo/mongodb.svg" },
      { name: "TypeScript", src: "/logo/typescript.svg" },
    ],
  },
  {
    title: "Personal Website",
    description:
      "My little corner in this vast interconnected network of computers and information.",
    stack: [
      { name: "Next.js", src: "/logo/nextjs.svg" },
      { name: "Tailwind CSS", src: "/logo/tailwindcss.svg" },
      { name: "TypeScript", src: "/logo/typescript.svg" },
    ],
  },
];
