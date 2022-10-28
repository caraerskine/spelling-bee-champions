import React from "react";


function Dictionary( {champions} ) { 

    const renderContestants = champions.map((champion) => (
     <div>
        <p className="b">{champion.word}</p>
        <p className="c">{champion.definition}</p> 
      </div>
    ))

    return (
    <>
    {renderContestants}
    </>
    
  );
}

export default Dictionary;

