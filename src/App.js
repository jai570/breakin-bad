import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

function App() {
  const [item, setitem] = useState([]);
  const [loading, setloading] = useState(true);
  const [query, setquery] = useState("");
  useEffect(() => {
    const fetchCharacters = async () => {
      const { data } = await axios.get(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(data);
      setitem(data);
      setloading(false);
    };
    fetchCharacters();
  }, [query]);
  return (
    <div className="App">
      <Header />
      <Search getquery={(q) => setquery(q)} />
      <CharacterGrid isLoading={loading} item={item} />
    </div>
  );
}

export default App;
