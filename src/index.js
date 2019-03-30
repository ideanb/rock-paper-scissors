import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes';

ReactDOM.render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);
