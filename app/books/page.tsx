import BookCart from "../components/BookCart"
import { Book } from "../type/type"


const BookSection = async () => {
 
  const response = await fetch("http://localhost:3000/booksData.json")
    if(!response.ok){
        throw new Error("Failed to fetch book data")
    }
  const bookData = await response.json()
  console.log(bookData)

  return (
    <div>
        <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 flex justify-center" >Our Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookData.map((book: Book) => (
                    <BookCart key={book.bookId} book={book}/>
                ))}
            </div>
        </section>
    </div>
  )
}

export default BookSection