import type { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib/classNames';
import { Link } from 'shared/ui/Link';

import styles from './Navbar.module.scss';

type INavbarProps = HTMLAttributes<HTMLDivElement>;

export const Navbar: FC<INavbarProps> = ({ className, ...rest }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.wrapper, className)} {...rest}>
      <Link variant="secondary" to="/">
        {t('Главная')}
      </Link>
      <Link variant="secondary" to="/about">
        {t('О нас')}
      </Link>
    </div>
  );
};
