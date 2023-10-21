import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import './BookCard.css'
import { BsFillBagHeartFill } from 'react-icons/bs';
import { FaBookMedical } from 'react-icons/fa6'
import { Link } from "react-router-dom";



const BookCard = ({ book }) => {
    const bookUrl = `/book/${book.bookid}/`; 
    console.log(bookUrl)


    return (
        <Link to={bookUrl} className="book-card-link" style={{textDecoration:'none'}}>
        <Card className="book-card visible" style={{ marginBottom: "10px", minHeight:560, maxHeight:560,width: 270,
                   }}>
            <CardContent className="card-content" >
                <CardMedia className="image-content"
                    component="img"
                    alt="Book Cover"
                    min-height="210"
                    max-height="210" 
                    image={book.url}// Use the img prop as the image source
                />
                <Typography variant="h6" component="div">
                    {book.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Author: {book.author}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Category: {book.category}
                </Typography>
             
                
            </CardContent>
        </Card>
        </Link>
    );
};

export default BookCard;
