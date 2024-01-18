"use client";

import React, { createContext, useState, useEffect, useReducer } from "react";
import cartReducer from '../../utils/cartReducer'

export const DataCoffeeContext = createContext(null);

export default function DataCoffeeContextProvider({ children }) {

	
	const [coffeeData, setCoffeeData] = useState(null);
	const textTitleHome = 'Novedades'
	const textTitleShop = 'Últimos orígenes'
	const styleHome = `flex gap-6 w-[1200px]`
	const styleShop = `flex flex-wrap gap-6  w-[1200px]`
	const limit = 4

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
				const data = await response.json();
				const originalProducts = [...data.products];
				originalProducts.sort((a, b) => a.available && !b.available ? -1 : !a.available && b.available ? 1 : a.price - b.price);
				setCoffeeData(originalProducts);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	// cart
	  const [cart, dispatch] = useReducer(cartReducer, []);

	return (
		<DataCoffeeContext.Provider value={{ coffeeData, textTitleHome, textTitleShop, styleShop, styleHome, limit, cart, dispatch }}>
			{children}
		</DataCoffeeContext.Provider>
	)
}