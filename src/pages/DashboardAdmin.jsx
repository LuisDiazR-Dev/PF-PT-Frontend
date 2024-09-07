//
"use client";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoNavbar from "../components/Navbar/LogoNavbar";
import ButtonSetTheme from "../components/SetTheme/ButtonSetTheme";
import SearchBar from "../components/DashboardAdmin/SearchBar";
// import ViewApartments from "../components/DashboardAdmin/ViewApartments";
import AdminProfileMenu from "../components/DashboardAdmin/AdminProfileMenu";

import { Sidebar } from "flowbite-react";
import {
  HiViewBoards,
  // HiArrowSmRight,
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  // HiUser,
} from "react-icons/hi";

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("imageUrl");
    localStorage.removeItem("isActive");
    localStorage.removeItem("SuscriptionId");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
  };

  return (
    <div className="">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/*  */}
            <div className="flex items-center justify-start rtl:justify-end">
              {/* Menu hamburguesa */}
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

              {/* Logo */}
              <LogoNavbar></LogoNavbar>
              <ButtonSetTheme />
            </div>

            {/*  Menu User*/}
            <AdminProfileMenu handleLogout={handleLogout} />
          </div>
        </div>
      </nav>

      {/* Sidebar con función de cambio de opción */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse icon={HiShoppingBag} label="Condominios">
                <Sidebar.Item href="#">Seleccionar</Sidebar.Item>
                <Sidebar.Item href="#">Crear</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={HiTable} label="Apartamentos">
                <Sidebar.Item href="#">Todos</Sidebar.Item>
                <Sidebar.Item href="#">Crear</Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Item href="#" icon={HiInbox} label="3">
                Notificaciones
              </Sidebar.Item>

              <Sidebar.Item href="#" icon={HiChartPie}>
                Estadísticas
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            {/*  */}
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="#"
                icon={HiChartPie}
                label="Pro"
                labelColor="dark"
              >
                Upgrade to Pro
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiArrowSmLeft}
                onClick={handleLogout}
              >
                Salir
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </aside>

      {/* ------------------ render-section -------------- */}

      <div className="p-4 sm:ml-64">
        <section className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <SearchBar />

          <div>componente renderizado</div>
        </section>
      </div>
    </div>
  );
};

export default DashboardAdmin;
