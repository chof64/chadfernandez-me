import ThreeScene from "~/components/globe/ThreeScene";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div className="container pt-[32rem] lg:flex">
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold tracking-tight opacity-80 transition-all duration-500 ease-in-out sm:text-5xl lg:text-6xl">
              Chad Fernandez.
            </h2>
            <h1 className="text-3xl font-bold tracking-tight opacity-80 transition-all duration-500 ease-in-out sm:text-5xl lg:text-6xl">
              Web Developer.
            </h1>
          </div>
          <div className="lg:w-2/5">
            <p className="mt-4 text-2xl font-medium leading-7 opacity-80 transition-all duration-500 ease-in-out lg:mt-0">
              <span className="text-neutral-500 dark:text-neutral-400">
                I&apos;m a multidisciplinary enthusiast, straddling the worlds
                of web development, design, and academia.
              </span>{" "}
              Crafting digital experiences that have a positive impact is my
              passion.
            </p>
            <div className="mt-6 flex gap-4">
              <Button>GitHub</Button>
              <Button>contact@chadfernandez.me</Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full">
          <ThreeScene />
        </div>
      </section>
    </main>
  );
}
