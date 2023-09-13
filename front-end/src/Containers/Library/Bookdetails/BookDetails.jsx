// BookDetails.js
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = ({ books }) => {
  const { bookId } = useParams();

  if (!bookId) {
    return <div>Book ID not provided</div>;
  }

  const bookIdAsNumber = parseInt(bookId, 10);

  if (isNaN(bookIdAsNumber)) {
    return <div>Invalid Book ID</div>;
  }

  const selectedBook = books.find((book) => book.id === bookIdAsNumber);

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">
      <div className="card">
        <div className="card-image-container">
          <img src={selectedBook.img} alt="Book Cover" />
        </div>
        <div className="card-content">
          <h6>{selectedBook.title}</h6>
          <p className="subtitle1">Author: {selectedBook.author}</p>
          <p className="subtitle1">Category: {selectedBook.category}</p>
          <p className="body1">
            {selectedBook.abstract || 'No abstract available'}
          </p>
          <div className="button-container">
            <button className="primary-button">Reserve Now</button>
            <button className="secondary-button">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;


