import "./App.css";
import Search from "./components/Search";
import IdSearch from "./components/IdSearch";
import Content from "./components/Content";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [type, setType] = useState([]);
  const [id, setId] = useState();
  const url = "https://swapi.dev/api/";
  console.log(url);

  useEffect(() => {
    axios.get(url).then((res) => {
      /*       setCurrent(res.data); */
      /*       setType(res.data.map((character) => character.data)); */
      // setType(res.data);
      console.log(res)
    });
  }, []);

  console.log(type);
  return (
    <div className="App">
      <Search type={type} setType={setType} />
      <IdSearch setId={setId} />
      <Content type={type} />
    </div>
  );
}

export default App;