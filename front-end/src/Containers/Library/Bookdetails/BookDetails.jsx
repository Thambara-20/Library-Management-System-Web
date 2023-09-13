import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import './BookDetails.css'
import Rating from "react-rating-stars-component"

export async function fetchdata(ISBN, setBook, setBookImage) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`
  );
  const data = await response.json();

  if (data.items && data.items.length > 0) {
    const bookDetails = data.items[0].volumeInfo;
    setBook({
      ISBN: ISBN,
      title: bookDetails.title || "",
      author: bookDetails.authors ? bookDetails.authors.join(", ") : "",
      category: bookDetails.categories
        ? bookDetails.categories.join(", ")
        : "",
      language: bookDetails.language || "",
      abstract: bookDetails.description || "",
      pageCount: bookDetails.pageCount || 0,
      publisher: bookDetails.publisher || "",
      publishedDate: bookDetails.publishedDate || "",
      averageRating: bookDetails.averageRating || 0,
      ratingsCount: bookDetails.ratingsCount || 0,
      imageLinks: bookDetails.imageLinks || {},
      previewLink: bookDetails.previewLink || "",
    });
    setBookImage(bookDetails.imageLinks.thumbnail || null);
    ;
  }
}

const BookDetails = ({ books }) => {
  const bookId = useParams()["bookId"]; // Get the bookId from the URL params
  const [book, setBook] = useState({});
  const [bookImage, setBookImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);



  useEffect(() => {
    // Call fetchdata when the component mounts with the ISBN from the route params
    fetchdata(9781338216660, setBook, setBookImage);
  }, [bookId]);

  if (!book.title) {
    return <div>Loading...</div>;
  }

  const selectedBook = books.find((book) => book.id == bookId);
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: 'start', // Center vertically
    gap: "20px",
    height: '100%'
  };

  return (
    <div className="book-details">
      <Card>
        <CardContent style={containerStyle}>
          <div style={{ flex: '1' }}>

            <img src={selectedBook.img} alt="Book Cover"

              style={{ maxWidth: "430px", height: "auto", boxShadow: '0 4px 6px rgba(0,0,0,0.5' }}
            />
            <Rating
              count={5}
              value={2}
              size={24}
              activeColor="#ffd700"
              edit={false}
              style={{ marginTop: '10px' ,textAlign:'center'}}
            
            />
          </div>
          <div style={{ flex: '2', justifyContent: 'space-between' }}>


            <Typography className='title'variant="h5">{book.title}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Author: {book.author}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Category: {book.category}
            </Typography>
            <Typography variant="body1">{book.abstract}</Typography>
            <p>Page Count: {book.pageCount}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Published Date: {book.publishedDate}</p>
            <p>Ratings Count: {book.ratingsCount}</p>
            <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
              Preview Link
            </a>
            <div style={containerStyle}>
              <Button variant="contained" color="primary">
                Reserve Now
              </Button>
              <Button variant="contained" color="secondary">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetails;


// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Card, CardContent, Typography, Button } from "@mui/material";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const BookDetails = ({ books }) => {

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);
//   const bookId = useParams()["bookId"];

//   const selectedBook = books.find((book) => book.id == bookId);

//   if (!selectedBook) {
//     return <div>Book not found</div>;
//   }

//   const containerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent:'center', // Center vertically
//     gap: "20px", // Add some space between image and text
//   };

//   return (
//     <div className="book-details" data-aos="fade-up">
//       <Card >
//         <CardContent data-aos="fade-up">
//           <div style={containerStyle}>
//             <img
//               src={selectedBook.img}
//               alt="Book Cover"
//               style={{ maxWidth: "450px", height: "auto" , boxShadow:'0 4px 6px rgba(0,0,0,0.5'}} // Adjust image size as needed
//             />
//             <div className="details">
//               <Typography className='typo'variant="h4">{selectedBook.title}</Typography>
//               <Typography className='typo'variant="subtitle1" color="text.secondary">
//                 Author: {selectedBook.author}
//               </Typography>
//               <Typography className='typo'variant="subtitle1" color="text.secondary">
//                 Category: {selectedBook.category}
//               </Typography>
//               <Typography className='typo'variant="body1">{selectedBook.abstract}</Typography>
//               <div style={containerStyle}>
//                 <Button variant="contained" color="primary">
//                   Reserve Now
//                 </Button>
//                 <Button variant="contained" color="secondary">
//                   Add to Wishlist
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default BookDetails;

