import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const BookCardVertical = ({ book, showCancellationButton }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "700px",
        margin: "0 auto", // Center align the container horizontally
      }}
    >
      <Card
        className="book-card"
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F4F4F4",
          padding: "10px",
          position: "relative",
        }}
      >
        <div style={{ flex: 0.5 }}>
          <CardMedia
            component="img"
            alt="Book Cover"
            height="100%"
            image={book.img}
            style={{ maxWidth: "100%" }} // Ensure the image doesn't exceed card width
          />
        </div>
        <div style={{ flex: 1, marginLeft: "50px" }}>
          <CardContent className="card-content">
            <Typography variant="subtitle1" component="div">
              Book ID: {book.bookID}
            </Typography>
            <Typography variant="subtitle1" component="div">
              ISBN: {book.ISBN}
            </Typography>
            <Typography variant="subtitle1" component="div">
              Title: {book.title}
            </Typography>
          </CardContent>
        </div>
        <div style={{ flex: 1, marginLeft: "10px", marginTop: "15px" }}>
          <CardContent className="card-content">
            <Typography variant="subtitle1" color="text.secondary">
              Reserved Date: {book.reservedData}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Borrow Before: {book.borrowBefore}
            </Typography>
          </CardContent>
        </div>
        {showCancellationButton && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button variant="contained" >
              Cancel
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BookCardVertical;
