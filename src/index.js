// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './App.css';

// // Optionally import global CSS reset
// // import './reset.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<React.StrictMode><App /></React.StrictMode>);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";   // Tailwind + global reset
import "./App.css";     // Custom styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
