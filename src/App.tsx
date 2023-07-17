import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import NotFound from './pages/NotFound';

import './assets/css/style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editi ng to see some magic happen :)</p>
      <Main />
    </div>
  );
}
