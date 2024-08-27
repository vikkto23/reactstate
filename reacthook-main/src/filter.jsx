import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './filter.css';

const Filter = ({ setFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    setFilter({ title, rating });
  };

  return (
    <Form className="filter-form">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </Form.Group>
      <Button onClick={handleFilter} className="filter-button">
        Filter
      </Button>
    </Form>
  );
};

export default Filter;
