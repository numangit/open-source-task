/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const StateContext = createContext(null);

const StateProvider = ({ children }) => {

  //nav location state
  const [location, setLocation] = useState('home');

  const stateData = {
    location,
    setLocation
  };

  return (
    <StateContext.Provider value={stateData}>
      {
        children
      }
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };