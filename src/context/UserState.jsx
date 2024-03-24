import React, { useReducer } from 'react';
import UserContext from './UserContext';
import userReducer from './userReducer';
import { toast } from 'react-toastify';
import bookMockData from '../bookMockData';
import authorMockData from '../authorMockData';

const UserState = (props) => {
  const initialState = {
    bookData: bookMockData, //Book Data
    authorData: authorMockData, //Author Data
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const { bookData, authorData } = state;

  //Success Toast
  const successToast = (msg) => {
    toast.success(msg, {
      position: 'top-right',
    });
  };

  //Add Book
  const addBookData = async (bookDetails) => {
    dispatch({
      type: 'ADD_BOOK_DATA',
      payload: [...bookData, bookDetails],
    });

    successToast('Successfully created!');
  };

  //Update Book Data
  const updateBookData = async (id, bookDetail) => {
    const bookDetails = bookData.map((item) =>
      item?.id === id ? { id, ...bookDetail } : item
    );

    dispatch({
      type: 'UPDATE_BOOK_DATA',
      payload: bookDetails,
    });

    successToast('Successfully updated!');
  };

  //Delete Book Data
  const deleteBookData = async (id) => {
    const updateBookData = bookData.filter((item) => item?.id !== id);

    dispatch({
      type: 'DELETE_BOOK_DATA',
      payload: updateBookData,
    });

    successToast('Successfully deleted!');
  };

  //Add Author
  const addAuthorData = async (authorDetails) => {
    dispatch({
      type: 'ADD_AUTHOR_DATA',
      payload: [...authorData, authorDetails],
    });

    successToast('Successfully created!');
  };

  //Update Author Data
  const updateAuthorData = async (id, authorDetail) => {
    const authorDetails = authorData.map((item) =>
      item?.id === id ? { id, ...authorDetail } : item
    );

    dispatch({
      type: 'UPDATE_AUTHOR_DATA',
      payload: authorDetails,
    });

    successToast('Successfully updated!');
  };

  //Delete Author Data
  const deleteAuthorData = async (id) => {
    const updateAuthorData = authorData.filter((item) => item?.id !== id);

    dispatch({
      type: 'DELETE_AUTHOR_DATA',
      payload: updateAuthorData,
    });

    successToast('Successfully deleted!');
  };

  return (
    <UserContext.Provider
      value={{
        bookData: bookData,
        addBookData,
        updateBookData,
        deleteBookData,

        authorData: authorData,
        addAuthorData,
        updateAuthorData,
        deleteAuthorData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
