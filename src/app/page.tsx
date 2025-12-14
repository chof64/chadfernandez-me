import Image from "next/image";
import Link from "next/link";
import HomeEngagements from "./home-engagements";
import HomeProjects from "./home-projects";

export default function IndexPage() {
  return (
    <div className="container my-16 max-w-2xl">
      <section className="mt-24 text-center">
        <Image
          alt="Portrait"
          className="mx-auto h-28 w-28 rounded-xl object-cover"
          height={112}
          priority
          src="/hero-portrait.jpeg"
          width={112}
        />

        <h1 className="mt-6 font-semibold text-2xl tracking-tight">
          Chad Fernandez
        </h1>

        <p className="mt-4 text-muted-foreground/80 text-sm">
          Software engineer studying Information Technology. I build simple,
          useful web apps with clarity and intention.
        </p>
      </section>

      <div className="mt-10">
        <HomeEngagements />
        <HomeProjects />

        <section className="mt-10 border-t pt-6">
          <h2 className="sr-only">Contacts</h2>
          <p className="text-muted-foreground/80 text-sm">
            Want to chat? Reach me at{" "}
            <Link
              className="font-medium text-muted-foreground/80 text-sm underline-offset-4 hover:underline"
              href="mailto:contact@chadfernandez.me"
            >
              contact@chadfernandez.me
            </Link>
            . Also on{" "}
            <Link
              className="font-medium text-muted-foreground/80 text-sm underline-offset-4 hover:underline"
              href="https://github.com/chof64"
              target="_blank"
            >
              GitHub
            </Link>{" "}
            and{" "}
            <Link
              className="font-medium text-muted-foreground/80 text-sm underline-offset-4 hover:underline"
              href="https://www.linkedin.com/in/chof64"
              target="_blank"
            >
              LinkedIn
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
