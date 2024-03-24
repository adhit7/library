import React, { useContext } from 'react';
import AuthorCardComponent from '../components/AuthorComponents/AuthorCardComponent';
import { Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';

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
    </Container>
  );
};

export default Authors;
