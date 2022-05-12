import React, { useReducer, createComtex, createContext } from 'react';
const initialState = [];

export const MoneyManagerContext = createContext(initialState);

export const Provider = ({ children }) => {
    return (
        <MoneyManagerContext.Provider value={{ appName: 'Money Manager' }}>
            {children}
        </MoneyManagerContext.Provider>
    );
}