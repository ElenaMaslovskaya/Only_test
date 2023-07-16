import React from 'react';
import ReactDOM from 'react-dom/client';
import TimePeriods from './TimePeriods';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TimePeriods />
  </React.StrictMode>
);

