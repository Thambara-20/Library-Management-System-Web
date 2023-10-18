import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { CancelButton } from "./Button";

const BookCardVertical = ({ book, showCancellationButton = false, showIssueButton = false, showRejectButton = false, showReturn = false, Wishlist = false, setid =null, Cancel=null, id,item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const formatedDate =(date)=>{
    if (date){
    const createdAtDate = new Date(date);
    const formattedDate = createdAtDate.toLocaleDateString();
    return formattedDate;
  }}

  const handleCancel = async () => {
    setid(id);
    Cancel();
  }


  return (
    <div
      style={{
        display: "flex",
        height: "90%",
        minHeight:'70vh',
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "900px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className="book-card"
        sx={{
          marginBottom: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          width: "100%",
          display: "flex",
        
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#6666",
          padding: "10px",
          position: "relative",
          transition: "transform 0.2s ease-in-out",
          ":hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <div style={{ flex: 0.2, width: "400px" }}>
          <CardMedia
            component="img"
            alt="Book Cover"
            height="100%"
            image={book.url}
            style={{ maxWidth: "100%" }} // Ensure the image doesn't exceed card width
          />
        </div>
        <div style={{ flex: 0.8, marginLeft: "40px", color: "white" }}>
          <CardContent className="card-content">
            <Typography variant="subtitle1" component="div">
              Book ID : {book.bookid}
            </Typography>
            <Typography variant="subtitle1" component="div">
              ISBN : {book.ISBN}
            </Typography>
            <Typography variant="subtitle1" component="div">
              Title : {book.title}
            </Typography>
          </CardContent>
        </div>

        <div style={{ flex: 0.5, marginLeft: "30px", marginTop: "15px" }}>
          {!Wishlist ? (
            <CardContent className="card-content">
              {showReturn ? (
                <div>
                  <Typography variant="subtitle1" color="white">
                    Reserved Date: {formatedDate(book.createdAt)} 
                  </Typography> 
                  <Typography variant="subtitle1" color="white">
                    Borrow Before: {book.borrowBefore}
                  </Typography>
                </div>
              ) : (
                <div>
                  <Typography variant="subtitle1" color="white">
                    Borrowed Date: {formatedDate(item.createdAt)}
                  </Typography>
                  <Typography variant="subtitle1" color="white">
                    Return Before: {formatedDate(item.return_date)}
                  </Typography>
                </div>
              )}
            </CardContent>
          ) : (
            <CardContent className="card-content">
              <div>
                  
                  <Typography variant="subtitle1" color="white">
                     Wait until: {formatedDate(item.return_date)}
                  </Typography>
                </div>
            </CardContent>
          )}
        </div>
        {showCancellationButton && isHovered && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              onClick={() => { handleCancel()}}
              sx={{
                backgroundColor: 'white',
                color: 'black',

                '&:hover': {
                  backgroundColor: 'grey', // Change to the desired hover color
                },
              }}
            >
              Cancel
            </Button>
          </div>
        )}
      
      
      </Card>
    </div>
  );
};

export default BookCardVertical;
