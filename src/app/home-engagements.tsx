export default function HomeEngagements() {
  const engagements = [
    {
      title: '2024 Hack4Gov National Competition',
      subtitle: 'Manila, Philippines',
      date: 'October 2024',
      highlights: [
        'Competed as a wildcard entry in the national competition.',
        'Ranked 8th out of 20 teams in the final round.',
      ],
    },
    {
      title: '2024 Hack4Gov Regional Competition',
      subtitle: 'Iloilo, Philippines',
      date: 'July 2024',
      highlights: [
        'Wildcard Participant to the National HackForGov 3 Competition.',
        'Excellence Awardee for the Most Individual Points.',
        '1st Runner up in the team category.',
      ],
      description:
        'Competed in a regional cybersecurity competition and became an excellence awardee for the most individual points scored and earned a spot in the national competition. Our team became the 1st runner-up with a 30-point difference from the champion.',
    },
    {
      title: '2023 National Science, Technology, and Innovation Week',
      subtitle: 'Iloilo, Philippines',
      date: 'November 2023',
      highlights: [
        'Attended the Regional Basic Caravan in Region VI Seminar.',
        'Attended the NSTW Startup Jam Pitching competition.',
      ],
      description:
        'Attended the Regional Basic Research Caravan in Region VI Seminar and the NSTW Startup Jam Pitching Competition. An event hosted by the Department of Science and Technology (DOST) that highlights the significant contributions of science and technology to national development.',
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="font-semibold text-lg">Engagements</h2>
      <div className="mt-6">
        {engagements.map((engagement) => (
          <div
            className="border-b pb-4 transition-colors delay-75 duration-150 ease-in-out hover:border-foreground/60 hover:bg-muted/50 [&:not(:first-child)]:pt-4"
            key={engagement.title}
          >
            <h3 className="line-clamp-2 font-semibold">{engagement.title}</h3>
            <p className="line-clamp-1 space-x-4 font-serif text-muted-foreground/60 text-sm">
              <span>{engagement.date}</span>
              <span>{engagement.subtitle}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
