import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

import './assets/css/style.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/*" element={<Product />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
