import React from 'react';

import BookCardVertical from '../../Components/BookCardVertical'; 
import { userReservedDummy as userReserved } from "../../Helpers/UserReservedDummy";

const BookIssue = () => {
  
  return (
    <div>
       <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', margin: '15px 0' }}>Reserved Books</h1>
      
      <div>
          {userReserved.map((book) => (
            <BookCardVertical
            key={book.id} 
            book={book} 
            showIssueButton={true}
            showRejectButton={true}
          />
          ))}
        </div>
    </div>
  );
};

export default BookIssue;
