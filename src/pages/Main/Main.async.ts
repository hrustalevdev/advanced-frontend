import { lazy } from 'react';

// @ts-ignore
export const MainAsync = lazy(() => new Promise((resolve) => setTimeout(() => resolve(import('./Main')), 1000) ));
