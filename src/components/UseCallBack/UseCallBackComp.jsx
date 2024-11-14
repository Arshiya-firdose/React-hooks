import React, { useCallback, useState } from 'react'
import ChildComp from './ChildComp'
//WHENEVER THERE IS CHANGE IN STATE TERE IS CREATION OF FNEW FUNCTION TO PREVENT 
//THIS USECALLBAK IS USED i.e TO MEMOIZ THE FUNCTION
const UseCallBackComp = () => {
    const[counter1,setCounter1]=useState(0)
    const[counter2,setCounter2]=useState(0)
    const handleClick=useCallback(()=>{
      setCounter1(counter1+1)
    },[])
    
    

  return (
    <div>
      <h1>{counter2}</h1>
     <ChildComp handleClick={handleClick}/>
      <button onClick={()=>setCounter2(counter2+1)}>counter2-Increase</button>
    </div>
  )
}

export default UseCallBackComp