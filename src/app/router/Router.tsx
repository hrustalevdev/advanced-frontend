import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';

import { config } from './config';

export const Router = () => {
  return (
    <Routes>
      {config.map(({ path, element, ...rest }) => (
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
          {...rest}
        />
      ))}
    </Routes>
  );
};
