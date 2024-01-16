import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import FooterCopyRight from './components/FooterCopyRight'
import DataCoffeeContextProvider from './context/DataCoffee'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cafe De Altura',
  description: `Café de Altura is a Frontend project that simulates a professional coffee e-commerce. It is designed and developed by GammaTech School for its students of the Frontend Developer Bootcamp. As part of the project, it provides a REST API to manage the site's products content. Here you will find the documentation of said API, all the endpoints, and a testing framework to get used to its data structures.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <DataCoffeeContextProvider>
          <NavBar />
          {children}
          <FooterCopyRight />
        </DataCoffeeContextProvider>

      </body>
    </html>
  )
}
