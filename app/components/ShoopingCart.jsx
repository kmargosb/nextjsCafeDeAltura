"use client";

import { useContext } from "react";
import { FaCartShopping, FaTrashCan } from "react-icons/fa6";
import { DataCoffeeContext } from "../context/DataCoffee";
import Image from "next/image";

const ShoppingCart = () => {
   const { cart, dispatch } = useContext(DataCoffeeContext);

   const handleRemoveFromCart = (itemId) => {
      dispatch({
         action: "REMOVE_ITEM",
         product: {_id: itemId}
      });
   };

   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

   return (
      <div className="flex flex-col absolute right-0 top-16 bg-slate-700 bg-opacity-50 w-[400px] gap-3 pb-6 rounded-b-2xl">
         <div className="flex gap-3 justify-center items-center">
            <FaCartShopping />
            <h2>Shopping Cart</h2>
         </div>
         {cart.map((item, i) => (
            <div key={i} className="flex justify-between items-center px-4">
               <Image src={item.img} alt="producto" width={48} height={48} className="bg-white rounded-md" />
               <p className="cursor-pointer p-3">-</p>
               <p>{item.quantity}</p>
               <p className="cursor-pointer p-3">+</p>
               <h3 className="w-36">{item.name}</h3>
               <p>{item.price.toFixed(2) + ' €'}</p>
               <FaTrashCan className="cursor-pointer" onClick={() => handleRemoveFromCart(item.id)} />
            </div>
         ))}
         <div className="flex justify-end items-center px-4">
            <h3 className="mr-2">Subtotal:</h3>
            <p>{subtotal} €</p>
         </div>
      </div>
   );
};

export default ShoppingCart;