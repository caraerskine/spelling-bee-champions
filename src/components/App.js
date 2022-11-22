import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContestantPage from "./ContestantPage";
import Header from "./Header";
import NewContestantForm from "./NewContestantForm";
import Dictionary from "./Dictionary";
import Home from "./Home";


function App() {

  const [champions, setChampions] = useState([]);
  const [retiredChampions, setRetiredChampions] = useState(false);

  const API = "http://localhost:3004/champions"

useEffect(() => {
  fetch(API)
    .then((response) => response.json())
    .then((champions) => {
      const updatedChampions = champions.map((champions) => {
        return {
          ...champions, retired: false
        }
      })

      setChampions(updatedChampions);
  })
}, []); 

const onRetiredChampions = (retiredChampions) => {
  const updatedChampionsClick = champions.map((champions) => 
  champions.id === retiredChampions.id ? retiredChampions : champions)
  setChampions(updatedChampionsClick)
}

const handleRetiredChampions = () => {
  setRetiredChampions((retired) => !retired) 
}
  

const handleAddNewContestant = (data) => {
  setChampions((champions) => [...champions, data])

}

let displayChampions = champions
if (retiredChampions){
  displayChampions = displayChampions.filter((champions) => champions.retired)
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
               <ContestantPage 
                  champions={displayChampions}
                  onRetiredChampions={onRetiredChampions}
                  onRetiredClick={handleRetiredChampions}
                  retiredChampions={retiredChampions}
               />
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



//Create a button that lets the user filter champions based on an attribute
//create a variable and store the filteredChampions in it 
//map over that variable to show the filteredChampions
//button element has onClick that triggers filteredChampions