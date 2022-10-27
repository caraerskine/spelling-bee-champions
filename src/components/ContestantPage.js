import React from "react";
import ContestantCard from "./ContestantCard";


function ContestantPage( {champions} ) {
  console.log(champions)

  const renderContestants = champions.map((champion) => (
  <ContestantCard key={champion.id} champion={champion}/>
));


  return (
    <main>
      <ul className="cards">
       {renderContestants}
      </ul>
    </main>
  );
}

export default ContestantPage;
