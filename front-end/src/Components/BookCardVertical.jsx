
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { CancelButton } from "./Button";

const BookCardVertical = ({ book, showCancellationButton, showIssueButton, showRejectButton, showReturn=false ,Wishlist=false}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1000px",
        margin: "0 auto", // Center align the container horizontally
      }}
    >
      <Card
        className="book-card"
        style={{
          marginBottom: "20px", 
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",      
          width: "100%", // Set a fixed width for the card
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: '#2c2c2c',
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
        <div style={{ flex: 1, marginLeft: "40px",color:'white'  }}>
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

        <div style={{ flex: 1, marginLeft: "30px", marginTop: "15px",}}>
          {!Wishlist ? (
          <CardContent className="card-content">
            {!showReturn ? (
              <div>
                <Typography variant="subtitle1" color="white">
                  Reserved Date: {book.reservedData}
                </Typography>
                <Typography variant="subtitle1" color="white">
                  Borrow Before: {book.borrowBefore}
                </Typography>
              </div>
            ) : (
              <div>
                
              <Typography variant="subtitle1" color="white">
                Barrowed Date: {book.barrowedDate}
              </Typography>
              <Typography variant="subtitle1" color="white">
                Return Before: {book.returnBefore}
              </Typography>
              </div>
            )}

          </CardContent>) :<div></div>}
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
            <CancelButton variant="contained" >
              Cancel
            </CancelButton>
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
            <Button variant="contained" >
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
            <Button variant="contained" >
              Reject
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BookCardVertical;
