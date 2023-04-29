import Footer from "./Footer";
import LayoutHead from "./LayoutHead";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  const { metadata } = children.props.children[1].props;

  return (
    <>
      <LayoutHead data={metadata} />
      <main className="min-h-[100svh]">
        <Navigation />
        <>{children}</>
      </main>
      <Footer />
    </>
  );
}
