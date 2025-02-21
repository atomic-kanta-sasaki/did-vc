import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Issue } from "./pages/Issue";
import { VefiryVC } from "./pages/Verify";
import { Demo } from "./pages/animation";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/verify" element={<VefiryVC />} />
        <Route path="animation" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
