import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import './BookDetails.css'
import Rating from "react-rating-stars-component"
import { fetchallbookdata } from "../../../services/bookService";
import LoadingIcon from "../../../Components/LoadingIcon";
import ReadPage from "./ReadPage";


const fetchdata = async (isbn,setBook, setBookImage) => {
   
  try {
    await fetchallbookdata(isbn,setBook,setBookImage);
 
  } catch (error) {
    console.error('Error fetching book details:', error);
  }
};
 
const BookDetails = ({ books }) => {
  const bookId = useParams()["bookId"];
  const [book, setBook] = useState({});
  const [bookImage, setBookImage] = useState(null);
  const [showPages, setShowPages] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    // Replace the ISBN with your desired ISBN, or fetch it from your data
    fetchdata(9781338216660, setBook, setBookImage);
  }, [bookId]);

  const selectedBook = books.find((book) => book.id == bookId);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: 'start',
    gap: "20px",
    height: '100%',
    background: 'linear-gradient(50deg, black 0%, rgb(117, 112, 112)45%,black 0%,rgb(97, 94, 94) 90%)',
    transform: showPages ? 'translateX(-100%)' : 'translateX(0)', // Slide out the right part
  };

  const contentStyle = {
    flex: '1',
    transition: 'transform 0.5s ease-in-out',
  };

  if (!book.title) {
  return (
    <LoadingIcon/>

  );
    }
  return (
    <div className="book-wrapper">
      <div className="book-details">
        <Card>
          <CardContent style={containerStyle} data-aos='fade-up'>
            <div style={contentStyle}>
              <img src={selectedBook.img} alt="Book Cover" className="image-book" data-aos='fade-up' />
              <Rating count={5} value={2} size={24} activeColor="#ffd700" edit={false}
                style={{ marginTop: '10px', textAlign: 'center' }}
              />
            </div>
                <div className="blurred-background"></div>
            <div className='right' data-aos='fade-up'>
              <div className="right-data">
                <h2>Book Details</h2>
                <Typography className='title' variant="h5">{book.title}</Typography>
                <Typography className='author'>Author: {book.author}</Typography>
                <Typography className='category'>Category: {book.category}</Typography>
                <Typography variant="body1" className='abs'>{book.abstract}</Typography>
                <p>Page Count: {book.pageCount}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Published Date: {book.publishedDate}</p>
                <p>Ratings Count: {book.ratingsCount}</p>
                <a href={book.previewLink} target="_blank" rel="noopener noreferrer">Preview Link</a>
              </div>
              <div className="buttons">
                <Button className='reserve-btn'variant="contained" color="primary">
                  Reserve Now
                </Button>
                <Button className='wishlist-btn'variant="contained" color="secondary">
                  Add to Wishlist
                </Button>
              </div>
            </div>
          <ReadPage/>
          </CardContent>
        </Card>
          <div className='read-btn-wrapper'>
            <Button className='read'variant="contained"  onClick={() => setShowPages(!showPages)}>
              Read few pages {showPages ? '<' : '>'}
            </Button>
          </div>
     
      </div>
    </div>
  );
};

export default BookDetails;


