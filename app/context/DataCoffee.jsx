'use client'

import React, { createContext, useState, useEffect, useReducer } from "react";
import cartReducer from '../../utils/cartReducer';

export const DataCoffeeContext = createContext(null);

const DataCoffeeContextProvider = ({ children }) => {

  const [coffeeData, setCoffeeData] = useState(null);
  const styleHome = `flex gap-6 w-[1200px]`;
  const limit = 4;

  // estado inicial del carrito
  const initialCartState = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) || [] : [];

  // estado y funcion para abrir el carrito
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  // subtotal carrito
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // quantity total
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
  // tipo de envio carrito
  const initialDeliveryState = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('delivery')) || null : null;
  const [delivery, setDelivery] = useState(initialDeliveryState)
  // total total  
  const totalCart = () => {
    let totalCart;
    if (delivery === "GRATIS" || delivery === null) {
      return totalCart = subtotal + 0
    } else {
      return totalCart = subtotal + 9
    }
  }
  const totalTotal = totalCart(delivery)
  const ivaCart = totalTotal * 0.21

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
        const data = await response.json();
        const originalProducts = [...data.products];
        originalProducts.sort((a, b) => (a.available && !b.available ? -1 : !a.available && b.available ? 1 : a.price - b.price));
        setCoffeeData(originalProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  return (
    <DataCoffeeContext.Provider value={
      {
        coffeeData,
        styleHome,
        limit,
        cart,
        subtotal,
        totalQuantity,
        isModalOpen,
        delivery,
        ivaCart,
        totalTotal,
        dispatch,
        handleButtonClick,
        setDelivery,
      }
    }>
      {children}
    </DataCoffeeContext.Provider>
  );
};

export default DataCoffeeContextProvider;
