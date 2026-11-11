import React from 'react'
import District from './District'

const StateGov = ({money,dollars}) => {
    console.log(money)
  return (
    <div>StateGov
        <District money = {money}
        Dollars = {dollars}/>
    </div>
  )
}

export default StateGov