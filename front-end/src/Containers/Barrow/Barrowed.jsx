import React from 'react';

import BookCardVertical from '../../Components/BookCardVertical'; 
import { userBarrowedDummy as userBarrowed } from "../../Helpers/UserBarrowedDummy";

const BarrowedBooks = () => {
  
  return (
    <div data-aos='fade-up'>
       <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', margin: '15px 0' ,color:'white' }}>Borrowed Books</h1>
      
      <div>
          {userBarrowed.map((book) => (
            <BookCardVertical key={book.id} book={book} showReturn={true}/>
          ))}
        </div>
    </div>
  );
};

export default BarrowedBooks;
