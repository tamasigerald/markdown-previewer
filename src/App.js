import { InputContext } from "contexts/InputContext";
import { useEffect, useState } from "react";

import { Edit } from "components/Editor";
import { Header } from "components/Header";
import { Layout } from "components/Layout";
import { Preview } from "components/Preview";


function App() {

  const [ marked, setMarked ] = useState('');

  
  const getData =  async () => {
    let data = await import('helpers/initialValue.md');

    fetch(data.default)
    .then(res => {
      return res.text();
    })
    .then(text => {
      setMarked(text);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <> 
    <Header />
    <Layout>
      <InputContext.Provider value={{ marked, setMarked }}>
        <Edit />
        <Preview />
      </InputContext.Provider>
    </Layout>
    </>
  );
}

export default App;
