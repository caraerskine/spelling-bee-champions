import React from "react";
import ContestantCard from "./ContestantCard";


function ContestantPage( {retiredChampions, onRetiredChampions, champions, onRetiredClick} ) {
  console.log(champions)

  const renderContestants = champions.map((champion) => (
  <ContestantCard 
    key={champion.id} 
    id={champion.id}
    champion={champion} 
    onRetiredChampions={onRetiredChampions} 
    />
));


  return (
    <main>
      <ul className="cards">
      <button onClick={onRetiredClick}>{retiredChampions ? "Show All Champions" : "Show Retired Champions"}</button> 
      {renderContestants}
      </ul>
    </main>
  );
}

export default ContestantPage;
