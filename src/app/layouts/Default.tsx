import { cn } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from '../providers';
import { Router } from '../router';

import '../styles/index.scss';

export const Default = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <Router />
    </div>
  )
}
