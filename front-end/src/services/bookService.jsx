import axios from 'axios';
import notification from './notificationService'
import { Config } from './config.js';
import authService from './authService';
const apiUrl = Config.Url; 

export async function fetchBookData() {
  try {
    const response = await axios.get(`${apiUrl}/api/books/find`);
    console.log(response.data);
    return response.data; // Assuming the API returns an array of book data
  } catch (error) {
    throw error;
  }
}

export async function deleteBook(bookId) {
  try {
    await axios.delete(`${apiUrl}/api/books/delete/${bookId}`, {
      headers: {
        'x-auth-token': authService.getJwt(), // Include the entire header value as a string
      },
    });
    notification.showSuccess('Book Deleted successfully');
  } catch (error) {
    console.log(error)
    notification.showError('Error deleting book');
    throw error;
  }
}

export async function AddBook(book) {
  try {
    await axios.post(`${apiUrl}/api/books/`, book,{
      headers: {
        'x-auth-token': authService.getJwt(), // Include the entire header value as a string
      },
    });
    notification.showSuccess('Book added successfully');
  } catch (error) {
    notification.showError('Error adding bookDetails');
    throw error;
  }
}

export async function findBook(bookId) {
  try {
    console.log(bookId);
    const response = await axios.get(`${apiUrl}/api/books/findone/${bookId}`);
    return response.data;
  } // Assuming the API returns an array of book data
  catch (error) {
    console.log(error)
    throw error;
  }

}


export async function updateBook(bookId, book) {
  try {
    await axios.put(`${apiUrl}/api/books/update/${bookId}`, book,
    {
      headers: {
        'x-auth-token': authService.getJwt(), // Include the entire header value as a string
      },
    });
    notification.showSuccess('Book Updated successfully');
  } catch (error) {
    notification.showError('Error updating bookDetails');
    throw error;
  }
}


// api.js
export async function fetchdata(ISBN, setBook, adjustTextareaSize, setBookImage) {

  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`);
  const data = await response.json();

  if (data.items && data.items.length > 0) {
    const bookDetails = data.items[0].volumeInfo;
    setBook({
      ISBN: ISBN,
      title: bookDetails.title || '',
      author: bookDetails.authors ? bookDetails.authors.join(', ') : '',
      category: bookDetails.categories ? bookDetails.categories.join(', ') : '',
      language: bookDetails.language || '',
      abstract: bookDetails.description || '',

    });
    adjustTextareaSize();


    // Update the book image and abstract

  } else {
    // Handle case where book details are not found
    notification.showError('Book details not found')
    console.error('Book details not found');
  }

}

export async function fetchallbookdata(ISBN, setBook, setBookImage) {
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
  }
}



export async function fetchImgdata(ISBN, retryCount = 3) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`
    );

    if (!response.ok) {
      if (retryCount > 0 && response.status === 429) {
        // Retry after a delay (e.g., 5 seconds)
        await new Promise(resolve => setTimeout(resolve, 5000));
        return fetchdata(ISBN, retryCount - 1);
      } else {
        throw new Error('Network response was not ok');
      }
    }
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const bookDetails = data.items[0].volumeInfo;

      if (bookDetails.imageLinks && bookDetails.imageLinks.thumbnail) {
        return bookDetails.imageLinks.thumbnail;
      }
      else {
        notification.showError('Book image not found')
      }
    }
  } catch (error) {
    notification.showError('Book details not found')
    console.error('Error fetching book img:', error);
  }
}

export async function getBooksCount() {
  try {
    const response = await axios.get(`${apiUrl}/api/books/count`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
