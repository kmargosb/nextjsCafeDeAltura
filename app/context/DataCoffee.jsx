"use client";

import React, { createContext, useState, useEffect } from "react";

export const DataCoffeeContext = createContext(null);

export default function DataCoffeeContextProvider({ children }) {

	const [coffeeDataHome, setCoffeeDataHome] = useState(null);
	const [coffeeDataShop, setCoffeeDataShop] = useState(null);

	const textTitleHome = 'Novedades'
	const textTitleShop = 'Últimos orígenes'
	const styleShop = `flex flex-wrap gap-6 w-[1200px]`

	useEffect(() => {
		const getData = async () => {
		  try {
			const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
			const data = await response.json();
			const originalProducts = [...data.products];
			originalProducts.sort((a, b) => a.available && !b.available ? -1 : !a.available && b.available ? 1 : a.price - b.price);
			setCoffeeDataHome(originalProducts.slice(0, 4));
			setCoffeeDataShop(originalProducts);
		  } catch (error) {
			console.log(error);
		  }
		};
		getData();
	  }, []);

	return (
		<DataCoffeeContext.Provider value={{ coffeeDataHome, coffeeDataShop, textTitleHome, textTitleShop, styleShop }}>
			{children}
		</DataCoffeeContext.Provider>
	)
}