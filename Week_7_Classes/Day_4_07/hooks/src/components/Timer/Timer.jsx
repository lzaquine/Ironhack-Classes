import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);


    // useEffect only takes two arguments:
    // 1. A function that runs when the component mounts (callback)
    // 2. An array of values that determine if the function runs

   // useEffect(() => {}, []);

   useEffect(() => {
    const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      // This return inside use effect will run when the component unmounts (UNMOUTTING phase)
      return () => {
        clearInterval(intervalId);
        }

      // An empty dependency array will only trigger the callback on the MOUNTING phase
   }, []);

   useEffect(() => {
    document.title = count;
    console.log(count)
    // Passing a value to the dependency array makes the callback run on every update
   }, [count])


  return (
    <div className="Timer">
      <h2>Timer</h2>
      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
