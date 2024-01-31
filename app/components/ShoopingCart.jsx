"use client";

import { useContext } from "react";
import { FaCartShopping, FaTrashCan, FaTrash } from "react-icons/fa6";
import { DataCoffeeContext } from "../context/DataCoffee";
import Link from "next/link";
import Image from "next/image";
import ButtonVariants from "./ButtonVariants";

const ShoppingCart = () => {
   const { cart, dispatch, handleButtonClick, subtotal } = useContext(DataCoffeeContext);

   const handleRemoveFromCart = (itemId) => {
      dispatch({
         action: "REMOVE_ITEM",
         product: { _id: itemId }
      });
   };
   const handleAdd = (itemId) => {
      dispatch({
         action: "ADDITION",
         product: { _id: itemId }
      })
   }
   const handleSubtract = (itemId) => {
      dispatch({
         action: "SUBTRACTION",
         product: { _id: itemId }
      })
   }
   const handleEmptyCart = (array) => {
      dispatch({
         action: "EMPTY_CART",
         product: array
      })
   }

   if (cart.length === 0) {
      return (
         <div className="absolute top-0 w-full">
            <div className="bg-DarkGrey opacity-50 absolute top-0 -left-10 w-screen h-screen" onClick={handleButtonClick}></div>
            <div className="flex flex-col items-center absolute right-10 top-16 bg-[#7B9C81] bg-opacity-90 w-[400px] gap-3 pb-6 rounded-b-2xl select-none">
               <h2 className="text-2xl">El carrito está vacío</h2>
               <h3 className="cursor-pointer absolute top-1 right-5 text-2xl" onClick={handleButtonClick}>X</h3>
            </div>
         </div>
      );
   }

   return (
      <div className="absolute top-0 w-full">
         <div className="bg-DarkGrey opacity-50 absolute top-0 -left-10 w-screen h-screen" onClick={handleButtonClick}></div>
         <div className="flex flex-col items-center absolute top-16 right-10 bg-[#7B9C81] bg-opacity-90 w-[400px] gap-3 pb-6 rounded-b-2xl select-none">
            <div className="flex gap-3 justify-center items-center">
               <FaCartShopping />
               <h2 className="text-2xl">Shopping Cart</h2>
            </div>
            {cart.map((item, i) => (
               <div key={i} className="flex justify-between items-center px-4 w-full">
                  <Image src={item.img} alt="producto" width={48} height={48} className="bg-white rounded-md" />
                  <p className="cursor-pointer p-3" onClick={() => handleSubtract(item.id)}>-</p>
                  <p>{item.quantity}</p>
                  <p className="cursor-pointer p-3" onClick={() => handleAdd(item.id)}>+</p>
                  <h3 className="w-36">{item.name}</h3>
                  <p>{item.price.toFixed(2).replace('.', ',') + ' €'}</p>
                  <FaTrashCan className="cursor-pointer w-6 h-6" onClick={() => handleRemoveFromCart(item.id)} />
               </div>
            ))}
            <div className="flex justify-between items-center px-4 w-full">
               <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleEmptyCart(cart)}>
                  <FaTrash />
                  <h3>Vaciar carrito</h3>
               </div>
               <div className="flex">
                  <h3 className="mr-2">Subtotal:</h3>
                  <p>{subtotal.toFixed(2).replace('.', ',')} €</p>
               </div>
            </div>
            <Link href='/bagshop' >
               <ButtonVariants click={handleButtonClick} intent="negro" size="medium" roundness='normal'>Ir a la Cesta</ButtonVariants>
            </Link>
            <h3 className="cursor-pointer absolute top-1 right-5 text-2xl" onClick={handleButtonClick}>X</h3>
         </div>
      </div>

   );
};

export default ShoppingCart;