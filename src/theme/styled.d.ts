import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: {
            small: string;
            medium: string;
        }

        color: {
            primary: string;
            primaryLight: string;
            gray: string;
            // primaryDark: string;
            orange: string;
            white: string;
            // secondary: string;
            // secondaryLight: string;
            // secondaryDark: string;
        };

        background: {
            purple: string;
        }
    }
}