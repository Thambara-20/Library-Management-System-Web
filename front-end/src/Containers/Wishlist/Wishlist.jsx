import React, { useEffect, useState } from 'react';
import WishlistCard from './WishlistCard';

const WishList = () => {
  const [userWishlisted, setUserWishlisted] = useState([]);

  useEffect(() => {
    const userWishlistedData = JSON.parse(localStorage.getItem('x-auth-alpha-wishlist')) || [];
    setUserWishlisted(userWishlistedData);
  }, []);

  return (
    <div data-aos='fade-up'>
      <div>
        {userWishlisted.map((bookId, index) => (
          <WishlistCard key={index} bookId={bookId} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
