import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/alpha/Layout";
import Image from "next/image";

function Index() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/chof64" },
    { name: "Polywork", href: "https://polywork.chadfernandez.me" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="mt-32 w-[90vw] md:w-[75vw] lg:w-[60vw]">
        <div className="flex max-w-md flex-col gap-y-4">
          <div className="flex items-center text-neutral-800">
            <h1 className="text-lg font-semibold md:text-2xl">
              👋Hi, I&apos;m Chad Fernandez
            </h1>
            <span className="ml-2 rounded-lg bg-blue-50 py-0.5 px-1.5 align-middle font-mono text-xs font-medium text-blue-600 md:text-xs">
              he/him
            </span>
          </div>
          <div className="flex flex-col gap-y-4 leading-relaxed">
            <p className="font-medium md:text-lg">
              I&apos;m an aspiring Python programmer and Web Developer.
            </p>
            <p>
              I&apos;m from the Philippines and a freshman at the University of
              Antique, studying Bachelor of Science in Computer Science
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};

export default Index;
