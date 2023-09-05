import React from 'react';

import BookCardVertical from '../../Components/BookCardVertical'; 
import { userReservedDummy as userReserved } from "../../Helpers/UserReservedDummy";

const ReservedBooks = () => {
  
  return (
    <div>
       <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', margin: '15px 0' }}>Ready To Borrow</h1>
      
      <div>
          {userReserved.map((book) => (
            <BookCardVertical key={book.id} book={book} showCancellationButton={true}/> // Pass the showCancellationButton prop
          ))}
        </div>
    </div>
  );
};

export default ReservedBooks;
