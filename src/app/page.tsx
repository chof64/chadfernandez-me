import Image from "next/image";
import Link from "next/link";
import HomeEngagements from "./home-engagements";
import HomeGitHub from "./home-github";
import HomeProjects from "./home-projects";
import HomeSkills from "./home-skills";

export default function IndexPage() {
  return (
    <div className="container my-16 max-w-2xl">
      <section className="mt-24 text-center">
        <div className="animate-fade-up">
          <Image
            alt="Portrait"
            className="mx-auto h-24 w-24 rounded-lg object-cover"
            height={96}
            priority
            src="/hero-portrait.jpeg"
            width={96}
          />
        </div>

        <h1 className="animation-delay-100 mt-6 animate-fade-up font-semibold text-3xl tracking-tight">
          Chad Fernandez
        </h1>

        <p className="animation-delay-200 mt-1 animate-fade-up font-medium text-muted-foreground text-sm">
          Software Engineer
        </p>

        <p className="animation-delay-300 mx-auto mt-4 max-w-sm animate-fade-up text-muted-foreground/80 text-sm leading-relaxed">
          Software engineer specializing in full-stack web development. I build
          robust, type-safe applications with modern tooling — from PostgreSQL
          backends to polished, performant interfaces.
        </p>
      </section>

      <HomeSkills />

      <div className="mt-10">
        <HomeGitHub />
        <HomeEngagements />
        <HomeProjects />

        <section className="mt-10 border-t pt-6">
          <p className="text-muted-foreground/80 text-sm">
            Interested in working together? Reach out at{" "}
            <Link
              className="font-medium underline-offset-4 hover:underline"
              href="mailto:contact@chadfernandez.me"
            >
              contact@chadfernandez.me
            </Link>{" "}
            or find me on{" "}
            <Link
              className="font-medium underline-offset-4 hover:underline"
              href="https://github.com/chof64"
              target="_blank"
            >
              GitHub
            </Link>{" "}
            and{" "}
            <Link
              className="font-medium underline-offset-4 hover:underline"
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
