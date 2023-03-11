import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
export const StateContext = createContext();

//the initial state is what the data layer looks like when the app is loaded
//the reducer listens for changes
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/* the App component is the children */}
  </StateContext.Provider>
);

//a hook that allows us pull information from the data layer
export const useStateValue = () => useContext(StateContext);
