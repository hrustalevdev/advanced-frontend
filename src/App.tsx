import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutAsync } from './pages/About';
import { MainAsync } from './pages/Main';
import './index.scss';

export const App = () => {
  return (
    <div className="app">
      <Link to="/">MAIN</Link>
      <Link to="/about">ABOUT</Link>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/" element={<MainAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
