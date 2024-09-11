import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LogoNavbar from "../../Navbar/LogoNavbar";
import ButtonSetTheme from "../../SetTheme/ButtonSetTheme";
import AdminProfileMenu from "../Admins/AdminProfileMenu";

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    imageUrl: "",
  });

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedImageUrl = localStorage.getItem("imageUrl");

    console.log("storedId:", storedId); // Debugging
    console.log("storedUsername:", storedUsername); // Debugging
    console.log("storedEmail:", storedEmail); // Debugging
    console.log("storedImageUrl:", storedImageUrl); // Debugging

    if (storedUsername && storedEmail) {
      setProfile({
        username: storedUsername,
        email: storedEmail,
        imageUrl: storedImageUrl || "", // Default to empty string if not present
      });
    } else {
      console.error(
        "No se encontraron datos del administrador en el localStorage"
      );
    }
  }, []);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <LogoNavbar />
              <ButtonSetTheme />
            </div>
            <AdminProfileMenu />
          </div>
        </div>
      </nav>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Perfil de Administrador
        </h2>
        <div>
          <img
            src={profile.imageUrl || "default-image-url.jpg"}
            alt="Profile"
          />
          <h1>Hola, {profile.username}</h1>
        </div>
        <div>
          <span htmlFor="email" className="block text-gray-700">
            Email:
          </span>
          <h2>{profile.email}</h2>
        </div>
      </div>
      <div className="flex justify-center space-x-4 py-4">
        <Link
          to="/update-profile"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Editar Perfil
        </Link>
        <Link
          to="/dashboard-admin"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Ir a mi Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AdminProfile;
