import React from 'react'

import { cva } from "class-variance-authority";
//class-variance-authority: library

const ButtonVariants = cva(
   /* button base style */
   "h-auto text-white transition-colors duration-150",
   {
      variants: {
         /* button colors */
         intent: {
            primary:
               "bg-green-500 hover:bg-green-600",
            secondary:
               "bg-red-500 hover:bg-red-600",
            default:
               "bg-gray-500 hover:bg-gray-600",
            gris:
               "bg-Grey",
            negro:
               "bg-Black",
            verde:
               "bg-GreenAll",
            verdeA:
               "bg-GreenA group-hover:bg-GreenAll",
            agotado: "bg-Taupe select-none"
         },

         /* button sizes */
         size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
            large: ["text-lg", "py-4", "px-8"],
            normal: ["text-[14px]", "py-3", "px-6", "font-semibold", "leading-4"],
            peque: ["text-[14px]", "p-2", "font-semibold", "leading-4"]
         },

         /* button roundness */
         roundness: {
            square: "rounded-none",
            round: "rounded-md",
            pill: "rounded-full",
            normal: "rounded"
            

         },
      },

      // defaults
      defaultVariants: {
         intent: "default",
         size: "medium",
         roundness: "round"
      },
   }
);


export default function Button({ click, intent, size, roundness, children }) {
   // console.log(ButtonVariants({ intent, size, roundness }));

   return (
      <button onClick={click} className={ButtonVariants({ intent, size, roundness })}>{children}</button>
   )
}