import Link from "next/link";

import { fetchSeriesPosts } from "~/lib/hashnode/fetch-series-posts";

import { dateFormatter } from "~/lib/hashnode/utils";

export default async function HomeProjects() {
  const projectsSeries = await fetchSeriesPosts("projects");

  if (projectsSeries.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Projects</h2>
        <Link className="text-muted-foreground/80 text-sm" href="/projects">
          View all →
        </Link>
      </div>

      <ul className="mt-4 space-y-3">
        {projectsSeries.slice(0, 3).map((project) => (
          <li key={project.title}>
            <Link
              className="block rounded-md p-3 transition-colors hover:bg-muted/50"
              href={`/post/${project.slug}`}
            >
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-4">
                <div className="min-w-0">
                  <h3 className="line-clamp-2 font-medium text-base">
                    {project.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-muted-foreground/70 text-sm">
                    {project.brief}
                  </p>
                </div>

                <time className="mt-2 whitespace-nowrap text-muted-foreground/70 text-sm sm:mt-0">
                  {dateFormatter(project.publishedAt)}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
