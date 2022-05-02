import styled from '@emotion/styled';
import { theme } from '@theme/index';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${theme.background.purple};
`;

export const Header = styled.header`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  width: 20%;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Main = styled.main`
  width: 80%;
  margin: 24px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${theme.color.orange};
    background-clip: padding-box;
  }
`;
