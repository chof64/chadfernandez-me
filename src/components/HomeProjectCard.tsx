import React from "react";
import { Heading } from "~/components/minimal/Heading";
import { Text } from "~/components/minimal/Text";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { homeProjectCardData } from "~/content/projects";

export default function HomeProjectCard() {
  return (
    <>
      {homeProjectCardData.map((item) => (
        <div
          className="flex h-64 flex-col justify-between rounded-xl border border-neutral-200 p-6 transition hover:bg-white/40"
          key={item.title}
        >
          <div>
            <div className="flex h-6 gap-1">
              {item.stack?.map((item) => (
                <div
                  className="relative aspect-square h-6 opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
                  key={item.src}
                >
                  <Image
                    className="object-contain"
                    src={item.src}
                    alt={`${item.name} Logo`}
                    fill
                  />
                </div>
              ))}
            </div>
            <Heading className="mt-6" type={3} variant={6} font={"sans"}>
              {item.title}
            </Heading>
            <Text className="mt-2" variant={"muted"}>
              {item.description}
            </Text>
          </div>
          {item.link && (
            <div>
              <Button className="p-0" variant={"link"} asChild>
                <Link href={item.link}>Read case study</Link>
              </Button>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
