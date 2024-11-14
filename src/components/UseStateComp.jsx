import React from 'react'

//use for state mnagement
import { useState } from 'react'
const UseStateComp = () => {
    const[count,setCount]=useState(0)
  return (
    <div style={{display:'flex', flexDirection:"column", alignItems:'center',padding:"5px"}}>
    <div style={{padding:'5px'}}>{count}</div>
    <div >
    <button style={{padding:'7px',margin:"5px"}} onClick={()=>setCount(count+1)}>Increment</button> <br/>
    <button style={{padding:'5px',margin:"5px"}} onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
    </div>
  )
}

export default UseStateComp