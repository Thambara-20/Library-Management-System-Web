import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import './BookDetails.css'
import Rating from "react-rating-stars-component"
import { findBook } from "../../../services/bookService";
import LoadingIcon from "../../../Components/LoadingIcon";
import ReadPage from "./ReadPage";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookIcon from '@mui/icons-material/Book';
import DefaultComponent from "../Forum";
import SignInPage from "../../SignInPage/SignInPage";
import reserve from "../../../services/reservationService";


const BookDetails = ({ }) => {

  const bookId = useParams()["bookId"];
  const [book, setBook] = useState({});
  const [showPages, setShowPages] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [isBookInWishlist, setIsBookInWishlist] = useState(false);


  const openSignUpPopup = () => {
    setShowSignUpPopup(true);
  };

  const closeSignUpPopup = () => {
    setShowSignUpPopup(false);
  };

  const handlereserve = async () => {
    const isConfirmed = window.confirm('Are you sure you want to reserve this book?');
    if (isConfirmed) {
      try {

        await reserve(bookId);
        fetchdata(bookId);
      } catch (error) {
        console.log(error)
        if (error.response && error.response.status === 401) {
          openSignUpPopup();
        } else {
          console.error("An error occurred:",);
        }
      }
    }
  };

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('x-auth-alpha-wishlist')) || [];
  
    if (wishlist.includes(bookId)) {
      const updatedWishlist = wishlist.filter((item) => item !== bookId);
      localStorage.setItem('x-auth-alpha-wishlist', JSON.stringify(updatedWishlist));
      setIsBookInWishlist(false);
    } else {
      wishlist.push(bookId);
      localStorage.setItem('x-auth-alpha-wishlist', JSON.stringify(wishlist));
      setIsBookInWishlist(true);
    }
  };



  const fetchdata = async (bookId) => {

    try {
      const data = await findBook(bookId);
      setBook(data);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    fetchdata(bookId);
    localStorage.getItem('x-auth-alpha-wishlist') && setIsBookInWishlist(JSON.parse(localStorage.getItem('x-auth-alpha-wishlist')).includes(bookId));

  }, [book.status]);


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
      <LoadingIcon />

    );
  }

  return (
    <div className="book-wrapper-main" style={{borderRadius:0}} >
      {showSignUpPopup && (
        <SignInPage onClose={closeSignUpPopup} onSuucessClose={closeSignUpPopup} />
      )}
      <div className="book-details-main">
        <Card>
          <CardContent style={containerStyle} data-aos='fade-up' className="cardcontent">
            <div style={contentStyle} className="image-wrapper">
              <img src={book.url} alt="Book Cover" className="image-book" data-aos='fade-up' />
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
                <Button className='reserve-btn' variant="contained" color="primary" onClick={handlereserve} disabled={!book.status}>
                  <FavoriteBorderIcon />
                  Reserve Now
                </Button>
                <Button
                  className='wishlist-btn'
                  variant="contained"
                  color="secondary"
                  background="red"
                  onClick={toggleWishlist}
                >
                  <BookIcon />
                  {isBookInWishlist ? "Unwishlist" : "Add to Wishlist"}
                </Button>
              </div>
            </div>
            <ReadPage pageData={book.abstract} bookTitle={book.title}/>
          </CardContent>
        </Card>
        <div className='read-btn-wrapper'>
          <Button className='read' variant="contained" onClick={() => setShowPages(!showPages)}  >
            Read few pages {showPages ? '<' : '>'}
          </Button>
        </div>
        <DefaultComponent key={book.bookid} title={book.title} />

      </div>
    </div>
  );
};

export default BookDetails;


