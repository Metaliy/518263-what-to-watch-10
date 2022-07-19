import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Movie = {
  Name: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014,
  id: 0
};

const Setting = {
  MOVIES_COUNT: 20,

};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      movieName = {Movie.Name}
      movieGenre = {Movie.Genre}
      movieYear = {Movie.Year}
      movieCount = {Setting.MOVIES_COUNT}
      filmId = {Movie.id}
    />
  </React.StrictMode>,
);
