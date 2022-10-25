import React from "react";
import ContestantCard from "./ContestantCard";

function ContestantContainer( {champions} ) {

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

export default ContestantContainer;

//set up CC to have use effect and set up Components within it
//fetch req to the array 
//CC takes in the array of champions as a prop
//then set state to display data 

//You might want search input in listings container aka gregslist
//new contestant form component should be in CC