import React from 'react'
import People from './People'

const Panchayat = ({money,dollars}) => {
  return (
    <div>Panchayat
        <People  money = {money}
         Dollars = {dollars}/>
    </div>
  )
}

export default Panchayat