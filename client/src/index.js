import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PinApiProvider from "./components/Providers/PinApiProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <PinApiProvider>
          <App />
      </PinApiProvider>
  </React.StrictMode>
);
