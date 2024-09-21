import Link from "next/link";
import { Heading } from "~/components/minimal/Heading";
import { Text } from "~/components/minimal/Text";
import { PillButton } from "~/components/minimal/PillButton";
import Image from "next/image";
import { ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react";
import HomeProjectCard from "~/components/HomeProjectCard";
import HomeParticipationCard from "~/components/HomeParticipationCard";

import InlineTextLogo from "~/components/InlineTextLogo";
import HomeImageGrid from "~/components/HomeImageGrid";

export default function Home() {
  return (
    <div className="container my-16 max-w-2xl">
      <div className="mt-32">
        <Heading
          className="text-balance leading-tight"
          type={2}
          spacing={"default"}
        >
          Driven by a love for{" "}
          <span className="text-accent-foreground">technology</span> and a
          mission to build{" "}
          <span className="text-accent-foreground">web apps</span> that matter.
        </Heading>
      </div>
      <div className="mt-16">
        <Text>
          Hey, I&apos;m Chad👋 &mdash; a passionate web developer and
          Information Technology student at the{" "}
          <InlineTextLogo image="/logo/university-of-antique.png">
            University of Antique
          </InlineTextLogo>
          . My love for coding drives me to create functional, minimalistic
          websites that solve real-world problems.
        </Text>
        <div className="mt-4 space-x-4">
          <PillButton asChild>
            <Link
              href="https://github.com/chof64"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mr-1.5"
                src="/logo/github.svg"
                width={18}
                height={18}
                alt="GitHub"
              />
              chof64
              <ExternalLinkIcon className="ml-1.5 h-3.5 w-3.5 stroke-neutral-300" />
            </Link>
          </PillButton>
        </div>
        <HomeImageGrid className="my-0 mt-12" />
      </div>

      <div className="mt-12">
        <Heading type={2} variant={4}>
          Projects
        </Heading>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <HomeProjectCard />
        </div>
      </div>

      <div className="mt-12">
        <Heading type={2} variant={4}>
          Participations
        </Heading>
        <div className="mt-4 space-y-2">
          <HomeParticipationCard />
        </div>
      </div>

      <div className="mt-12">
        <Heading type={2} variant={4}>
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
          <PillButton asChild>
            <Link
              className="transition-colors-default font-medium text-muted-foreground hover:text-accent-foreground"
              href="mailto:contact@chadfernandez.me"
            >
              <ArrowUpRightIcon className="mb-0.5 mr-1 inline-block h-5 w-5" />
              Send me a message
            </Link>
          </PillButton>
        </div>
      </div>
    </div>
  );
}
