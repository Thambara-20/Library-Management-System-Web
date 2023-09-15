import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import './BookCard.css'
import { BsFillBagHeartFill } from 'react-icons/bs';
import { FaBookMedical } from 'react-icons/fa6'
import { Link } from "react-router-dom";



const BookCard = ({ book }) => {
    const bookUrl = `/book/${book.id}/`; 
    console.log(bookUrl)


    return (
        <Link to={bookUrl} className="book-card-link">
        <Card className="book-card visible" style={{ marginBottom: "10px" }}>
            <CardContent className="card-content">
                <CardMedia className="image-content"
                    component="img"
                    alt="Book Cover"
                    height="200"
                    image={book.img}// Use the img prop as the image source
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
                <div className="whish-list">
                    <div className="wish">
                        <BsFillBagHeartFill className="icon" style={{color:'#a34127'}} size={45}/>
                    </div>
                    <div className="reserve">
                        <FaBookMedical className="icon" style={{color:'#503299'}} size={45}/>
                    </div>
                </div>
                
            </CardContent>
        </Card>
        </Link>
    );
};

export default BookCard;