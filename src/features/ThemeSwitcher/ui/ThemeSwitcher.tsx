import { ETheme, useTheme } from 'app/providers';
import DarkIcon from 'shared/assets/icons/moon.svg';
import LightIcon from 'shared/assets/icons/sun.svg';
import { Button } from 'shared/ui/Button';

export const ThemeSwitcher = () => {
  const {toggleTheme, theme} = useTheme();

  const Icon = theme === ETheme.LIGHT ? LightIcon : DarkIcon;

  return (
    <Button variant="text" onClick={toggleTheme}>
      <DarkIcon />
    </Button>
  )
};
