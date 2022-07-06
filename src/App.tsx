import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={light}>
      <div>
        <h1>Olá mundo</h1>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}
