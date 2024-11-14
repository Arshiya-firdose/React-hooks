import React, { useEffect } from 'react'

const ChildComp = ({handleClick}) => {
    useEffect(()=>{
        console.log('Child componenent useffect is running')
    },[handleClick])
  return (
    <div>ChildComp</div>
  )
}

export default ChildComp