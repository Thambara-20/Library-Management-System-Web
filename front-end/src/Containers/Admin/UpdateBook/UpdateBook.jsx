import React, { useState, useRef, useEffect } from 'react';
import './UpdateBook.css'; // Update the import path
import bookImg from '../../../assets/admin/books.jpg';
import { useParams } from 'react-router-dom';
import { findBook, updateBook, fetchImgdata } from '../../../services/bookService';
import { BookForm } from '../../../Components/BookForm/BookForm'; // Import the form component
import BookImageContainer from '../../../Components/ImageContainer/ImageContainer'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BookUpdate() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);


  const bookImagePlaceholder = bookImg;
  const bookId = useParams()["bookid"]; // Get the book ID from the URL
  const [bookImage, setBookImage] = useState(bookImagePlaceholder);

  const [book, setBook] = useState({
    bookID: '', // Initial values should be empty strings, not null
    ISBN: '',
    title: '',
    author: '',
    category: '',
    language: '',
    publisher:'',
    abstract: '',
    status: '',
    url:''
  });

  // State to track changes made in the form
  const [formData, setFormData] = useState({
    bookID: '', // Initial values should be empty strings, not null
    ISBN: '',
    title: '',
    author: '',
    category: '',
    language: '',
    publisher:'',
    abstract: '',
    status: '',
 
  });

  const abstractTextareaRef = useRef(null);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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

  useEffect(() => {
    // Fetch book data from the backend API when the component mounts
    const fetchData = async () => {
      try {
        const data = await findBook(bookId);
        setBook(data);
        setFormData(data);
        setBookImage(data.url);
    
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to update the book data
  const updateBookData = async () => {
    try {
      // Update the book data on the backend
      console.log(formData);
      await updateBook(bookId, formData);

      // Clear the form and adjust the textarea size
      setFormData({
        bookID: '', // Reset to empty strings
        ISBN: '',
        title: '',
        author: '',
        category: '',
        language: '',
        publisher:'',
        abstract: '',
        status: '',
        
      });
      adjustTextareaSize();
    } catch (error) {
      console.error('Error updating book data:', error);
    }
  };

  return (
    <div className="book-update" >
      <div className="overlay1" ></div>
      <div className="overlay2" data-aos="fade-right" ></div>
      <Link to="/admin/bookManagement" style={{ top: "10px", left: "10px", position: "fixed", zIndex: "100" }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon style={{ color: 'grey' }} />}
          style={{ backgroundColor: 'black', color: 'white', }}>
          Back
        </Button>
      </Link>
      
      <h1 style={{ color: 'rgba(244, 244, 244, 0.7)' }}>Update Books</h1>

      <div className="content-wrapper" >
        <BookImageContainer 
          bookImage={bookImage}
          bookStatus={book.status}
        // handleStatusChange={}
        />
        <BookForm
          bookId={bookId}
          formData={formData}
          handleInputChange={handleInputChange}
          onSubmit={updateBookData}
          title={"Update Book"}
        />
      </div>
    </div>
  );
}

export default BookUpdate;
