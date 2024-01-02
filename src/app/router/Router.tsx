import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import { config } from './config';

export const Router = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t('...Загрузка')}</div>}>
      <Routes>
        {config.map(({ path, ...rest }) => (
          <Route key={path} path={path} {...rest} />
        ))}
      </Routes>
    </Suspense>
  );
};
