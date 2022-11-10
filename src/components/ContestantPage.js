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

//telling it what to render
  return (
    <main>
      <ul className="cards">
       {renderContestants}
      </ul>
    </main>
  );
}

export default ContestantPage;
