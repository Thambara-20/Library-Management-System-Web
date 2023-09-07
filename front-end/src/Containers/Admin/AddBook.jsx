import React, { useState, useRef ,useEffect } from 'react';
import '../../Styles/AddBook.css';
import bookImg from '../../assets/admin/books.png';
import { AddBook, fetchImgdata, fetchdata } from '../../services/bookService';
import { Button } from '@mui/material';
import {  Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BookForm } from '../../Components/BookForm'; // Import the form component
import  BookImageContainer from '../../Components/ImageContainer'
import AOS from 'aos';
import 'aos/dist/aos.css';
// Set an initial placeholder image URL
const bookImagePlaceholder = bookImg;

function BookAdd() {

  useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

  const [book, setBook] = useState({
    ISBN: '',
    title: '',
    author: '',
    category: '',
    language: '',
    abstract: 'none',
    noOfCopies: 1,
  });

  const [bookImage, setBookImage] = useState(bookImagePlaceholder); // Initialize with the placeholder URL
  const abstractTextareaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
    adjustTextareaSize();
  };

  const adjustTextareaSize = () => {
    if (abstractTextareaRef.current) {
      abstractTextareaRef.current.style.height = 'auto';
      abstractTextareaRef.current.style.height =
        abstractTextareaRef.current.scrollHeight + 'px';
    }
  };

  const fetchBookDetails = async (isbn) => {
   
    try {
      console.log(isbn);
     
      await fetchdata(isbn,setBook,adjustTextareaSize);
      const img = await fetchImgdata(isbn);
      (img)? setBookImage(img):setBookImage(bookImagePlaceholder)  ;


    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const handleFetchDetails = () => {
    fetchBookDetails(book.ISBN);
    
   
  };

  const handleAddBook = async () => {
    // e.preventDefault();
    console.log('Adding book:', book.ISBN);
   
    try {
      await AddBook(book);
    }
    catch (error) {
      console.error('Error adding book:', error);
    }
    setBook({
      ISBN: '',
      title: '',
      author: '',
      category: '',
      language: '',
      abstract: 'none',
      noOfCopies: 1,
    });
    setBookImage(bookImagePlaceholder);
    adjustTextareaSize();
  };

  return (

    <div className="book-add"  >
    <div className="overlay1"  ></div>
    <div className="overlay2" data-aos="fade-right" ></div>

      <Link to="/admin/bookManagement" style={{top:"10px",left:"10px",position:"fixed",zIndex:"100"}}>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon style={{ color: 'grey' }} />}
        style={{backgroundColor: 'black',color: 'white',}}>
        Back
      </Button>
    </Link>
   
    <h1>Add Books</h1>
    
    <div className="content-wrapper" data-aos="fade-right">
      <BookImageContainer 
        bookImage={bookImage} 
        Adding={true}/>
      <BookForm 
        formData={book}
        handleInputChange={handleInputChange}
        onSubmit={ handleAddBook }
        handleFetchDetails={handleFetchDetails}
        ISBN={true}
        title = "Add Book"
        setBook={setBook}
      />
    </div>
  </div>








    // <div className="book-add">
    
    //   <h1>Add a Book</h1>
    //   <div className="content-wrapper">
    //     <div className="image-container">
    //       <img src={bookImage} alt="Book" />
    //     </div>
    //     <form onSubmit={handleAddBook}>
    //       <div className="input-container">
    //         <label htmlFor="ISBN">ISBN:</label>
    //         <input
    //           type="text"
    //           id="ISBN"
    //           name="ISBN"
    //           value={book.ISBN}
    //           onChange={handleInputChange}
    //           required
    //         />
    //       </div>
    //       <button className="btn-fetch" onClick={handleFetchDetails}>
    //         Fetch
    //       </button>
    //       <div className="input-container">
    //         <label htmlFor="title">Title:</label>
    //         <input
    //           type="text"
    //           id="title"
    //           name="title"
    //           value={book.title}
    //           onChange={handleInputChange}
    //           required
    //         />
    //       </div>
    //       <div className="input-container">
    //         <label htmlFor="author">Author:</label>
    //         <input
    //           type="text"
    //           id="author"
    //           name="author"
    //           value={book.author}
    //           onChange={handleInputChange}
    //           required
    //         />
    //       </div>
    //       <div className="input-container">
    //         <label htmlFor="category">Category:</label>
    //         <input
    //           type="text"
    //           id="category"
    //           name="category"
    //           value={book.category}
    //           onChange={handleInputChange}
    //           required
    //         />
    //       </div>
    //       <div className="input-container">
    //         <label htmlFor="language">Language:</label>
    //         <input
    //           type="text"
    //           id="language"
    //           name="language"
    //           value={book.language}
    //           onChange={handleInputChange}
    //           required
    //         />
    //       </div>
    //       <div className="input-container">
    //         <label htmlFor="abstract">Abstract:</label>
    //         <textarea
    //           id="abstract"
    //           name="abstract"
    //           value={book.abstract}
    //           onChange={handleInputChange}
    //           ref={abstractTextareaRef}
    //           required
    //         />
    //       </div>
    //       <div className="input-container">
    //         <label htmlFor="noOfCopies">Number Of Copies:</label>
    //         <input
    //           type="number"
    //           id="noOfCopies"
    //           name="noOfCopies"
    //           value={book.noOfCopies}
    //           onChange={handleInputChange}
    //           required
    //         />
    //       </div>
    //       <button type="submit" className="add-button">
    //         Add Book
    //       </button>
    //     </form>
    //   </div>
    // </div>
    // </>


  );
}

export default BookAdd;
