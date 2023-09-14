import React, { useState } from 'react';
import './RemoveBook.css'; 
import bookImage from '../../assets/admin/books.png'; 

function BookRemove() {
  const [bookId, setBookId] = useState('');

  const handleInputChange = (e) => {
    setBookId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Removing book with ID:', bookId);
    setBookId('');
  };

  return (
    <div className="remove-book">
      <h1>Remove a Book</h1>
      <div className="content-wrapper">     
        <div className="remove-image-container">
          <img src={bookImage} alt="Book" />
        </div>
        <div className="form-container">        
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="bookId">Book ID:</label>
              <input
                type="text"
                id="bookId"
                name="bookId"
                value={bookId}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="remove-button">
              Remove Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookRemove;
