// React Imports
import React, { useReducer } from 'react';
// Hooks Imports
import initialState from './InitialState';
import {AppReducer} from './AppReducer';
import {GlobalContext} from './GlobalContext';

// Provider Component
export const GloablProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider
            value = {{transactions:state.transactions,
                      }}>
                {children}
        </GlobalContext.Provider>
    )
}