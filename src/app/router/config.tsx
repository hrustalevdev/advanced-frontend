import type { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFound';

export const config: RouteProps[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
