import React from "react";

import Navigation from "@components/navigation/Navigation";
import Footer from "@components/Footer";

import LayoutHead from "./LayoutHead";

export default function Layout({ children }) {
  const { settings } = children.props;

  return (
    <>
      <LayoutHead
        title={settings.title}
        pageTitle={settings.metaTitle || settings.pageTitle}
      />
      <div className="subpixel-antialiased 2xl:flex 2xl:w-full 2xl:justify-center ">
        <div className="2xl:max-w-screen-2xl">
          <Navigation title={settings.title} nav={settings.navigation} />
          <main>{children}</main>
          {/* <pre>{JSON.stringify(settings, null, 2)}</pre> */}
          <Footer />
        </div>
      </div>
    </>
  );
}
