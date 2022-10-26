import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContestantPage from "./ContestantPage";
// import NewContestantForm from "./NewContestantForm";
// import Dictionary from "./Dictionary";

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
             <ContestantPage champions={champions} />
           </Route>   
           {/* <Route path="/"> 
             <NewContestantForm setNewContestants={setNewContestants} />
           </Route>    */}
       {/* <Route path="/"> 
             <Dictionary />
           </Route>    */}
        </Switch>
    </div>
  );
}

export default App;

