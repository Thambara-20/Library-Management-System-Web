import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { findBook } from "../../services/bookService";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const WishlistCard = ({ bookId, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [book, setBook] = useState({});

    useEffect(() => {
        const fetchBookData = async (bookId) => {
            try {
                const data = await findBook(bookId);
                setBook(data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        // Call the fetchBookData function with the current bookId
        fetchBookData(bookId);
    }, [bookId]);



    const handleCancel = async () => {
        // Remove the bookId from the wishlist
        const wishlist = JSON.parse(localStorage.getItem('x-auth-alpha-wishlist')) || [];
        const updatedWishlist = wishlist.filter((id) => id !== bookId);
        localStorage.setItem('x-auth-alpha-wishlist', JSON.stringify(updatedWishlist));
    
        setBook({});
    };

    if (!book.title) {
        return null;
    }


    return (
        <div
            style={{
                display: "flex",
                height: "90%",
                minHeight: '20vh',
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
                        maxHeight="60%"
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


                {isHovered && (
                    <div
                        style={{
                            position: "absolute",
                            right: "1px",
                            bottom: "10px",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <button
                            onClick={handleCancel}
                            style={{
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
                            <style>
                                {`
                          
                            .icondelete:hover {
                              color: darkred !important;
                              background-color: black !important;
                              box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
                            }`}
                            </style>
                        </button>
                    </div>
                )}


            </Card>
        </div>
    );
};

export default WishlistCard;
