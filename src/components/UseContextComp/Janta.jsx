import React, { useContext } from 'react'
import MyContext from './context/MyContext';
const Janta = () => {
    // console.log(yojna);
    const data=useContext(MyContext)
    console.log(data)
  return (
    <div>Janta
     <h1>{data.yojna.money}</h1>
     <h1>{data.yojna.rashan?"rashan milega":"nhi mila"}</h1>
     <h1>{data.yojna.pention}</h1>
     <h1>{data.counter}</h1>
     <button onClick={()=>data.setCounter(data.counter+1)}>Increase</button>
    </div>
  )
}

export default Janta