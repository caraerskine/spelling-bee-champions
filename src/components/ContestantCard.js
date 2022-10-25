import React from "react";

function ContestantCard( {champion} ) {

    console.log(champion)
    
    return (
        <div className="row">
                 <ul className="column">
                 <h2>{champion.name}</h2>
                    <img src={champion.image} alt={"description"} />
                    <li>{champion.year}</li>
                    <li>{champion.location}</li>
                    <li><strong>{champion.word}</strong></li>
                     <p></p>
                     <p></p>                   
                 </ul>
        </div>


        );
    }

    export default ContestantCard;