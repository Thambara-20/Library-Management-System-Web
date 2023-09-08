import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BookCard = ({ book }) => {
  return (
    <Card className="book-card" style={{ marginBottom: "10px", display: "flex" }}>
      <div style={{ flex: 1 }}>
        <CardMedia
          component="img"
          alt="Book Cover"
          height="200"
          image={book.img} // Use the img prop as the image source
        />
      </div>
      <div style={{ flex: 1 }}>
        <CardContent className="card-content">
          <Typography variant="h6" component="div">
            {book.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Author: {book.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Category: {book.category}
          </Typography>
          {/* Add more book details as needed */}
        </CardContent>
      </div>
    </Card>
  );
};

export default BookCard;
