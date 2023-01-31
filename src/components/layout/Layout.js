import React from "react";

import Navigation from "@/components/navigation/Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="min-h-[100vh]">
        <Navigation />
        <>{children}</>
      </main>

      <Footer />
    </>
  );
}
