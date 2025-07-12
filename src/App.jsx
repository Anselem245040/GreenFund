import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/auth/SignUp";
import { Login } from "./pages/auth/Login";
import { DashboardPage } from "./pages/dashboard/DashboardPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
