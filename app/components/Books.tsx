import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Books = ({book}) => {
  return (
    <div>
      <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row gap-6 items-center">
      {/* Left side: Book Image Container */}
      <div className="bg-[#f3f3f3] rounded-2xl p-6 flex justify-center items-center w-full md:w-60 h-60 shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={130}
          height={170}
          className="h-44 w-auto object-contain shadow-md rounded"
          priority
        />
      </div>

      {/* Right side: Book Information */}
      <div className="flex-1 w-full flex flex-col justify-between">
        <div>
          {/* Title & Author */}
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {book.bookName}
          </h2>
          <p className="text-gray-600 font-medium text-sm mb-4">
            By : {book.author}
          </p>

          {/* Tags & Year */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
            <span className="font-bold text-gray-900">Tag</span>
            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#23be0a0d] text-[#23BE0A] font-semibold px-4 py-1.5 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-gray-600 ml-0 md:ml-2">
              {/* Location/Map Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          {/* Publisher & Pages */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              {/* Publisher/Users Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>Publisher: {book.publisher}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Page/File Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Page {book.totalPages}</span>
            </div>
          </div>
        </div>

        {/* Bottom Badges & Action Button */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[#328eff26] text-[#328EFF] font-medium text-sm px-4 py-2 rounded-full">
            Category: {book.category}
          </span>
          <span className="bg-[#ffac3326] text-[#FFAC33] font-medium text-sm px-4 py-2 rounded-full">
            Rating: {book.rating}
          </span>
          <Link href={`/books/${book.bookId}`}>
            <button className="bg-[#23BE0A] hover:bg-[#1fa308] text-white font-medium text-sm px-5 py-2 rounded-full transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Books
