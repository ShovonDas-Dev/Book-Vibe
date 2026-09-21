"use clint"
import React, { useContext, useState } from 'react'
import { Book } from '../type/type'
import { booksContext } from '../context/bookContext'
import Books from './Books'
interface IBookTabProps {
    read: Book[]
    wishlist: Book[]
}


const BookTab = () => {
    const context = useContext(booksContext)
    const { read, wishlist }: IBookTabProps = context ?? { read: [], wishlist: [] }

    const [sort , setSort] = useState("ratng")
    function sortBooks(book : Book[] ){
        const books = [...book]
        if(sort === "rating"){
            books.sort((a,b)=> b.rating - a.rating)
        }else if(sort === "pages"){
            books.sort((a,b) => b.totalPages - a.totalPages)
        }else if(sort === "year"){
            books.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing )
        }

        return books
    }
    console.log(sort)
    
    const sortReadBook = sortBooks(read)
    const sortWIshlists = sortBooks(wishlist)

    return (
        <>
            <div className='flex justify-center'>
                <fieldset className="fieldset">

                    <select
                    value={sort}
                    onChange={(e)=> 
                        setSort(e.target.value as "rating" || "pages" || "year")
                    }
                    defaultValue="Sort By" className="select">
                        <option disabled={true}>Sort By</option>

                        <option value={"rating"}>Rating</option>
                        <option value= {"pages"}>Number of Pages</option>
                        <option value={"year"}>Publisher Year</option>
                    </select>

                </fieldset>
            </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift bg-white">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content  border-base-300 p-6">
                    {sortReadBook.map((book, index) => (
                        <Books key={index} book={book} />
                    ))}
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content border-base-300 p-6">
                    {sortWIshlists.map((book, index) => (
                        <Books key={index} book={book} />
                    ))}
                </div>


            </div>

        </>
    )
}

export default BookTab