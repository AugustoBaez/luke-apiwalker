import "./App.css";
import Search from "./components/Search";
import IdSearch from "./components/IdSearch";
import Content from "./components/Content";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [type, setType] = useState("");
  const [id, setId] = useState();
  const url = "https://swapi.dev/api/";
  console.log(url);

  useEffect(() => {
    const getNombre = async () => {
      try {
        const resultado = await axios.get("https://swapi.dev/api/people/")
        console.log(resultado.data.results)
        setType(resultado.data.results.map((nombres) => nombres.name))

      } catch (error) {
        console.log(error)
      }
    }
    getNombre()
  }, []);

  console.log(type);
  return (
    <div className="App">
      <Search type={type} setType={setType} />
      <IdSearch id={id} setId={setId} />
      <Content type={type} />
    </div>
  );
}

export default App;