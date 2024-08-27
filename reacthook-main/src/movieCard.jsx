import React from 'react';
import { Card } from 'react-bootstrap';
import './movieCard.css';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="rating">Rating: {rating}</div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
