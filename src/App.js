const { default: Edit } = require("components/Edit");
const { default: Header } = require("components/Header");
const { default: Layout } = require("components/Layout");
const { default: Preview } = require("components/Preview");


function App() {
  return (
    <> 
    <Header />
    <Layout>
      <Edit />
      <Preview />
    </Layout>
    </>
  );
}

export default App;
