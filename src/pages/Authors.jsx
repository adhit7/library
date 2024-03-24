import React, { useContext } from 'react';
import AuthorCardComponent from '../components/AuthorComponents/AuthorCardComponent';
import { Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';

const Authors = () => {
  const userContext = useContext(UserContext);
  const { authorData, deleteAuthorData } = userContext;
  return (
    <Container className='mt-5'>
      <div className='row mb-5'>
        {authorData.map((author) => (
          // Author Card Component
          <AuthorCardComponent
            key={author?.id}
            author={author}
            deleteAuthorData={deleteAuthorData}
          />
        ))}
      </div>
      <div className='position-sticky bottom-0 d-flex justify-content-end'>
        <Link to='/add/author'>
          <i
            className='fa-solid fa-circle-plus fa-4x m-3'
            style={{ cursor: 'pointer' }}
          ></i>
        </Link>
      </div>
    </Container>
  );
};

export default Authors;
