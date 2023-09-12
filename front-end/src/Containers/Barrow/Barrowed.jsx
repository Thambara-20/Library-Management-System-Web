import React from 'react';

import BookCardVertical from '../../Components/BookCardVertical'; 
import { userBarrowedDummy as userBarrowed } from "../../Helpers/UserBarrowedDummy";

const BarrowedBooks = () => {
  
  return (
    <div data-aos='fade-up'>
     
      <div>
          {userBarrowed.map((book) => (
            <BookCardVertical key={book.id} book={book} showReturn={true}/>
          ))}
        </div>
    </div>
  );
};

export default BarrowedBooks;
