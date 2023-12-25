import { lazy } from 'react';

// @ts-ignore
export const AboutAsync = lazy(() => new Promise((resolve) => setTimeout(() => resolve(import('./About')), 1000)));
