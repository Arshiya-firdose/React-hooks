import React, { useReducer } from "react";

//SAME AS USESTATE BUT USED FOR MAJOR PROJECT

const UseReducerComp = () => {
    //2
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  // 1
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  //3
  return <div style={{display:"flex", flexDirection:"column",maxWidth:"9rem",margin:"10px",padding:"5px"}}>
    <h2>{state.count}</h2>
  <button style={{marginBottom:"5px"}} onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
  <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button> </div>;
};

export default UseReducerComp;
