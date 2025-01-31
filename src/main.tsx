import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store'; 
import { AuthProvider } from './context/AuthContext';

const container = document.getElementById('root');
if (!container) { throw new Error('Root container not found.'); } 
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
