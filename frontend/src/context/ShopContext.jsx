import React, { createContext } from 'react'
export const ShopContext = createContext(null)

export const ShopContextProvider = () => {
    const[cart, setCartItems]=useState([])
  return (
    <ShopContext.Provider>{props.children}</ShopContext.Provider>
  )
}
