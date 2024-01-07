import { cn } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { useTheme } from '../providers';
import { Router } from '../router';
import '../styles/index.scss';

export const Default = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <div className="page-wrapper">
          <Router />
        </div>
      </div>
    </div>
  );
};
