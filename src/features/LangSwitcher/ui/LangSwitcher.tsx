import { useCallback } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import type { IButtonProps } from 'shared/ui/Button';

import styles from './LangSwitcher.module.scss';

type IProps = IButtonProps;

export const LangSwitcher: FC<IProps> = ({ className, ...rest }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  }, [i18n]);

  return (
    <Button
      className={cn(styles.wrapper, className)}
      variant="text"
      onClick={changeLanguage}
      {...rest}
    >
      {t('Перевод')}
    </Button>
  );
};
