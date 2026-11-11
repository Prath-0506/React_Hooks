import React, { useLayoutEffect, useState } from 'react'

const UseLayout = () => {
    const [color, setColor] = useState('pink')
    useLayoutEffect(() => {
      document.body.style.backgroundColor = color;
     
    }, [color])
  return (
    <div>
        <h2>Current Background Color:{color}</h2>
        <button onClick={()=>setColor('lightgreen')}>Green</button>
        <div></div>
        <button onClick={()=>setColor('lightyellow')}>yellow</button>
        <div>
            <button onClick={()=>setColor('lightblue')}>blue</button>
        </div>
    </div>
  )
}

export default UseLayout