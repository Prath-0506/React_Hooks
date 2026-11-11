import React from 'react'
import Panchayat from './Panchayat'

const Block = ({money,dollars}) => {
  return (
    <div>Block
        <Panchayat  money = {money}
         Dollars = {dollars}/>
    </div>
  )
}

export default Block