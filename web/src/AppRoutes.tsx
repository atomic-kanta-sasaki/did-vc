import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
  import { Issue } from "./pages/Issue";

  const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Issue />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRoutes;