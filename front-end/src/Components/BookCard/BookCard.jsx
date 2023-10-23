import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import './BookCard.css'
import { BsFillBagHeartFill } from 'react-icons/bs';
import { FaBookMedical } from 'react-icons/fa6'
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const bookUrl = `/book/${book.bookid}/`;

    return (
        <Link to={bookUrl} className="book-card-link" style={{ textDecoration: 'none' }}>
            <Card className="book-card" style={{
                borderRadius: '8px',
                marginBottom: "10px",
                minHeight: 560,
                maxHeight: 560,
                width: 270,
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
            }}>
                <CardContent className="card-content" style={{ padding: '16px', borderRadius: '8px' }}>
                    <CardMedia className="image-content"
                        component="img"
                        alt="Book Cover"
                        style={{ height: '350px' }}
                        image={book.url} // Use the img prop as the image source
                    />
                    <Typography variant="h6" component="div" style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '10px' }}>
                        {book.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" style={{ color: 'blue' }}>
                        Author: {book.author}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" style={{ fontWeight: 'bold' }}>
                        Category: {book.category}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default BookCard;
