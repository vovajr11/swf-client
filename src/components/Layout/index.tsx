import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar';
import { Wrapper, Header, Main } from './LayoutStyles';

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
