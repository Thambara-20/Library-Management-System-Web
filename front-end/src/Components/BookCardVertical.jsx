import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const BookCardVertical = ({ book, showCancellationButton, showIssueButton, showRejectButton }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "900px",
        margin: "0 auto", // Center align the container horizontally
      }}
    >
      <Card
        className="book-card"
        style={{
          marginBottom: "20px",
          width: "100%", // Set a fixed width for the card
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
        <div style={{ flex: 1, marginLeft: "40px" }}>
          <CardContent className="card-content">
            <Typography variant="subtitle1" component="div">
              Book ID : {book.bookID}
            </Typography>
            <Typography variant="subtitle1" component="div">
              ISBN : {book.ISBN}
            </Typography>
            <Typography variant="subtitle1" component="div">
              Title : {book.title}
            </Typography>
          </CardContent>
        </div>
        <div style={{ flex: 1, marginLeft: "30px", marginTop: "15px" }}>
          <CardContent className="card-content">
            <Typography variant="subtitle1" color="text.secondary" >
              Reserved Date : {book.reservedData}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" >
              Borrow Before : {book.borrowBefore}
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
        {showIssueButton && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "40%", // Adjust the left value for spacing
              transform: "translateX(-50%)",
            }}
          >
            <Button variant="contained" style={{ width: "100%" }}>
              Issue
            </Button>
          </div>
        )}
        {showRejectButton && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "70%", // Adjust the left value for spacing
              transform: "translateX(-50%)",
            }}
          >
            <Button variant="contained" style={{ width: "100%" }}>
              Reject
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BookCardVertical;
