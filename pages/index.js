import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import Platform from "/src/components/Platform";
import Introduction from "/src/components/index/Introduction";
import ContactCard from "/src/components/contact/ContactCard";

export default function index() {
  return (
    <>
      <Introduction className="mt-16" />
      <ContactCard className="mt-16" />
    </>
  );
}

index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
