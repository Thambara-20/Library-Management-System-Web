import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function AddBookButton() {


  return (
    <Link to="/admin/bookManagement/addbook" className="link"   >
      <Button
         sx={{ backgroundColor: 'black' }}
        data-aos="fade-up"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add a book
      </Button>
    </Link>
  );
}

export default AddBookButton;
