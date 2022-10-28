import React from "react";
import Words from "./Words";

function Dictionary( {champions} ) { 

    const renderContestants = champions.map((champion) => (
      <Words champion={champion} key={champion.id}/>
    ))

    return (
    <>
    {renderContestants}
    </>
    
  );
}

export default Dictionary;

