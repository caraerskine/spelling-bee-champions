import React from "react";


function Dictionary( {champions} ) { 

    const renderContestants = champions.map((champion) => (
       <ul>
        <p class="b">{champion.word}</p>
        <p class="c">{champion.definition}</p> 
      </ul>
    ))

    return (
    <>
    {renderContestants}
    </>
    
  );
}

export default Dictionary;

