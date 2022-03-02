import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '@redux/store';

type TRoute = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: TRoute) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.session.isAuth,
  );
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to={{ pathname: '/start' }} />;
  }
};

const AuthRoute = ({ children }: TRoute) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.session.isAuth,
  );
  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export { ProtectedRoute, AuthRoute };
