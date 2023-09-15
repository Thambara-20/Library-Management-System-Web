import React from 'react';
import "./BookForm.css"
import 'aos/dist/aos.css';

function BookForm({ bookId, formData, handleInputChange, onSubmit, ISBN = false, handleFetchDetails, title }) {
  const inputFields = [
    { name: 'bookID', label: 'Book ID', value: bookId, disabled: !ISBN },
    { name: 'ISBN', label: 'ISBN', value: formData.ISBN },
    { name: 'button' },
    { name: 'title', label: 'Title', value: formData.title },
    { name: 'author', label: 'Author', value: formData.author },
    { name: 'category', label: 'Category', value: formData.category },
    { name: 'language', label: 'Language', value: formData.language },
    { name: 'abstract', label: 'Abstract', value: formData.abstract },
  ];

  return (
    <form className="form" data-aos="fade-up">
      {inputFields.map((field) => (
        <div className="input-container" key={field.name}>
          {(((field.name !== 'bookID' && ISBN) || !ISBN) && field.name !== 'button') && (
            <label>{field.label}:</label>
          )}
          {(((field.name !== 'bookID' && ISBN) || !ISBN) && field.name !== 'button') ? (
            (field.name === 'abstract') ? (
              <textarea
                name={field.name}
                value={field.value}
                onChange={handleInputChange}
                required= {true}
              />
            ) : (
              <input
                type="text"
                name={field.name}
                value={field.value}
                onChange={handleInputChange}
                required={true}
              />
            )
          ) : (
            (field.name === 'button' && ISBN) && (
              <button className="btn-fetch" type='button' onClick={handleFetchDetails}>
                Fetch
              </button>
            )
          )}
        </div>
      ))}
      <button className="button-s" type='button' onClick={onSubmit}>
        {title}
      </button>

    </form>
  );
}

export { BookForm };

