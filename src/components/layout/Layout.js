import React from "react";

import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex flex-col justify-center">
        <div className="min-h-[100vh]">{children}</div>
      </main>

      <Footer />
    </>
  );
}
