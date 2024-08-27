import React, { useState } from 'react';
import MovieList from './movieList';
import Filter from './filter';
import moviesData from './movies';
import AppNavbar from './navbar';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: '', rating: '' });

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating ? movie.rating >= filter.rating : true)
    );
  });

  return (
    <div className="app">
      <AppNavbar />
      <div className="container">
        <h1 className="text-center my-4">Movie App</h1>
        <Filter setFilter={setFilter} />
        <MovieList movies={filteredMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
