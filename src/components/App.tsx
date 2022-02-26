import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const createChunk = (componentName: string) => {
  return lazy(() =>
    import(`../pages/${componentName}`).then((module) => ({
      default: module[componentName],
    }))
  );
};

const HomePage = createChunk("Home");

const App = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/">
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
