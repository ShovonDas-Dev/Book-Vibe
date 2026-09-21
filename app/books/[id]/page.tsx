
import CardButton from '@/app/button/CardButton'
import { Book } from '@/app/type/type'
import Image from 'next/image'
import React from 'react'

const CardDetails = async ({params}: {params: {id: string}}) => {
    const {id} = await params

    const data = await fetch("http://localhost:3000/booksData.json")
    const books = await data.json()
    
    const singleBook = books.find((b: Book) => b.bookId === Number(id))
    

  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Side: Book Image Container */}
        <div className="md:col-span-5 bg-[#1313130d] rounded-2xl p-12 flex justify-center items-center min-h-[500px]">
          <Image
            src={singleBook.image}
            alt={singleBook.bookName}
            width={300}
            height={400}
            className="max-h-[380px] w-auto object-contain shadow-2xl rounded-md"
            priority
          />
        </div>

        {/* Right Side: Book Information */}
        <div className="md:col-span-7 flex flex-col">
          {/* Title & Author */}
          <h1 className="text-4xl font-bold text-[#131313] mb-3">
            {singleBook.bookName}
          </h1>
          <p className="text-[#131313cc] font-medium text-lg mb-4">
            By : {singleBook.author}
          </p>

          <div className="border-t border-[#13131326] my-2"></div>

          {/* Category */}
          <p className="text-[#131313cc] font-medium text-lg my-2">
            {singleBook.category}
          </p>

          <div className="border-t border-[#13131326] my-2"></div>

          {/* Review */}
          <p className="text-[#131313b3] leading-relaxed my-3">
            <span className="font-bold text-[#131313]">Review : </span>
            {singleBook.review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 my-4">
            <span className="font-bold text-[#131313]">Tag</span>
            <div className="flex flex-wrap gap-3">
              {singleBook.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#23be0a0d] text-[#23BE0A] font-semibold text-sm px-4 py-2 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#13131326] my-2"></div>

          {/* Specification Table/Details */}
          <div className="space-y-3 my-4 text-base">
            <div className="flex items-center">
              <span className="w-48 text-[#131313b3]">Number of Pages:</span>
              <span className="font-bold text-[#131313]">
                {singleBook.totalPages}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-48 text-[#131313b3]">Publisher:</span>
              <span className="font-bold text-[#131313]">
                {singleBook.publisher}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-48 text-[#131313b3]">Year of Publishing:</span>
              <span className="font-bold text-[#131313]">
                {singleBook.yearOfPublishing}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-48 text-[#131313b3]">Rating:</span>
              <span className="font-bold text-[#131313]">
                {singleBook.rating}
              </span>
            </div>
          </div>

          {/* Buttons */}
              <CardButton book= {singleBook}/>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default CardDetails
