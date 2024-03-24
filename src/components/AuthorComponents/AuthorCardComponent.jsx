import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthorCardComponent = ({ author, deleteAuthorData }) => {
  const { id, name, image, dob, bio } = author;

  return (
    <div className='col-md-3 col-12 mb-3 d-flex justify-content-center'>
      <Card className='shadow mt-2 text-start' style={{ width: '18rem' }}>
        <CardImg
          src={image}
          className='rounded-circle mt-3'
          alt='Image'
          style={{
            width: '6rem',
            height: '6rem',
            alignSelf: 'center',
            objectFit: 'cover',
          }}
        />
        <CardBody>
          <CardTitle className='fw-semibold'>
            Name: <span className='d-inline-flex fw-normal'>{name}</span>
          </CardTitle>

          <CardText className='mb-2 fw-semibold'>
            DOB: <span className='fw-normal'>{dob}</span>
          </CardText>
          <CardText className='fw-semibold custom-text-overflow'>
            Short Bio: <span className='fw-normal'>{bio}</span>
          </CardText>
        </CardBody>
        <div className='d-flex justify-content-around flex-wrap mb-3'>
          <Link to={`/edit/author/${id}`} state={author}>
            <Button className='btn btn-primary m-1'>Update</Button>
          </Link>
          <Button
            className='btn btn-danger m-1'
            onClick={() => deleteAuthorData(id)}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AuthorCardComponent;
