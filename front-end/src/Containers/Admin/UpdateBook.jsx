import React, { useState, useRef } from 'react';
import '../../Styles/UpdateBook.css'; // Update the import path
import bookImage from '../../assets/admin/books.png';

function BookUpdate() {
  // State to store the book data
  const [book, setBook] = useState({
    bookIDs: '',
    ISBN: '',	
    title: '',
    author: '',
    category: '',
    language: '',
    abstract: ''
  });

  // State to track changes made in the form
  const [formData, setFormData] = useState({
    bookIDs: '',
    ISBN: '',	
    title: '',
    author: '',
    category: '',
    language: '',
    abstract: '',
  });

  const abstractTextareaRef = useRef(null);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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

  // Function to update the book data
  const updateBook = () => {
    // Create a copy of the current book data
    const updatedBook = { ...book };

    // Update only the fields that have been changed in the form
    for (const key in formData) {
      if (formData[key] !== '') {
        updatedBook[key] = formData[key];
      }
    }

    // Set the updated book data
    setBook(updatedBook);

    // Clear the form
    setFormData({
      BookIDs: '',
      ISBN: '',	
      title: '',
      author: '',
      category: '',
      language: '',
      abstract: '',
    });
    adjustTextareaSize();
  };

  return (
    <div className="book-update"> 
      <h1>Update Books</h1>
      <div className="content-wrapper">
        <div className="image-container">
          <img src={bookImage} alt="Book" />
        </div>
        <form>
        <div className="input-container">
            <label>Book IDs:</label>
            <input
              type="text"
              name="bookIDs"
              value={formData.bookIDs}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>ISBN:</label>
            <input
              type="text"
              name="ISBN"
              value={formData.ISBN}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Language:</label>
            <input
              type="yext"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Abstract:</label>
            <textarea
              type="text"
              name="abstract"
              value={formData.abstract}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" className="update-button" onClick={updateBook}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookUpdate;
