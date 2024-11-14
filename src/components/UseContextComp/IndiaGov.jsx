import React from 'react'
import StateGov from './StateGov'

//indiaGov > stateGov > DistrictGov> janta
const IndiaGov = () => {
  return (
    <div>IndiaGov
        <StateGov />
    </div>
  )
}

export default IndiaGov