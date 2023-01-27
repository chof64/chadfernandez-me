import React from "react";

import Layout from "@components/layout/Layout";
import Platform from "@components/Platform";
import Render from "@components/render/Render";
import { authenticate } from "@lib/ghostCms/authenticate";
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
  const page = await api.pages.read({
    slug: params.slug,
    include: ["tags", "authors"],
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
      <Platform
        className="border-b bg-neutral-50 pt-48 pb-16"
        type="page-header"
      >
        <h1 className="text-5xl font-semibold">{page.title}</h1>
      </Platform>
      <Platform className="py-16">
        <div className="flex justify-center">
          <div className="prose prose-cyan">
            <Render data={page.html} />
          </div>
        </div>
      </Platform>
    </div>
  );
}

Pages.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
