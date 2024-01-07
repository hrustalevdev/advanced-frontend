import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib/classNames';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  const { t } = useTranslation();

  return <div className={cn(styles.wrapper)}>{t('Страница не найдена')}</div>;
};
