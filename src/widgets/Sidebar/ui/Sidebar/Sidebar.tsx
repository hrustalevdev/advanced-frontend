import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC, HTMLAttributes, useCallback, useState } from 'react';
import { cn } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import styles from './Sidebar.module.scss';

interface ISidebarProps extends HTMLAttributes<HTMLDivElement> {

}

export const Sidebar: FC<ISidebarProps> = ({className, ...rest}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div className={cn(styles.wrapper, {[styles.collapsed]: collapsed}, className)} {...rest}>
      <Button onClick={toggle}>Toggle</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
