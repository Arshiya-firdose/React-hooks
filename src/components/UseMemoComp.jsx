import React, { useMemo, useState } from 'react'
//SAME AS USCALLBACK
//
const UseMemoComp = () => {
    const[input,setInput]=useState(" ")
    const calculateResult=(input)=>{
        console.log('calculating result')
        return input.length
    }
    const memoizedResult= useMemo(()=>calculateResult(input),[input])
  return (
    <div><input value={input}
    onChange={(e)=>setInput(e.target.value)}
    type="text"/>
    <h1>Inputlength= {memoizedResult}</h1>
    </div>
  )
}

export default UseMemoComp