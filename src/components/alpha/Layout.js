import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <main className="subpixel-antialiased">
      <div className="sticky top-0 z-[100]">
        <Navigation />
      </div>
      {/* usable height after navigation bar is 91.45vh */}
      <div>{children}</div>
    </main>
  );
}

export default Layout;
