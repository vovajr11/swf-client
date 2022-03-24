import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@hooks/appHook';

type TRoute = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: TRoute) => {
  const isAuthenticated = useAppSelector(state => state.session.isAuth);

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to={{ pathname: '/start' }} />;
  }
};

const AuthRoute = ({ children }: TRoute) => {
  const isAuthenticated = useAppSelector(state => state.session.isAuth);
  return isAuthenticated ? <Navigate to="/home" /> : children;
};

const AdminRoute = ({ children }: TRoute) => {
  const { user, isAuth } = useAppSelector(state => state.session);
  return isAuth && user.role === 'admin' ? children : <Navigate to="/home" />;
};

export { ProtectedRoute, AuthRoute, AdminRoute };
