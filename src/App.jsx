import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";
import Health from "./pages/Health";
import Admin from "./pages/Admin";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/health" element={<Health />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

export default App;