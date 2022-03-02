import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from '../theme/theme';
import { ProtectedRoute, AuthRoute } from './ProtectedRoute';
import Layout from './Layout';

const createChunk = (componentName: string) => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    })),
  );
};

const StartPage = createChunk('Start');
const HomePage = createChunk('Home');
const NotFoundPage = createChunk('NotFound');

const App = () => {
  useEffect(() => {});
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <GlobalStyle />

      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/start" />} />
        <Route
          path="/start"
          element={
            <AuthRoute>
              <StartPage />
            </AuthRoute>
          }
        />

        <Route path="/" element={<Layout />}>
          <Route
            path="home"
            element={<ProtectedRoute children={<HomePage />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
