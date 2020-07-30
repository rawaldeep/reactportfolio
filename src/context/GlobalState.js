import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    menu: false
}

// Create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
  

    return(
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}