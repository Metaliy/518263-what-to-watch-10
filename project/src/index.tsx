import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockFilms } from './mocks/films';


const Setting = {
  MOVIES_COUNT: 20,

};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      mockFilms = {mockFilms}
      movieCount = {Setting.MOVIES_COUNT}
    />
  </React.StrictMode>
);
