import React, { Component } from "react";
import "../Styles/searchBar.css";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Books"
          aria-label="Search"
          color="grey"
        />
        <div className="button-text-style">
          <button className="btn btn-light" type="submit">
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
