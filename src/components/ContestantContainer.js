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


//You might want search input in listings container aka gregslist
//new contestant form component could be in CC