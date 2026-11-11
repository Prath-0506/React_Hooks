import React from 'react'
import StateGov from './StateGov'

const IndianGov = () => {
    const money = 100;
    const dollars = 5000;
   
  return (
    <div>indianGov
        <StateGov  money = {money}
        Dollars = {dollars}/>
    </div>
  )
}

export default IndianGov