import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasToasted = useRef(false);
  const [name, setName] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const { fromSignup, fromLogin, fullName } = location.state || {};

    if (fromSignup || fromLogin) {
      setName(fullName?.split(" ")[0]);
      if (!hasToasted.current) {
        toast.success("Successfully logged in");
        hasToasted.current = true;
        navigate(location.pathname, { replace: true });
      }
    }
  }, [location.state, location.pathname, navigate]);
  return (
    <div>
      <Sidebar isOpen={menuOpen} toggleSidebar={toggleSidebar} />
      <button onClick={toggleSidebar}>open</button>
      <div>Hi {name ? `${name}` : ""} </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
