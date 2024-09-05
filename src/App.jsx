"use client";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import NavBar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import Footerx from "./components/Landing/Footerx";
import LoginForm from "./pages/LoginForm";

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
    <div className="container mx-auto">
      {/* Solo renderiza la NavBar si la ruta actual no está en hiddenNavBarRoutes */}
      {!hiddenNavBarRoutes.includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footerx />
    </div>
  );
}

export default App;
