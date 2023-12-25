import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutAsync } from './pages/About';
import { MainAsync } from './pages/Main';
import { useTheme } from './providers/ThemeProvider';
import { cn } from './shared/lib/classNames';
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
          <Route path="/" element={<MainAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
