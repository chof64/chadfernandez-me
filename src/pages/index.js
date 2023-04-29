import Layout from "@/components/layout/Layout";
import Platform from "@/components/Platform";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Platform
        className="h-screen justify-center bg-gradient-to-b from-gray-100 via-gray-100 to-transparent py-16"
        type="lg"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-x-4">
            <div className="bg-clip-margin rounded-full bg-gradient-to-br from-sky-300 to-purple-300 p-1">
              <div className="h-24 w-24 overflow-clip rounded-full border-4 border-white lg:h-32 lg:w-32">
                <div className="relative h-full w-full">
                  <Image
                    className="object-cover object-bottom"
                    src="/portrait-latest.jpg"
                    alt="Portrait"
                    fill
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold lg:text-2xl">
                Chad Fernandez
              </h1>
              <p className="text-sm text-neutral-800 lg:text-base">
                Student and Fullstack Developer
              </p>
              <p>
                <a
                  className="font-medium text-neutral-800 underline-offset-2 transition delay-75 duration-200 ease-in-out hover:text-sky-800 hover:underline hover:decoration-purple-800"
                  href="mailto:contact@chadfernandez.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@chadfernandez.me
                </a>
              </p>
            </div>
          </div>
          <div className="h-0.5 bg-gray-100" />
          <div>
            <p className="text-neutral-800">
              Hey, I am Chad. I am a student and a fullstack developer. I am
              interested in creating websites, tinkering with servers, and all
              things tech.
            </p>
          </div>
        </div>
      </Platform>

      <Platform className="py-16" type="lg">
        <div className="space-y-16">
          <section className="lg:relative">
            <h2 className="pb-4 font-semibold lg:absolute lg:-left-6 lg:-translate-x-full lg:transform lg:pb-0 lg:font-semibold lg:text-neutral-400">
              Bio
            </h2>
            <div className="space-y-6 text-neutral-800">
              <p>
                I am currently learning and expanding my skills and experience
                in programming. I am also learning and experimenting with
                Next.js, Tailwind CSS, and Python by building websites and
                applications. And I amm also reading about Docker and Linux
                servers to host applications with.
              </p>
              <p>
                I am also a freshman studying Bachelor of Science in Computer
                Science at the University of Antique.
              </p>
            </div>
          </section>
          <section className="lg:relative">
            <h2 className="pb-4 font-semibold lg:absolute lg:-left-6 lg:-translate-x-full lg:transform lg:pb-0 lg:font-semibold lg:text-neutral-400">
              Hard Skills
            </h2>
            <div className="space-y-6 text-neutral-800">
              <div>
                <p>
                  I like building minimalist and easy to use websites.
                  Throughout development, I try to keep the design simple, only
                  adding components as needed.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">
                  Languages and Frameworks
                </h3>
                <p>Javascript, Python, Next.js, Tailwind CSS.</p>
              </div>
              <div>
                <h3 className="font-medium text-black">Others</h3>
                <p>Linux/UNIX, Docker, and Bash.</p>
              </div>
            </div>
          </section>
          <section className="lg:relative">
            <h2 className="pb-4 font-semibold lg:absolute lg:-left-6 lg:-translate-x-full lg:transform lg:pb-0 lg:font-semibold lg:text-neutral-400">
              Current
            </h2>
            <div className="space-y-6 text-neutral-800">
              <p>
                I am currently learning new things about Next.js, Tailwind CSS,
                and web development in general.
              </p>
              <p>
                I am also working on a few projects to apply what I learned and
                build my portfolio.
              </p>
              <p>
                I am open to new opportunities and projects. If you have one,
                please{" "}
                <a
                  className="font-medium text-sky-600 underline-offset-2 transition delay-75 duration-200 ease-in-out hover:text-sky-800 hover:underline hover:decoration-purple-800"
                  href="mailto:contact@chadfernandez.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  send a message
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </Platform>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
