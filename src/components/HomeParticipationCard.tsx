import React from "react";
import { Heading } from "./minimal/Heading";
import { cn } from "~/lib/utils";
import { Text } from "./minimal/Text";
import { List } from "./minimal/List";
import { homeParticpatationCardData } from "~/content/participation";

export default function HomeParticipationCard() {
  return (
    <>
      {homeParticpatationCardData.map((item) => (
        <div
          className={cn("rounded-xl p-6 transition hover:bg-white/40")}
          key={item.title}
        >
          <Heading type={3} variant={6} font={"sans"}>
            {item.title}
          </Heading>
          <div>
            <Text variant={"muted"}>{item.subheader}</Text>
          </div>
          <Text className="mt-4 text-muted-foreground">{item.description}</Text>
          <List className="mb-0 mt-4" type="ul" spacing={"tight"}>
            {item.highlights.map((item) => (
              <Text className="!mt-0 font-medium" key={item} asChild>
                <li>{item}</li>
              </Text>
            ))}
          </List>
        </div>
      ))}
    </>
  );
}
