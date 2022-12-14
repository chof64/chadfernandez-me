import React from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="subpixel-antialiased 2xl:flex 2xl:w-full 2xl:justify-center ">
      <div className="2xl:max-w-screen-2xl">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
