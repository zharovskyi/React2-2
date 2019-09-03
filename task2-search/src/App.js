import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import movie from './movie.json';
import MovieGrid from './components/MovieGrid/MovieGrid';

const App = () => (
  <>
    <MovieGrid items={movie} />
  </>
)


export default App;
