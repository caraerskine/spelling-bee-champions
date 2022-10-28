import React from "react";


function Dictionary( {champions} ) { 

    const renderContestants = champions.map((champion) => (
       <ul>
        <p className="b">{champion.word}</p>
        <p className="c">{champion.definition}</p> 
      </ul>
    ))

    return (
    <>
    {renderContestants}
    </>
    
  );
}

export default Dictionary;

