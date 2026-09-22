'use client'

import React, { useContext } from 'react'
import { Book } from '../type/type'
import { booksContext } from '../context/bookContext'
import { toast } from 'react-toastify'

interface BookProps {
  book: Book
}

const CardButton = ({ book }: BookProps) => {
  const {read, wishlist, setRead, setWishlist } = useContext(booksContext)

  const handleReadClick = () => {
     
    const exist = read.some((item) => item.bookId === book.bookId)

  if (exist) {
    toast.warning('This book is already in your Read List!')
    return
  }

  setRead([...read, book])
  toast.success('Book added to your Read List!')
    
     
  }

  const handleWishlistClick = () => {
     const exist = wishlist.some((item) => item.bookId === book.bookId)

  if (exist) {
    toast.warning('This book is already in your Wishlist!')
    return
  }

  setWishlist([...wishlist, book])
  toast.success('Book added to your Wishlist!')
  }

  return (
    <div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleReadClick}
          className="btn border border-[#13131340] bg-white text-[#131313] hover:bg-gray-100 font-semibold px-7 py-3 rounded-xl transition-all"
        >
          Read
        </button>

        <button
          onClick={handleWishlistClick}
          className="btn bg-[#50B1C9] hover:bg-[#3fa0b8] text-white font-semibold px-7 py-3 rounded-xl transition-all"
        >
          Wishlist
        </button>
      </div>
    </div>
  )
}

export default CardButton