import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToGetContainer from './components/ToGet/ToGetContainer';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToGetContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//<App />
