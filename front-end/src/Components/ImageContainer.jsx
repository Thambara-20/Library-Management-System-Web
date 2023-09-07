import React from 'react';
import "../Styles/ImageContainer.css"
import 'aos/dist/aos.css';


const BookImageContainer = ({ bookImage, bookStatus, handleStatusChange,Adding=false }) => {

  return (
    <div className="image-container">
      <img className="image" src={bookImage} alt="Book" data-aos="fade-up"/>

      {!Adding?(<div className="status-wrapper">
        <label style={{ color: 'white', position: 'relative' }}>
          Status : {bookStatus ? 'Available' : 'Not Available'}
        </label>
        <div className="status" >
          <button
            className={`status-button ${bookStatus ? 'positive' : 'negative'}`}
            onClick={handleStatusChange}
          >
            {!bookStatus ? 'Make it Available' : 'Make it Unavailable'}
          </button>
        </div>
      </div>):(<></>)}
    </div>
  );
}

export default BookImageContainer;
