'use client'
import { createContext, useState } from "react";
import { Book } from "../type/type";


interface BooksContextValue {
  read: Book[];
  setRead: React.Dispatch<React.SetStateAction<Book[]>>;
  wishlist: Book[];
  setWishlist: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const booksContext = createContext<BooksContextValue | null>(null);



const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [read, setRead] = useState<Book[]>([])
  const [wishlist, setWishlist] = useState<Book[]>([])

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