import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import './global.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { Auth0Provider } from '@auth0/auth0-react';

// Wait for the DOM content to be loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Check if the root element exists before rendering
  if (root) {
    createRoot(root).render( // Use createRoot instead of ReactDOM.render
      <Auth0Provider
        domain="dev-y24syn1vymgn015q.us.auth0.com"
        clientId="GPzjEz93nlg0Lz2cp4zV6JxWvpzGHgmg"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </Auth0Provider>
    );
  } else {
    console.error("The 'root' element is not found.");
  }
});

reportWebVitals();