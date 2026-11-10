import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [counter, setCounter] = useState(0)
     useEffect(() => {
       console.log("useEffect is running...")
       document.title=counter;
   
     }, [counter])
    
  return (
    <div><div>{counter}</div>
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
        <button onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
  )
}

export default FetchApi