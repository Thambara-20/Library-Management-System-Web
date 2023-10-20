import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { CancelButton } from "./Button";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./BookCardVertical.css";

const BookCardVertical = ({ book, showCancellationButton = false, showIssueButton = false, showRejectButton = false, showReturn = false, Wishlist = false, setid = null, Cancel = null, id, item }) => {
    const [isHovered, setIsHovered] = useState(false);

    function addDays(date, days) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + days);
        return newDate.toLocaleDateString();
    }
    const formatedDate = (date) => {
        if (date) {
            const createdAtDate = new Date(date);
            const formattedDate = createdAtDate.toLocaleDateString();
            return formattedDate;
        }
    }

    const handleCancel = async () => {
        setid(id);
        Cancel();
    }

    return (
        <div
            className="book-card-container"
            style={{display: 'flex', justifyContent: 'center'}}
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
                }}
            >
                <div style={{ flex: 0.2, maxwidth: "400px" }} className="image-card">
                    <CardMedia
                        component="img"
                        alt="Book Cover"
                        height="100%"
                        image={book.url}
                        style={{ maxWidth: "100%" }}
                    />
                </div>
                <div style={{ flex: 0.8, marginLeft: "40px", color: "white" }} className="rest">
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

                <div style={{ flex: 0.5, marginLeft: "30px", marginTop: "15px" }} className="card-content-wrapper">
                    {!Wishlist ? (
                        <CardContent className="card-content">
                            {showReturn ? (
                                <div>
                                    <Typography variant="subtitle1" color="white">
                                        Reserved Date: {formatedDate(book.createdAt)}
                                    </Typography>
                                    <Typography variant="subtitle1" color="white">
                                        Borrow Before: {formatedDate(addDays(book.createdAt, 3))}
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
                        className="delete-button"
                    >
                        <button
                            onClick={handleCancel}
                            style={{
                              position:'absolute',
                              right:'0',
                              bottom:'0',
                              fontSize: 16,
                              background: 'transparent',
                              padding: '5px',
                              border: 'none',
                              cursor: 'pointer',
                              borderRadius: '5px',
                              minWidth: '1px',
                              transition: 'transform 0.2s, color 0.2s',
                          }}
                        >
                            <DeleteForeverIcon className="icondelete" style={{ fontSize: 55, color: 'grey', borderRadius: '10px' }} />
                        </button>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default BookCardVertical;
