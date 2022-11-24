import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';


import HerzMain from './HerzMain';
import HerzUserSignUp from './HerzUserSignUp';
import HerzLogin from './HerzLogin';
import HerzSharedAcc from './HerzSharedAcc';
import HerzServicedAcc from './HerzServicedAcc';
import HerzCustomAcc from './HerzCustomAcc';
/** import HerzUserKYC from './HerzUserKYC'; */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HerzMain />} />
      <Route path="/sharedacc" element={<HerzSharedAcc />} />
      <Route path="/servicedacc" element={<HerzServicedAcc />} />
      <Route path="/customacc" element={<HerzCustomAcc />} />
      <Route path="/login" element={<HerzLogin />} />
      <Route path="/signup" element={<HerzUserSignUp />} />
    </Routes>
  </BrowserRouter>
);
