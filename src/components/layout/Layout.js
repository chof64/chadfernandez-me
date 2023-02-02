import React from "react";

import LayoutHead from "./LayoutHead";
import Navigation from "@/components/navigation/Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { metadata } = children.props.children[1].props;
  return (
    <>
      <LayoutHead data={metadata} />
      <main className="min-h-[100vh]">
        <Navigation />
        <>{children}</>
      </main>
      <Footer />
    </>
  );
}
