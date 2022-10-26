import React from "react";

function ContestantCard( {champion} ) {

    console.log(champion)
    
    return (
        <div className="row">
                 <ul className="column">
                 <h2>{champion.name}</h2>
                    <img src={champion.image} alt={"Person holding trophy"} />
                    <li>Championship: {champion.year}</li>
                    <li>Hometown: {champion.location}</li>
                    <li>Winning word: <strong>{champion.word}</strong></li>
                     <p></p>
                     <p></p>                   
                 </ul>
        </div>


        );
    }

    export default ContestantCard;