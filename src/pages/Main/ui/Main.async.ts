import { lazy } from 'react';

export const MainAsync = lazy(
  () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    new Promise((resolve) => setTimeout(() => resolve(import('./Main')), 1000)),
);
