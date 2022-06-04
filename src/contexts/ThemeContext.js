import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';

import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [themeColor, setThemeColor] = useState('green');
  const [themeType, setThemeType] = useState('lightTheme');
  const [theme, setTheme] = useState(themeData[themeColor].lightTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selectThemeColor = useCallback(
    ({ target }) => {
      setThemeColor(target.value);
    },
  );

  const selectThemeType = useCallback(
    ({ target }) => {
      const newType = target.checked ? 'darkTheme' : 'lightTheme';
      setThemeType(newType);
    },
  );

  useEffect(() => {
    setTheme(themeData[themeColor][themeType]);
  }, [themeColor, themeType]);

  const setHandleDrawer = useCallback(() => setDrawerOpen(!drawerOpen), [drawerOpen]);

  const contextValue = useMemo(
    () => ({
      themeColor, selectThemeColor, theme, selectThemeType, drawerOpen, setHandleDrawer,
    }),
    [themeColor, setThemeColor, themeType, setThemeType, theme, setTheme,
      drawerOpen, setHandleDrawer],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
