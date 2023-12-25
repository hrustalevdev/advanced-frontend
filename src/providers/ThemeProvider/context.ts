import { createContext } from 'react';

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface IThemeContext {
  theme: ETheme | null
  toggleTheme: () => void;
}

const stub = () => {
  throw new Error('<ThemeProvider> not found.');
};

export const ThemeContext = createContext<IThemeContext>({
  theme: null,
  toggleTheme: stub,
});
