import React, { useState } from 'react';

function Liker () {
    //initilize a count variable at 0, the setCount function
    // will be used to re-set the "count" value.
    const [count, setCount] = useState(0);

  function banana() {
      setCount(prevCount => prevCount +1)
  }
  
  function taco(){
    setCount(noCount => noCount -1)
  }

 //passed a function into setCount means that it is the most updated value 
 //update state is ansyc 
 //update state is expensive operation 
 

 //Reset count to its previous value + 1 
 //Reset count to its previous value - 1
    return (
      <div>
        <h2>{count} likes</h2>
        <button onClick={banana}>👍🏽</button>
        <button onClick={taco}>👎🏽</button>
      </div>
    );
  };
  

  export default Liker;