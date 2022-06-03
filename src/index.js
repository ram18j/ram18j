import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import goHerzMain from './goHerzMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {goHerzMain()}
  </React.StrictMode>
);
