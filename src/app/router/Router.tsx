import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { config } from './config';

export const Router = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        {config.map(({ path, ...rest }) => (
          <Route key={path} path={path} {...rest} />
        ))}
      </Routes>
    </Suspense>
  );
};
