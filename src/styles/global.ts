import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme.colors.text};

        background-color: ${props => props.theme.colors.secondary};
    }

    body, html, #root {
        height: 100%;
    }
`