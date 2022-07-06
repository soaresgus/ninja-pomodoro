import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            hover: string,
            light: string,
            text: string,
        }
    }
}