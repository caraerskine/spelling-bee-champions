import React from "react";


function Dictionary( {champions} ) { 

    const renderContestants = champions.map((champion) => (
       <ul>
        <li><strong>{champion.word}</strong></li>
        <li>{champion.definition}</li> 
      </ul>
    ))

    return (
    <>
    {renderContestants}
    </>
    
  );
}

export default Dictionary;

