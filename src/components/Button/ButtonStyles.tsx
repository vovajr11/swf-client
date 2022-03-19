import { css } from 'styled-components';

export const sizes = {
    sm: css`
        padding: 10px 20px;
        font-size: 16px;
    `,
    md: css`
        padding: 15px 30px;
        font-size: 25px;
    `,
    lg: css`
        padding: 20px 35px;
        font-size: 30px;
    `,
};

export const looks = {
    primary: css`
        background: ${({ theme }) => theme.color.orange};
        color: ${({ theme }) => theme.color.white};
    `,
    // secondary: css`
    //     border: 1px solid palevioletred;
    //     background: palevioletred;
    //     color: white;
    // `,
    // dark: css`
    //     border: 1px solid #273444;
    //     background: #273444;
    //     color: white;
    // `,
    // light: css`
    //     border: 1px solid #eff2f7;
    //     background: #f9fafc;
    //     color: #273444;
    // `,
};
