import { IconContext } from 'react-icons'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        text-decoration: none;
        box-sizing: border-box;
        transition: background-color 0.5s;
        -webkit-tap-highlight-color: transparent;
    }
    
    
    body, html, #root {
        height: 100%;
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 3.2rem;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme.colors.text};

        background-color: ${props => props.theme.colors.secondary};
    }
`