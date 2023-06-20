import React from "react"
import Image from "next/image"

export default function page() {
  return (
    <main>
      <section className="justify-center bg-gradient-to-b from-gray-100 to-transparent py-32 pb-24">
        <div className="mx-auto w-svw-95 max-w-lg">
          <div className="flex items-center gap-x-4">
            <div className="bg-clip-margin rounded-full bg-gradient-to-br from-sky-300 to-purple-300 p-1">
              <div className="h-24 w-24 overflow-clip rounded-full border-4 border-white lg:h-32 lg:w-32">
                <div className="relative h-full w-full">
                  <Image
                    className="rounded-full object-cover object-bottom"
                    src="/portrait-latest.jpg"
                    alt="Portrait"
                    fill
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-medium lg:text-2xl">
                Chad Fernandez
              </h1>
              <p className="text-sm text-neutral-800 lg:text-base">
                Student and Fullstack Developer
              </p>
              <p>
                <a
                  className="font-medium text-neutral-800 underline-offset-2 transition duration-200 delay-75 ease-in-out hover:text-sky-800 hover:underline hover:decoration-purple-800"
                  href="mailto:contact@chadfernandez.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@chadfernandez.me
                </a>
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Hey, I&apos;m Chad. I&apos;m a student and a programmer. I&apos;m
              currently a freshman, studying B.S. Computer Science from the
              University of Antique.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto my-32 mt-16 w-svw-95 max-w-lg">
        <div className="space-y-6">
          <div className="lg:relative">
            <h2 className="text-sm text-muted-foreground lg:absolute lg:-left-6 lg:-translate-x-full lg:transform">
              Bio
            </h2>
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                I&apos;m Chad Fernandez and I&apos;m a student from the
                Philippines. By day I&apos;m studying B.S. Computer Science, and
                by night I&apos;m learning and working with tools and
                technologies used to create websites.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                I am a self-taught programmer. By age 11, I've dabbled with HTML
                and CSS, not knowing what it was. Now, I'm teaching myself
                TypeScript, databases, and Linux Servers.
              </p>
            </div>
          </div>
          <div className="lg:relative">
            <h2 className="text-sm text-muted-foreground lg:absolute lg:-left-6 lg:-translate-x-full lg:transform">
              Hard Skills
            </h2>
            <div>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  I love building websites and web apps and I try to learn new
                  tools and technologies that can help in building one.
                </p>
              </div>
              <div>
                <h3 className="mt-6 scroll-m-20 text-lg font-medium tracking-tight">
                  Languages and Frameworks
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Javascript, Python, Next.js, Tailwind CSS.
                </p>
              </div>
              <div>
                <h3 className="mt-6 scroll-m-20 text-lg font-medium tracking-tight">
                  Others
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Linux/UNIX, Docker, and Bash.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:relative">
            <h2 className="text-sm text-muted-foreground lg:absolute lg:-left-6 lg:-translate-x-full lg:transform">
              Current
            </h2>
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                I am working on a few projects to apply what I learned and build
                my portfolio.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                I am open to new opportunities and projects. If you have one,
                please{" "}
                <a
                  className="font-medium text-sky-600 underline-offset-2 transition duration-200 delay-75 ease-in-out hover:text-sky-800 hover:underline hover:decoration-purple-800"
                  href="mailto:contact@chadfernandez.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  send a message
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
