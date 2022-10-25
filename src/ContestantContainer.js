import React, { useState, useEffect } from "react";
import ContestantCard from "./ContestantCard";
// import NewContestantForm from "./NewContestantForm";

function ContestantContainer( {champions} ) {

const [contestants, setContestants] = useState ([]);

useEffect(() => {
  fetch("http://localhost:3004/champions")
    .then((r) => r.json())
    .then(data => setContestants(data));
}, []);

const renderContestants = champions.map((champion) => (
<ContestantCard key={champion.id} champion={champion} />
));

  return (
    <main>
      <ul className="cards">
        {renderContestants}
        {/* {/* <NewContestantForm /> */}
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