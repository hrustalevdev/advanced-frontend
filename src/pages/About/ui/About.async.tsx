import { lazy } from 'react';

export const AboutAsync = lazy(
  () =>
    new Promise((resolve) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./About')), 1000),
    ),
);
