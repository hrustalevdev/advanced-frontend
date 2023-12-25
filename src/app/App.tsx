import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { cn } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Link to="/">MAIN</Link>
      <Link to="/about">ABOUT</Link>
      <div>
        <button onClick={toggleTheme}>TOGGLE THEME</button>
      </div>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
