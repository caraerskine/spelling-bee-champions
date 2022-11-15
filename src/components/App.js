import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContestantPage from "./ContestantPage";
import Header from "./Header";
import NewContestantForm from "./NewContestantForm";
import Dictionary from "./Dictionary";
import Home from "./Home";


function App() {

  const [champions, setChampions] = useState ([]);

  const API = "http://localhost:3004/champions/"

useEffect(() => {
  fetch(API)
    .then((response) => response.json())
    .then(data => setChampions(data));
}, []);


const handleAddNewContestant = (data) => {
  setChampions((champions) => [...champions, data])      
}

  return (
    <div className="App">
      <Header /> 
        <NavBar />
          <Switch >
             <Route exact path="/"> 
               <Home />
             </Route> 
             <Route exact path="/championspage"> 
               <ContestantPage champions={champions} />
             </Route>   
             <Route exact path="/newcontestantform"> 
               <NewContestantForm setChampions={setChampions} onAddNewContestant={handleAddNewContestant} />
            </Route>   
             <Route exact path="/wordsanddefinitions"> 
               <Dictionary champions={champions}/>
             </Route>   
         </Switch>
    </div>
  );
}

export default App;



