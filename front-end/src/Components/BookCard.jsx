// BookCard.js

import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "../Styles/BookCard.css"; // Import the CSS file

const BookCard = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className={`book-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent className="card-content">
        <CardMedia
          component="img"
          alt="Book Cover"
          height="300"
          image={book.img}
        />
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Author: {book.author}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Category: {book.category}
        </Typography>
      </CardContent>
      <div className="button-container">
        <button className="reserve-button">Reserve</button>
        <button className="wishlist-button">Add to Wishlist</button>
      </div>
    </Card>
  );
};

export default BookCard;
