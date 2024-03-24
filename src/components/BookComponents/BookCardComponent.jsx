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

function BookCardComponent({ book, deleteBookData }) {
  const { id, title, image, isbn, author, pubDate } = book;
  return (
    <div className='col-md-3 col-12 mb-3 d-flex justify-content-center'>
      <Card className='shadow' style={{ width: '20rem' }}>
        <CardImg variant='top' src={image} style={{ height: '15rem' }} />
        <CardBody className='card-body'>
          <CardTitle>{title}</CardTitle>
          <CardText className='card-text my-1'>
            <span className='fw-semibold'>Author:</span> {author}
          </CardText>
          <CardText className='card-text my-1'>
            <span className='fw-semibold'>ISBN:</span> {isbn}
          </CardText>
          <CardText className='card-text my-1'>
            <span className='fw-semibold'>Published Date:</span> {pubDate}
          </CardText>
        </CardBody>
        <div className='d-flex justify-content-around flex-wrap mb-3'>
          <Link to={`/edit/book/${id}`} state={book}>
            <Button className='btn btn-primary'>Update</Button>
          </Link>
          <Button className='btn btn-danger' onClick={() => deleteBookData(id)}>
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default BookCardComponent;
