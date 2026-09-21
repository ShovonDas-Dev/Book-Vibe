'use client'
import { createContext, useState } from "react";



export const booksContext = createContext(null);



const BookProvider = ({ children }: { children: React.ReactNode })=>{
   const [read , setRead] = useState([])
   const [wishlist , setWishlist] = useState([])

       return (
        <booksContext.Provider value={{
            read,
            setRead,
            wishlist,
            setWishlist
        }}>

          {children} 
        </booksContext.Provider>
       );
      
}

export default BookProvider;