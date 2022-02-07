import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// document.documentElement.setAttribute("data-theme", "gray")
document.documentElement.setAttribute("data-theme", "heron")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
