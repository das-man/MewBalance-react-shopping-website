import { data } from "../assets/Data";
import { createContext, useState } from "react";

export const Context = createContext([]);

export const ContextProvider = ({ children }) => {
  const [shoes, setShoes] = useState(data);
  const [cart, setCart] = useState([]);


  const shoeFilter = (category) => {
    
    if (category) {
      const filteredShoes = data.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
      setShoes(filteredShoes);
    } else {
      setShoes(data);
    }
  };

  return (
    <Context.Provider value={{ shoes, shoeFilter }}>
      {children}
    </Context.Provider>
  );
};
