import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import BookCardComponent from '../components/BookComponents/BookCardComponent';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';

const Books = () => {
  const userContext = useContext(UserContext);

  const { bookData, deleteBookData } = userContext;

  return (
    <Container className='mt-5'>
      <div className='row mb-5'>
        {bookData.map((book, index) => (
          // Book Card Template Component
          <BookCardComponent
            key={index}
            book={book}
            deleteBookData={deleteBookData}
          />
        ))}
      </div>
      <div className='position-sticky bottom-0 d-flex justify-content-end'>
        <Link to='/add/book'>
          <i
            className='fa-solid fa-circle-plus fa-4x m-3'
            style={{ cursor: 'pointer' }}
          ></i>
        </Link>
      </div>
    </Container>
  );
};

export default Books;
