import React from "react";

function ContestantCard( {champion} ) {
    
    console.log(champion);
    
    return (
        <li className="card">
              <div className="image">
                <img src={champion.image} alt={"description"} />
                <h2>{champion.name}</h2>
                <p>{champion.year}</p>
                <p>{champion.location}</p>
                <strong>{champion.word}</strong>
             </div>
        </li>

    
        );
    }



    export default ContestantCard;