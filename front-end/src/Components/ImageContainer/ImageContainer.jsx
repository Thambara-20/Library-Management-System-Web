import React, { useState } from 'react';
import "./ImageContainer.css"
import 'aos/dist/aos.css';
import { Button } from '@mui/material';


const BookImageContainer = ({  bookStatus, handleStatusChange, setBookUrl ,bookUrl}) => {

  const [inputUrl, setInputUrl] = useState('');

  const handleInputChange = (event) => {
    setInputUrl(event.target.value);
    
  };
  const handleClick = () => {
    setBookUrl(inputUrl);
    console.log(bookUrl);

  }

  return (
    <div className="form-image-container">
      <img className="image" src={bookUrl}  data-aos="fade-up" />

    
      <div>
        <input
          style={{ width: '80%',margin:'30px' }}
          type="text"
          placeholder="Enter Book URL"
          value={inputUrl}
          onChange={handleInputChange}
        />
        <Button onClick={handleClick}>Set Book URL</Button>
      </div>
    </div>
  );
}

export default BookImageContainer;
