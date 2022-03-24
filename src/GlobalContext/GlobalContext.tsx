import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer"

type Props={
    children:React.ReactNode;
}

type ContextProp={
    showForm:boolean;
    show?:any;
}

const initialState:{showForm:boolean}={
    showForm:false,
   
}
export const GlobalContext=createContext<ContextProp>(initialState)




export const GlobalProvider=({children}:Props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    const show=()=>{
    dispatch({
        type:"CHANGE"
    })
    
    }



return(<GlobalContext.Provider  value={{
    showForm:state,
    show
}
}>{children}
</GlobalContext.Provider>)
}