import { useCallback } from 'react';
import type { FC } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import styles from './PageError.module.scss';

export const PageError: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation();
  const reloadPage = useCallback(() => {
    resetErrorBoundary();
  }, [resetErrorBoundary]);

  console.error(error);

  return (
    <div className={cn(styles.wrapper)}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
