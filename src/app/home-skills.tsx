"use client";

import { useEffect, useRef } from "react";

const skills = [
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Convex",
  "tRPC",
  "Prisma ORM",
  "PostgreSQL",
  "Python",
  "Docker",
];

export default function HomeSkills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const badges = el.querySelectorAll(".skill-badge");
            for (let i = 0; i < badges.length; i++) {
              setTimeout(() => {
                badges[i]?.classList.add("revealed");
              }, i * 60);
            }
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="scroll-reveal mt-16" ref={ref}>
      <h2 className="font-semibold text-lg">Tech Stack</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            className="skill-badge cursor-default rounded-full border bg-muted/50 px-3 py-1 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
