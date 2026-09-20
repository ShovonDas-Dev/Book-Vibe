export interface Book {
  bookId: number;
  bookName: string;
  author: string;
  review: string;
  image: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}