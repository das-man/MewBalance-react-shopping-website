import { data } from "../assets/Data";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext([]);

export const ContextProvider = ({ children }) => {
  const [shoes, setShoes] = useState(data);
  const [cart, setCart] = useState([]);
  const [invoice, setInvoice] = useState({ count: 0, subTotal: 0 });

  const addToCart = (shoe) => {
    toast.success(`Item added`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

    setCart((nowCart) => {
      let prev = [...nowCart];

      if (prev.length < 0) {
        prev.push({ ...shoe, qty: 1 });
      } else {
        const findShoe = prev.find((thisShoe) => {
          return thisShoe.id === shoe.id;
        });
        if (findShoe) {
          prev = prev.map((item) => {
            return item.id === findShoe.id
              ? { ...findShoe, qty: findShoe.qty + 1 }
              : item;
          });
        } else {
          prev.push({ ...shoe, qty: 1 });
        }
      }

      return prev;
    });
  };

  const removeFromCart = (shoe) => {
    toast.error(`Item removed`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

    setCart((nowCart) => {
      let prev = [...nowCart];
      const isShoe = prev.find((item) => {
        return item.id === shoe.id;
      });

      if (isShoe) {
        const index = prev.indexOf(isShoe);
        prev.splice(index, 1);
      }

      return prev;
    });
  };

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

  const calInvoice = () => {
    setInvoice((prev) => {
      let newInvoice = { ...prev, count: 0, subTotal: 0 };

      cart.forEach((item) => {
        newInvoice.count += item.qty;
        newInvoice.subTotal += item.qty * item.price;
      });

      return newInvoice;
    });
  };

  useEffect(() => {
    calInvoice();
  }, [cart]);

  return (
    <Context.Provider
      value={{ shoes, shoeFilter, addToCart, removeFromCart, invoice, cart }}
    >
      {children}
    </Context.Provider>
  );
};
