// src/MovieList.jsx
import React from 'react';
import MovieCard from './movieCard';
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index}>
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
