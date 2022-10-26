import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContestantContainer from "./ContestantContainer";
// import Dictionary from "./Dictionary";
//import NewContestant from "./NewContestant";

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
           {/* <Route path="/"> 
             <Dictionary />
           </Route>    */}
           {/* <Route path="/"> 
             <NewContestant />
           </Route>    */}
        </Switch>
    </div>
  );
}

export default App;

