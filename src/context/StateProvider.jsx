/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const StateContext = createContext(null);

const StateProvider = ({ children }) => {

  //nav location state
  const [location, setLocation] = useState('home');

  //state for orders
  const [orders, setOrders] = useState([]);

  const stateData = {
    location,
    setLocation,
    orders,
    setOrders
  };

  return (
    <StateContext.Provider value={stateData}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };