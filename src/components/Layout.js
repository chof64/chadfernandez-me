import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className="subpixel-antialiased">
      <header className="sticky top-0 z-[100]">
        <Navigation />
      </header>
      {children}
      <Footer className="mt-16" />
    </main>
  );
}
