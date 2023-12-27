import { Link } from 'react-router-dom';
import { cn } from 'shared/lib/classNames';
import { useTheme } from '../providers/ThemeProvider';
import { Router } from '../router';

import '../styles/index.scss';

export const Default = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Link to="/">MAIN</Link>
      <Link to="/about">ABOUT</Link>
      <div>
        <button onClick={toggleTheme}>TOGGLE THEME</button>
      </div>
      <Router />
    </div>
  )
}
