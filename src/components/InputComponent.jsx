import { ErrorMessage, Field } from 'formik';
import React from 'react';

const InputComponent = ({ text, name, type = 'text' }) => {
  return (
    <>
      <label htmlFor={name} className='form-label'>
        {text}
      </label>
      <Field type={type} name={name} className='form-control' />
      <ErrorMessage
        component='div'
        name={name}
        className='fs-6 px-1 text-danger'
      />
    </>
  );
};

export default InputComponent;
