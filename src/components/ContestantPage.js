import React from "react";
import ContestantCard from "./ContestantCard";
// import NewContestantForm from "./NewContestantForm";


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

//Add <NewContestant /> component in here I think 

//You might want search input in listings container aka gregslist
//new contestant form component could be in CC