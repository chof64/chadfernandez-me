import React from "react";
import { cn } from "~/lib/utils";
import Image from "next/image";

export default function TechIcons({ className }: { className?: string }) {
  const data = [
    { src: "/logo/nextjs.svg", alt: "Next.js" },
    { src: "/logo/tailwindcss.svg", alt: "Tailwind CSS" },
    { src: "/logo/postgresql.png", alt: "PostgreSQL" },
    { src: "/logo/mongodb.svg", alt: "MongoDB" },
    { src: "/logo/prisma.svg", alt: "Prisma ORM" },
    { src: "/logo/trpc.svg", alt: "tRPC" },
    { src: "/logo/typescript.svg", alt: "TypeScript" },
    { src: "/logo/javascript.svg", alt: "JavScript" },
    { src: "/logo/python.svg", alt: "Python" },
    { src: "/logo/git.svg", alt: "Git" },
    { src: "/logo/github.svg", alt: "GitHub" },
    { src: "/logo/docker.svg", alt: "Docker" },
  ] as const;

  return (
    <div className={cn("group flex flex-wrap justify-evenly gap-2", className)}>
      {data.map((item) => (
        <div
          className="relative h-10 w-10 shrink-0 transition-opacity delay-75 duration-200 ease-in-out hover:!opacity-100 hover:!grayscale-0 group-hover:opacity-40 group-hover:grayscale md:h-14 md:w-14"
          key={item.src}
        >
          <Image src={item.src} alt={item.alt} fill />
        </div>
      ))}
    </div>
  );
}
