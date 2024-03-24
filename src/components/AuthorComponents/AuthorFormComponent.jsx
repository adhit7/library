import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputComponent from '../InputComponent';
import { Button } from 'react-bootstrap';

const AuthorFormComponent = ({ handleAuthor, initialValues, btnName }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string().required('Author Name is required'),
        dob: Yup.string().required('DOB is required'),
        bio: Yup.string().required('Bio is required'),
        image: Yup.string().required('Author Image Url is required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleAuthor(values, resetForm);
        setSubmitting(false);
      }}
    >
      <Form className='row g-3 text-start'>
        <h4 className='mb-3'>Author Information</h4>
        <div className='col-md-6'>
          <InputComponent name={'name'} text={'Author Name'} />
        </div>
        <div className='col-md-6'>
          <InputComponent name={'dob'} text={'DOB'} />
        </div>
        <div className='col-md-6'>
          <InputComponent name={'bio'} text={'Bio'} />
        </div>
        <div className='col-md-6'>
          <InputComponent name={'image'} text={'Author Image'} />
        </div>

        <div className='col-12 mb-5 mt-4 d-flex justify-content-center'>
          <Button type='submit' variant='outline-primary'>
            {btnName}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default AuthorFormComponent;
