import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import UserContext from '../context/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthorFormComponent from '../components/AuthorComponents/AuthorFormComponent';

const AuthorForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    dob: '',
    bio: '',
    image: '',
  });
  const userContext = useContext(UserContext);

  const [btnName, setBtnName] = useState('Submit');

  let { state, pathname } = useLocation();

  const navigate = useNavigate();

  const { addAuthorData, updateAuthorData } = userContext;

  useEffect(() => {
    if (state) {
      setBtnName('Update');
      setInitialValues({
        name: state?.name,
        dob: state?.dob,
        bio: state?.bio,
        image: state?.image,
      });
    } else {
      setBtnName('Submit');
      setInitialValues({
        name: '',
        dob: '',
        bio: '',
        image: '',
      });
    }
  }, [state, pathname]);

  const handleAuthor = (formValues, resetForm) => {
    if (state) {
      updateAuthorData(state?.id, formValues);
      navigate('/authors');
    } else {
      let id = uuid();
      addAuthorData({ ...formValues, id: id });
      resetForm();
      navigate('/authors');
    }
  };

  return (
    <div className='col-md-8 mx-auto my-5'>
      <AuthorFormComponent
        handleAuthor={handleAuthor}
        initialValues={initialValues}
        btnName={btnName}
      />
    </div>
  );
};

export default AuthorForm;
