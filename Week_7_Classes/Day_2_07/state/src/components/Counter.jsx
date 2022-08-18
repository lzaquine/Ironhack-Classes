import React, {useState} from 'react'

function Counter() {
  // Destructuring the state variable and the updater function from useState hook
  const [count, setCount] = useState(0)

  /* function useState(initialValue) {
    const [count = 0, setCount()] = useState(initialValue)
  } */

  const handleCountIncrease = (count) => {
    setCount(count + 1)
  }
  const handleCountDecrease = (count) => {
    setCount(count - 1)
  }

  return (
    <div>
    <h1>Counter</h1>
    <p>You clicked {count} times</p>
    {/* Here we can pass an anonymous function but it isn't best practice */}
    {/* <button onClick={() => setCount((prevCount)=> prevCount - 1 )} > - </button>
    <button onClick={() => setCount((prevCount)=> prevCount + 1 )} > + </button> */}
    <button onClick={handleCountDecrease} > - </button>
    <button onClick={handleCountIncrease} > + </button>

    {/* function setCount(newValue) {
      count = newValue;
    }
    setCount(count  1); */}
    
    </div>
  )
}

export default Counter