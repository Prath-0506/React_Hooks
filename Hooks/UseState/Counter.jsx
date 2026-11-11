import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increase = () =>{
        setCounter(counter+1);
    }
     const Decrease = () =>{
        setCounter(counter-1);
    }
  return (
    <>
    {counter}
    <div>
    <button onClick={increase}>Increment</button>
    <button onClick={Decrease}>Decrement</button>
    </div></>
  )
}

export default Counter