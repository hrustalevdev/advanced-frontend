import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';

export const config: RouteProps[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
];
