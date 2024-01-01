import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';
import type { IThemeContext } from './context';
import { ETheme, ThemeContext } from './context';

const LOCAL_STORAGE_THEME_KEY = 'theme';
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      return newTheme;
    });
  }, []);

  const context = useMemo<IThemeContext>(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};
