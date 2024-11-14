import { createContext, useState } from "react";
import CompA from "./CompA.JSX";

//REACT CONTEXT ISA WAY TO MANAG ASTATE GLOBALLY
export const NameContext=createContext()
export const ChanelContext=createContext()

export const Name=()=>{
    const[srname,setSrNAME]=useState("kumar")
    return (
        <>
        <NameContext.Provider value={srname}>
            <ChanelContext.Provider value={"learning never ends"}>
            <CompA/>

            </ChanelContext.Provider>
        </NameContext.Provider>
        </>
    )
}