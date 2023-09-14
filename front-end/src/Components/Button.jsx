import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Cancel } from '@mui/icons-material';

export function AddBookButton() {


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




export function CancelButton() {

  return (
    <Link to="" className="link" sx={{ width: '60%', }}>
      <Button
        sx={{
          backgroundColor: 'white',
          color: 'black',

          '&:hover': {
            backgroundColor: 'grey', // Change to the desired hover color
          },
        }}

      >
        Cancel
      </Button>
    </Link>

  );
}

