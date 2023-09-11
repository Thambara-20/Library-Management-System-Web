import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const NotificationsCard = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "grey",
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
            {!showReturn ? (
              <div>
                <Typography variant="subtitle1" color="text.secondary">
                  Reserved Date: {book.reservedData}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Borrow Before: {book.borrowBefore}
                </Typography>
              </div>
            ) : (
              <div>
                
              <Typography variant="subtitle1" color="text.secondary">
                Barrowed Date: {book.barrowedDate}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Return Before: {book.returnBefore}
              </Typography>
              </div>
            )}

          </CardContent>
        </div>
     
       
      </Card>
    </div>
  );
};

export default NotificationsCard;
