import React, { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCounter) => prevCounter + 1);
    }, 1000);

    //returning an anonymous arrow function
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Timer: {count}</h1>
    </div>
  );
}




/*
function Timer () {

    //set state for timer 

    const [duration, setDuration] = useState(10);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        let timerId;
        if (!paused) {
            timerId = setInterval(() => {
                setDuration((prev) => prev - 1);
            }, 1000);
            console.log(timerId);
        }

        return function cleanup() {
            console.log(`Clearing ${timerId}`);
            clearInterval(timerId);
        };
    }, [paused]);

    const handleClick = (e) => {
        !paused ? setPaused(true) : setPaused(false);
    };
 
  
    return (
        <>
          {duration >= 0 ? <h2>{duration}</h2> : setDuration(0)}
          <button paused = {paused} onClick={handleClick}> start/stop</button>
        </>
  );
}
*/

export default Timer;