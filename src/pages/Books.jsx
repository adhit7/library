import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import BookCardComponent from '../components/BookComponents/BookCardComponent';
import UserContext from '../context/UserContext';

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
    </Container>
  );
};

export default Books;
