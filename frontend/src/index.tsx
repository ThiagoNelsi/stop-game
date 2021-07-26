import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import ContextProvider from './context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
