import { DefaultTheme, createGlobalStyle } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: {
    small: '10px',
    medium: '20px',
  },

  color: {
    primary: "#181B1A",
    primaryLight: "#373737",
    gray: '#959595',
    orange: '#FB6D3A',
    white: '#FFFFFF',
  },

  background: {
    purple: '#503E9D',
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3, 
  h4, 
  h5, 
  h6 {
    margin: 0;
  }

  p {
    margin: 0
  }
 
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0
  }

  button {
    border: none;
    cursor: pointer;
  }

  textarea {
    resize: none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
}
`;
