import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const Cart = ({ children }) => {
  const getInitialCart = () => JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // In browser look for Initial Cart, but not on Server, so run getInitialCart on first render
  useEffect(() => {
    const initialCart = getInitialCart();
    if (initialCart) {
      setCart(initialCart);
    }
  }, []);

  // Listen to changes in cart variable and execute every time
  useEffect(() => {
    // write to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const addItemToCart = (product, qty = 1) => {
    const item = cart.find((i) => i.id === product.id);
    if (item) {
      // increase qty
      item.qty += qty;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, qty }]);
    }
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const exposed = {
    cart,
    addItemToCart,
    removeItemFromCart,

    isOpen,
    openCart,
    closeCart,
  };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default Cart;
