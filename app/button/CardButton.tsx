'use client'
import React, { useContext } from 'react'
import { Book } from '../type/type'
import { booksContext } from '../context/bookContext'
interface BookProps {
  book: Book
}
const CardButton = ({ book }: BookProps) => {
  const { setRead, setWishlist } = useContext(booksContext)

  return (
    <div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setRead((currentBooks) => [...currentBooks, book])}
          className="btn border border-[#13131340] bg-white text-[#131313] hover:bg-gray-100 font-semibold px-7 py-3 rounded-xl transition-all">
          Read
        </button>
        <button
          onClick={() => setWishlist((currentBooks) => [...currentBooks, book])}
          className="btn bg-[#50B1C9] hover:bg-[#3fa0b8] text-white font-semibold px-7 py-3 rounded-xl transition-all">
          Wishlist
        </button>
      </div>
    </div>
  )
}

export default CardButton