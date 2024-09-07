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

function App() {
  // set Theme
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const location = useLocation();
  const hiddenNavBarRoutes = ["/dashboard-admin"];

  return (
    <div className="">
      {/* Solo rendering la NavBar si la ruta actual no está en hiddenNavBarRoutes */}
      {!hiddenNavBarRoutes.includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
      </Routes>

      {!hiddenNavBarRoutes.includes(location.pathname) && <Footerx />}
    </div>
  );
}

export default App;
