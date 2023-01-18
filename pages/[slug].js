import React from "react";

import { authenticate } from "@lib/ghostCms/authenticate";
import Layout from "@components/layout/Layout";
import Platform from "@components/Platform";
import { getSettings } from "@lib/ghostCms/getSettings";

export const getStaticPaths = async () => {
  const api = authenticate();
  const pages = await api.pages.browse({
    limit: "all",
    fields: ["slug"],
    filter: ["tags:[hash-prerender]"],
  });

  return {
    paths: pages.map((page) => ({
      params: { slug: page.slug },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const settings = await getSettings();

  const api = authenticate();

  // fetch page by slug, if doesn't exist, return 404
  const page = await api.pages
    .read({ slug: params.slug, include: ["tags", "authors"] })
    .catch((err) => {
      console.error(err);
      return {
        error: true,
      };
    });

  if (!page) {
    return {
      notFound: true,
    };
  }

  settings.pageTitle = page.title;
  settings.metaTitle = page.meta_title;

  return {
    props: {
      page,
      settings,
      slug: params.slug,
    },
    revalidate: 10,
  };
};

export default function Pages({ page }) {
  return (
    <div>
      <Platform className="pt-64 pb-8" type="read">
        <h1 className="text-5xl font-semibold">{page.title}</h1>
      </Platform>
      <Platform className="py-8" type="read">
        <div className="flex justify-center">
          <div
            dangerouslySetInnerHTML={{ __html: page.html }}
            className="prose prose-cyan max-w-none prose-headings:mb-2 prose-h1:mt-10 prose-h1:font-semibold prose-img:rounded-md"
          />
        </div>
      </Platform>
    </div>
  );
}

Pages.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
