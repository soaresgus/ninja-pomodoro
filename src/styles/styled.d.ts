import 'styled-components'

export interface IPaleteColors {
    primary: string,
    secondary: string,
    hover: string,
    light: string,
    text: string,
}

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: IPaleteColors;
    }
}