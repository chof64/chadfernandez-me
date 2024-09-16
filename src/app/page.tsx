import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import Heading from "~/components/white-design/Heading";
import Text from "~/components/minimal/Text";

import InlineTextLogo from "~/components/InlineTextLogo";
import ImageGrid from "./ImageGrid";
import TechIcons from "./TechIcons";
import ProjectShowcase from "./ProjectShowcase";
import ParticipationShowcase from "./ParticipationShowcase";

export default async function Home() {
  return (
    <div className="container my-16 max-w-3xl px-6 sm:px-8">
      <section className="mt-24">
        <Heading
          className="text-balance leading-tight"
          order={1}
          style={1}
          spacing={"default"}
        >
          Driven by a love for{" "}
          <span className="text-accent-foreground">technology</span> and a
          mission to build{" "}
          <span className="text-accent-foreground">web apps</span> that matter.
        </Heading>
        <Text className="!mt-14">
          Hey, I&apos;m Chad👋 &mdash; a passionate web developer and
          <span className="italic">Information Technology</span> student at the{" "}
          <InlineTextLogo image="/logo/university-of-antique.png">
            University of Antique
          </InlineTextLogo>
          . My love for coding drives me to create functional, minimalistic
          websites that solve real-world problems. I&apos;m dedicated to
          streamlining processes and making daily tasks easier.
        </Text>
        <Text>
          My journey into web development began with a simple goal: build a tool
          to gain an advantage in a game I loved. But what started as a
          curiosity quickly evolved into a passion for solving complex problems
          through code. The challenge of tackling a problem, finding a solution,
          and seeing it come to life on the web truly captivates me.
        </Text>
        <ImageGrid className="my-0 mt-10" />
      </section>

      <section className="my-24">
        <Heading style={2}>
          My Selected <span className="text-accent-foreground">Projects</span>.
        </Heading>
        <Text>
          You&apos;ll often find me coding during my free time—whether it&apos;s
          in between classes or late at night. Here are some of the projects
          that I work on that you might be interested in.
        </Text>
        <ProjectShowcase className="mt-12" />
      </section>

      <section className="mt-24">
        <Heading style={2}>
          My <span className="text-accent-foreground">Awards</span> and
          Participations.
        </Heading>
        <Text>
          Beyond coding, I&apos;m deeply committed to volunteering and
          leadership. I&apos;ve enjoyed organizing and leading events that give
          hands-on experiences and opportunities to connect with like-minded
          peers.
        </Text>
        <ParticipationShowcase className="mt-12" />
      </section>

      <section className="my-24">
        <Heading style={2}>
          My <span className="text-accent-foreground">Technology</span> Stack.
        </Heading>
        <Text>
          Explore the tools and technologies that power my work. From frameworks
          and libraries to essential tools and applications, these are the
          technologies I&apos;ve mastered, currently use or am actively
          learning.
        </Text>
        <TechIcons className="mt-12" />
      </section>

      <section className="my-24">
        <Heading style={1}>
          Let&apos;s <span className="text-accent-foreground">build</span>{" "}
          something great{" "}
          <span className="text-accent-foreground">together</span>.
        </Heading>
        <Text>
          If you&apos;re like me and enjoy exploring the fascinating world of
          technology, let&apos;s connect. Feel free to reach out - I&apos;m
          always up for a chat! Let&apos;s build, design, and learn together.
        </Text>
        <div className="mt-6">
          <Link
            className="transition-colors-default font-medium text-muted-foreground hover:text-accent-foreground"
            href="mailto:contact@chadfernandez.me"
          >
            <ArrowUpRightIcon className="mb-0.5 mr-1 inline-block h-5 w-5" />
            Send me a message
          </Link>
        </div>
      </section>
    </div>
  );
}
