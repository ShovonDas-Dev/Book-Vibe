'use client'

import React, { useContext } from 'react'
import { booksContext } from '../context/bookContext'
import BookHeader from '../components/BookHeader'

import { Book } from '../type/type'
import BookTab from '../components/BookTab'



const listedBooks = () => {



    
  return (
    <>
         <main className="mx-auto max-w-7xl px-4 py-6">
        <BookHeader/>
        <BookTab/>

    </main>



    </>
  )
}

export default listedBooks