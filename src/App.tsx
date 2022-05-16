import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Configuration } from './pages/Configuration';
import { Draw } from './pages/Draw';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuration />} />
          <Route path="/draw" element={<Draw />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
