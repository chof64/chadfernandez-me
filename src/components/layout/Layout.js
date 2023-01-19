import React from "react";

import Navigation from "@components/navigation/Navigation";
import Footer from "@components/Footer";

import LayoutHead from "./LayoutHead";

export default function Layout({ children }) {
  const { settings } = children.props;

  if (!settings) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <LayoutHead
        title={settings.title}
        pageTitle={settings.metaTitle || settings.pageTitle}
      />
      <div className="flex min-h-[100vh] flex-col justify-between subpixel-antialiased">
        <Navigation title={settings.title} nav={settings.navigation} />
        <main>{children}</main>
        <Footer className="" />
      </div>
    </>
  );
}
