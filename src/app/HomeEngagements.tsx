import React from "react";

import { List } from "~/components/minimal/Typography";

export default function HomeEngagements() {
  const engagements = [
    {
      title: "2024 Hack4Gov National Competition",
      subtitle: "Manila, Philippines",
      date: "October 2024",
      highlights: [
        "Competed as a wildcard entry in the national competition.",
        "Ranked 8th out of 20 teams in the final round.",
      ],
    },
    {
      title: "2024 Hack4Gov Regional Competition",
      subtitle: "Iloilo, Philippines",
      date: "July 2024",
      highlights: [
        "Wildcard Participant to the National HackForGov 3 Competition.",
        "Excellence Awardee for the Most Individual Points.",
        "1st Runner up in the team category.",
      ],
      description:
        "Competed in a regional cybersecurity competition and became an excellence awardee for the most individual points scored and earned a spot in the national competition. Our team became the 1st runner-up with a 30-point difference from the champion.",
    },
    {
      title: "2023 National Science, Technology, and Innovation Week",
      subtitle: "Iloilo, Philippines",
      date: "November 2023",
      highlights: [
        "Attended the Regional Basic Caravan in Region VI Seminar.",
        "Attended the NSTW Startup Jam Pitching competition.",
      ],
      description:
        "Attended the Regional Basic Research Caravan in Region VI Seminar and the NSTW Startup Jam Pitching Competition. An event hosted by the Department of Science and Technology (DOST) that highlights the significant contributions of science and technology to national development.",
    },
  ];

  return (
    <section className="mt-24">
      <h2 className="font-semibold text-sm tracking-tight">Engagements</h2>
      <div className="mt-6 divide-y">
        {engagements.map((engagement) => (
          <div
            key={engagement.title}
            className="[&:not(:first-child)]:pt-8 [&:not(:last-child)]:pb-8"
          >
            <h3 className="font-semibold text-lg">{engagement.title}</h3>
            <p className="space-x-4 text-muted-foreground/60 text-sm">
              <span>{engagement.date}</span>
              <span>{engagement.subtitle}</span>
            </p>
            {engagement.highlights && (
              <List>
                {engagement.highlights.map((highlight) => (
                  <List.Item key={highlight}>{highlight}</List.Item>
                ))}
              </List>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
