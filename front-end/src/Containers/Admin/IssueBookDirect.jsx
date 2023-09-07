import React, { useState } from 'react';
import '../../Styles/IssueBookDirect.css'; 
import bookImage from '../../assets/admin/books.png'; 

function BookIssueDirect() {
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userId') {
      setUserId(value);
    } else if (name === 'bookId') {
      setBookId(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Issuing book with ID:', bookId, 'to User ID:', userId);
    // Add the issuing logic here
    setUserId('');
    setBookId('');
  };

  return (
    <div className="issue-book">
      <h1>Issue a Book</h1>
      <div className="content-wrapper">     
        <div className="issue-image-container">
          <img src={bookImage} alt="Book" />
        </div>
        <div className="form-container">        
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="userId">User ID:</label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={userId}
                onChange={handleInputChange}
                required
              />
            </div>
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
            <button type="submit" className="issue-button">
              Issue Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookIssueDirect;
