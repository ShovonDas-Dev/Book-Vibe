import React, { useContext } from 'react'
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

    return (
        <>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift bg-white">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content  border-base-300 p-6">
                    {read.map((book, index) => (
                        <Books key={index} book={book} />
                    ))}
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content border-base-300 p-6">
                    {wishlist.map((book, index) => (
                        <Books key={index} book={book} />
                    ))}
                </div>


            </div>

        </>
    )
}

export default BookTab