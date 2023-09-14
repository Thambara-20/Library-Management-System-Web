// BookCard.js

import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "../Styles/BookCard.css"; // Import the CSS file

const BookCard = ({ book }) => {


  return (
    <Card
      className='book-card'
    
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
     
    </Card>
  );
};

export default BookCard;
