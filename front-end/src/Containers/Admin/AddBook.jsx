import React, { useState, useRef } from 'react';
import '../../Styles/AddBook.css';
import bookImage from '../../assets/admin/books.png';

function BookAdd() {
  const [book, setBook] = useState({
    ISBN: '',	
    title: '',
    author: '',
    category: '',
    language: '',
    abstract: '',
    noOfCopies: '',
  });

  const abstractTextareaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
    adjustTextareaSize(); // Call a function to adjust textarea size
  };

  const adjustTextareaSize = () => {
    if (abstractTextareaRef.current) {
      abstractTextareaRef.current.style.height = 'auto';
      abstractTextareaRef.current.style.height = abstractTextareaRef.current.scrollHeight + 'px';
    }
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    console.log('Adding book:', book);
    setBook({
      ISBN: '',	
      title: '',
      author: '',
      category: '',
      language: '',
      abstract: '',
      noOfCopies: '',
    });
    adjustTextareaSize();
  };

  return (
    <div className="book-add">
      <h1>Add a Book</h1>
      <div className="content-wrapper">
        <div className="image-container">
          <img src={bookImage} alt="Book" />
        </div>
        <form onSubmit={handleAddBook}>
        <div className="input-container">
            <label htmlFor="ISBN">ISBN:</label>
            <input
              type="text"
              id="ISBN"
              name="ISBN"
              value={book.ISBN}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={book.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={book.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={book.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="language">Language:</label>
            <input
              type="text"
              id="language"
              name="language"
              value={book.language}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="abstract">Abstract:</label>
            <textarea
              id="abstract"
              name="abstract"
              value={book.abstract}
              onChange={handleInputChange}
              ref={abstractTextareaRef}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="noOfCopies">Number Of Copies:</label>
            <input
              type="number"
              id="noOfCopies"
              name="noOfCopies"
              value={book.noOfCopies}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="add-button">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAdd;
