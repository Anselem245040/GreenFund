import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/auth/SignUp";
import { Login } from "./pages/auth/Login";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { InsurancePage } from "./pages/dashboard/InsurancePage";
import { ProductsPage } from "./pages/dashboard/ProductsPage";
import { PaymentPage } from "./pages/dashboard/PaymentPage";
import { Community } from "./pages/dashboard/Community";
import { Security } from "./pages/dashboard/Security";
import { Settings } from "./pages/dashboard/Settings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashboardPage />}>
            <Route path='insurance' element={<InsurancePage />} />
            <Route path='products' element={<ProductsPage />} />
            <Route path='payments' element={<PaymentPage />} />
            <Route path='community' element={<Community />} />
            <Route path='settings' element={<Settings />} />
            <Route path='settings' element={<Security />} />
          </Route>
        </Routes>
        <ToastContainer position='top-right' autoClose={3000} theme='colored' />
      </Router>
    </div>
  );
};

export default App;
