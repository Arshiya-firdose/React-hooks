import React, { useRef } from 'react'
//MANPULATES DOM DIRECTLY
//WE CANT USE ONE REFELEMENT MULTIPLE TIMES
const UseRefComp = () => {
    const refElement=useRef(null)
    console.log(refElement)
    const focusInput=()=>{
        refElement.current.focus()
    }
  return (
    <div>
        <input ref={refElement} type='text'/>
        {/* <h1 ref={refElement}>Hello</h1>   */}
        { <button onClick={focusInput}>Focus</button> }
    </div>
  )
}

export default UseRefComp