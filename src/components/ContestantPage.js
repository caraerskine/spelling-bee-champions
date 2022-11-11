import React from "react";
import ContestantCard from "./ContestantCard";


function ContestantPage( {champions} ) {
  console.log(champions)

  debugger

  //what render contestants is 
  //mapping over chmapion, for each champion it reutrn a card with a key set to the id and passing in the champion
  const renderContestants = champions.map((champion) => (
  <ContestantCard key={champion.id} champion={champion}/>
));

//champions is a stateful value and a prop (passing it down)
//stateful meaning that when this variable changes, everything that
//has access to that variable will know it has a new value

//useEffect is watching for changes in the stateful variables
//when that varibale changes useEffect runs 

//telling it what to render
//in component CC those props are passed in, when something about champion changes it can change the card (key)
  return (
    <main>
      <ul className="cards">
       {renderContestants}
      </ul>
    </main>
  );
}

export default ContestantPage;
