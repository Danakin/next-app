import { useState, useEffect } from "react";

const useCart = () => {
  const getInitialCart = () => JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState([]);

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

  const addItemToCart = (id, qty = 1) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      // increase qty
      item.qty += qty;
      setCart([...cart]);
    } else {
      setCart([...cart, { id, qty }]);
    }
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
  };
};

export default useCart;
