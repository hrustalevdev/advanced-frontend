import type { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { PageError } from 'widgets/PageError';

import { I18nProvider } from './I18nProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers: FC = ({ children }) => {
  return (
    <I18nProvider>
      <ErrorBoundary FallbackComponent={PageError}>
        <BrowserRouter>
          <ThemeProvider>{children}</ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </I18nProvider>
  );
};
