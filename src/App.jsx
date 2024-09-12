"use client";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import NavBar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import Footerx from "./components/Landing/Footerx";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboarTenant from "./pages/DashboardTenant";
import AdminProfile from "./components/DashboardAdmin/Admins/AdminProfileView";
import AdminUpdateProfile from "./components/DashboardAdmin/Admins/AdminUpdateProfile";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const location = useLocation();
  const hiddenNavBarRoutes = ["/dashboard-admin", "/profile"];

  return (
    <div className="App">
      {!hiddenNavBarRoutes.includes(location.pathname) && <NavBar />}

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard-admin" element={<DashboardAdmin />} />
          <Route path="/tenant" element={<DashboarTenant />} />
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/update-profile" element={<AdminUpdateProfile />} />
        </Routes>
      </main>

      {!hiddenNavBarRoutes.includes(location.pathname) && <Footerx />}
    </div>
  );
}

export default App;
