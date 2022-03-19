import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from '../theme/theme';
import { ProtectedRoute, AuthRoute, AdminRoute } from './ProtectedRoute';
import { getCurrentUser } from '../redux/auth/authAPI';
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
const CreateCoursePage = createChunk('CreateCourse');

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  });

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

          <Route
            path="create-course"
            element={<AdminRoute children={<CreateCoursePage />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
