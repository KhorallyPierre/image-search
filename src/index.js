import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';
// test to see application is running as expected.
searchImages();
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App/>);