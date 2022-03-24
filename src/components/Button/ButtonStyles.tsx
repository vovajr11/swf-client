import { css } from '@emotion/react';
import { theme } from '@theme/index';

export const sizes = {
  sm: css`
    padding: 3px 9px;
    font-size: 14px;
  `,
  md: css`
    padding: 5px 15px;
    font-size: 15px;
  `,
  lg: css`
    padding: 7px 21px;
    font-size: 16px;
  `,
};

export const variants = {
  outlined: css`
    color: black;
    border: 1px solid ${theme.color.orange};
    background: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
      color: ${theme.color.white};
      background-color: ${theme.color.orange};
    }
  `,

  contained: css`
    background-color: ${theme.color.orange};
    color: ${theme.color.white};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
      text-decoration: none;
      background-color: #f45e29;
      box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }
  `,
};
