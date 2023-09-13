// LibraryPage.js

import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  Switch,
} from "@mui/material";
import "./Library.css";
import BookCard from "../../Components/BookCard";
import SearchIcon from "@mui/icons-material/Search";
import { booksDummy as books } from "../../Helpers/BooksDummy";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const LibraryPage = () => {
  const [checked, setChecked] = useState(true);
  const [switchLabel, setSwitchLabel] = useState("Search by Title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [toggleState, setToggleState] = useState(true);
  const [hoveredBook, setHoveredBook] = useState(null);
  const listOfAuthor = books.map((book) => book.author);
  const Author = [...new Set(listOfAuthor)];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setSwitchLabel("Search by Title");
      setToggleState(true);
    } else {
      setSwitchLabel("Search by Author");
      setToggleState(false);
    }
  };

  const handleReserveClick = (book) => {
    // Handle the reserve action here
    console.log("Book reserved:", book.title);
  };

  const handleWishlistClick = (book) => {
    // Handle the wishlist action here
    console.log("Book added to wishlist:", book.title);
  };

  const renderBooks = toggleState
    ? books
        .filter(
          (book) =>
            book.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            (selectedCategory === "" || book.category === selectedCategory) &&
            (selectedAuthor === "" || book.author === selectedAuthor)
        )
        .map((book) => (
          <Grid
            className="grid-item"
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={book.id}
            style={{
              width: "100%", // Set the width to 100% for full-width
              height: "100%", // Set the height to 100% for full-height
              display: "flex", // Ensure the card container fills the grid item
              flexDirection: "column",
              justifyContent:'space-around' // Stack child elements vertically
            }}
           
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <Link to={`/book/${book.id}`} className="book-card-container">
              <div className="book-card-container">
                <BookCard
                  book={book}
                 
                />
              </div>
            </Link>
          </Grid>
        ))
    : books
        .filter(
          (book) =>
            book.author.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            (selectedCategory === "" || book.category === selectedCategory) &&
            (selectedAuthor === "" || book.author === selectedAuthor)
        )
        .map((book) => (
          <Grid
            className="grid-item"
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={book.id}
            data-aos="fade-up"
            data-aos-offset="100"
            style={{
              width: "100%", // Set the width to 100% for full-width
              height: "100%", // Set the height to 100% for full-height
              display: "flex", // Ensure the card container fills the grid item
              flexDirection: "column", // Stack child elements vertically
            }}
          >
            <Link to={`/book/${book.id}`}>
              <div className="book-card-container">
                <BookCard
                  book={book}
                  onReserveClick={handleReserveClick}
                  onWishlistClick={handleWishlistClick}
                />
              </div>
            </Link>
          </Grid>
        ));

  return (
    <div className="Library-page-wrapper">
      <Header />
      <Container data-aos="fade-up" data-aos-offset="200">
        <div className="library-top">
          <div className="category-dropdown">
            <Select
              className="selecter"
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
              {/* Add more categories as needed */}
            </Select>
          </div>
          <div className="category-dropdown">
            <Select
              className="selecter"
              value={selectedAuthor}
              onChange={handleAuthorChange}
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="">Select Author</MenuItem>
              {Author.map((author) => (
                <MenuItem key={author} value={author}>
                  {author}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="search-bar">
            <TextField
              className="text-field"
              label={switchLabel}
              variant="outlined"
              onChange={handleSearchChange}
            />
          </div>
          <div className="search-button">
            <Button variant="contained" color="grey">
              <SearchIcon style={{ height: "40px" }} />
            </Button>
          </div>
          <div className="switch-button">
            <Switch
              checked={checked}
              onChange={handleSwitchChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>{switchLabel}</span>
          </div>
        </div>
        <div>
          <Grid container spacing={2} data-aos="fade-up" data-aos-offset="200">
            {renderBooks}
          </Grid>
        </div>
      </Container>
      <div className="book-details-section">
        
      </div>
    </div>
  );
};

export default LibraryPage;
