import React from "react";
import ContestantCard from "./ContestantCard";
// import NewContestant from "./NewContestant";


function ContestantContainer( {champions} ) {
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

export default ContestantContainer;

//Add <NewContestant /> component in here I think 

//You might want search input in listings container aka gregslist
//new contestant form component could be in CC