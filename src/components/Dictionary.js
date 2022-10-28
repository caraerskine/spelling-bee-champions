import React from "react";


function Dictionary( {champions} ) { 

    const renderContestants = champions.map((champion) => (
     <>
        <p className="b">{champion.word}</p>
        <p className="c">{champion.definition}</p> 
      </>
    ))

    return (
    <>
    {renderContestants}
    </>
    
  );
}

export default Dictionary;

