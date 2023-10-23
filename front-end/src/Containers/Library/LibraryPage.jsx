import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import "./Library.css";
import BookCard from "../../Components/BookCard/BookCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { fetchBookData } from "../../services/bookService";

const LibraryPage = () => {
  // Handle searching filters by hook
  const [switchLabel, setSwitchLabel] = useState("Search by Title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true); // State for filtering by availability
  const listOfAuthor = [...new Set(books.map((book) => book.author))];
  const Author = listOfAuthor;

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

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setSwitchLabel("Search");
    } else {
      setSwitchLabel(event.target.value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBookData();
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    fetchData();
  }, [search]);

  const categories = [...new Set(books.map((book) => book.category))];

  const isbnCount = {};
  const booksWithCount = [];

  books.forEach((book) => {
    if (!isbnCount[book.ISBN]) {
      isbnCount[book.ISBN] = 1;
      booksWithCount.push({ ...book, count: 1 });
    } else {
      isbnCount[book.ISBN]++;
    }
  });

  const renderBooks = booksWithCount.filter((book) =>
    book.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
    (selectedCategory === "" || book.category === selectedCategory) &&
    (selectedAuthor === "" || book.author === selectedAuthor) &&
    (showAvailable ? book.status : true)
  )
    .map((book) => (
      <Grid
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , }}
        className="grid-item"
        item
        xs={6}
        sm={5}
        md={6}
        lg={3}
        key={book.id}
        data-aos-offset="100"
      >
        <BookCard book={book} className="grid-card-book" data-aos="fade-up" data-aos-offset="200" />
      </Grid>
    ));

  return (
    <div className="Library-page-wrapper"  >
      <Header />

      <Container style={{ display: 'flex', minWidth: '100%', paddingTop: '10px', backgroundColor: 'black' }}>
        <div className="library-container">
          <div className="library-sidebar" data-aos-offset="200" data-aos="fade-left">
            <div className="category-dropdown">
              <Select
                className="selecter-item"
                value={selectedCategory}
                onChange={handleCategoryChange}
                displayEmpty
              >
                <MenuItem value="">Category</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className="category-dropdown">
              <Select
                className="selecter-item"
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

            <div className="category-dropdown">
              <Select
                className="selecter-item"
                value={search}
                onChange={handleSearch}
                variant="outlined"
                displayEmpty
              >
                <MenuItem value="">Select By Title</MenuItem>
                <MenuItem value="">Search by Author</MenuItem>
                {/* Add more categories as needed */}
              </Select>
            </div>

            <div className="serach-con">
              <div className="search-bar" style={{backgroundColor:'white'}}>
                <TextField
                  className="text-field"
                  label={switchLabel}
                  variant="outlined"
                  style={{color:'white'}}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="availability-toggle" style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center'}}>
              <label style={{ display: 'flex', alignItems: 'center',justifyContent:'center', width: '100%', fontSize: 18, fontWeight: 500, color: 'white', textAlign:'center'}}>
                Show Available Books
                <input
                  type="checkbox"
                  style={{ marginLeft: "5px", width: '20px', height: '20px', marginBottom: '0px', }}
                  checked={showAvailable}
                  onChange={() => setShowAvailable(!showAvailable)}
                />
              </label>

            </div>
          </div>
          <div className="library-books" data-aos="fade-left">
            <Grid container spacing={2} >
              {renderBooks}
            </Grid>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default LibraryPage;