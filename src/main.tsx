import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { validateEnv } from './utils/env';

// Validate environment variables but don't block app startup
validateEnv();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);