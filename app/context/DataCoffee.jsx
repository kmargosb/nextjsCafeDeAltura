"use client";

import React, { createContext, useState } from "react";

export const DataCoffeeContext = createContext(null);

export default function DataCoffeeContextProvider({children}) {

    const [cafeData, setCafeData] = useState(null);

	return(
		<DataCoffeeContext.Provider value={{cafeData, setCafeData}}>
			{children}
		</DataCoffeeContext.Provider>
	)
}