import React, {useState, useEffect} from "react";
import Header from "./Header";
import ContestantContainer from "./ContestantContainer"

function App() {

  const [champions, setChampions] = useState ([]);

useEffect(() => {
  fetch("http://localhost:3004/champions")
    .then((r) => r.json())
    .then(data => setChampions(data));
}, []);

  return (
    <div className="App">
      <Header />
      <ContestantContainer champions={champions} />
    </div>
  );
}

export default App;

