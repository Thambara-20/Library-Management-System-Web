import React from 'react';

import BookCardVertical from '../../Components/BookCardVertical'; 
import { userReservedDummy as userReserved } from "../../Helpers/UserReservedDummy";

const WishList = () => {
  
  return (
    <div data-aos='fade-up'>
       <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', margin: '15px 0',color:'white',minWidth:'1000px' }}>My Wishlist</h1>
      
      <div>
          {userReserved.map((book) => (
            <BookCardVertical key={book.id} book={book} Wishlist={true}/>
          ))}
        </div>
    </div>
  );
};

export default WishList;
