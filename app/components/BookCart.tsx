import React from 'react'
import Image from 'next/image'

import { Book } from '../type/type'
import Link from 'next/link'
interface BookCartProps {
    book: Book
}
const BookCart = ({ book }: BookCartProps) => {
    return (
        <Link href={`/books/${book.bookId}`}>
                    <div
            key={book.bookId}
            className="  border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
        >
            <div>
                {/* Image Container with light gray background */}
                <div className="bg-[#f3f3f3] rounded-2xl py-8 px-4 flex justify-center items-center h-56 mb-6">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={160}
                        height={160}
                        className="h-40 object-contain shadow-md rounded"
                    />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-[#23be0a0d] text-[#23BE0A] text-sm font-medium px-4 py-1.5 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title & Author */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                    {book.bookName}
                </h3>
                <p className="text-gray-600 font-medium text-sm mb-4">
                    By : {book.author}
                </p>
            </div>

            {/* Footer with border top dashed */}
            <div className="pt-4 border-t border-dashed border-gray-200 flex justify-between items-center text-gray-600 text-sm font-medium">
                <span>{book.category}</span>
                <div className="flex items-center gap-2">
                    <span>{book.rating.toFixed(2)}</span>
                    {/* Star Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default BookCart
