import React from "react";


function Words( {champion} ) {
    return (
     <div>
        <p className="b" >{champion.word}</p>
         <p className="c" >{champion.definition}</p> 
     </div>
    )
}




export default Words;