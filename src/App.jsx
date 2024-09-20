"use client";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import Footerx from "./components/Landing/Footerx";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboarTenant from "./pages/DashboardTenant";
import AdminProfile from "./components/DashboardAdmin/Admins/AdminProfileView";
import AdminUpdateProfile from "./components/DashboardAdmin/Admins/AdminUpdateProfile";
import { logOut } from "./Redux/features/register/loginAdminSlice";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const logged = useSelector((state) => state.loginAdmin.loggedIn);
  console.log(logged);

  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Opción para manejar logOut y limpiar localStorage en caso de ser necesario
  useEffect(() => {
    if (!logged) {
      dispatch(logOut()); // Asegurarse de llamar a logOut si logged es false
    }
  }, [logged, dispatch]);

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
