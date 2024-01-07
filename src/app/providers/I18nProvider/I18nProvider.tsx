import { Suspense } from 'react';
import type { FC } from 'react';

export const I18nProvider: FC = ({ children }) => {
  return <Suspense fallback={''}>{children}</Suspense>;
};
