import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
