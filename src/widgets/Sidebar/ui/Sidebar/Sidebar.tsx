import { useCallback, useState } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from 'features/LangSwitcher/ui';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { cn } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import styles from './Sidebar.module.scss';

interface ISidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar: FC<ISidebarProps> = ({ className, ...rest }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      className={cn(
        styles.wrapper,
        { [styles.collapsed]: collapsed },
        className,
      )}
      {...rest}
    >
      <Button onClick={toggle}>
        {collapsed ? t('Развернуть') : t('Скрыть')}
      </Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
