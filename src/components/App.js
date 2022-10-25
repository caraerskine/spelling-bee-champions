import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContestantContainer from "./ContestantContainer";

function App() {

  const [champions, setChampions] = useState ([]);

useEffect(() => {
  fetch("http://localhost:3004/champions")
    .then((r) => r.json())
    .then(data => setChampions(data));
}, []);

  return (
    <div className="App">
      <NavBar />
        <Switch >
           <Route path="/"> 
             <ContestantContainer champions={champions} />
           </Route>   
        </Switch>
    </div>
  );
}

export default App;

