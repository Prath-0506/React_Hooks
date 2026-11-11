import React from 'react'
import MyContext from '../../propsDrilling/MyContext';
import { useContext } from 'react';

const People = () => {


    //console.log("printing the context", useContext(MyContext));
  
  const data = useContext(MyContext)



    return (
    <div>
        People Money   ={data.money}
        <h2>Counter = {data.counter}</h2>
        <button onClick={()=>{data.setCounter(data.counter+1)}}>
          Increase
        </button>
         <button onClick={()=>{data.setCounter(data.counter-1)}}>
          Decrease
        </button>
    </div>

  )
}

export default People