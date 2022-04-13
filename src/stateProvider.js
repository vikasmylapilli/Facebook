import React, { createContext, useContext, useReducer} from "react";
import reducer from "./reducer";
import { SET_USER } from "./actionType";
import { auth, provider } from "./firebase";

const StateContext = createContext();

const intialState ={
    user : null,
    image: "",
}

const StateProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, intialState);

    const signIn =()=>{
    auth.signInWithPopup(provider)
    .then(result=>{
        dispatch({type:SET_USER, payload: result.user})
        console.log(result.user)
        }).catch(error=>alert(error.message))
    };

    return (
        <StateContext.Provider 
        value= {{
            ...state,
            signIn
        }}>
            {children}
        </StateContext.Provider>
    )

};

export const useStateValue = () =>{
    return useContext(StateContext)}

export { StateContext, StateProvider }