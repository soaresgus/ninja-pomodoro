import { useState } from 'react';
import usePersistedState from './hooks/usePersistedState';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import { Header } from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { IconContext } from 'react-icons';
import { Content } from './styles/styles';
import { Timer } from './components/Timer';

export function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const handleToggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{ size: '24' }}>
        <Header toggleTheme={handleToggleTheme} />
        <Content>
          <Timer />
        </Content>
      </IconContext.Provider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
