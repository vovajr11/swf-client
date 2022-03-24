import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '@theme/index';
import AppBar from '../AppBar';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${theme.background.purple};
`;

const Header = styled.header`
  width: 20%;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Main = styled.main`
  width: 80%;
  margin: 24px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <AppBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;
