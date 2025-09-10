import Link from 'next/link';
import { fetchSeriesPosts } from '~/lib/hashnode/fetchSeriesPosts';
import { dateFormatter } from '~/lib/hashnode/utils';

export default async function HomeProjects() {
  const projectsSeries = await fetchSeriesPosts('projects', {
    forceRefresh: true,
  });

  if (projectsSeries.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Projects</h2>
        <button className="text-xs " type="button">
          <Link href="/projects">View more</Link>
        </button>
      </div>
      <div className="mt-6">
        {projectsSeries.map((project) => (
          <div
            className="border-b pb-4 transition-colors delay-75 duration-150 ease-in-out hover:border-foreground/60 hover:bg-muted/50 [&:not(:first-child)]:pt-4"
            key={project.title}
          >
            <Link href={`/post/${project.slug}`}>
              <h3 className="line-clamp-2 font-semibold">{project.title}</h3>
              <p className="line-clamp-1 space-x-4 text-muted-foreground/60 text-sm">
                <span className="font-medium italic">
                  {dateFormatter(project.publishedAt)}
                </span>{' '}
                &mdash; {project.brief}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
