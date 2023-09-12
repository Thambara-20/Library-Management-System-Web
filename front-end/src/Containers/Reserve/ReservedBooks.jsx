import React from 'react';

import BookCardVertical from '../../Components/BookCardVertical'; 
import { userReservedDummy as userReserved } from "../../Helpers/UserReservedDummy";

const ReservedBooks = () => {
  
  return (
    <div data-aos='fade-up'>
    
      <div>
          {userReserved.map((book) => (
            <BookCardVertical key={book.id} book={book} showCancellationButton={true}/>
          ))}
        </div>
    </div>
  );
};

export default ReservedBooks;
