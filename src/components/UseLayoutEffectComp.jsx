import React, { useLayoutEffect, useState } from 'react'
//SAME AS USEFFECT BUT RUNS BEFORE USEEFECT IN COMPARISION
//USE FOR SIDEFFECT
//RENDERS BEFORE THE PAE IS RENDERED
const UseLayoutEffectComp = () => {
    const[bgColor,setBgColor]=useState('yellow')
    useLayoutEffect(()=>{
      document.body.style.backgroundColor=bgColor
    },[bgColor])
  return (
    <div>
        <button style={{backgroundColor:'blue'}} onClick={()=>setBgColor("red")}>Change color</button>
    </div>
  )
}

export default UseLayoutEffectComp