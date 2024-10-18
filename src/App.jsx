import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/globalStyles.js";

import Loader from "./components/ui/Loader.jsx";
import AppLayout from "./components/AppLayout.jsx";

const Characters = lazy(() => import("./pages/characters.jsx"));
const CharacterDetails = lazy(() => import("./pages/CharacterDetails.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" index element={<Characters />} />
            <Route
              path="character/:characterId"
              element={<CharacterDetails />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
