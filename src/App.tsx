import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'

import { Header } from './components/Header'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { IconContext } from 'react-icons'

export function App() {
  const [theme, setTheme] = useState(light)

  const handleToggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{ size: '24' }}>
        <Header toggleTheme={handleToggleTheme} />
      </IconContext.Provider>

      <GlobalStyle />
    </ThemeProvider >
  )
}
