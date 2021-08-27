import { useState, useEffect } from "react";
import { createContext } from "use-context-selector";
import useAuth from "./../hooks/useAuth";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  const addItem = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };
  useEffect(() => {
    const getItemsCart = () => {};
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
