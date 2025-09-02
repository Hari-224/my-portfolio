// index.js (or main.js)
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/variables.css';
import './styles/globals.css';
import './styles/animations.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
