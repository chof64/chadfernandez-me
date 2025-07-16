import Image from 'next/image';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import HomeEngagements from './home-engagements';

export default function IndexPage() {
  return (
    <div className="container my-16 max-w-xl">
      <section className="mt-32">
        <Image
          alt="Portrait"
          className="h-24 w-24 rounded-xl object-cover"
          height={96}
          priority
          src="/hero-portrait.jpeg"
          width={96}
        />
        <h1 className="mt-6 font-semibold text-xl tracking-wide">
          👋 Hello, I&apos;m Chad Fernandez
        </h1>
        <p className="mt-6 font-serif leading-7">
          I am a software engineer and a student studying BS Information
          Technology.
        </p>
        <p className="mt-6 font-serif leading-7">
          Driven by the love for technology and a mission to build apps that
          make a difference in the community. My passion for coding drives me to
          create functional, minimalistic apps that solve real-world problems.
        </p>
      </section>
      <HomeEngagements />
      <section className="mt-16">
        <h2 className="font-semibold text-lg">Contacts</h2>
        <p className="mt-6 font-serif leading-7">
          If you're like me and enjoy exploring the fascinating world of
          technology, let's connect. Feel free to reach out - I'm always up for
          a chat! Let's build, design, and learn together.
        </p>
        <div className="mt-6 flex flex-col items-start gap-3">
          <Button variant={'secondary'}>
            <Link href="mailto:contact@chadfernandez.me" target="_blank">
              contact@chadfernandez.me
            </Link>
          </Button>
          <Button variant={'secondary'}>
            <Link href="https://github.com/chof64" target="_blank">
              github.com/chof64
            </Link>
          </Button>
          <Button variant={'secondary'}>
            <Link href="https://www.linkedin.com/in/chof64" target="_blank">
              linkedin.com/in/chof64
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
