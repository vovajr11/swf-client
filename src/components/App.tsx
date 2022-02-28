import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../theme/theme";
// import Layout from "./Layout";

const createChunk = (componentName: string) => {
  return lazy(() =>
    import(`../pages/${componentName}`).then((module) => ({
      default: module[componentName],
    }))
  );
};

const StartPage = createChunk("Start");

const App = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<StartPage />} />
        {/* <Route path="/" element={<Layout />}> */}

        {/* </Route> */}
      </Routes>
    </Suspense>
  );
};

export default App;
