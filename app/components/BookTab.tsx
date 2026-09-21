import React, { useContext } from 'react'
import { Book } from '../type/type'
import { booksContext } from '../context/bookContext'
interface IBookTabProps {
    read: Book
    wishList: Book
}


const BookTab = ( ) => {
    const {read, wishlist} : IBookTabProps = useContext(booksContext)

    return (
        <>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift bg-white">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 1" />
                <div className="tab-content  border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 2" defaultChecked />
                <div className="tab-content border-base-300 p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
                <div className="tab-content  border-base-300 p-6">Tab content 3</div>
            </div>

        </>
    )
}

export default BookTab