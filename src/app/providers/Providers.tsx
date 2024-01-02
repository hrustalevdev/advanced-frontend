import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './ThemeProvider';

export const Providers: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
