import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themeData.lightTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = useCallback(
    ({ target }) => setTheme(target.checked ? themeData.darkTheme : themeData.lightTheme),
  );
  const setHandleDrawer = useCallback(() => setDrawerOpen(!drawerOpen), [drawerOpen]);

  const contextValue = useMemo(() => ({
    theme, toggleTheme, drawerOpen, setHandleDrawer,
  }), [theme, setTheme, drawerOpen, setHandleDrawer]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
