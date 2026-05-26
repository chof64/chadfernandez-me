import { Mail } from "lucide-react";
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

        <h1 className="animation-delay-100 mt-6 animate-fade-up font-semibold text-2xl tracking-tight">
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

        <section className="mt-10">
          <h2 className="font-semibold text-base">Contact</h2>
          <p className="mt-2 text-muted-foreground/80 text-sm">
            I'm open to projects and collaborations. Let's connect.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Link
              className="group flex items-center gap-2 text-sm"
              href="mailto:contact@chadfernandez.me"
            >
              <Mail className="size-4 opacity-70 group-hover:opacity-100" />
              <span className="text-muted-foreground/80 group-hover:text-foreground">
                email me
              </span>
            </Link>
            <Link
              className="group flex items-center gap-2 text-sm"
              href="https://github.com/chof64"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="GitHub"
                className="size-4 opacity-70 group-hover:opacity-100"
                height={16}
                src="/images/github.svg"
                unoptimized={true}
                width={16}
              />
              <span className="text-muted-foreground/80 group-hover:text-foreground">
                GitHub
              </span>
            </Link>
            <Link
              className="group flex items-center gap-2 text-sm"
              href="https://www.linkedin.com/in/chof64"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="LinkedIn"
                className="size-4 opacity-70 group-hover:opacity-100"
                height={16}
                src="/images/linkedin.svg"
                unoptimized={true}
                width={16}
              />
              <span className="text-muted-foreground/80 group-hover:text-foreground">
                LinkedIn
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
