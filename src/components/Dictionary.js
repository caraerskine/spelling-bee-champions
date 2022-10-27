import React from "react";


function Dictionary( {champion} ) { 
    console.log(champion)
  return (
    <ul>
        <li>{champion.word}</li>
        <li>{champion.definition}</li>
    </ul>
  );
}

export default Dictionary;

