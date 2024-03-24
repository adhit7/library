import React, { useContext, useEffect, useState } from 'react';
import BookFormComponent from '../components/BookComponents/BookFormComponent';
import { v4 as uuid } from 'uuid';
import UserContext from '../context/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';

const BookForm = () => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    isbn: '',
    pubDate: '',
    image: '',
  });

  const userContext = useContext(UserContext);

  const [btnName, setBtnName] = useState('Submit');

  let { state, pathname } = useLocation();

  const navigate = useNavigate();

  const { addBookData, updateBookData } = userContext;

  useEffect(() => {
    if (state) {
      setBtnName('Update');
      setInitialValues({
        title: state?.title,
        author: state?.author,
        isbn: state?.isbn,
        pubDate: state?.pubDate,
        image: state?.image,
      });
    } else {
      setBtnName('Submit');
      setInitialValues({
        title: '',
        author: '',
        isbn: '',
        pubDate: '',
        image: '',
      });
    }
  }, [state, pathname]);

  const handleBook = (formValues, resetForm) => {
    if (state) {
      updateBookData(state?.id, formValues);
      navigate('/');
    } else {
      let id = uuid();
      addBookData({ ...formValues, id: id });
      resetForm();
      navigate('/');
    }
  };

  return (
    <div className='col-md-8 mx-auto my-5'>
      <BookFormComponent
        handleBook={handleBook}
        initialValues={initialValues}
        btnName={btnName}
      />
    </div>
  );
};

export default BookForm;
