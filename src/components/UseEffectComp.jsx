import React, { useEffect, useState } from 'react'

// PERFORM SIDEEFFECT //  
//USED FOR DATA FETCH 
 //WHEN EVER WE REFRESH BROWSRE USEEFFECT RUNS
 //[]-DEPENDENCY LIST-USEEFFECT RUNS ONLY ONE TIME THAT NEVER CHANGES
 // IF WE SET DEPENDENCY -USEFFECT RUNS WHEN EVER THERE IS DEPENDENCY
 //USEEFFECT GIVES TWO OUTPUT DUE TO LIFE CYCLE METHOD DUE TO OLD CONCEPT IT STILL HAPPENS

// const UseEffectComp = () => {
//     const[count,setCount]=useState(0)

//     useEffect(()=>{
//     console.log('useffect is running')
//     document.tile=count

//     },[count])   //WHENEVER CHANGE IN DEPENDENCY  ({count}) USEFFECT WILL RUN AT THAT CHANGES
//     //IK COMPONENT K CHANGE HONE SE DUSRE COMPONENT ME CHANGE AAYGA
//   return (
//     <div>
// <h1>{count}</h1>       
//  <button onClick={()=>setCount(count+1)}>Incraese</button>
//     </div>
//   )
// }

// export default UseEffectComp  

const UseEffectComp=()=>{
     useEffect(()=>{
     const fetchData=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/todos')
        const result=await api.json()
        console.log(result)
        console.table(result)
     }
     fetchData()
     },[])
    return (
        <>

        </>
    )
}
export default UseEffectComp