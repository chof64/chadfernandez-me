import React from "react";
import { cn } from "~/lib/utils";
import Heading from "~/components/white-design/Heading";

export default function ParticipationShowcase({
  className,
}: {
  className?: string;
}) {
  const data = [
    {
      heading: "Regional HackForGov 3 Competition",
      subheading: "Jul 2024 | Iloilo City, Philippines",
      description: (
        <>
          A nationwide cybersecurity competition in a Capture-the-Flag (CTF)
          format organized by the Department of Information and Communications
          Technology (DICT).
        </>
      ),
      highlights: [
        "Wildcard Participant to the National HackForGov 3 Competition.",
        "Excellence Awardee for the Most Individual Points.",
        "1st Runner up in the team category.",
      ],
    },
    {
      heading: "National Science and Technology Week (NSTW) 2023",
      subheading: "Nov 2023 | Iloilo City, Philippines",
      description: (
        <>
          An event hosted by the Department of Science and Technology (DOST)
          that highlights the significant contributions of science and
          technology to national development.
        </>
      ),
      highlights: [
        "Attended the Regional Basic Caravan in Region VI Seminar.",
        "Attended the NSTW Startup Jam Pitching competition.",
      ],
    },
    {
      heading: "Regional HackForGov 2 Competition",
      subheading: "Aug 2023 | Iloilo City, Philippines",
      description: (
        <>
          A nationwide cybersecurity competition in a Capture-the-Flag (CTF)
          format organized by the Department of Information and Communications
          Technology (DICT).
        </>
      ),
      highlights: [
        "Secured 6th place in the individual rankings.",
        "5th Place on the team rankings.",
        "First-time participant in the competition.",
      ],
    },
  ] as const;

  return (
    <div className={cn("space-y-12", className)}>
      {data.map((item) => (
        <div className="group" key={item.heading}>
          <Heading
            className="transition-color delay-75 duration-150 ease-in-out group-hover:text-accent-foreground"
            order={3}
            style={4}
          >
            {item.heading}
          </Heading>
          <p className="typography-muted">{item.subheading}</p>
          <p className="typography-p !mt-3">{item.description}</p>
          <ul className="my-4 ml-6 list-disc [&>li]:mt-1.5">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
