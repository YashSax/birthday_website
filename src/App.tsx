import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import SubmitPostScreen from "./screens/SubmitPostScreen";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route
          index
          path="/"
          element={<HomeScreen />}
        />
        <Route
          index
          path="/submit"
          element={<SubmitPostScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
