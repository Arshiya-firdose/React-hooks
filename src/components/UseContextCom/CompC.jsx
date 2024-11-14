import React, { useContext } from 'react'
import { ChanelContext, NameContext } from './Context'

const CompC = () => {
  const myNAME=  useContext(NameContext)
  const myCHnael=useContext(ChanelContext)
  return (
    <div>
        <h1>{myCHnael}</h1>
        <h1>{myNAME}</h1>
    </div>
  )
}

export default CompC