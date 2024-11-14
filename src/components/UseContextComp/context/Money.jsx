import { useState } from "react";
import MyContext from "./MyContext";
const Money = (props) => {

  const yojna = {
    money: 1000,
    rashan: true,
    pention: 500,
  };
  const[counter,setCounter]=useState(0)
  return (
    <MyContext.Provider value={{yojna,counter,setCounter}}>
        {props.children}
        </MyContext.Provider>
  );
};
export default Money;
