import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { findBook } from "../../services/bookService";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./Wishlist.css"

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
            className="book-card-container"
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
                    backgroundColor: "#0000",
                    padding: "10px",
                   
                    position: "relative",
                    transition: "transform 0.2s ease-in-out",
                }}
            >
                <div className="image-card">
                    <CardMedia
                        component="img"
                        alt="Book Cover"
                        maxHeight="60%"
                        image={book.url}
                        style={{ maxWidth: "100%" }}
                    />
                </div>
                <div className="rest" >
                    <CardContent className="card-content" style={{color:'white'}}>
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
                    <div className="delete-button">
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

export default WishlistCard;
