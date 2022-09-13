import LayoutGlobal from "/src/components/LayoutGlobal";

function Template() {
  return (
    <>
      <div>
        <h1>This is a default template</h1>
      </div>
    </>
  );
}

Template.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <>{page}</>
    </LayoutGlobal>
  );
};

export default Template;
