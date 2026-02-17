import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './uswds-styles.scss';
import './index.css';
import '@uswds/uswds/js';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
