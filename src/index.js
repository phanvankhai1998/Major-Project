import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import serviceWorker from './servicesWork';
import { configureStore } from './store'

const store = configureStore();
console.log('store', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();