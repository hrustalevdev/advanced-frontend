import { cn } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from '../providers/ThemeProvider';
import { Router } from '../router';

import '../styles/index.scss';

export const Default = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <div>
        <button onClick={toggleTheme}>TOGGLE THEME</button>
      </div>
      <Router />
    </div>
  )
}
