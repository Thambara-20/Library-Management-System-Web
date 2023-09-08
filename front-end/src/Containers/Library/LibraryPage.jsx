import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import "../../Styles/Library.css";
import BookCard from "../../Components/BookCard";
import NavbarComponent from "../../Components/NavbarComponent";
import SearchIcon from "@mui/icons-material/Search";
import { booksDummy as books } from "../../Helpers/BooksDummy";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header/Header";

const LibraryPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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

  return (
    <div className="Library-page-wrapper">
      <Header/>
      <Container data-aos="fade-up" data-aos-offset="200">
        <div className="library-top">
          <div className="category-dropdown">
            <Select className="selecter"
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
          <div className="search-bar">
            <TextField className="text-field"
              label="Search by Keyword"
              variant="outlined"
              onChange={handleSearchChange}
            />
          </div>
          <div className="search-button">
            <Button variant="contained" color="grey">
              <SearchIcon style={{ height: "40px" }} />
            </Button>
          </div>
        </div>
        <div>
          <Grid container spacing={2} data-aos="fade-up" data-aos-offset="200">
            {books
              .filter(
                (book) =>
                  book.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
                  (selectedCategory === "" || book.category === selectedCategory)
              )
              .map((book) => (
                <Grid className="grid-item" item xs={12} sm={6} md={4} lg={3} key={book.id} data-aos="fade-up" data-aos-offset="200">
                  <BookCard book={book} className="grid-card"/>
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default LibraryPage;