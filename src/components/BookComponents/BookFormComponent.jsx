import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputComponent from '../InputComponent';
import { Button } from 'react-bootstrap';

const BookFormComponent = ({ handleBook, initialValues, btnName }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={Yup.object({
        title: Yup.string().required('Book Title is required'),
        author: Yup.string().required('Author Name is required'),
        isbn: Yup.string().required('ISBN is required'),
        pubDate: Yup.string().required('Published Date is required'),
        image: Yup.string().required('Book Image Url is required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleBook(values, resetForm);
        setSubmitting(false);
      }}
    >
      <Form className='row g-3 text-start'>
        <h4 className='mb-3'>Book Information</h4>
        <div className='col-md-6'>
          <InputComponent name={'title'} text={'Title'} />
        </div>
        <div className='col-md-6'>
          <InputComponent name={'author'} text={'Author Name'} />
        </div>
        <div className='col-md-6'>
          <InputComponent name={'isbn'} text={'ISBN'} />
        </div>
        <div className='col-md-6'>
          <InputComponent name={'pubDate'} text={'Published Date'} />
        </div>

        <div className='col-md-6'>
          <InputComponent name={'image'} text={'Book Image'} />
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

export default BookFormComponent;
