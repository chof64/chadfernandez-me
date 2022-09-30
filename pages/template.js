import LayoutGlobal from "/src/components/LayoutGlobal";

export default function template() {
  return (
    <>
      <div>
        <h1>This is a default template</h1>
      </div>
    </>
  );
}

template.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <>{page}</>
    </LayoutGlobal>
  );
};
