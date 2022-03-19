import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '../AppBar';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.background.purple};
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
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
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
