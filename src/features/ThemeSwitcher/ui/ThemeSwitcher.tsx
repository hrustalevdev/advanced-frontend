import { ETheme, useTheme } from 'app/providers';
import DarkIcon from 'shared/assets/icons/moon.svg';
import LightIcon from 'shared/assets/icons/sun.svg';
import { cn } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();

  const Icon = theme === ETheme.LIGHT ? LightIcon : DarkIcon;

  return (
    <Button className={cn(styles.button)} variant="text" onClick={toggleTheme}>
      <Icon className={cn(styles.icon)} />
    </Button>
  );
};
